<script setup lang="ts">
import { Ref } from 'vue'

import { submitAuth } from '~~/utility/submitAuth'

const email: Ref<any> = ref<string>("")
const password: Ref<any> = ref<string>("")
const verifyPassword: Ref<any> = ref<string>("")

defineProps({
    user: {
        type: null,
        required: true
    }
})

const credentialsWrapper = {
    "Email": email,
    "Password": password,
    "Re-enter Password": verifyPassword
}

const submit = () => {
    if (password.value === verifyPassword.value) {
        return submitAuth({email: email.value, password: password.value, url: "http://127.0.0.1:4000/user/register", isLogin: false})
    }
    alert("Passwords do not match.")
    return
} 

</script>

<template>
    <div class="inline-flex flex-row w-screen h-screen overflow-hidden box-border">
        <div class=" h-[90%] w-[98%] overflow-hidden box-border">
            <AuthGradientBackground />
            <div class="h-full w-1/2 left-[calc(50%-50px)] -skew-x-[5deg] z-50 bg-white absolute flex items-center">
                <div class="skew-x-[5deg] ml-[25%]">
                    <h1 class="mx-4 mb-4 font-Inter font-semibold text-3xl w-[250px]">
                        <br/>
                        Register by filling our the form.
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