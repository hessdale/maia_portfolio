<template>
  <div>
    <nav-bar></nav-bar>
    <home-info></home-info>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import HomeInfo from '@/components/HomeInfo.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    HomeInfo, NavBar, FooterBar
  },
}
</script>

<style scoped></style>