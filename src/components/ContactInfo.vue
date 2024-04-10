<template>
    <div id="pageBackground">
        <div id="info">
            <h1 class="whiteText" id="formTitle">Let's make it happen!</h1>
            <p class="whiteText" id="formInfo">Fill out this quick form or send an email and let’s
                get talking. I look forward to working with you!</p>
            <a id="emailLink" href="mailto:hadfieldmaia@gmail.com">hadfieldmaia@gmail.com</a>
        </div>
        <div id="form">
            <div id="name">
                <div>
                    <input class="decoration" type="text" id="FirstNameInput">
                    <p class="whiteText">First Name</p>
                </div>
                <div>
                    <input class="decoration" type="text" id="LastNameInput">
                    <p class="whiteText">Last Name</p>
                </div>
            </div>
            <div id="email">
                <div>
                    <input class="decoration" type="text" id="EmailInput">
                    <p class="whiteText">Email</p>
                </div>
                <div id="empty">

                </div>
            </div>

            <div id="note">
                <textarea class="decoration" type="text" id="NoteInput" rows="10" cols="47"></textarea>
                <p class="whiteText">Note</p>
            </div>
            <div id="button">
                <button @click="submitForm()" id="buttonDecoration">Submit</button>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    methods: {
        submitForm() {
            let FirstNameInput = document.getElementById("FirstnameInput").value
            let LastNameInput = document.getElementById("LastNameInput").value
            let EmailInput = document.getElementById("EmailInput").value
            FirstNameInput
            LastNameInput
            EmailInput
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/contact-form`,
                method: `POST`,
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)

            })
        }
    },

}
</script>

<style scoped>
#button {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 650px;
    margin-top: 20px;
}

#buttonDecoration {
    text-decoration: none;
    background-color: #C72828;
    border: #EAE5DE;
    border-width: 1px;
    border-style: solid;
    color: #EAE5DE;
    width: 70px;
    height: 30px;
}


#noteInput {
    width: 300em;
}

#email {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
}

#name {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
}

#name>div {
    margin: 10px;
}

#email>div {
    margin: 10px;
}

#email {
    text-decoration: none;
    color: #EAE5DE;
}

#emailLink {
    text-decoration: none;
    color: #EAE5DE;
    padding-top: 10px;
    padding-bottom: 30px;
}

.decoration {
    text-decoration: none;
    background-color: #C72828;
    border: #EAE5DE;
    border-width: 1px;
    border-style: solid;
    color: #EAE5DE;
}

#info {
    display: grid;
    justify-items: center;
}

#form {
    display: grid;
    justify-items: center;
}

.whiteText {
    color: #EAE5DE;
}

#pageBackground {
    background-color: #C72828;
    height: 100vh;
}

#formTitle {
    text-align: center;
    font-family: 'NeueHaasUnicaPro-Black';
    padding-top: 50px;
}

#formInfo {
    text-align: center;
    width: 350px;
}
</style>