<template>
    <div id="pageBackground">
        <div id="VideoBackground">
            <span id="Center">
                <h1>Good Grub</h1>
            </span>
        </div>
        <div id="GoodGrubInfo">
            <article>
                <h3 id="GrubInfoTitle">GOOD GRUB</h3>
                <p id="GrubSubInfo">With Good Grub, skincare isn't just a routine—it's
                    a deliciously delightful experience! This brand is
                    all about celebrating the joy of skincare, infused
                    with a playful personality and a commitment to
                    plant-based goodness. Say hello to your new
                    skincare bestie, suitable for all skin types, ages,
                    and genders.
                </p>
                <p id="GrubSubInfo">
                    Good Grub believes in the power of nature to
                    nourish and rejuvenate. That's why each product
                    is packed with the finest plant-based ingredients,
                    carefully selected to feed your skin with the love it
                    deserves.</p>
            </article>
            <div>
                <img src="../assets/GoodGrubAssets/GG_WebAssets-04.jpg"
                    alt="picture of a tube of moisturizer squeezed out">
            </div>
        </div>
        <div id="GoodGrubInfo2">
            <div id="desktopDisplay">
                <img src="../assets/GoodGrubAssets/GG_WebAssets-03.jpg"
                    alt="close up photo of someones cheek with an eye dropper dripping on it">
            </div>
            <article>
                <h3 class="underline">DELIVERABLES</h3>
                <p class="smallScale">- Brand Identity Ideation & Design</p>
                <p class="smallScale">- Packaging Design</p>
                <p class="smallScale">- Print Collateral Design</p>
            </article>
            <article>
                <h3 class="underline">INDUSTRY</h3>
                <p class="smallScale">Skincare</p>
                <h3 class="underline">LOCATION</h3>
                <p class="smallScale">Vancouver,BC</p>
            </article>

        </div>
        <div id="mobileDisplay">
            <img src="../assets/GoodGrubAssets/GG_WebAssets-03.jpg"
                alt="close up photo of someones cheek with an eye dropper dripping on it">
        </div>
        <div class="blackLine"></div>
        <div id="BrandingDesign">
            <article id="BrandingArticle">
                <h1 class="articleTitle">Branding</h1>
                <p class="fontScale">Tying into this brand's playful voice and
                    product names such as “Secret Sauce”,
                    elements of retro restaurant branding were
                    brought in for a unique touch. Illustrations
                    on each product label feature stylized
                    drawings of the ingredients inside..</p>
            </article>
            <div id="BrandingImages">
                <img src="../assets/GoodGrubAssets/GG_BehanceFiles_V01-01.jpg"
                    alt="close up photo of two peoples eyes and ">
                <img src="../assets/GoodGrubAssets/GG_BehanceFiles_V01-03.jpg"
                    alt="collage of skin cream photos and people with it on">
                <img src="../assets/GoodGrubAssets/GG_BehanceFiles_V01-04.jpg"
                    alt="collage of good grub branding and serum photo">
                <img src="../assets/GoodGrubAssets/GG_BehanceFiles_V01-05.jpg"
                    alt="two tubes of good grub moisturizer partially squeezed out onto white background">
                <img src="../assets/GoodGrubAssets/GG_BehanceFiles_V01-06.jpg"
                    alt="collage of packaging for moisturizer and tube partially squeezed">
                <img src="../assets/GoodGrubAssets/GG_BehanceFiles_V01-07.jpg"
                    alt=" flat layout of moisturizer packaging">
                <img src="../assets/GoodGrubAssets/GG_BehanceFiles_V01-08.jpg"
                    alt="collage of two posters reading add some flavour to your routine and models using skin cream">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
#GoodGrubInfo>article {
    width: 90%;
}

#GrubSubInfo {
    padding-bottom: 15px;
}

#mobileDisplay {
    display: none;
}

.articleTitle {
    font-size: 35px;
    font-family: 'NeueHaasUnicaPro-Black';
}

#GoodGrubInfo>div {
    display: grid;
    justify-items: end;
    align-items: center;
}

#GoodGrubInfo>div>img {
    width: 100%;
}

#desktopDisplay>img {
    width: 80%;
    margin-left: 20px;
}

#BrandingArticle {
    position: sticky;
    top: 150px;
    height: 300px;
    margin: 8%;
}

#BrandingDesign {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
}

.blackLine {
    background-color: black;
    height: 1px;
    width: 100%;
}

#pageBackground {
    background-color: #EAE5DE;
}

#link {
    color: black;
    display: grid;
    justify-items: start;
}

.underline {
    text-decoration: underline;
    text-align: start;

}

#GrubInfoTitle {
    text-decoration: underline;
    font-family: 'NeueHaasUnicaPro-Black';
}

#GoodGrubInfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: start;
    justify-items: center;
}

#BrandingImages>img {
    width: 100%;
    margin-bottom: 25px;
}

#BrandingImages {
    margin-top: 20px;
}

#Center {
    text-align: center;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-top: 15vh;
    color: #EAE5DE;
}

#Grubtitle {
    font-family: 'NeueHaasUnicaPro-Black';
    color: #EAE5DE;
    position: absolute;
    font-size: 45px;
}

#GoodGrubInfo2 {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 2fr 1fr 1fr;
    margin-bottom: 20px;
}

#VideoBackground {
    background-image: url(@/assets/GoodGrubAssets/GG_BehanceFiles_V01-01.jpg);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 35vh;
}

@media screen and (max-width :600px) {
    #GoodGrubInfo {
        grid-template-columns: 1fr;
        margin: 0;
    }

    #GoodInfoTitle {
        text-align: center;
        font-size: calc(100% + 2vw);
    }

    #GoodSubInfo {
        font-size: calc(100% + 1.5vw);
        margin: 20px;
        text-align: center;
    }

    #GoodGrubInfo>div>img {
        width: 100%;
    }

    #desktopDisplay {
        display: none;
    }

    #mobileDisplay {
        display: grid;
        padding-bottom: 70px;
    }

    #mobileDisplay>img {
        width: 100%;
    }

    #BrandingDesign {
        grid-template-columns: 1fr;
    }

    #BrandingArticle {
        position: relative;
        top: 0;
        height: 100%;
        text-align: center;
        margin: 0;
        margin-bottom: 50px;
    }

    .articleTitle {
        font-size: calc(100% + 5vw);
        margin-bottom: 20px;
    }

    .fontScale {
        font-size: calc(100% + 1.5vw);
    }

    .smallScale {
        font-size: calc(100% + 1vw);
        margin-bottom: 7px;
    }

    .underline {
        font-family: 'NeueHaasUnicaPro-Black';
        font-size: calc(100% + 1vw);
    }
}
</style>