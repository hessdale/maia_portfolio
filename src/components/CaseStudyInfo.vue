<template>
    <div>
        <div id="VideoBackground">
            <span id="Center">
                <h1 id="Rubytitle">Blue Ruby Jewelry</h1>
            </span>
        </div>
        <span>
            <div>
                <article>
                    <h3>BLUE RUBY JEWELRY</h3>
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
            </div>
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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