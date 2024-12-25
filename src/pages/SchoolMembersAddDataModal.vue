<script setup>

import AddButton from "@/components/AddButton.vue";
import { reactive,ref } from "vue";
import { useAddFile } from "@/stores/mediaObject/addFile.js";
import { useSchoolMember } from "@/stores/schoolMember/createSchoolMember.js";
import { useRouter } from "vue-router";

const router = useRouter()
let image = ref(null)
let file = ref()
let schoolMember = reactive({
    full_name: '',
    role: '',
    task: '',
    about_member: '',
    image: ''
})

function selectImage(event){
    file = event.target.files[0]
    image.value = URL.createObjectURL(event.target.files[0])
}

function create(){
    useAddFile().addFile(file)
        .then((res) =>{
            schoolMember.image = res.data['@id']

            useSchoolMember().schoolMemberCreate(schoolMember)
                .then(() =>{ 
                    router.push('/statistics')
                 })
        })
}
</script>

<template>
    <div class="container-fluid">
        <AddButton data-bs-toggle="modal" data-bs-target="#staticBackdrop" />

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                            <label for="image" class="form-label">Rasm</label>
                            <input @change="selectImage($event)" id="image" type="file" class="form-control mb-3 shadow-none"/>
                            <label for="fio" class="form-label">FIO</label>
                            <input v-model="schoolMember.full_name" type="text" id="fio" class="form-control mb-3 shadow-none"/>
                            <label for="role" class="mb-2 form-label">Darajasi</label>
                            <select v-model="schoolMember.role" class="form-select shadow-none mb-3" id="role">
                                <option value="Rahbar">Rahbar</option>
                                <option value="O'qituvchi">O'qituvchi</option>
                                <option value="O'quvchi">O'quvchi</option>
                            </select>
                            <label for="task" class="mb-2 form-label">Vazifasi</label>
                            <select v-model="schoolMember.task" class="form-select shadow-none mb-3" id="task">
                                <option value="Direktor">Direktor</option>
                                <option value="O'IBDO'">O'IBDO'</option>
                                <option value="O'IBDO'">MMIBDO'</option>
                                <option value="O'IBDO'">KBDO'</option>
                                <option value="O'IBDO'">MFBDO'</option>
                                <option value="Matematika">Matematika</option>
                                <option value="Fizika">Fizika</option>
                                <option value="Ingliz tili">Ingliz tili</option>
                                <option value="Boshqa fan">Boshqa fan</option>
                                <option value="O'quvchi">O'quvchi</option>
                                <option value="Bitiruvchi">Bitiruvchi</option>
                            </select>
                            <label class="form-label" for="data">Ma'lumot</label> <br>
                            <textarea v-model="schoolMember.about_member" id="data" class="form-control shadow-none" cols="50" rows="5"></textarea>
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