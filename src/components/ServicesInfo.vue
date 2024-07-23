<template>
    <div id="pageBackground">
        <div id="centerBackground">
            <div id="doBackground">
                <div id="textBackground">
                    <h1 id="center">What I do.</h1>
                </div>
            </div>
        </div>

        <div id="creativeDesign">
            <article id="creativeDesignInfo">
                <h1 class="title">Creative Design</h1>
                <p>We really are visual creatures. In my design process, I work
                    collaboratively with clients to make the journey as
                    memorable as the destination. Consistency is key, and as a
                    detail-oriented creator, I ensure that each project fits the
                    client's vision and brand.</p>
                <div id="canDo">
                    <p>I can do...</p>
                </div>
                <div id="creativeInfo">

                    <div>
                        <p>Brand Identity</p>
                        <p>Apparel Design</p>
                        <p>Packaging Design</p>
                    </div>
                    <div>
                        <p>Iconography</p>
                        <p>Brochure/Program Design</p>
                        <p>Printed Collateral</p>
                    </div>
                </div>
            </article>

            <div id="chalkboardImg">
                <img src="@/assets/ServicesAssets/ChalkSign.jpg"
                    alt="Chalk sign designed and reading eco friendly hair removal this way">
            </div>
        </div>

        <div id="commercial">
            <div id="commercialImg"><img src="@/assets/ServicesAssets/JewelryModel.jpg"
                    alt="model wearing jewelry from blue ruby">
            </div>
            <article id="commercialArticle">
                <h1 class="title">Commercial & Creative Design</h1>
                <p>Powerful and unique imagery is a crucial component of any
                    business. With a collaborative approach, I'll create on-brand,
                    top notch photos that will help your brand grow. From
                    moodboarding to revisions, I aim to exceed expectations
                    every time.</p>
                <div id="canDo">
                    <p>I can do...</p>
                </div>
                <div id="commercialInfo">
                    <div>
                        <p>Fashion</p>
                        <p>Corporate</p>
                        <p>Food</p>
                    </div>
                    <div>
                        <p>Editorials</p>
                        <p>Styled Products</p>
                        <p>E-commerce Products</p>
                    </div>
                </div>
            </article>
            <div id="commercialImgMobile"><img src="@/assets/ServicesAssets/JewelryModel.jpg"
                    alt="model wearing jewelry from blue ruby">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#commercialImg {
    display: grid;
    justify-items: center;
    align-items: center;
}

#commercialImg>img {
    width: 80%;
}

#canDo {
    padding-top: 10px;
    padding-bottom: 10px;
}

#commercialInfo {
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 30px;
}

#commercial {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
}

.title {
    font-family: 'NeueHaasUnicaPro-Black';
    font-size: 35px;
}

#chalkboardImg {
    display: grid;
    align-items: center;
    justify-items: center;
}

#chalkboardImg>img {
    width: 80%;
}

#creativeDesignInfo {
    margin: 20px;
}

#creativeDesign {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 30px;
}

#creativeInfo {
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 1fr 1fr;
}

#centerBackground {
    display: grid;
    justify-items: center;
    align-items: center;
    padding-top: 30px;
}

p,
h1 {
    color: #EAE5DE;
}

#textBackground {
    background-color: #EAE5DE;
    width: 220px;
    height: 70px;
    display: grid;
    align-items: center;
    justify-items: center;
}

#pageBackground {
    background-color: #C72828;
}

#center {
    text-align: center;
    font-family: 'NeueHaasUnicaPro-Black';
    color: #C72828;
    font-size: 32px;

}

#doBackground {
    background-image: url(@/assets/ServicesAssets/ServicesHeader.gif);
    width: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 30vh;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 20px;
}

#commercialImgMobile {
    display: none;
}

@media screen and (max-width :600px) {
    #doBackground {
        width: 100%;
    }

    #creativeDesign {
        grid-template-columns: 1fr;
        padding: 0;
        margin-bottom: 20px;
    }

    #chalkboardImg>img {
        width: 100%;
    }

    #commercialImg {
        display: none;
    }

    #commercial {
        grid-template-columns: 1fr;
    }

    #commercialImgMobile {
        display: grid;
    }

    #commercialImgMobile>img {
        width: 100%;
    }

    #commercialArticle>p {
        text-align: center;
        font-size: calc(100% + 1.2vw);
        margin: 4%;
    }

    #commercialArticle>h1 {
        text-align: center;
        font-size: calc(100% + 5vw);
        margin: 2%;
    }

    #canDo>p {
        font-size: calc(100% + 1.2vw);
    }

    #commercialInfo>div>p {
        font-size: calc(100% + 1.2vw);
    }

    #commercialArticle>div {
        margin-left: 5%;
        margin-right: 5%;
    }
}
</style>