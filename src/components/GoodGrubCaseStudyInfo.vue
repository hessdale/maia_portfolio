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
                <img src="../assets/BlueRubyAssets/Photography/White_shirt.jpg" alt="placeholder">
            </div>
        </div>
        <div id="GoodGrubInfo2">
            <div id="desktopDisplay">
                <img src="../assets/BlueRubyAssets/Photography/2PplJewelry.jpeg" alt="placeholder">
            </div>
            <article>
                <h3 class="underline">DELIVERABLES</h3>
                <p class="smallScale">- Packaging Design</p>
                <p class="smallScale">- Lifestyle Photography</p>
                <p class="smallScale">- Product Photography</p>
                <p class="smallScale">- Content Creation + Strategy</p>
                <p class="smallScale">- Newsletter Campaigns</p>
                <p class="smallScale">- Campaign Art Direction</p>
            </article>
            <article>
                <h3 class="underline">INDUSTRY</h3>
                <p class="smallScale">Ecommerce + Retail</p>
                <h3 class="underline">LOCATION</h3>
                <p class="smallScale">Vancouver,BC</p>
                <h3 class="underline">WEBSITE</h3>
                <a id="link" target="_blank" href="http://blueruby.com">Change link to good grub</a>
            </article>

        </div>
        <div id="mobileDisplay">
            <img src="../assets/BlueRubyAssets/Photography/2PplJewelry.jpeg" alt="placeholder">
        </div>
        <div class="blackLine"></div>
        <div id="BrandingDesign">
            <article id="BrandingArticle">
                <h1 class="articleTitle">Packaging Design</h1>
                <p class="fontScale">Beautiful products deserve beautiful
                    packaging.For BlueRuby’s packaging, we
                    usedtheir signature navy to build a product
                    that feels luxurious but subduedenough to
                    accentuate thebeauty of each item.</p>
            </article>
            <div id="BrandingImages">
                <img src="../assets/BlueRubyAssets/Packaging Designs/JewelleryPackagingDesign_Photography.jpg"
                    alt="floating jewelry boxes and jewlery bags with the words blue ruby embossed on them">
                <img src="../assets/BlueRubyAssets/Packaging Designs/Jewellery-Box-Bag-and-Gift-Card.jpg"
                    alt="blue ruby jewelry packaging floating with a gift card coming out of the jewelry bag">
                <img src="../assets/BlueRubyAssets/Packaging Designs/Birthstone-Info-Cards-Mockup.jpg"
                    alt="cards with embossed birthstones name and card matching the color">
                <img src="../assets/BlueRubyAssets/Packaging Designs/Custom-Wrapping-Paper-With-Brand-Icons.jpg"
                    alt="wrapping paper with brand icons">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
#mobileDisplay {
    display: none;
}

.articleTitle {
    font-size: 35px;
    font-family: 'NeueHaasUnicaPro-Black';
}

#GoodGrubInfo>div {
    display: grid;
    justify-items: center;
    align-items: center;
}

#GoodGrubInfo>div>img {
    width: 80%;
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

#BrandingImages>img {
    width: 80%;
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
    padding-top: 20px;
    text-align: start;
    justify-items: center;
    margin: 5%;
}


#Center {
    text-align: center;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-top: 15vh;
}

#Grubtitle {
    font-family: 'NeueHaasUnicaPro-Black';
    color: #EAE5DE;
    position: absolute;
    font-size: 45px;
}

#VideoBackground {
    background-image: url(@/assets/BlueRubyAssets/Videos/Essentials_Banner.gif);
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

    #BrandingImages>img {
        width: 100%;
        margin-bottom: 25px;
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