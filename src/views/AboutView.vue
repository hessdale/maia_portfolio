<template>
  <div>
    <nav-bar></nav-bar>
    <about-info></about-info>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AboutInfo from '@/components/AboutInfo.vue';
export default {
  components: {
    NavBar, AboutInfo
  },
}
</script>

<style scoped></style>