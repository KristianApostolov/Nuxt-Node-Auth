<script setup lang="ts">

defineProps({
    content: {
        type: String,
        required: true
    }
})

</script>

<template>
<button type="submit" class="my-[18px] h-[38px] w-max rounded-lg px-8 py-4 leading-[1.36125] grow-0 gap-2.5 bg-button-blue inline-flex justify-center items-center text-lg font-Inter text-white cursor-pointer">
    {{ content }}
</button>
</template>