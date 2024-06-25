<template>
    <div>
        <nav-bar></nav-bar>
        <good-grub-case-study-info></good-grub-case-study-info>
        <footer-bar-red></footer-bar-red>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import GoodGrubCaseStudyInfo from '../components/GoodGrubCaseStudyInfo.vue';
import FooterBarRed from '@/components/FooterBarRed.vue';
export default {
    components: {
        GoodGrubCaseStudyInfo, NavBar, FooterBarRed
    },
}
</script>

<style scoped></style>