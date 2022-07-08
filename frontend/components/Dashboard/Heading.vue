<script setup lang="ts" > 

const props: any = defineProps({
    content: {
        type: String,
        required: true
    }
})

</script>

<template>
<h2 class="text-[32px] leading-8 font-Inter font-semibold">
    {{ content }}
</h2>
</template>