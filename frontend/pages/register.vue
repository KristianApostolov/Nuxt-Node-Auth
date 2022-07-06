<script setup lang="ts">
import { Ref } from 'vue'
import { submitAuth } from '~~/utility/submitAuth';

const email: Ref<any> = ref<string>("")
const password: Ref<any> = ref<string>("")
const verifyPassword: Ref<any> = ref<string>("")

const props: any = defineProps({
    user: {
        type: Object,
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
    <div class="absolute inline-flex flex-row h-screen w-screen overflow-hidden">
        <AuthGradientBackground />
        <div class="h-full w-[43.75%] absolute top-0 bottom-0 right-0 left-[56.25%] overflow-hidden">
            <form v-on:submit.prevent="submit" class="overflow-hidden">
                <AuthInput name="Email" type="text" v-bind:value="credentialsWrapper" />
                <AuthInput name="Password" type="password" v-bind:value="credentialsWrapper" />
                <AuthInput name="Re-enter Password" type="password" v-bind:value="credentialsWrapper" />
                <AuthButton content="Register" />
                <AuthText :isLogin="false" />
            </form>
        </div>
    </div>
</template>