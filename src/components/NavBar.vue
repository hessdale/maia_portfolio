<template>
    <div>
        <span id="header">
            <span id="logo">
                <router-link to="/">
                    <img src="../assets/MH_Logo.png" alt="logo that says maia hadfield" width="100%">
                </router-link>
            </span>
            <span id="menu">
                <img id="MenuIcon" @click="OpenMenu()" src="../assets/HamburgerMenu.svg" alt="menu icon" width="100%">
                <img id="CloseIcon" @click="CloseMenu()" src="../assets/xmark.svg" alt="icon to close menu" width="100%">
            </span>
        </span>
        <span id="HeaderSubMenu">
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/case-study">Blue Ruby Case Study</router-link>
            <router-link class="link" to="/contact">Contact</router-link>
            <router-link class="link" to="/design">Design</router-link>
            <router-link class="link" to="/photos">Photos</router-link>
            <router-link class="link" to="/portraits">Portraits</router-link>
            <router-link class="link" to="/services">Services</router-link>
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        OpenMenu() {
            document.getElementById('HeaderSubMenu').style.display = "grid"
            document.getElementById('MenuIcon').style.display = "none"
            document.getElementById('CloseIcon').style.display = "grid"
        },
        CloseMenu() {
            document.getElementById('HeaderSubMenu').style.display = "none"
            document.getElementById('CloseIcon').style.display = "none"
            document.getElementById('MenuIcon').style.display = "grid"
        }
    },
}
</script>

<style scoped>
.link {
    text-decoration: none;
    color: #C72828;
    font-size: larger;
    width: 15%;
}

#CloseIcon {
    display: none;
    width: 100%;
}

#HeaderSubMenu {
    display: none;
}

#header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    margin: 3%;
}

#logo {
    display: grid;
    justify-items: start;
    width: 35%;
}

#menu {
    display: grid;
    justify-items: end;
    cursor: pointer;
    width: 8%;
}
</style>