<template>
    <div id="header">
        <span id="logo">
            <router-link to="/home">
                <img src="../assets/MH_Logo.png" alt="logo that says maia hadfield" width="30%">
            </router-link>
        </span>
        <span id="menu">
            <img src="../assets/HamburgerMenu.svg" alt="menu icon" width="8%">
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
}

#logo {
    justify-content: start;
}

#menu {
    justify-content: end;
}
</style>