<template>
    <div>
        <span id="header">
            <span id="logo">
                <router-link to="/">
                    <img src="../assets/NavAssets/MH_Logo.png" alt="logo that says maia hadfield" width="80%">
                </router-link>
            </span>
            <span id="menu">
                <img id="MenuIcon" @click="OpenMenu()" src="../assets/NavAssets/HamburgerMenu.svg" alt="menu icon"
                    width="80%">
                <img id="CloseIcon" @click="CloseMenu()" src="../assets/NavAssets/xmark.svg" alt="icon to close menu"
                    width="80%">
            </span>
        </span>
        <span id="HeaderSubMenu">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/design">Design</router-link>
            <router-link class="link" to="/photos">Photography</router-link>
            <router-link class="link" to="/portraits">Portraits</router-link>
            <a class="CaseStudyLink" id="CaseStudyLinkOpen" @click="OpenCase()">Case Studies</a>
            <a class="CaseStudyLink" id="CaseStudyLinkClose" @click="CloseCase()" style="display: none;">Case
                Studies</a>
            <div id="CaseStudyMenu" @click="CloseCase()">
                <router-link class="CaseStudyLink" to="/blueruby-case-study">Blue Ruby</router-link>
                <router-link class="CaseStudyLink" to="/blueruby-case-study">Good Grub Skincare</router-link>
                <router-link class="CaseStudyLink" to="/blueruby-case-study">Sunrise Sugaring</router-link>
                <router-link class="CaseStudyLink" to="/auntyjens-case-study">Aunty Jen's Pizzaria</router-link>
            </div>
            <router-link class="link" to="/services">Services</router-link>
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/contact">Contact</router-link>
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
            document.getElementById('CaseStudyLinkOpen').style.display = 'none';
            document.getElementById('CaseStudyLinkClose').style.display = 'grid';
        },
        CloseCase() {
            document.getElementById('CaseStudyMenu').style.display = 'none';
            document.getElementById('CaseStudyLinkClose').style.display = 'none';
            document.getElementById('CaseStudyLinkOpen').style.display = 'grid';
        },
    }
}
</script>

<style scoped>
#CaseStudy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
}

#SubMenuIcon {
    display: grid;
    cursor: pointer;
    width: 8%;
}

#SubMenuClose {
    display: none;
    width: 8%;
    cursor: pointer;
}

#CaseStudyMenu {
    display: none;
    width: 19%;
    text-align: center;
}


.CaseStudyLink {
    text-align: center;
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
    text-align: center;
    padding-bottom: 15px;
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