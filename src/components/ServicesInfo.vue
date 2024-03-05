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
            <article>
                <h1 class="title">Creative Design</h1>
                <p>We really are visual creatures. In my design process, I work
                    collaboratively with clients to make the journey as
                    memorable as the destination. Consistency is key, and as a
                    detail-oriented creator, I ensure that each project fits the
                    client’s vision and brand.</p>
                <div id="creativeInfo">
                    <div>
                        <p>I can do...</p>
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
                <img src="../assets/ServicesAssets/ChalkSign.jpg"
                    alt="Chalk sign designed and reading eco friendly hair removal this way">
            </div>
        </div>


        <div id="commercial">
            <div>
                <img src="../assets/ServicesAssets/JewelryModel.jpg" alt="model wearing jewelry from blue ruby" width="80%">
            </div>
            <article>
                <h1 class="title">Commercial + Creative Photography</h1>
                <p>Powerful and unique imagery is a crucial component of any
                    business. With a collaborative approach, I’ll create on-brand,
                    top notch photos that will help your brand grow. From
                    moodboarding to revisions, I aim to exceed expectations
                    every time.</p>
                <div id="commercialInfo">
                    <div>
                        <p>I can do...</p>
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
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#commercialInfo {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
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

#chalkboardImg>img {
    width: 80%;
}

#creativeDesign {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
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
    width: 300px;
    height: 20%;
}

#pageBackground {
    background-color: #C72828;
}

#center {
    text-align: center;
    font-family: 'NeueHaasUnicaPro-Black';
    color: #C72828;
    font-size: 45px;
}

#doBackground {
    background-image: url(@/assets/ServicesAssets/ServicesHeader.gif);
    width: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 35vh;
    display: grid;
    justify-items: center;
    align-items: center;
}
</style>