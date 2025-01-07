<script setup>
import FormInput from "@/components/FormInput.vue";
import { ref, reactive} from "vue";
import { useAuthorization } from "@/stores/admin/authorization.js";
import { useRouter } from "vue-router";

let isLoading = ref(false);
const router = useRouter();
let change = ref(false);
let password = ref("password");
let pathIcon = ref("src/assets/icons/show.png");
let authorization = reactive({
    email: '',
    password: ''
});
function auth(event) {
    event.preventDefault(); 
    isLoading.value = true;

    useAuthorization()
        .adminAuth(authorization)
        .then(() => {
            router.push('/statistics')
        })
        .catch(() => {
            alert("Email yoki parol noto'g'ri!")
        })
        .finally(() => {
            isLoading.value = false
        })
}
function changeIcon(){
    change.value = !change.value;
    if(change.value){
        pathIcon.value = "src/assets/icons/hide.png";
        password.value = "text";
    }
    else{
        pathIcon.value = "src/assets/icons/show.png";
        password.value = "password";
    }
}

</script>

<template>
<div class="container-fluid row d-flex justify-content-center">
    <router-link to="/">
        <img src="../assets/icons/back.png" alt="home page link">
    </router-link>
    <div class="col-12 col-sm-8 col-md-6 col-xl-4 ms-4">
        <h1 class="text-center fw-normal">Kirish</h1>
        <form @submit="auth">
             <FormInput 
                 v-model="authorization.email" 
                 props-id="email" 
                 label-name="Email" 
                 input-type="email" 
             />
             <FormInput 
                 v-model="authorization.password" 
                 props-id="password" 
                 label-name="Parol" 
                :input-type="password" 
             />
             <button 
                id="btn-form" 
                v-show = "authorization.password" 
                type="button" @click="changeIcon()" 
                class="form-btn"
             >
             <img :src="pathIcon" alt="" width="15px">
            </button>
            <div class="text-end text-center mt-4">
                <button type="submit" class="form-control shadow-none bg-primary text-white fs-5">
                    <span v-if="!isLoading">Kirish</span>
                    <span v-else class="spinner-border spinner-border-sm text-light"></span>
                </button>
            </div>
        </form>
    </div>
</div>
</template>

<style scoped>
.container-fluid {
    height: 80vh;
}
form{
    position: relative;
}
.form-btn{
    position: absolute;
    right: 10px;
    bottom: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.form-btn:hover{
    background-color: rgb(230, 229, 229);
}
img{
    margin-top: 20px;
    border-radius: 50%;
    padding: 10px;
}
img:hover{
    background-color: #e3dfdf;
}
</style>
