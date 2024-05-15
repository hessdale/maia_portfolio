<template>
  <div>
    <nav-bar></nav-bar>
    <about-info></about-info>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AboutInfo from '@/components/AboutInfo.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  components: {
    NavBar, AboutInfo, FooterBar
  },
}
</script>

<style scoped></style>