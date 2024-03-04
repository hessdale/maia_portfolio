<template>
    <div id="pageBackground">
        <div id="info">
            <h1 class="whiteText">Let's make it happen!</h1>
            <p class="whiteText">Fill out this quick form or send an email and let’s
                get talking. I look forward to working with you!</p>
            <a href="mailto:hadfieldmaia@gmail.com">hadfieldmaia@gmail.com</a>
        </div>
        <div id="form">
            <input type="text ">
            <p class="whiteText">First Name</p>
            <input class="decoration" type="text">
            <p class="whiteText">Last Name</p>
            <input type="text">
            <p class="whiteText">Email</p>
            <input type="text">
            <p class="whiteText">Note</p>
            <button>Submit</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.decoration {
    text-decoration: none;
    background-color: #C72828;
    border: #EAE5DE;
    border-width: 2px;
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
</style>