<template>
    <div>
        <nav-bar></nav-bar>
        <portraits-info></portraits-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PortraitsInfo from '@/components/PortraitsInfo.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
    components: {
        NavBar, PortraitsInfo, FooterBar
    },
}
</script>

<style scoped></style>