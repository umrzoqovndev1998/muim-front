<script setup>
import FormInput from "@/components/FormInput.vue";
import {ref,reactive} from "vue";
import { useAuthorization } from "@/stores/admin/authorization.js";
import { useRouter } from "vue-router";

let isLoading = ref(false);
const router = useRouter();
let authorization = reactive({
    email: '',
    password: ''
})

function auth() {
    isLoading.value = true;
    useAuthorization().adminAuth(authorization)
    .then(()=>{
        router.push('/statistics')
    })
}
</script>

<template>
<div class="container-fluid row d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4 ms-4">
        <h1 class="text-center fw-normal">Kirish</h1>
        <form>
             <FormInput v-model="authorization.email" props-id="email" label-name="Email" input-type="email" />
             <FormInput v-model="authorization.password" props-id="password" label-name="Parol" input-type="password" />
            <div class="text-end text-center mt-4">
                <button type="button" @click="auth" class="form-control shadow-none bg-primary text-white">
                    <span v-if="!isLoading" class="fs-5">Kirish</span>
                    <span v-if="isLoading" class="spinner-border spinner-border-sm text-light"></span>
                </button>
            </div>
        </form>

    </div>

</div>
</template>

<style scoped>
.container-fluid{
    height: 80vh;
}

</style>