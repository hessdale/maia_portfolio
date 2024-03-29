<template>
    <div>
        <input type="file" ref="uploaded_image">
        <input type="text" ref="image_description" placeholder="description of photo">
        <select name="photo type" id="type">
            <option value="designs">Design</option>
            <option value="misc">Misc</option>
            <option value="portraits">Portraits</option>
        </select>
        <button @click="addPhoto">add photo</button>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
export default {
    methods: {
        addPhoto() {
            let photoType = document.getElementById("type").value;
            if (photoType == "designs") {
                let form = new FormData();
                form.append("uploaded_image", this.$refs["uploaded_image"]["files"][0]);
                form.append("image_description", this.$refs["image_description"].value)
                let cookieToken = cookies.get("token")
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/design-images`,
                    method: `POST`,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        token: cookieToken
                    },
                    data: form,
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            } if (photoType == "misc") {
                let form = new FormData();
                form.append("uploaded_image", this.$refs["uploaded_image"]["files"][0]);
                form.append("image_description", this.$refs["image_description"].value)
                let cookieToken = cookies.get("token")
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/misc-images`,
                    method: `POST`,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        token: cookieToken
                    },
                    data: form,
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            } if (photoType == "portraits") {
                console.log("portraits")
            }
        },
    }
}
</script>

<style scoped></style>