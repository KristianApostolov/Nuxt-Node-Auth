<script lang="ts" setup>
import { Ref } from 'vue'
import { submitAuth } from '~~/utility/submitAuth';

defineProps({
    user: {
        type: [null, Object],
        required: true
    }
})

const email: Ref<any> = ref<string>("")
const password: Ref<any> = ref<string>("")

const credentialsWrapper = {
    "Email": email,
    "Password": password
}

const submit = () => {
    submitAuth({email: email.value, password: password.value, url: "http://127.0.0.1:4000/user/login",isLogin: true})
}

</script>

<template>
    <div class="inline-flex flex-row w-screen h-screen overflow-hidden box-border">
        <div class=" h-[90%] w-[98%] overflow-hidden box-border">
            <AuthGradientBackground />
            <div class="h-full w-1/2 left-[calc(50%-50px)] -skew-x-[5deg] z-50 bg-white absolute flex items-center">
                <div class="skew-x-[5deg] ml-[25%]">
                    <h1 class="mx-4 mb-8 font-Inter font-semibold text-3xl w-[250px]">
                        <br/>
                        Register by filling our the form.
                    </h1>
                    <form v-on:submit.prevent="submit()" class="mb-8">
                        <AuthInput name="Email" type="text" v-bind:value="credentialsWrapper" />
                        <AuthInput name="Password" type="password" v-bind:value="credentialsWrapper" />
                        <AuthText :isLogin="true" />
                        <AuthButton content="Login" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>