<script setup>
let teachers = [
    {
        "fullName": "Umrzoqov Nurmuhammad",
        "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur deseruntex expedita in minima nam neque nihil nulla quo?"
    },
    {
        "fullName": "Elova Nargiza",
        "about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur deseruntex expedita in minima nam neque nihil nulla quo?"
    },
    {
        "fullName": "Safoyev Sherzod",
        "about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur deseruex expedita in minima nam neque nihil nulla quo?"
    },
    {
        "fullName": "Rabbiyev Jahonbek",
        "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur deseruntex expedita in minima nam neque nihil nulla quo?"
    },
    {
        "fullName": "Rabbiyev Jahonbek",
        "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur deseruntex expedita in minima nam neque nihil nulla quo?"
    },
    {
        "fullName": "Rabbiyev Jahonbek",
        "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur deseruntex expedita in minima nam neque nihil nulla quo?"
    },
    {
        "fullName": "Rabbiyev Jahonbek",
        "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur deseruntex expedita in minima nam neque nihil nulla quo?"
    }
]
</script>

<template>
    <div class="container-fluid pt-5">
        <div class="math-teachers w-100">
            <h2 class="text-center fw-light bg-color py-3 rounded">Matematika o'qituvchilari</h2>
            <div class="list-teachers d-xl-flex flex-xl-wrap justify-content-around d-md-flex flex-md-wrap">
                <div class="teacher ms-xl-3 me-xl-3 mt-5 mb-5 ms-md-3 me-md-3 col-xl-3 col-md-4 shadow rounded p-3" v-for="teacher in teachers">
                <div class="image"><img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded"></div>
                <h4 class="text-center fw-light mt-3">{{ teacher.fullName }}</h4>
                <p class="about-teacher">{{ teacher.about }}</p>
                </div>
            </div>
        </div>
    <div class="physics-teachers w-100">
        <h2 class="text-center fw-light bg-color py-3 rounded">Fizika o'qituvchilari</h2>
        <div class="list-teachers d-xl-flex flex-xl-wrap justify-content-around d-md-flex flex-md-wrap">
            <div class="teacher ms-xl-3 me-xl-3 mt-5 mb-5 ms-md-3 me-md-3 col-xl-3 col-md-4 shadow rounded p-3" v-for="teacher in teachers">
                <div class="image"><img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded"></div>
                <h4 class="text-center fw-light mt-3">{{ teacher.fullName }}</h4>
                <p class="about-teacher">{{ teacher.about }}</p>
            </div>
        </div>
    </div>
    <div class="english-teachers w-100">
        <h2 class="text-center fw-light bg-color py-3 rounded">Ingliz tili o'qituvchilari</h2>
        <div class="list-teachers d-xl-flex flex-xl-wrap justify-content-around d-md-flex flex-md-wrap">
            <div class="teacher ms-xl-3 me-xl-3 mt-5 mb-5 ms-md-3 me-md-3 col-xl-3 col-md-4 shadow rounded p-3" v-for="teacher in teachers">
                <div class="image"><img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded"></div>
                <h4 class="text-center fw-light mt-3">{{ teacher.fullName }}</h4>
                <p class="about-teacher">{{ teacher.about }}</p>
            </div>
        </div>
    </div>
    <div class="other-teachers w-100">
        <h2 class="text-center fw-light bg-color py-3 rounded">Boshqa fan o'qituvchilari</h2>
        <div class="list-teachers d-xl-flex flex-xl-wrap justify-content-around d-md-flex flex-md-wrap pb-5">
            <div class="teacher ms-xl-3 me-xl-3 mt-5 ms-md-3 me-md-3 col-xl-3 col-md-4 shadow rounded p-3" v-for="teacher in teachers">
                <div class="image"><img src="../assets/images/enter.jpeg" alt="image" class="w-100 rounded"></div>
                <h4 class="text-center fw-light mt-3">{{ teacher.fullName }}</h4>
                <p class="about-teacher">{{ teacher.about }}</p>
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.about-teacher {
    text-align: justify !important;
}
.teacher:hover{
    box-shadow: 0 0 10px blue !important;
}
.teacher{
    background-image:linear-gradient(-45deg,#FFFFFF, #B3E5FC, #0277BD);

}
.bg-color{
    background-image: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4 50%, #fbc2eb 75%);

}
h2{
    color: #333;
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.6);
}
</style>