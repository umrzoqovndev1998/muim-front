<script setup>

import AddButton from "@/components/AddButton.vue";
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
                        <form id="form">
                            <label for="image" class="form-label">Rasm</label>
                            <input id="image" type="file" class="form-control mb-3 shadow-none"/>
                            <label for="fio" class="form-label">FIO</label>
                            <input type="text" id="fio" class="form-control mb-3 shadow-none"/>
                            <label for="role" class="mb-2 form-label">Darajasi</label>
                            <select class="form-select shadow-none mb-3" id="role">
                                <option value="Rahbar">Rahbar</option>
                                <option value="O'qituvchi">O'qituvchi</option>
                                <option value="O'quvchi">O'quvchi</option>
                            </select>
                            <label for="task" class="mb-2 form-label">Vazifasi</label>
                            <select class="form-select shadow-none mb-3" id="task">
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
                            <textarea id="data" class="form-control shadow-none" cols="50" rows="5"></textarea>
                        </form>
                    </div>
                    <div class="modal-footer border-0">
                        <button form="form" class="btn btn-primary">Saqlash</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>