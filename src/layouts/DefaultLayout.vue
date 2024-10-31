<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header />
    <div class="container-fluid default">
        <router-view />
    </div>
    <Footer />
</template>

<style scoped>
.default{
    background-image: url("../assets/images/stars.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

</style>