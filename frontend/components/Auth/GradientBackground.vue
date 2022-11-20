<template>
  <div id="backgroundWrapper" class="rainbox-gradient">
    <div id="backgroundTextWrapper">
      <h1 id="backgroundText">User Management System</h1>
    </div>
  </div>
</template>
<style scoped>
#backgroundWrapper {
  @apply flex absolute overflow-hidden w-1/2 h-full -z-10;
}

#backgroundTextWrapper {
  @apply m-auto h-full w-full flex items-center;
}

#backgroundText {
  @apply w-[251px] font-Inter font-semibold text-3xl text-white mx-36 mb-80;
}
</style>
