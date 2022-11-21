<template>
  <div id="backgroundWrapper" class="rainbox-gradient">
    <div id="backgroundTextWrapper">
      <h1 id="backgroundText">User Management System</h1>
    </div>
  </div>
</template>
<style scoped>
#backgroundWrapper {
  @apply flex relative lg:absolute overflow-hidden w-screen lg:w-1/2 h-[40%] min-h-[180px] lg:h-full -z-10;
}

#backgroundTextWrapper {
  @apply m-auto h-full w-full flex items-center justify-center lg:justify-start text-center lg:text-start;
}

#backgroundText {
  @apply w-[251px] font-Inter font-semibold text-3xl text-white lg:mx-36 lg:mb-80;
}
</style>
