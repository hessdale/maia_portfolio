<template>
    <div>
        <nav-bar></nav-bar>
        <design-info></design-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import DesignInfo from '@/components/DesignInfo.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
    components: {
        NavBar, DesignInfo, FooterBar
    },
}
</script>

<style scoped></style>