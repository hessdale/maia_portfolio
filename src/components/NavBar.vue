<template>
    <div>
        <span id="header">
            <span>
                <router-link to="/">
                    <img id="logo" src="../assets/MH_Logo.png" alt="logo that says maia hadfield" width="35%">
                </router-link>
            </span>
            <span id="menu">
                <img id="MenuIcon" @click="OpenMenu()" src="../assets/HamburgerMenu.svg" alt="menu icon" width="8%">
                <img id="CloseIcon" @click="CloseMenu()" src="../assets/xmark.svg" alt="icon to close menu" width="8%">
            </span>
        </span>
        <span id="HeaderSubMenu">
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/case-study">Case Study</router-link>
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
}

#CloseIcon {
    display: none;
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
    width: 30%;
}

#menu {
    display: grid;
    justify-items: end;
    cursor: pointer;
}
</style>