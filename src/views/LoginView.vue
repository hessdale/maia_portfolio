<template>
    <div>
        <nav-bar></nav-bar>
        <login-info></login-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import LoginInfo from '@/components/LoginInfo.vue';
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        LoginInfo, NavBar, FooterBar
    },
}
</script>

<style scoped></style>