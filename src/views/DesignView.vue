<template>
    <div>
        <nav-bar></nav-bar>
        <design-info></design-info>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import DesignInfo from '@/components/DesignInfo.vue'
export default {
    components: {
        NavBar, DesignInfo
    },
}
</script>

<style scoped></style>