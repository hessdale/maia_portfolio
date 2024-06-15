<template>
    <div id="pageBackground">

        <div id="VideoBackground">
            <span id="Center">
                <h1 id="Rubytitle">Blue Ruby Jewelry</h1>
            </span>
        </div>

        <div id="BlueRubyInfo">
            <article>
                <h3 id="RubyInfoTitle">BLUE RUBY JEWELRY</h3>
                <p id="RubySubInfo">For over 25 years, Blue Ruby Jewellery has been
                    providing Vancouver with the largest selection of
                    both locally and globally designed jewellery. With
                    10 locations in and around Vancouver, Blue Ruby
                    has solidified itself as a long-time supporter and
                    member of the community.
                </p>
                <p id="RubySubInfo">
                    I joined the Blue Ruby team during their first full
                    rebrand since inception. Seeking updated
                    imagery and packaging, I took a leading role in
                    collaboratively designing with the Blue Ruby team
                    to create modern solutions that resonated with
                    their history and future goals.</p>
            </article>
            <div>
                <img src="../assets/BlueRubyAssets/Photography/White_shirt.jpg"
                    alt="Woman wearing a red shirt and jewelry">
            </div>
        </div>


        <div id="BlueRubyInfo2">
            <div>
                <img src="../assets/BlueRubyAssets/Photography/2PplJewelry.jpeg" width="200vw">
            </div>
            <article>
                <h3 class="underline">DELIVERABLES</h3>
                <p>- Packaging Design</p>
                <p>- Lifestyle Photography</p>
                <p>- Product Photography</p>
                <p>- Content Creation + Strategy</p>
                <p>- Newsletter Campaigns</p>
                <p>- Campaign Art Direction</p>
            </article>
            <article>
                <h3 class="underline">INDUSTRY</h3>
                <p class="textCenter">Ecommerce + Retail</p>
                <h3 class="underline">LOCATION</h3>
                <p class="textCenter">Vancouver,BC</p>
                <h3 class="underline">WEBSITE</h3>
                <a id="link" target="_blank" href="http://blueruby.com">Visit Site</a>
            </article>
        </div>
        <div class="blackLine"></div>
        <div id="packagingDesign">
            <article id="packagingArticle">
                <h1 class="articleTitle">Packaging Design</h1>
                <p>Beautiful products deserve beautiful
                    packaging.For BlueRuby’s packaging, we
                    usedtheir signature navy to build a product
                    that feels luxurious but subduedenough to
                    accentuate thebeauty of each item.</p>
            </article>
            <div id="packagingImages">
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
        <div class="blackLine"></div>
        <div id="photography">
            <article id="photographyArticle">
                <h1 class="articleTitle">Photography</h1>
                <p>With such a broad selection of products,
                    imagesthat showcase stylinginspirationwere
                    crucialto show the infinite possibilities of Blue
                    Ruby’s unique andsubstantial selection.</p>
            </article>
            <div id="photographyImages">
                <img src="../assets/BlueRubyAssets/Photography/Friends.jpg"
                    alt="people with their arms around each other wearing blue ruby jewelry">
                <img src="../assets/BlueRubyAssets/Photography/Fruit_Bowl.jpg"
                    alt="hand grabbing at fruit in a fruit bowl wearing blue ruby jewelry">
                <img src="../assets/BlueRubyAssets/Photography/Purple_Shirt.jpg"
                    alt="woman wearing a purple shirt wearing multiple bracelets and necklaces from blue ruby jewelry">
                <img src="../assets/BlueRubyAssets/Photography/Gold_Chains.jpg"
                    alt="woman wearing a black cardigan and gold chains from blue ruby jewelry">
                <img src="../assets/BlueRubyAssets/Photography/Red_Shirt.jpg"
                    alt="woman wearing a red shirt and wearing multiple necklaces and rings from blue ruby jewelry ">
                <img src="../assets/BlueRubyAssets/Photography/Popping_Bubbles.jpg"
                    alt="small child popping bubbles and woman behind her is wearing blue ruby jewelry">
            </div>
        </div>
        <div class="blackLine"></div>
        <div id="videos">
            <article id="videosArticle">
                <h1 class="articleTitle">Videos</h1>
                <p>For web bannersand social media use, video
                    served as a powerful medium to showcase not
                    only the products, but the story being told by
                    seasonal collectionsand edits.</p>
            </article>
            <div id="videosContent">
                <img src="../assets/BlueRubyAssets/Videos/Essentials_Banner.gif"
                    alt="placeholder gifs for styling waiting on client response for videos">
                <img src="../assets/BlueRubyAssets/Videos/Essentials_Banner.gif" alt="">
                <img src="../assets/BlueRubyAssets/Videos/Essentials_Banner.gif" alt="">
                <img src="../assets/BlueRubyAssets/Videos/Essentials_Banner.gif" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.articleTitle {
    font-size: 35px;
    font-family: 'NeueHaasUnicaPro-Black';
}

#BlueRubyInfo>div {
    display: grid;
    justify-items: center;
    align-items: center;
}

#BlueRubyInfo>div>img {
    width: 80%;
}

#videos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
}

#videosArticle {
    position: sticky;
    top: 150px;
    height: 300px;
    margin: 8%;
}

#videosContent>img {
    width: 80%;
}

#photographyArticle {
    position: sticky;
    top: 150px;
    height: 300px;
    margin: 8%;
}

#photography {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
}

#photographyImages>img {
    width: 80%;
}

#packagingArticle {
    position: sticky;
    top: 150px;
    height: 300px;
    margin: 8%;
}

#packagingDesign {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
}

#packagingImages>img {
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

#BlueRubyInfo2 {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 20px;
}

#RubyInfoTitle {
    text-decoration: underline;
    font-family: 'NeueHaasUnicaPro-Black';
}

#BlueRubyInfo {
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

#Rubytitle {
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
    #BlueRubyInfo {
        grid-template-columns: 1fr;
    }

    #RubyInfoTitle {
        text-align: center;
        font-size: calc(100% + 2vw);
    }

    #RubySubInfo {
        font-size: calc(100% + 1.5vw);
        margin: 20px;
        text-align: center;
    }

    #BlueRubyInfo>div>img {
        width: 100%;
    }
}
</style>