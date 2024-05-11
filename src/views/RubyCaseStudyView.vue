<template>
    <div>
        <nav-bar></nav-bar>
        <ruby-case-study-info></ruby-case-study-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import NavBar from '@/components/NavBar.vue';
import RubyCaseStudyInfo from '@/components/RubyCaseStudyInfo.vue';
export default {
    components: {
        NavBar, RubyCaseStudyInfo, FooterBar
    },
}
</script>

<style scoped></style>