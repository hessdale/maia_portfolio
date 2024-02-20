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
            <div id="CaseStudy">
                <a class="CaseStudyLink" @click="OpenCase()">Case Studies</a>
                <img id="SubMenuIcon" @click="OpenCase()" src="../assets/nav-arrow-down.svg" alt="icon arrow down">
                <img id="SubMenuClose" @click="CloseCase()" src="../assets/xmark.svg" alt="icon to close sub menu">
            </div>
            <div id="CaseStudyMenu">
                <router-link class="CaseStudyLink" to="/">Blue Ruby</router-link>
                <router-link class="CaseStudyLink" to="/">Aunty Jen's</router-link>
            </div>

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
            document.getElementById('HeaderSubMenu').style.display = "grid";
            document.getElementById('MenuIcon').style.display = "none";
            document.getElementById('CloseIcon').style.display = "grid";
        },
        CloseMenu() {
            document.getElementById('HeaderSubMenu').style.display = "none";
            document.getElementById('CloseIcon').style.display = "none";
            document.getElementById('MenuIcon').style.display = "grid";
        },
        OpenCase() {
            document.getElementById('CaseStudyMenu').style.display = 'grid';
            document.getElementById('SubMenuClose').style.display = 'grid';
            document.getElementById('SubMenuIcon').style.display = 'none';
        },
        CloseCase() {
            document.getElementById('CaseStudyMenu').style.display = 'none';
            document.getElementById('SubMenuClose').style.display = 'none';
            document.getElementById('SubMenuIcon').style.display = 'grid';
        }
    }
}
</script>

<style scoped>
#CaseStudy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-left: 17%;
}

#SubMenuIcon {
    display: grid;
    cursor: pointer;
    width: 19%;
}

#SubMenuClose {
    display: none;
    width: 19%;
    cursor: pointer;
}

#CaseStudyMenu {
    display: none;
    width: 19%;
    text-align: center;
}

.CaseStudyLink {
    text-decoration: none;
    color: #C72828;
    font-size: larger;
    cursor: pointer;
    font-weight: 700;
}

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
    justify-items: center;
    background-color: #EAE5DE;
}

#header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #EAE5DE;
    padding: 3%;
}

#logo {
    display: grid;
    width: 35%;
    align-content: center;
}

#menu {
    display: grid;
    cursor: pointer;
    width: 7%;
    align-content: center;
    margin-left: 90%;
}
</style>