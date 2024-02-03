<template>
    <div>
        <nav-bar></nav-bar>
        <portraits-info></portraits-info>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PortraitsInfo from '@/components/PortraitsInfo.vue';
export default {
    components: {
        NavBar, PortraitsInfo
    },
}
</script>

<style scoped></style>