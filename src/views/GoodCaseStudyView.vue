<template>
    <div>
        <nav-bar></nav-bar>
        <good-grub-case-study-info></good-grub-case-study-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import GoodGrubCaseStudyInfo from '../components/GoodGrubCaseStudyInfo.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
    components: {
        GoodGrubCaseStudyInfo, NavBar, FooterBar
    },
}
</script>

<style scoped></style>