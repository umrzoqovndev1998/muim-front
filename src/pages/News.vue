<script setup>
let news = [
    {
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting, " +
            "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
            " software like Aldus PageMaker including versions of Lorem Ipsum",
        "createdAt": new Date().toLocaleString().slice(0,16)
    },
    {
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting, " +
            "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
            " software like Aldus PageMaker including versions of Lorem Ipsum",
        "createdAt": new Date().toLocaleString().slice(0,16)
    },
    {
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting, " +
            "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
            " software like Aldus PageMaker including versions of Lorem Ipsum",
        "createdAt": new Date().toLocaleString().slice(0,16)
    },
    {
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting, " +
            "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
            " software like Aldus PageMaker including versions of Lorem Ipsum",
        "createdAt": new Date().toLocaleString().slice(0,16)
    },
    {
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting, " +
            "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
            " software like Aldus PageMaker including versions of Lorem Ipsum",
        "createdAt": new Date().toLocaleString().slice(0,16)
    },
    {
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting, " +
            "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
            " software like Aldus PageMaker including versions of Lorem Ipsum",
        "createdAt": new Date().toLocaleString().slice(0,16)
    },
    {
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting, " +
            "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
            " software like Aldus PageMaker including versions of Lorem Ipsum",
        "createdAt": new Date().toLocaleString().slice(0,16)
    },
    {
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting, " +
            "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
            " software like Aldus PageMaker including versions of Lorem Ipsum",
        "createdAt": new Date().toLocaleString().slice(0,16)
    }
]

</script>

<template>
    <div class="container-fluid pt-5">
        <h2 class="news-header text-center fw-light bg-color py-3 rounded">Yangiliklar</h2>
        <div class="news-cards">
            <div class="news-card py-5" v-for="data in news">
                <p class="text-end px-md-4 mt-3 mt-md-0">{{data.createdAt}}</p>
                <div class="image-content d-md-flex  justify-content-md-around">
                    <div class="image col-md-6">
                        <img src="../assets/images/enter.jpeg" alt="image" class="rounded h-100 w-100">
                    </div>
                    <div class="content ms-md-3 col-md-5">
                        <p class="justify">{{data.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.justify{
    text-align: justify !important;
}
.bg-color{
    background-color: #a8ff78;
    background-image: linear-gradient(45deg, #a8ff78, #78ffd6);
    color: #333;


}
</style>