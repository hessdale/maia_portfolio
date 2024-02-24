<template>
    <div>
        <nav-bar></nav-bar>
        <services-info></services-info>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ServicesInfo from '@/components/ServicesInfo.vue';
export default {
    components: {
        NavBar, ServicesInfo
    },
}
</script>

<style scoped></style>