<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header />
    <div class="container-fluid">
        <router-view />
    </div>
    <Footer />
</template>

<style scoped>


</style>