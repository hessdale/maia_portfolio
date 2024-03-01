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
                <p>For over 25 years, Blue Ruby Jewellery has been
                    providing Vancouver with the largest selection of
                    both locally and globally designed jewellery. With
                    10 locations in and around Vancouver, Blue Ruby
                    has solidified itself as a long-time supporter and
                    member of the community.
                    I joined the Blue Ruby team during their first full
                    rebrand since inception. Seeking updated
                    imagery and packaging, I took a leading role in
                    collaboratively designing with the Blue Ruby team
                    to create modern solutions that resonated with
                    their history and future goals.</p>
            </article>
            <div>
                <img src="../assets/BlueRubyAssets/Photography/Red_Shirt.jpg" alt="Woman wearing a red shirt and jewelry"
                    width="200vw">
            </div>
        </div>


        <div id="BlueRubyInfo2">
            <div>
                <img src="../assets/BlueRubyAssets/Photography/Red_Shirt.jpg" width="200vw">
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
                <p>Ecommerce + Retail</p>
                <h3 class="underline">LOCATION</h3>
                <p>Vancouver,BC</p>
                <h3 class="underline">WEBSITE</h3>
                <a target="_blank" href="http://blueruby.com">Visit Site</a>
            </article>
        </div>
        <div class="blackLine"></div>
        <div id="packagingDesign">
            <article>
                <h1>Packaging Design</h1>
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
            <article>
                <h1>Photography</h1>
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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#photography {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
}

#photographyImages>img {
    width: 80%;
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

.underline {
    text-decoration: underline;
    text-align: center;
}

#BlueRubyInfo2 {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
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
}</style>