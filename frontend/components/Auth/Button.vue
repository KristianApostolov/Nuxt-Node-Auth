<script setup lang="ts">

const props: any = defineProps({
    content: {
        type: String,
        default: 'Login',
        required: true
    }
})

</script>

<template>
    <button type="submit" class="bg-button-blue flex justify-center items-center w-fit h-fit text-white px-8 py-4 rounded-lg gap-2.5 ml-4">
        <div class="font-Inter cursor-pointer text-button-lg leading-snug font-normal flex justify-center items-center">
            {{ content }}
        </div>
    </button>
</template>