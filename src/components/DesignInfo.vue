<template>
    <div>
        <div id="background">
            <article id="title">
                <h1 class="whiteFont">design</h1>
                <p class="whiteFont">Pieces In have designed for use accross print, web, and social media.</p>
            </article>
            <span id="images">
                <div v-for="(photo, i) in photos" :key="i">
                    <img :key="i" :src="getImageUrl(photo[`file`])" :alt="photo[`image_description`]" :id="i"
                        width="200px">
                </div>
            </span>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        getImageUrl(file_name) {
            let image_location = require("../../../maia_backend/images/" + file_name)
            return image_location
        },
    },
    data() {
        return {
            photos: undefined,
        }
    },
    mounted() {
        axios.request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/design-photos`,
            method: `GET`,
        }).then((response) => {
            console.log(response)
            this.photos = response.data
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

/* #images {
    column-count: 4;
    column-gap: 10px;
}

#images>div {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
}

#images>div>img {
    grid-row: 1 / -1;
    grid-column: 1;
}

img {
    max-width: 200px;
} */

#images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: masonry;
}
</style>