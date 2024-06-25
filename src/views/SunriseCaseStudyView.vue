<template>
    <div>
        <nav-bar></nav-bar>
        <sunrise-info></sunrise-info>
        <footer-bar-red></footer-bar-red>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SunriseInfo from '../components/SunriseInfo.vue';
import FooterBarRed from '@/components/FooterBarRed.vue';
export default {
    components: {
        SunriseInfo, NavBar, FooterBarRed
    },
}
</script>

<style scoped></style>