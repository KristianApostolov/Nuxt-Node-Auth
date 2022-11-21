<script setup lang="ts">
import { Ref } from "vue";

import { apiUrl } from "~~/config";
import { submitAuth } from "~~/utility/submitAuth";

const email: Ref<any> = ref<string>("");
const password: Ref<any> = ref<string>("");
const verifyPassword: Ref<any> = ref<string>("");

defineProps({
  user: {
    type: null,
    required: true,
  },
});

const credentialsWrapper = {
  Email: email,
  Password: password,
  "Re-enter Password": verifyPassword,
};

function submit() {
  if (password.value !== verifyPassword.value) {
    alert("Passwords do not match.");
    return;
  }
  return submitAuth({
    email: email.value,
    password: password.value,
    url: apiUrl + "/user/register",
    isLogin: false,
  });
}
</script>

<template>
  <div id="pageWrapper">
    <div id="formWrapper">
      <AuthGradientBackground />
      <div id="formInputWrapper">
        <div id="formInputContentWrapper">
          <h1 id="formInputHeader">
            <br />
            Register by filling out the form.
          </h1>
          <form v-on:submit.prevent="submit">
            <AuthInput name="Email" type="text" v-bind:value="credentialsWrapper" />
            <AuthInput name="Password" type="password" v-bind:value="credentialsWrapper" />
            <AuthInput name="Re-enter Password" type="password" v-bind:value="credentialsWrapper" />
            <AuthText :isLogin="false" />
            <AuthButton content="Register" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#pageWrapper {
  @apply inline-flex flex-row box-border w-screen h-screen overflow-hidden;
}

#formWrapper {
  @apply h-screen lg:h-[90%] w-[100%] overflow-x-hidden flex flex-col-reverse lg:flex-row;
}

#formInputWrapper {
  @apply h-full  lg:h-full w-screen lg:w-1/2 lg:left-[calc(50%-50px)] lg:-skew-x-[5deg] z-50 bg-white lg:absolute flex lg:items-center overflow-hidden;
}

#formInputContentWrapper {
  @apply lg:skew-x-[5deg] lg:ml-[25%];
}

#formInputHeader {
  @apply mx-4 mb-2 md:mb-8 font-Inter font-semibold text-3xl w-[250px];
}
</style>
