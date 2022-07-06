<script setup lang="ts">
import { defineEmits } from 'vue'

defineProps({
    user: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['authentication'])
emit('authentication')

</script>

<template>
<div class="flex items-start justify-center h-5/6 w-screen mt-20">
    <DashboardCredentialsForm v-if="user" :user="user" />
    <DashboardPasswordForm v-if="user" />
</div>
</template>