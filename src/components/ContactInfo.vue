<template>
    <div id="pageBackground">
        <div id="info">
            <h1 class="whiteText" id="formTitle">Let's make it happen!</h1>
            <p class="whiteText" id="formInfo">Fill out this quick form or send an email and let’s
                get talking. I look forward to working with you!</p>
            <a id="emailLink" href="mailto:hadfieldmaia@gmail.com">hadfieldmaia@gmail.com</a>
        </div>
        <form ref="form" @submit.prevent="sendEmail">
            <div id="name">
                <div>
                    <input class="decoration" type="text" name="user_name" ref="FirstNameInput">
                    <p class="whiteText">First Name</p>
                </div>
                <div>
                    <input class="decoration" type="text" name="LastNameInput" ref="LastNameInput">
                    <p class="whiteText">Last Name</p>
                </div>
            </div>
            <div id="email">
                <div>
                    <input class="decoration" type="text" name="user_email" ref="EmailInput">
                    <p class="whiteText">Email</p>
                </div>
                <div id="empty">
                </div>
            </div>
            <div id="note">
                <textarea class="decoration" type="text" name="message" ref="NoteInput" rows="10" cols="47"></textarea>
                <p class="whiteText">Note</p>
            </div>
            <div id="button">
                <button @click="submitForm()" id="buttonDecoration">Submit</button>
                <div></div>
            </div>
        </form>
        <!-- <label>Name</label>
        <input type="text" name="user_name">
        <label>Email</label>
        <input type="email" name="user_email">
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send">
        <button @click="sendEmail()">send</button> -->
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
            let form = this.$refs.form
            console.log(form)
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