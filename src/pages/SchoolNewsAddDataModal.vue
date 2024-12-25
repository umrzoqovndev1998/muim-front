<script setup>

import AddButton from "@/components/AddButton.vue";
import { reactive,ref } from "vue";
import { useAddFile } from "@/stores/mediaObject/addFile.js";
import { useNews } from "@/stores/news/createNews.js";
import { useRouter } from "vue-router";

const router = useRouter()
let image = ref(null)
let file = ref()
let news = reactive({
    title: '',
    content: '',
    createdAt: new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tashkent",
}),
    image: ''
})

function selectImage(event){
    file = event.target.files[0]
    image.value = URL.createObjectURL(event.target.files[0])
}

function create(){
    useAddFile().addFile(file)
        .then((res) =>{
            news.image = res.data['@id']

            useNews().newsCreate(news)
                .then(() =>{ 
                    router.push('/statistics/news')
                 })
        })
}
</script>

<template>
    <div class="container-fluid">
        <AddButton data-bs-toggle="modal" data-bs-target="#staticBackdrop" />

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                            <label for="image" class="form-label">Media</label>
                            <input @change="selectImage($event)" id="image" type="file" class="form-control mb-3 shadow-none"/>
                            <label for="title" class="form-label">Sarlavha</label>
                            <input v-model="news.title" type="text" id="title" class="form-control mb-3 shadow-none">
                            <label class="form-label" for="data">Ma'lumot</label> <br>
                            <textarea v-model="news.content" id="data" class="form-control shadow-none" cols="50" rows="5"></textarea>
                    </div>
                    <div class="modal-footer border-0">
                        <button @click="create()" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Saqlash</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>