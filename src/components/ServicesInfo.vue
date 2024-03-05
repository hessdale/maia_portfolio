<template>
    <div id="pageBackground">
        <div id="doBackground">
            <div id="textBackground">
                <h1 id="center">What I do.</h1>
            </div>
        </div>
        <article>
            <div>
                <h1>Creative Design</h1>
                <p>We really are visual creatures. In my design process, I work
                    collaboratively with clients to make the journey as
                    memorable as the destination. Consistency is key, and as a
                    detail-oriented creator, I ensure that each project fits the
                    client’s vision and brand.
                    I can do...
                    Brand Identity
                    Apparel Design
                    Packaging Design
                    Iconography
                    Brochure/Program Design
                    Printed Collateral</p>
            </div>
            <div>
                <img src="../assets/ServicesAssets/ChalkSign.jpg"
                    alt="Chalk sign designed and reading eco friendly hair removal this way" width="30%">
            </div>
        </article>
        <article>
            <div>
                <img src="../assets/ServicesAssets/JewelryModel.jpg" alt="model wearing jewelry from blue ruby" width="30%">
            </div>
            <div>
                <h1>Commercial + Creative Photography</h1>
                <p>Powerful and unique imagery is a crucial component of any
                    business. With a collaborative approach, I’ll create on-brand,
                    top notch photos that will help your brand grow. From
                    moodboarding to revisions, I aim to exceed expectations
                    every time.
                    I can do...
                    Fashion
                    Corporate
                    Food
                    Editorials
                    Styled Products
                    E-Commerce Products</p>
            </div>
        </article>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#textBackground {
    background-color: #EAE5DE;
    width: 300px;
    height: 200px;
}

#pageBackground {
    background-color: #C72828;
}

#center {
    text-align: center;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-top: 15vh;
    font-family: 'NeueHaasUnicaPro-Black';
    color: #C72828;
    font-size: 45px;
}

#doBackground {
    background-image: url(@/assets/ServicesAssets/ServicesHeader.gif);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 35vh;
}
</style>