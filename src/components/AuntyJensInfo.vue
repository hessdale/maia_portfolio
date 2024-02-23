<template>
    <div>
        <div id="pizzaBackground">
            <div id="center">
                <h1 id="auntyTitle">Aunty Jens Pizzeria</h1>
            </div>
        </div>
        <article>
            <div>
                <h2>AUNTY JEN'S PIZZARIA</h2>
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
                    alt="sign of aunty jen's pizzeria with an icon of a green woman and a pizza box" width="40%">
            </div>
        </article>
        <article>
            <div>
                <img src="../assets/AuntyJensAssets/AJPizzaBox.jpg"
                    alt="green pizza box with an icon of a green woman and a pizza box on it" width="40%">
            </div>
            <div>
                <h2>DELIVERABLES</h2>
                <p>- Brand Identity</p>
                <p>- Moodboarding</p>
                <p>- Signage Design</p>
            </div>
            <div>
                <h2>INDUSTRY</h2>
                <p>Food & Beverages</p>
                <h2>LOCATION</h2>
                <p>Vancouver, BC</p>
            </div>
        </article>
        <article>
            <div>
                <h1>BRANDING</h1>
                <p>Bright and eye-catching! This rebrand takes
                    the “Aunty Jen” character used in their
                    current logo and gives her a modern twist.
                    Classic and timeless pizzeria imagery is
                    balanced with modern typefaces and
                    colours to create unique branding that’s
                    just as perfect as their ‘za!</p>
            </div>
            <div>
                <img src="../assets/AuntyJensAssets/AJSign.jpg"
                    alt="sign of aunty jen's pizzeria with an icon of a green woman and a pizza box" width="30%">
                <img src="../assets/AuntyJensAssets/AJPitchWhite.jpg"
                    alt="Aunty Jen's pitch board in white with three logos" width="30%">
                <img src="../assets/AuntyJensAssets/AJPitchBlack.jpg"
                    alt="Aunty Jen's pitch board in black with three logos" width="30%">
                <img src="../assets/AuntyJensAssets/AJMoodboard.png"
                    alt="Aunty Jen's mood board with multiple images of branding examples on it" width="30%">
                <img src="../assets/AuntyJensAssets/AJPitchAssets.jpg"
                    alt="Aunty Jen's pitch assets with info such as fonts and color palettes" width="30%">
            </div>
        </article>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
}</style>