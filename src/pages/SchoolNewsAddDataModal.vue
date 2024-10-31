<script setup>

import AddButton from "@/components/AddButton.vue";
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
                        <form id="form">
                            <label for="image" class="form-label">Media</label>
                            <input id="image" type="file" class="form-control mb-3 shadow-none"/>
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