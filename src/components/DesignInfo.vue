<template>
    <div>
        <div id="background">
            <article id="title">
                <h1 class="whiteFont">design</h1>
                <p class="whiteFont">Pieces In have designed for use accross print, web, and social media.</p>
            </article>
            <span id="images">
                <img @click="cyclePhotoBackward()" class="arrow" src="../assets/DesignAssets/arrow-left.svg"
                    alt="icon left arrow">
                <div id="carousel" v-for="(photo, i) in photos" :key="i">
                    <img :src="getImageUrl(photo[`file`])" :alt="photo[`image_description`]" :id="i" width="400px">
                </div>
                <img @click="cyclePhotoForward()" class="arrow" src="../assets/DesignAssets/arrow-right.svg"
                    alt="icon right arrow">
            </span>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        cyclePhotoForward() {
            document.getElementById[this.currentPhoto].style.display = "none"
            this.currentPhoto++
            if (this.currentPhoto >= this.photos.length) {
                this.currentPhoto = 0
            }
            document.getElementById[this.currentPhoto].style.display = "grid"
        },
        cyclePhotoBackward(currentPhoto) {
            currentPhoto
        },
        getImageUrl(file_name) {
            let image_location = require("../../../maia_backend/images/" + file_name)
            return image_location
        },
    },
    data() {
        return {
            photos: undefined,
            currentPhoto: 0
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
        document.getElementById[this.currentPhoto.toString()].style.display = "grid"
    },

}
</script>

<style scoped>
.arrow {
    cursor: pointer;
}

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