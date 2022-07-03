<script lang="ts" setup>

import { Ref } from 'vue'

const email: Ref<string> = ref<string>("")
const password: Ref<string> = ref<string>("")

const formSubmit = useFormSubmit({email: email.value, password: password.value, url: "api/endpint"})

</script>

<template>
<div>
    <form v-on:submit="formSubmit">
        <AuthInput name="Email" type="text" v-bind:value="email"/>
        <AuthInput name="Password" type="password" v-bind:value="password"/>
        <AuthButton content="Register"/>
    </form>
</div>
</template>