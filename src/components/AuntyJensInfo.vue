<template>
    <div id="pageBackground">
        <div id="pizzaBackground">
            <div id="center">
                <h1 id="auntyTitle">Aunty Jens Pizzeria</h1>
            </div>
        </div>
        <article class="column2">
            <div>
                <h2 class="titleUnderline">AUNTY JEN'S PIZZARIA</h2>
                <p>A commercial drive staple, Aunty Jen’s Pizzeria is
                    a prized location for 1AM pizza runs. With
                    Commercial Drive growing as a popular spot for
                    vintage shopping, good eats, and photo ops,
                    we’re seeing rebrands become more popular
                    amongst classic businesses.
                    This rebrand would give Aunty Jen’s Pizzeria an
                    eye-catching edge to take advantage of foot
                    traffic. </p>
            </div>
            <div>
                <img src="../assets/AuntyJensAssets/AJSign.jpg"
                    alt="sign of aunty jen's pizzeria with an icon of a green woman and a pizza box" width="80%">
            </div>
        </article>
        <article class="column2">
            <div>
                <img src="../assets/AuntyJensAssets/AJPizzaBox.jpg"
                    alt="green pizza box with an icon of a green woman and a pizza box on it" width="80%">
            </div>
            <article class="column2">
                <div>
                    <h2 class="titleUnderline">DELIVERABLES</h2>
                    <p>- Brand Identity</p>
                    <p>- Moodboarding</p>
                    <p>- Signage Design</p>
                </div>
                <div>
                    <h2 class="titleUnderline">INDUSTRY</h2>
                    <p>Food & Beverages</p>
                    <h2 class="titleUnderline">LOCATION</h2>
                    <p>Vancouver, BC</p>
                </div>
            </article>
        </article>
        <div id="blackBar"></div>
        <article id="branding">
            <div id="follow">
                <h1 id="brandTitle">BRANDING</h1>
                <p>Bright and eye-catching! This rebrand takes
                    the “Aunty Jen” character used in their
                    current logo and gives her a modern twist.
                    Classic and timeless pizzeria imagery is
                    balanced with modern typefaces and
                    colours to create unique branding that’s
                    just as perfect as their ‘za!</p>
            </div>
            <div id="imgColumn">
                <img src="../assets/AuntyJensAssets/AJSign.jpg"
                    alt="sign of aunty jen's pizzeria with an icon of a green woman and a pizza box">
                <img src="../assets/AuntyJensAssets/AJPitchWhite.jpg"
                    alt="Aunty Jen's pitch board in white with three logos">
                <img src="../assets/AuntyJensAssets/AJPitchBlack.jpg"
                    alt="Aunty Jen's pitch board in black with three logos">
                <img src="../assets/AuntyJensAssets/AJMoodboard.png"
                    alt="Aunty Jen's mood board with multiple images of branding examples on it">
                <img src="../assets/AuntyJensAssets/AJPitchAssets.jpg"
                    alt="Aunty Jen's pitch assets with info such as fonts and color palettes">
            </div>
        </article>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#branding {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#follow {
    position: sticky;
    height: 300px;
    top: 0;
    margin-top: 50px;
}

#blackBar {
    background-color: black;
    height: 1px;
    width: 100%;
}

#brandTitle {
    font-family: 'NeueHaasUnicaPro-Black';
    font-size: 30px;
}

#imgColumn {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 200px;
}

#imgColumn>img {
    width: 80%;
    margin-top: 30px;
}

.column2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    margin-bottom: 30px;
}

.titleUnderline {
    text-decoration: underline;
    text-align: start;
    font-size: 15px;
    font-family: 'NeueHaasUnicaPro-Black';
}

.titleUnderline>p {
    text-align: start;
}

#pageBackground {
    background-color: #EAE5DE;
    height: 100%;
}

#pizzaBackground {
    background-image: url(@/assets/AuntyJensAssets/HandsGrabbingPizza.jpg);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 35vh;
}

#auntyTitle {
    font-family: 'NeueHaasUnicaPro-Black';
    color: #EAE5DE;
    position: absolute;
    font-size: 40px;
    text-align: center;
}

#center {
    text-align: center;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-top: 15vh;
}
</style>