<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["authentication"]);
emit("authentication");
</script>

<template>
  <div id="pageWrapper">
    <div id="formWrapper">
      <DashboardCredentialsForm v-if="user" :user="user" />
      <DashboardPasswordForm v-if="user" />
    </div>
    <h6 v-if="user" id="helperText">The dynamic hello message works only if the user has entered their name in.</h6>
  </div>
</template>
<style scoped>
#pageWrapper {
  @apply inline-flex flex-col items-center;
}

#formWrapper {
  @apply flex flex-col items-center justify-center md:!flex-row md:items-start h-5/6 w-screen mt-20;
}

#helperText {
  @apply text-gray-300 font-Inter text-xs px-2 text-center;
}
</style>
