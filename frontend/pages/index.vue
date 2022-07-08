<script setup lang="ts">

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
    <div class="inline-flex flex-col items-center">
        <div class="flex items-start justify-center h-5/6 w-screen mt-20">
            <DashboardCredentialsForm v-if="user" :user="user" />
            <DashboardPasswordForm v-if="user" />
        </div>
        <h6 v-if="user" class="text-gray-300 font-Inter text-xs">
            The dynamic hello message works only if the user has entered their name in.
        </h6>
    </div>
</template>