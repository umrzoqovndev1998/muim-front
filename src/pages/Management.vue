<script setup>
import { computed } from 'vue';
import { useFetchSchoolMembers } from '@/stores/schoolMember/getSchoolMember.js';

useFetchSchoolMembers().schoolMembersGet()
const schoolMembers = computed(() => useFetchSchoolMembers().state.schoolMembers)

const direktor = computed(() => {
    return schoolMembers.value.filter(member => member.task === "Direktor");
})

</script>

<template>
    <div class="container-fluid pt-5">
        <div class="director d-flex flex-column align-items-center">
            <h1 class="text-center mb-3 fw-light">Direktor</h1>
            <div class="image col-xl-4">
                <img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded">
            </div>
            <h2 class="text-center mt-3 fw-light" v-for="member in direktor">{{ member.full_name }}</h2>
        </div>
        <div class="assistents d-flex flex-wrap justify-content-xl-center">
            <div class="assistant me-xl-5 col-xl-4 mt-5">
                <h1 class="text-center mb-3">Assistant</h1>
                <div class="image">
                    <img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded">
                </div>
                <h2 class="text-center mt-3">Rock-star Vue.js Developer</h2>
            </div>
            <div class="assistant ms-xl-5 col-xl-4 mt-5">
                <h1 class="text-center mb-3">Assistant</h1>
                <div class="image">
                    <img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded">
                </div>
                <h2 class="text-center mt-3">Rock-star Vue.js Developer</h2>
            </div>
            <div class="assistant me-xl-5 col-xl-4 mt-5">
                <h1 class="text-center mb-3">Assistant</h1>
                <div class="image">
                    <img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded">
                </div>
                <h2 class="text-center mt-3 mb-5">Rock-star Vue.js Developer</h2>
            </div>
            <div class="assistant ms-xl-5 col-xl-4 mt-5">
                <h1 class="text-center mb-3">Assistant</h1>
                <div class="image">
                    <img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded">
                </div>
                <h2 class="text-center mt-3 mb-5">Rock-star Vue.js Developer</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>