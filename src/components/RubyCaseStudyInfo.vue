<template>
    <div>
    
        <div id="VideoBackground">
            <span id="Center">
                <h1 id="Rubytitle">Blue Ruby Jewelry</h1>
            </span>
        </div>
        <span>
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
                    <img src="../assets/BlueRubyAssets/Photography/Red_Shirt.jpg"
                        alt="Woman wearing a red shirt and jewelry" width="200vw">
                </div>
            </div>
        </span>
        <span>
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
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.underline {
    text-decoration: underline;
    text-align:center;
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
}
</style>