<template>
    <div>
        <nav-bar></nav-bar>
        <contact-info></contact-info>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ContactInfo from '@/components/ContactInfo.vue';
export default {
    components: {
        NavBar, ContactInfo
    },
}
</script>

<style scoped></style>