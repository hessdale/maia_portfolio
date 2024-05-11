<template>
    <div>
        <nav-bar></nav-bar>
        <aunty-jens-info></aunty-jens-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import AuntyJensInfo from '@/components/AuntyJensInfo.vue';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
    components: {
        AuntyJensInfo, NavBar, FooterBar
    },
}
</script>

<style scoped></style>