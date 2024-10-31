<script setup>

import SchoolNewsAddDataModal from "@/pages/SchoolNewsAddDataModal.vue";
</script>

<template>
    <div class="container-fluid">
        <SchoolNewsAddDataModal />
        <div class="table d-flex justify-content-center mt-5">
            <table class="w-100">
                <thead>
                    <tr class="text-center bg-primary text-white">
                        <th class="col-1">Id</th>
                        <th class="col-3">Media</th>
                        <th class="col-7">Ma'lumot</th>
                        <th class="col-1">Sana</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<style scoped>
th,td{
    border: 2px solid white;
    font-weight: 500;
    padding: 4px;
}
</style>