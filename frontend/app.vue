<script lang="ts" setup>
import { Ref } from 'vue'
import { checkForUser } from './utility/checkForUser'
import { logout } from './utility/logout'

useloggedIn()

const user: Ref<object> = ref(null)

const updateTracker: Ref<any> = ref(0)
const logoutTracker: Ref<any> = ref(false)

onMounted( async () => {
  await checkForUser(user)
})

watch(updateTracker, async () => {
  await checkForUser(user)
})

watch(logoutTracker, async () => {
  logout(user)
  await checkForUser(user)
})

</script>

<template>
  <div class="inline-flex flex-col h-screen w-screen">
    <Navbar @logout="logoutTracker=!logoutTracker" v-if="user !== null" :user="user" />
    <NuxtPage @authentication="updateTracker++" v-if="user === null || user" :user="user"/>
  </div>
</template>
