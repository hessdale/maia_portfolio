<template>
    <div>
        <nav-bar></nav-bar>
        <photos-info></photos-info>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PhotosInfo from '@/components/PhotosInfo.vue';
export default {
    components: {
        NavBar, PhotosInfo
    },
}
</script>

<style scoped></style>