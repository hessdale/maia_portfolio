<template>
    <div id="info">
        <router-link class="link" to="/contact">
            <h1 id="contact">contact</h1>
        </router-link>
        <div id="icons">
            <a href="http://www.behance.net"><img src="../assets/NavAssets/behance-tag-beige.svg"
                    alt="icon of the behance logo" width="45px"></a>
            <a href="http://www.instagram.com"><img src="../assets/NavAssets/instagram-beige.svg"
                    alt="icon of the instagram logo" width="45px"></a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.link {
    text-decoration: none;
}

#icons>a {
    padding: 10px;
}

#info {
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #C72828;
    padding: 30px;
}

#contact {
    font-family: 'NeueHaasUnicaPro-Black';
    color: #EAE5DE;
}
</style>