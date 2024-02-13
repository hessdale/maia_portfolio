<template>
    <div>
        <nav-bar></nav-bar>
        <upload-info></upload-info>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import UploadInfo from '@/components/UploadInfo.vue';
export default {
    components: {
        NavBar, UploadInfo
    },
}
</script>

<style scoped></style>