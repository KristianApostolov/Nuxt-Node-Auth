<script setup lang="ts">
const props: any = defineProps({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Object,
        required: true
    },
    type: {
        type: String,
        required: true
    }

})
</script>

<template>
    <div class="inline-flex flex-col">
        <span class="font-Inter text-sm font-[600] mt-2">{{ name }}</span>
        <input 
            class="h-[43px] w-[264px] bg-[#F5F5F5] font-[400] InterThin rounded-lg px-3 py-4 outline-none"
            :type="type" 
            v-model="value.value"
        />
    </div>
</template>