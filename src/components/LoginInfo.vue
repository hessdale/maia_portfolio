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
            let username_input = this.$refs.username[`value`];
            let password_input = this.$refs.password[`value`];
            axios
                .request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-login`,
                    method: `POST`,
                    data: {
                        username: username_input,
                        password: password_input,
                    },
                })
                .then((response) => {
                    cookies.set("token", response.data[0].token);
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
}
</script>

<style scoped></style>