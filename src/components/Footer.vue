<script setup>

</script>

<template>
     <div class="container-fluid bg-dark d-flex justify-content-xxl-between justify-content-around  flex-wrap">
         <div class="contact-with-we mt-4 mb-2 ms-xl-2">
             <h2 class="text-center">Aloqa ma'lumotlari</h2>
             <div class="location">
              <p><b>Manzil:</b> Toshkent shahar,Yunusobod tumani,Chingiz aytmatov 1-tor ko'chasi</p>
             </div>
             <div class="email mb-3 d-flex">
              <b>Email:</b> <a class="nav-link ms-2" href="mailto:muimi@gmail.com">muimi@gmail.com</a>
             </div>
             <div class="tel d-flex mb-3">
             <b>Tel:</b> <a class="nav-link ms-2" href="tel:+998977777777">+998977777777</a>
             </div>
             <div class="admin d-flex">
                <router-link class="nav-link" to="/admin">Admin</router-link>
             </div>
         </div>
         <div class="social-networks mt-4">
             <h2 class="text-center">Ijtimoiy tarmoqlar</h2>
             <ul class="nav navbar">
                 <li class="nav-item"><a class="nav-link" href="#"><img class="footer-logo" src="../assets/icons/facebook.png" alt=""></a></li>
                 <li class="nav-item"><a class="nav-link" href="#"><img class="footer-logo" src="../assets/icons/telegram.png" alt=""></a></li>
                 <li class="nav-item"><a class="nav-link" href="#"><img class="footer-logo" src="../assets/icons/instagram.png" alt=""></a></li>
                 <li class="nav-item"><a class="nav-link" href="#"><img class="footer-logo" src="../assets/icons/youtube.png" alt=""></a></li>
             </ul>
         </div>
         <div class="feedback mt-4 me-xl-2">
             <h2 class="text-center">Qayta aloqa</h2>
             <form class="d-flex flex-column">
                 <label for="fName">
                     <input class="form-control shadow-none mb-2 mt-2" placeholder="Ism" size="40" type="text" id="fName" name="fName" />
                 </label>
                 <label for="tel">
                     <input class="form-control shadow-none mb-2" placeholder="Tel" size="40" type="tel" id="tel" name="tel" />
                 </label>
                 <input class="form-control mb-4 bg-primary" type="submit" value="Yuborish"/>
             </form>
         </div>
     </div>
</template>

<style scoped>
*{
    color: white;
}
[type="submit"]{
    color: white !important;
    border: none !important;
}
.nav-link:hover{
    text-decoration: underline;
}
.footer-logo{
    width: 40px;
    height: 40px;
}

</style>