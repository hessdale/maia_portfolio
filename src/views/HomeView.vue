<template>
  <div>
    <nav-bar></nav-bar>
    <home-info></home-info>
  </div>
</template>

<script>
import HomeInfo from '@/components/HomeInfo.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    HomeInfo, NavBar
  },
}
</script>

<style scoped></style>