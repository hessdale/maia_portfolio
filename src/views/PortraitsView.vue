<template>
    <div>
        <nav-bar></nav-bar>
        <div id="background">
            <article id="title">
                <h1 class="whiteFont">portraits</h1>
                <p class="whiteFont">Portraits I have taken commercially and creatively
                </p>
            </article>
            <span id="images">
                <img src="../assets/PortraitsAssets/arrow-left.svg" alt="icon left arrow">
                <img src="../assets/PortraitsAssets/JewelryPortrait.jpeg" alt="portrait of a model wearing necklaces"
                    width="450px">
                <img src="../assets/PortraitsAssets/arrow-right.svg" alt="icon right arrow">
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