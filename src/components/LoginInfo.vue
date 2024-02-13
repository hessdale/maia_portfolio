<template>
    <div>
        <input type="text" placeholder="username" id="username">
        <input type="text" placeholder="password" id="password">
        <button @click="login">LOGIN</button>
    </div>
</template>

<script>
import axios from "axios";
export default {

    methods: {
        login() {
            let username = this.$refs.username[`value`];
            let password = this / this.$refs.password[`value`];
            axios.request({
                url: `${process.env.VUE_APP_BASE_URL}/api/client-login`,
                method: `POST`,
                data: {
                    username: username,
                    password: password,
                },
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
                console.log("login failed")
            })
        }
    },
}
</script>

<style scoped></style>