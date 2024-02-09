<template>
    <div>
        <nav-bar></nav-bar>
        <login-info></login-info>
    </div>
</template>

<script>
import LoginInfo from '@/components/LoginInfo.vue';
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        LoginInfo, NavBar
    },
}
</script>

<style scoped></style>