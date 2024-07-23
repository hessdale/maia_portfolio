<template>
    <div id="pageBackground">
        <div id="about">
            <span id="who">
                <div class="mobile">
                    <h1 class="whiteFont" id="Bold">Whose kid is this?</h1>
                </div>
                <div id="kid">
                    <img src="@/assets/AboutAssets/MaiaKid.jpg" alt="a young photo of Maia giving the peace sign">
                </div>
                <div class="mobile">
                    <p class="whiteFont">This kid is me, and she (many years later) will work
                        with you to create process-driven, result-proven
                        work. Raised in Vancouver, BC, this kid grew to be
                        a designer and photographer with a big brain. Give
                        her a brief, and she'll run with it.</p>
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
                <div class="mobile">
                    <h1 class="whiteFont" id="Bold">Not a kid anymore.</h1>
                </div>
                <div id="recent">
                    <img src="@/assets/AboutAssets/MaiaAdult.jpg" alt="a recent headshot of Maia">
                </div>
                <div class="mobile">
                    <p class="whiteFont">Today, this girl does it all! From photography to
                        illustrations, she's a star. Looking for a commercial
                        photographer for your next project? Updated
                        branding for your business? She's got you covered.</p>
                </div>
            </span>
            <article id="contact">
                <a id="email" href="mailto:hadfieldmaia@gmail.com">hadfieldmaia@gmail.com</a>
                <img src="@/assets/AboutAssets/FloatingHeads.gif"
                    alt="gif of floating heads of maia scrolling to the left">
            </article>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mobile {
    display: none;
}

#pageBackground {
    background-color: #C72828;
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
    background-color: #C72828;
}

#contact>img {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 40px;
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
    background-color: #C72828;
}

#email {
    text-decoration: none;
    color: #EAE5DE;
    font-size: calc(100% + 2vw);
}

@media only screen and (max-width: 650px) {
    #whoKid {
        display: none;
    }

    #not {
        display: none;
    }

    .mobile {
        display: grid;
        justify-items: center;
        padding: 30px;
    }

    #who {
        grid-template-columns: 1fr;
    }

    .whiteFont {
        width: 100%;
        text-align: center;
        font-size: 25px;
    }

    #Bold {
        font-size: calc(100% + 4vw)
    }

    #kid>img {
        width: 100%;
    }

    #recent>img {
        width: 100%;
    }

    #email {
        font-size: 25px;
    }
}
</style>