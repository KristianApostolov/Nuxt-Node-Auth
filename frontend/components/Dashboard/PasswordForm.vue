<script setup lang="ts">
import { Ref } from 'vue'
import { submitPasswordUpdate } from '~~/utility/submitPasswordUpdate'

const password: Ref<string> = ref('')
const newPassword: Ref<string> = ref('')
const repeatNewPassword: Ref<string> = ref('')
const form: Ref<any> = ref(null)

const credentialsWrapper = {
    "Old Password": password,
    "New Password": newPassword,
    "Repeat New Password": repeatNewPassword
}

const submit = () => {
    form.value.reset()
    submitPasswordUpdate({oldPassword: password.value, newPassword: newPassword.value, repeatNewPassword: repeatNewPassword.value})
}

const field_type: string = "password"

</script>

<template>

<div>
    <form ref="form" v-on:submit.prevent="submit()" class="inline-flex flex-col mx-3">
        <DashboardHeading content="Password" />
        <DashboardInput name="Old Password" :value="credentialsWrapper['Old Password']" :type="field_type" />
        <DashboardInput name="New Password" :value="credentialsWrapper['New Password']" :type="field_type" />
        <DashboardInput name="Repeat New Password" :value="credentialsWrapper['Repeat New Password']" :type="field_type" />
        <DashboardButton content="Change Password"/>
    </form>
</div>

</template>