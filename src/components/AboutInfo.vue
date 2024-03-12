<template>
    <div id="pageBackground">
        <div id="about">
            <span id="who">
                <div id="kid">
                    <img src="../assets/AboutAssets/MaiaKid.jpg" alt="a young photo of Maia giving the peace sign">
                </div>
                <article id="whoKid">
                    <h1 class="whiteFont" id="Bold">Whose kid is this?</h1>
                    <p class="whiteFont">This kid is me, and she (many years later) will work
                        with you to create process-driven, result-proven
                        work. Raised in Vancouver, BC, this kid grew to be
                        a designer and photographer with a big brain. Give
                        her a brief, and she'll run with it.</p>
                </article>
                <article id="not">
                    <h1 class="whiteFont" id="Bold">Not a Kid anymore.</h1>
                    <p class="whiteFont">Today, this girl does it all! From photography to
                        illustrations, she's a star. Looking for a commercial
                        photographer for your next project? Updated
                        branding for your business? She's got you covered.</p>
                </article>
                <div id="recent">
                    <img src="../assets/AboutAssets/MaiaAdult.jpg" alt="a recent headshot of Maia">
                </div>
            </span>
            <article id="contact">
                <a id="email" href="mailto:hadfieldmaia@gmail.com">hadfieldmaia@gmail.com</a>
                <img src="../assets/AboutAssets/FloatingHeads.gif"
                    alt="gif of floating heads of maia scrolling to the leaft">
            </article>
        </div>
    </div>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
#pageBackground {
    background-color: #C72828;
    height: 100vh;
}

#whoKid {
    display: grid;
    justify-items: center;
    align-content: center;
}

#not {
    display: grid;
    justify-items: center;
    align-content: center;
}

#contact {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 5%;
}

#contact>img {
    width: 100%;
    padding-top: 5%;
}

#kid {
    display: grid;
    justify-items: center;
}

#kid>img {
    width: 80%;
}

#recent {
    display: grid;
    justify-items: center;
}

#recent>img {
    width: 75%;
}

#Bold {
    font-family: 'NeueHaasUnicaPro-Black';
    margin: 0;
}

.whiteFont {
    color: #EAE5DE;
    text-align: start;
    width: 80%;
}

#about {
    background-color: #C72828;
    height: 100%;
    padding-top: 3%;
}

#who {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
}

#email {
    text-decoration: none;
    color: #EAE5DE;
    font-size: 20px;
}
</style>