<script setup lang="ts">
import  { useRouter, Router } from 'vue-router'

const props: any = defineProps({
    isLogin: {
        type: Boolean,
        required: true
    }
})

const mainText: string = props.isLogin ?"Don't have an account? " : "Already have an account? "
const buttonText: string = props.isLogin ? "Register"  : "Login"

const router: Router = useRouter()

const pushTo: Function = (): void => {
    router.push(props.isLogin ? "/register" : "/login")
}

</script>

<template>

<div class="mx-4 mb-2 mt-0 font-Inter font-semibold">
    <span>
        {{ mainText }}
    </span>
    
    <span v-on:click="pushTo()" class="text-button-blue cursor-pointer">
        {{ buttonText }}
    </span>
    <span>
        .
    </span>
</div>

</template>