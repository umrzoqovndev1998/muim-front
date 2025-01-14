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
    <div class="header-login">
        <router-link to="/">
            <img class="home__link" src="../assets/icons/left.png" alt="home page link">
        </router-link>
        <select class="border rounded">
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
        </select>
    </div>
    <div class="col-12 col-sm-8 col-md-6 col-xl-4 ms-4 form-login">
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
                <button type="submit" class="form-control shadow-none btn btn-primary text-white fs-5">
                    <span v-if="!isLoading">Kirish</span>
                    <span v-else class="spinner-border spinner-border-sm text-light"></span>
                </button>
            </div>
        </form>
    </div>
</div>
</template>

<style scoped>
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
.home__link{
    border-radius: 50%;
    padding: 6px;
}
.home__link:hover{
    background-color: #e3dfdf;
}
select{
    cursor: pointer !important;
    padding: 8px !important;
    background-color: white;
    outline: none !important;
}
.header-login{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
a{
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.form-login{
    margin-top: 15vh;
}
</style>
