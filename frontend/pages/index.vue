<script setup lang="ts">
import { defineEmits } from 'vue'

const props: any = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['update'])
emit('update')

</script>

<template>
<div class="flex">
    <DashboardCredentialsForm v-if="user" :user="user" />
    <DashboardPasswordForm v-if="user" />
</div>
</template>