<template>
    <div>
        <div id="background">
            <article id="title">
                <h1 class="whiteFont">misc. photos</h1>
                <p class="whiteFont">Images I have taken commercially and creatively of products, animals, bits, and
                    bobs.
                </p>
            </article>
            <masonry :cols="3" :gutter="30">
                <div v-for="(item, index) in items" :key="index">Item: {{ index + 1 }}
                    <div :style="{ height: `${item}px` }" style="background-color: white;"></div>
                </div>
            </masonry>
            <masonry :cols="3" :gutter="30">
                <div v-for="(photo, i) in photos" :key="i">
                    <img :key="i" :src="getImageUrl(photo[`file`])" :alt="photo[`image_description`]" :id="i"
                        width="200px">
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
            items: [50, 75, 75, 100, 50, 50, 75, 150, 125, 175, 50, 100, 125]
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

/* #images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    align-items: center;
    justify-items: center;
} */
</style>