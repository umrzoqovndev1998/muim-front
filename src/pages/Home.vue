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
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner rounded">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="../assets/images/enter.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/images/enter.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/images/enter.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <div class="caption-text mt-5 mt-md-0 col-md-4 d-flex align-items-center justify-content-center">
                <h1 class="text-center ms-md-5 fw-light bg-color text-white rounded py-xl-5 py-md-1 px-md-1 px-2 py-2">Biz bilan o'z kelajagingizni quring!</h1>
            </div>
        </div>
        <div class="description-section mt-5">
            <p class="w-100 mx-auto mb-5 fs-4 text-white bg-color p-3 rounded">
                Mirzo ulug'bek maktabi Toshkent shahar,Yunusobod tumani, Chingiz Aytmatov, 1-tor ko'chasida joylashgan.
                Bizning maktabda Matematika,Fizika,Ingliz tili va Informatika fanlari chuqurlashtirilgan holda o'tiladi.
                Maktabimizga o'quvchilarimiz yutuqlari va bitiruvchilarimiz natijalari orqali baho berishingiz mumkin.
                Agar siz ham shunday yutuq va natijalarga erishishni xohlasangiz unda bizning maktabga kiring, biz o'zimiz sizga yordam beramiz!!!
            </p>
        </div>
        <div class="pupils-results">
            <h2 class="text-center fw-light text-white bg-color rounded py-3">O'quvchilarimiz yutuqlari</h2>
            <div class="cards d-flex justify-content-center flex-wrap">
                <div class="card mt-5 mb-5 shadow mx-xl-5 col-xl-3 p-3" v-for="member in array" :key="member">
                    <img src="../assets/images/enter.jpeg" class="card-img-top rounded" alt="image">
                    <div class="card-body">
                        <h5 class="card-title fw-light text-center">{{ member.fullName }}</h5>
                        <p class="card-text text-center">{{ member.aboutMember }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="graduates-results">
            <h2 class="text-center fw-light bg-color text-white py-3 rounded">Bitiruvchilarimiz natijalari</h2>
            <div class="cards d-flex justify-content-center flex-wrap">
                <div class="card mt-5 mb-5 shadow mx-xl-5 col-xl-3 p-3" v-for="member in array">
                    <img src="../assets/images/enter.jpeg" class="card-img-top rounded" alt="image">
                    <div class="card-body">
                        <h5 class="card-title fw-light text-center">{{ member.fullName }}</h5>
                        <p class="card-text text-center">{{ member.aboutMember }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="useful-links pb-3 mb-4">
            <h2 class="text-center fw-light mb-5 bg-color text-white py-3 rounded">Foydali havolalar</h2>
            <ul class="nav navbar justify-content-around shadow-links rounded bg-white">
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
                <li class="nav-item"><a href="https://uzedu.uz" target="_blank" class="nav-link">
                    <img src="../assets/images/uzedu.jpg" alt="IB logo">
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
.bg-color{
    background-color: #3498DB; /* Ko'k rang */

}
.shadow-links{
    box-shadow: 0px 0px 10px rgba(96, 195, 235); /* Havo rang shadow */
    /* border-bottom: 2px solid #87CEEB; Havo rang chiziq */
}
</style>