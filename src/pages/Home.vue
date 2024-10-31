<script setup>
let array = [
    {
        'fullName': 'Umrzoqov Nurmuhammad',
        'aboutMember': "Ikkinchi toifali matematika o'qituvchisi"
    },
    {
        'fullName': 'Umrzoqov Nurmuhammad',
        'aboutMember': "Ikkinchi toifali matematika o'qituvchisi"
    },
    {
        'fullName': 'Umrzoqov Nurmuhammad',
        'aboutMember': "Ikkinchi toifali matematika o'qituvchisi"
    },
    {
        'fullName': 'Umrzoqov Nurmuhammad',
        'aboutMember': "Ikkinchi toifali matematika o'qituvchisi"
    },
    {
        'fullName': 'Umrzoqov Nurmuhammad',
        'aboutMember': "Ikkinchi toifali matematika o'qituvchisi"
    },
    {
        'fullName': 'Umrzoqov Nurmuhammad',
        'aboutMember': "Ikkinchi toifali matematika o'qituvchisi"
    }
]
</script>

<template>
    <div class="container-fluid pt-5">
        <div class="caption-section d-md-flex align-items-md-center justify-content-md-center">
            <div class="caption-image rounded shadow col-md-6">
                <img src="../assets/images/enter.jpeg" alt="Image" class="w-100 rounded"/>
            </div>
            <div class="caption-text mt-5 mt-md-0 col-md-4 d-flex align-items-center justify-content-center">
                <h1 class="text-center ms-md-5 fw-light bg-primary text-white rounded py-xl-5 py-md-1 px-md-1 px-2 py-2">Biz bilan o'z kelajagingizni quring!</h1>
            </div>
        </div>
        <div class="description-section mt-5">
            <p class="w-100 mx-auto mb-5 fs-4 text-white bg-primary p-3 rounded">
                Mirzo ulug'bek maktabi Toshkent shahar,Yunusobod tumani, Chingiz Aytmatov, 1-tor ko'chasida joylashgan.
                Bizning maktabda Matematika,Fizika,Ingliz tili va Informatika fanlari chuqurlashtirilgan holda o'tiladi.
                Maktabimizga o'quvchilarimiz yutuqlari va bitiruvchilarimiz natijalari orqali baho berishingiz mumkin.
                Agar siz ham shunday yutuq va natijalarga erishishni xohlasangiz unda bizning maktabga kiring, biz o'zimiz sizga yordam beramiz!!!
            </p>
        </div>
        <div class="pupils-results">
            <h2 class="text-center fw-light text-white bg-primary rounded py-2">O'quvchilarimiz yutuqlari</h2>
            <div class="cards d-flex justify-content-center flex-wrap">
                <div class="card mt-5 mb-5 shadow mx-4" v-for="member in array" :key="member" style="width: 18rem;">
                    <img src="../assets/images/enter.jpeg" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 class="card-title fw-light text-center">{{ member.fullName }}</h5>
                        <p class="card-text text-center">{{ member.aboutMember }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="graduates-results">
            <h2 class="text-center fw-light bg-primary text-white py-2 rounded">Bitiruvchilarimiz natijalari</h2>
            <div class="cards d-flex justify-content-center flex-wrap">
                <div class="card mt-5 mb-5 shadow mx-4" v-for="member in array" style="width: 18rem;">
                    <img src="../assets/images/enter.jpeg" class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 class="card-title fw-light text-center">{{ member.fullName }}</h5>
                        <p class="card-text text-center">{{ member.aboutMember }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="useful-links pb-3">
            <h2 class="text-center fw-light mb-4 bg-primary text-white py-2 rounded">Foydali havolalar</h2>
            <ul class="nav navbar justify-content-around shadow rounded bg-white">
                <li class="nav-item"><a href="https://www.ibo.org" target="_blank" class="nav-link">
                    <img src="../assets/images/ib-logo.png" alt="IB logo">
                </a></li>
                <li class="nav-item"><a href="https://piima.uz" class="nav-link" target="_blank">
                    <img src="../assets/images/piima-logo.png" alt="PIIMA logo">
                </a></li>
                <li class="nav-item"><a href="https://my.gov.uz/en/tourism/index" class="nav-link" target="_blank">
                    <img src="../assets/images/mygov-logo.jpg" alt="MyGov logo">
                </a></li>
                <li class="nav-item"><a href="https://www.lex.uz" class="nav-link" target="_blank">
                    <img src="../assets/images/lex-logo.jpg" alt="Lex-logo">
                </a></li>
                <li class="nav-item"><a href="https://kun.uz" target="_blank" class="nav-link">
                    <img src="../assets/images/kun-logo.jpg" alt="Kun.uz logo">
                </a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.caption-section {
    width: 100%;
}
.description-section p{
    text-align: justify !important;
}
.useful-links img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
</style>