<template>
    <div>
        <nav-bar></nav-bar>
        <services-info></services-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import NavBar from '@/components/NavBar.vue';
import ServicesInfo from '@/components/ServicesInfo.vue';
export default {
    components: {
        NavBar, ServicesInfo, FooterBar
    },
}
</script>

<style scoped></style>