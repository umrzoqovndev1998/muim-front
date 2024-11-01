<script setup>
    import {useI18n} from "vue-i18n";

    const i18n = useI18n();

</script>

<template>
    <nav class="navbar navbar-expand-xl sticky-top bg-white shadow-header">
        <div class="container-fluid">
            <button class="navbar-toggler shadow-none rounded-circle p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link to="/">
                <img class="image" src="../assets/images/logo.jpg" alt="Logo">
            </router-link>
            <div class="offcanvas offcanvas-start" id="offcanvasWithBackdrop">
                <div class="offcanvas-header">
                    <router-link to="/">
                    <div class="offcanvas-logo">
                        <img src="../assets/images/logo.jpg" alt="logo image">
                    </div>
                    </router-link>
                    <button type="button" class="btn-close text-reset shadow-none rounded-circle p-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav col-xl-9 justify-content-xl-center">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/" active-class="active">{{ $t('home') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about" active-class="active">{{ $t('about') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/management" active-class="active">{{ $t('leadership') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/teachers" active-class="active">{{ $t('teachers') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/ib" active-class="active">{{ $t('ib') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/news" active-class="active">{{ $t('news') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact" active-class="active">{{ $t('contact') }}</router-link>
                        </li>
                    </ul>
                    <form class="d-flex col-xl-3 m-2 m-xl-0">
                        <input class="form-control shadow-none"  :placeholder=" $t('search')+' ...' ">
                        <img class="search-icon" src="../assets/icons/icon-search.png" alt="icon search">
                    </form>
                </div>
            </div>
            <select @change="i18n.locale.value = $event.target.value" :value="i18n.locale.value" class="px-2 py ms-xl-2 me-2 me-xl-0 border rounded focus">
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
            </select>
        </div>
    </nav>
</template>

<style scoped>
.image{
    width:120px;
    height:90px;
}
.focus{
    outline:none !important;
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
.active {
    color: blue !important;
}
.py{
    padding-top: 6px !important;
    padding-bottom: 6px !important;
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
}
select:hover{
    cursor: pointer !important;
}
.offcanvas-logo img{
    width: 80px;
    height: 60px;
}
.shadow-header{
    box-shadow: 0px 4px 10px rgba(135, 206, 235, 0.5); /* Havo rang shadow */
    border-bottom: 2px solid #87CEEB; /* Havo rang chiziq */
}


</style>