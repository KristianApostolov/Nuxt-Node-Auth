<script setup lang="ts">
defineProps({
    user: {
        type: Object,
        required: true
    }
})

</script>

<template>
<div class="h-1/6 w-screen flex justify-between items-center">
    <div class="m-0 mx-20 font-Inter text-[32px] leading-[32px] font-semibold cursor-default">
        <div v-if="user.name">
            Hi,
            {{ user.name }}
        </div>
        <div v-else>
            Hi
        </div>
    </div>
    <h2 v-on:click="$emit('logout')" class="m-0 mx-20 font-Inter text-[32px] leading-[32px] font-semibold cursor-pointer">
        Logout
    </h2>
</div>
</template>