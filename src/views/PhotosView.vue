<template>
    <div>
        <nav-bar></nav-bar>
        <div id="background">
            <article id="title">
                <h1 class="whiteFont">misc. photos</h1>
                <p class="whiteFont">Images I have taken commercially and creatively of products, animals, bits, and bobs.
                </p>
            </article>
            <span id="images">
                <img src="../assets/MiscPhotosAssets/arrow-left.svg" alt="icon left arrow">
                <img src="../assets/MiscPhotosAssets/Perfume.jpeg" alt="a photo of a bonsai tree" width="450px">
                <img src="../assets/MiscPhotosAssets/arrow-right.svg" alt="icon right arrow">
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