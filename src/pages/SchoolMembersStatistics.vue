<script setup>

import SchoolMembersAddDataModal from "@/pages/SchoolMembersAddDataModal.vue";
</script>

<template>
    <div class="container-fluid">
        <SchoolMembersAddDataModal />
        <div class="table d-flex justify-content-center mt-5">
            <table class="w-100">
                <thead>
                <tr class="bg-primary text-white text-center">
                    <th class="col-1">Id</th>
                    <th class="col-1">Rasm</th>
                    <th class="col-3">FIO</th>
                    <th class="col-1">Darajasi</th>
                    <th class="col-1">Vazifasi</th>
                    <th class="col-5">Ma'lumot</th>
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