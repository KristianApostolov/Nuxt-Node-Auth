<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2 id="headingWrapper">
    {{ content }}
  </h2>
</template>
<style scoped>
#headingWrapper {
  @apply text-[32px] leading-8 font-Inter font-semibold;
}
</style>
