<template>
    <div>
        <nav-bar></nav-bar>
        <div id="background">
            <article id="title">
                <h1 class="whiteFont">design</h1>
                <p class="whiteFont">Pieces In have designed for use accross print, web, and social media.</p>
            </article>
            <span id="images">
                <img src="../assets/DesignAssets/arrow-left.svg" alt="icon left arrow">
                <img src="../assets/DesignAssets/Bonsai_V01.jpg" alt="a photo of a bonsai tree" width="450px">
                <img src="../assets/DesignAssets/arrow-right.svg" alt="icon right arrow">
            </span>
        </div>
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
#background {
    background-color: #C72828;
}

.whiteFont {
    color: #EAE5DE;
}

#images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
}
</style>