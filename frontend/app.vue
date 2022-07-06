<script lang="ts" setup>
import { Ref } from 'vue';
import { checkForUser } from './utility/checkForUser';

useloggedIn()

const user: Ref<object | boolean > = ref()

const update: Ref<any> = ref()

onMounted( async () => {
  await checkForUser(user)
})

watch(update, async () => {
  await checkForUser(user)
})

</script>

<template>
  <div>
    <NuxtPage @update="update++" v-if="user === false || user" :user="user"/>
  </div>
</template>
