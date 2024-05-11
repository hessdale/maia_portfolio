<template>
    <div>
        <nav-bar></nav-bar>
        <photos-info></photos-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PhotosInfo from '@/components/PhotosInfo.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
    components: {
        NavBar, PhotosInfo, FooterBar
    },
}
</script>

<style scoped></style>