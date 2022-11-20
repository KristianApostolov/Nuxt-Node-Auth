<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="navWrapper">
    <div class="navButton">
      <div v-if="user.name">
        Hi,
        {{ user.name }}
      </div>
      <div v-else>Hi</div>
    </div>
    <h2 v-on:click="$emit('logout')" class="navButton">Logout</h2>
  </div>
</template>

<style scoped>
#navWrapper {
  @apply h-1/6 w-screen space-y-6 flex justify-center items-center flex-col md:flex-row md:justify-between md:my-0;
}

.navButton {
  @apply m-0 md:mx-20 font-Inter text-[32px] leading-[32px] w-max font-semibold cursor-default;
}
</style>
