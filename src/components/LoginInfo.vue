<template>
    <div>
        <input type="text" placeholder="username" ref="username">
        <input type="text" placeholder="password" ref="password">
        <button @click="login">LOGIN</button>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {

    methods: {
        login() {
            let username = this.$refs.username[`value`];
            let password = this.$refs.password[`value`];
            axios.request({
                url: `${process.env.VUE_APP_BASE_URL}/api/client-login`,
                method: `POST`,
                data: {
                    username: username,
                    password: password,
                },
            }).then((response) => {
                console.log(response)
                cookies.set("token", response.data[0].token);
            }).catch((error) => {
                console.log(error)
                console.log("login failed")
            })
        }
    },
}
</script>

<style scoped></style>