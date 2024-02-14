<template>
    <div>

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
import axios from "axios";
export default {
    data() {
        return {
            photos: undefined
        }
    },
    mounted() {
        axios.request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/design-photos`,
            method: `GET`,
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
            console.log("failed")
        })
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
    justify-items: center;
}
</style>