<template>
    <div>
        <div id="background">
            <article id="title">
                <h1 class="whiteFont">misc. photos</h1>
                <p class="whiteFont">Images I have taken commercially and creatively of products, animals, bits, and
                    bobs.
                </p>
            </article>
            <span id="images">
                <div v-for="(photo, i) in photos" :key="i">
                    <img :src="getImageUrl(photo[`file`])" :alt="photo[`image_description`]" :id="i" width="400px">
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
            photos: undefined
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
}

.whiteFont {
    color: #EAE5DE;
}

#images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    align-items: center;
    justify-items: center;
}
</style>