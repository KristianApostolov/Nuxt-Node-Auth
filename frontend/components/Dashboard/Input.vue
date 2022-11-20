<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div id="inputWrapper">
    <span id="inputLabel">{{ name }}</span>
    <input id="inputField" class="InterThin" :type="type" v-model="value.value" />
  </div>
</template>
<style scoped>
#inputWrapper {
  @apply inline-flex flex-col;
}

#inputLabel {
  @apply font-Inter text-sm font-[600] mt-2;
}

#inputField {
  @apply h-[43px] w-[264px] bg-[#F5F5F5] font-[400] rounded-lg px-3 py-4 outline-none;
}
</style>
