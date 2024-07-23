<template>
    <div id="pageBackground">
        <div id="VideoBackground">
            <span id="Center">
                <h1>Sunrise Sugaring</h1>
            </span>
        </div>
        <div id="SunriseInfo">
            <article>
                <h3 id="SunriseInfoTitle">SUNRISE SUGARING</h3>
                <p id="SunriseSubInfo">Founded on values of inclusivity and accessibility,
                    Sunrise Sugaring is a hair removal studio located
                    in East Vancouver. This eco-friendly hair removal
                    service uses 100% natural and organic
                    ingredients and prides itself on providing a safe
                    space for all.
                </p>
                <p id="SunriseSubInfo">
                    Founder Hilary came to me in need of branding
                    that conveys the calming and
                    community-focussed atmosphere she provides to
                    her clients. We worked collaboratively to create
                    unique branding that fits into her mission.</p>
            </article>
            <div>
                <img src="@/assets/SunriseSugaringAssets/MH_SunriseSugaringCaseStudy_Layout-03.jpg"
                    alt="picture of a black glove applying sugaring wax solution to the skin">
            </div>
        </div>
        <div id="SunriseInfo2">
            <div id="desktopDisplay">
                <img src="@/assets/SunriseSugaringAssets/MH_SunriseSugaringCaseStudy_Layout-04.jpg"
                    alt="four smooth legs in the air on a white backdrop">
            </div>
            <article>
                <h3 class="underline">DELIVERABLES</h3>
                <p class="smallScale">- Brand Identity Ideation & Design</p>
                <p class="smallScale">- Printed Collateral Design</p>
                <p class="smallScale">- Social Media Campaign Strategy & Design</p>
            </article>
            <article>
                <h3 class="underline">INDUSTRY</h3>
                <p class="smallScale">Services</p>
                <h3 class="underline">LOCATION</h3>
                <p class="smallScale">Vancouver,BC</p>
            </article>

        </div>
        <div id="mobileDisplay">
            <img src="@/assets/SunriseSugaringAssets/MH_SunriseSugaringCaseStudy_Layout-04.jpg"
                alt="four smooth legs in the air on a white backdrop">
        </div>
        <div class="blackLine"></div>
        <div id="BrandingDesign">
            <article id="BrandingArticle">
                <h1 class="articleTitle">Branding</h1>
                <p class="fontScale">Cohesive, simple, and playful while
                    maintaining professionalism. Sunrise
                    Sugaring's branding balances these
                    elements and ties into the character and
                    comfortabillity of the brand.</p>
            </article>
            <div id="BrandingImages">
                <img src="@/assets/SunriseSugaringAssets/MH_SunriseSugaringCaseStudy_Layout-06.jpg"
                    alt="close up photo of two peoples eyes and ">
                <img src="@/assets/SunriseSugaringAssets/SandwichBoardFront.png"
                    alt="close up photo of two peoples eyes and ">
                <img src="@/assets/SunriseSugaringAssets/MH_SunriseSugaringCaseStudy_Layout-05.jpg"
                    alt="close up photo of two peoples eyes and ">
                <img src="@/assets/SunriseSugaringAssets/Business_Card_Green.png"
                    alt="close up photo of two peoples eyes and ">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#SunriseInfo>article {
    width: 90%;
}

#SunriseSubInfo {
    padding-bottom: 15px;
}

#mobileDisplay {
    display: none;
}

.articleTitle {
    font-size: 35px;
    font-family: 'NeueHaasUnicaPro-Black';
}

#SunriseInfo>div {
    display: grid;
    justify-items: end;
    align-items: center;
}

#SunriseInfo>div>img {
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

#SunriseInfoTitle {
    text-decoration: underline;
    font-family: 'NeueHaasUnicaPro-Black';
}

#SunriseInfo {
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

#Sunrisetitle {
    font-family: 'NeueHaasUnicaPro-Black';
    color: #EAE5DE;
    position: absolute;
    font-size: 45px;
}

#SunriseInfo2 {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 2fr 1fr 1fr;
    margin-bottom: 20px;
}

#VideoBackground {
    background-image: url(@/assets/SunriseSugaringAssets/MH_SunriseSugaringCaseStudy_Layout-02.jpg);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 35vh;
}

@media screen and (max-width :600px) {
    #SunriseInfo {
        grid-template-columns: 1fr;
        margin: 0;
    }

    #GoodInfoTitle {
        text-align: center;
        font-size: calc(100% + 2vw);
    }

    #SunriseInfo {
        font-size: calc(100% + 1.5vw);
        margin: 20px;
        text-align: center;
    }

    #SunriseInfo>div>img {
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