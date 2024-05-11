<template>
    <div>
        <nav-bar></nav-bar>
        <upload-info></upload-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import NavBar from '@/components/NavBar.vue';
import UploadInfo from '@/components/UploadInfo.vue';
export default {
    components: {
        NavBar, UploadInfo, FooterBar
    },
}
</script>

<style scoped></style>