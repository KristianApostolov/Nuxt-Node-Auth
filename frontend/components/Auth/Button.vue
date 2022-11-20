<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: "Login",
    required: true,
  },
});
</script>

<template>
  <button id="buttonWrapper" type="submit">
    <div id="buttonContent">
      {{ content }}
    </div>
  </button>
</template>
<style scoped>
#buttonWrapper {
  @apply bg-button-blue flex justify-center items-center w-fit h-fit text-white px-10 py-2 rounded-lg gap-2.5 ml-4;
}

#buttonContent {
  @apply font-Inter cursor-pointer text-button-lg leading-snug font-normal flex justify-center items-center;
}
</style>
