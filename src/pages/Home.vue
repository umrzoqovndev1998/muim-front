<script setup>

import { computed } from 'vue';
import { useFetchSchoolMembers } from '@/stores/schoolMember/getSchoolMember.js';

useFetchSchoolMembers().schoolMembersGet()
const schoolMembers = computed(() => useFetchSchoolMembers().state.schoolMembers)

const pupils = computed(() => {
    return schoolMembers.value.filter(member => member.role === "O'quvchi");
})

</script>

<template>
    <div class="container-fluid pt-5">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner rounded mb-5">
                <div class="carousel-item active">
                    <img src="../assets/images/enter.jpeg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/enter.jpeg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/enter.jpeg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        
        <div class="pupils-results">
            <h2 class="text-center fw-light bg-primary text-white rounded py-3">O'quvchilarimiz yutuqlari</h2>
            <div class="cards d-flex justify-content-center flex-wrap">
                <div class="card mt-5 shadow mx-sm-5" v-for="member in pupils" :key="member.id">
                    <div class="card-image bg-primary d-flex justify-content-center rounded-top">
                        <img :src="'http://localhost:8888' + member.image.contentUrl" class="card-img-top rounded member_image" alt="image">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between mt-5">
                        <h5 class="card-title fw-light text-center text-primary">{{ member.full_name }}</h5>
                        <p class="card-text text-justify">{{ member.about_member }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="graduates-results">
            <h2 class="text-center fw-light py-3 bg-primary text-white rounded mt-5">Bitiruvchilarimiz natijalari</h2>
            <div class="cards d-flex justify-content-center flex-wrap">
                <div class="card mt-5 shadow mx-sm-5" v-for="member in schoolMembers" :key="member.id">
                    <div class="card-image bg-primary d-flex justify-content-center rounded-top">
                        <img :src="'http://localhost:8888' + member.image.contentUrl" class="card-img-top rounded member_image" alt="image">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between mt-5">
                        <h5 class="card-title fw-light text-center text-primary">{{ member.full_name }}</h5>
                        <p class="card-text text-justify">{{ member.about_member }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="useful-links pb-3 mb-4">
            <h2 class="text-center fw-light mb-5 bg-primary text-white py-3 rounded mt-5">Foydali havolalar</h2>
            <ul class="nav navbar justify-content-around shadow-links rounded bg-white">
                <li class="nav-item"><a href="https://www.ibo.org" target="_blank" class="nav-link">
                    <img src="../assets/images/ib-logo.png" alt="IB logo">
                </a></li>
                <li class="nav-item"><a href="https://piima.uz" class="nav-link" target="_blank">
                    <img src="../assets/images/piima-logo.png" alt="PIIMA logo">
                </a></li>
                <li class="nav-item"><a href="https://my.gov.uz" class="nav-link" target="_blank">
                    <img src="../assets/images/mygov-logo.jpg" alt="MyGov logo">
                </a></li>
                <li class="nav-item"><a href="https://www.lex.uz" class="nav-link" target="_blank">
                    <img src="../assets/images/lex-logo.jpg" alt="Lex-logo">
                </a></li>
                <li class="nav-item"><a href="https://kun.uz" target="_blank" class="nav-link">
                    <img src="../assets/images/kun-logo.jpg" alt="Kun.uz logo">
                </a></li>
                <li class="nav-item"><a href="https://uzedu.uz" target="_blank" class="nav-link">
                    <img src="../assets/images/uzedu.jpg" alt="IB logo">
                </a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.useful-links img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.shadow-links{
    box-shadow: 0px 0px 10px rgba(96, 195, 235);
}
.card{
    font-size: 20px;
    height: 450px;
    width: 450px;
}
.card-image{
    height: 150px;
}
.card:hover{
    box-shadow: 0 0 10px blue !important;
}
.member_image{
    width: 200px;
    height: 200px;
    border-radius: 50% !important;
    margin-bottom: 50px;
}
.card-text{
    min-height: 180px;
}
.carousel-caption{
    position: absolute !important;
    top: 30%;
    left: 10%;
}
</style>