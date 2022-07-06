<script lang="ts" setup>
import { Ref } from 'vue'
import { submitAuth } from '~~/utility/submitAuth';

const props: any = defineProps({
    user: {
        type: Boolean,
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
<div>
    <form v-on:submit.prevent="submit">
        <AuthInput name="Email" type="text" :value="credentialsWrapper"/>
        <AuthInput name="Password" type="password" :value="credentialsWrapper"/>
        <AuthButton @submit="$emit('submit')" content="Log In"/>
    </form>
</div>
</template>