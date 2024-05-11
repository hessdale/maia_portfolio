<template>
    <div>
        <nav-bar></nav-bar>
        <contact-info></contact-info>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
    components: {
        NavBar, ContactInfo, FooterBar
    },
}
</script>

<style scoped></style>