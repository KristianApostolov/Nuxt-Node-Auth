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
  if (password.value === verifyPassword.value) {
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
    <div id="pageContentWrapper">
      <AuthGradientBackground />
      <div id="pageFormWrapper">
        <div id="pageFromContentWrapper">
          <h1 id="pageFromHeaderWrapper">
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
  @apply inline-flex flex-row w-screen h-screen overflow-hidden box-border;
}

#pageContentWrapper {
  @apply h-[90%] w-[98%] overflow-hidden box-border;
}

#pageFormWrapper {
  @apply h-full w-1/2 left-[calc(50%-50px)] -skew-x-[5deg] z-50 bg-white absolute flex items-center overflow-hidden;
}

#pageFromContentWrapper {
  @apply skew-x-[5deg] ml-[25%];
}

#pageFromHeaderWrapper {
  @apply mx-4 mb-4 font-Inter font-semibold text-3xl w-[250px];
}
</style>
