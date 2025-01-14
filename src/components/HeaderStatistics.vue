<script setup>
import {useI18n} from "vue-i18n";
import { useRouter } from "vue-router";
const i18n = useI18n()
const router = useRouter()

function logOut(){
    localStorage.removeItem('token')
    router.push('/admin')
}

</script>

<template>
    <nav class="navbar navbar-expand-xl sticky-top bg-white shadow">
        <div class="container-fluid">
            <button class="navbar-toggler shadow-none rounded-circle p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link class="navbar-brand" to="/statistics">
                <img class="image" src="../assets/images/logo.jpg" alt="Logo">
            </router-link>
            <div class="offcanvas offcanvas-start" id="offcanvasWithBackdrop">
                <div class="offcanvas-header">
                    <router-link class="navbar-brand" to="/statistics">
                         <img  src="../assets/images/logo.jpg" alt="Logo" width="80px">
                     </router-link>
                    <button type="button" class="btn-close text-reset shadow-none rounded-circle p-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body d-xl-flex">
                    <ul class="navbar-nav col-xl-12 justify-content-xl-center">
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <router-link class="nav-link nlink" to="/statistics" active-class="active">{{ $t('school') }}</router-link>
                        </li>
                        <li class="nav-item" data-bs-dismiss="offcanvas">
                            <router-link class="nav-link nlink" to="/statistics/news" active-class="active">{{ $t('news') }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="lang-btn">
                <select @change="i18n.locale.value = $event.target.value" :value="i18n.locale.value" class="ms-xl-2 me-2 me-xl-0 border rounded">
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
                <button @click="logOut()" type="button" class="btn btn-outline-primary">Chiqish</button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.image{
    width:120px;
    height:90px;
}
.navbar-toggler{
    border: none;
}
.rounded-circle:hover{
    background-color: #e3dfdf;
}
.nav-link{
    font-size: 18px !important;
    padding: 5px 10px !important;
}
.nav-link:hover{
    color: blue;
}
.active{
    color: blue !important;
}
.search-icon{
    width: 20px !important;
    height: 20px !important;
    position: relative;
    right: 10% !important;
    top: 22% !important;
}
.search-icon:hover{
    cursor: pointer;
}
@media (max-width: 1200px) {
    .search-icon{
        margin-top: 8px;
    }
    .lang-btn button{
        margin-left: 10px !important;
    }
}
select{
    cursor: pointer !important;
    padding: 8px !important;
    background-color: white;
    outline: none !important;
}
.lang-btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.lang-btn button{
    margin-left: 30px !important;
}

</style>