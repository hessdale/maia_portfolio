<template>
    <div id="pageBackground">
        <div id="info">
            <h1 class="whiteText" id="formTitle">Let's make it happen!</h1>
            <p class="whiteText" id="formInfo">Fill out this quick form or send an email and let’s
                get talking. I look forward to working with you!</p>
            <a id="emailLink" href="mailto:hadfieldmaia@gmail.com">hadfieldmaia@gmail.com</a>
        </div>
        <div id="form">
            <form ref="form" @submit.prevent="submitForm">
                <div id="name">
                    <div>
                        <input class="decoration" type="text" ref="FirstNameInput" maxlength="150"
                            autocomplete="given-name" required>
                        <p class="whiteText">First Name</p>
                    </div>
                    <div>
                        <input class="decoration" type="text" ref="LastNameInput" maxlength="150"
                            autocomplete="family-name" required>
                        <p class="whiteText">Last Name</p>
                    </div>
                </div>
                <div id="email">
                    <div>
                        <input class="decoration" type="email" ref="EmailInput" maxlength="200" required>
                        <p class="whiteText">Email</p>
                    </div>
                    <div id="empty">
                    </div>
                </div>
                <div id="note">
                    <input class="decoration" ref="NoteInput" textarea="auto" maxlength="2000" autocomplete="off"
                        required>
                    <p class="whiteText">Note</p>
                </div>
                <div id="button">
                    <input id="buttonDecoration" type="submit" value="Submit" />
                    <div id="alert">
                        <span id="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                        Contact Successful!
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import emailjs from '@emailjs/browser';
export default {
    methods: {
        submitForm() {
            let FirstNameInput = this.$refs.FirstNameInput[`value`]
            let LastNameInput = this.$refs.LastNameInput[`value`]
            let EmailInput = this.$refs.EmailInput[`value`]
            let NoteInput = this.$refs.NoteInput[`value`]
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/contact-form`,
                method: `POST`,
                data: {
                    FirstName: FirstNameInput,
                    LastName: LastNameInput,
                    Email: EmailInput,
                    Note: NoteInput
                }
            }).then((response) => {
                console.log(response)
                emailjs.sendForm('service_thuxw1n', 'template_nxjza0k', this.$refs.form, {
                    publicKey: 'PxmR9ZRAcf3SX3wx8'
                }).then(
                    () => {
                        console.log('success!!');
                        document.getElementById('alert').style.display = 'block';
                    },
                    (error) => {
                        console.log('failed', error)
                    },
                );
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
    justify-items: stretch;
    align-items: center;
}

#button>input {
    margin-top: 10px;
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

#name>div>input {
    width: 100%;
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
    justify-content: center;
    justify-items: center;
}

#form {
    display: grid;
    justify-items: center;
    width: 70%;
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

#alert {
    /* display: none; */
    padding: 10px;
    background-color: #3eeb46;
    color: white;
}

#closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}

#note {
    margin: 10px;
}
</style>