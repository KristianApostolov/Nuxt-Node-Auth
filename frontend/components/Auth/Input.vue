<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Object,
    required: true,
  },
});

const value = props.value[props.name];
</script>

<template>
  <div id="inputWrapper">
    <span id="inputText">
      {{ name }}
    </span>
    <input v-model="value" :type="type" id="inputField" />
  </div>
</template>
<style scoped>
#inputWrapper {
  @apply mx-4 mt-4 inline-flex flex-col w-fit h-fit;
}

#inputText {
  @apply font-Inter font-semibold leading-[17px] w-max h-[17px] mb-2;
}

#inputField {
  @apply bg-[#f5f5f5] border outline-none border-border-gray h-[51px] w-[346px] rounded-lg font-Inter font-normal text-[16px] leading-[18px] px-4;
}
</style>
