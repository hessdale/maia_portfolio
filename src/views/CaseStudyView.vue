<template>
    <div>
        <nav-bar></nav-bar>
        <div id="about"></div>
        <span id="who">
            <img src="../assets/AboutAssets/MaiaKid.jpg" alt="a young photo of maia giving the peace sign">
            <h3>This kid is me, and she (many years later) will work
                with you to create process-driven, result-proven
                work. Raised in Vancouver, BC, this kid grew to be
                a designer and photographer with a big brain. Give
                her a brief, and she’ll run with it.</h3>
        </span>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar,
    },
}
</script>

<style scoped>
#about {
    background-color: #C72828;
}
</style>