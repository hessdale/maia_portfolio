<template>
    <div>
        <nav-bar></nav-bar>
        <case-study-info></case-study-info>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CaseStudyInfo from '@/components/CaseStudyInfo.vue';
export default {
    components: {
        NavBar, CaseStudyInfo
    },
}
</script>

<style scoped></style>