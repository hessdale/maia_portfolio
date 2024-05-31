<template>
    <div>
        <div id="background">
            <article id="title">
                <h1 class="whiteFont">photos</h1>
                <p class="whiteFont">Images I have taken commercially and creatively of products, animals, bits, and
                    bobs.
                </p>
            </article>
            <masonry :cols="{ default: 4, 1800: 4, 1400: 3, 1000: 2, 700: 2, 400: 1 }"
                :gutter="{ default: '30px', 700: '15px' }">
                <div v-for="(photo, i) in photos" :key="i">
                    <img :key="i" :src="getImageUrl(photo[`file`])" :alt="photo[`image_description`]" :id="i"
                        width="90%">
                </div>
            </masonry>
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
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/misc-photos`,
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
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
}

.whiteFont {
    color: #EAE5DE;
}

#title {
    padding-bottom: 30px;
    padding-top: 30px;
}

#title>h1 {
    font-family: 'NeueHaasUnicaPro-Black';
    font-size: 40px;
}

#title>p {
    font-size: 14px;
}
</style>