<script setup>
defineProps({
    labelName:{
        type: String,
        required: true
    },
    inputType:{
        default: "text"
    },
    propsId:{
        required: true
    }
})
defineEmits(['Update:modelValue'])

</script>

<template>
    <div class="mb-3">
        <label :for="propsId" class="form-label shadow-none">{{ labelName }}</label>
        <input @input="$emit('Update:modelValue',$event.target.value)" :id="propsId" :type="inputType" class="form-control shadow-none">
    </div>

</template>

<style scoped>

</style>