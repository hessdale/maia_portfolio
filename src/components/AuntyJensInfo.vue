<template>
    <div>
        <div id="pizzaBackground">
            <div id="center">
                <h1 id="auntyTitle">Aunty Jens Pizzeria</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#pizzaBackground {
    background-image: url(@/assets/AuntyJensAssets/HandsGrabbingPizza.jpg);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 35vh;
}

#auntyTitle {
    font-family: 'NeueHaasUnicaPro-Black';
    color: #EAE5DE;
    position: absolute;
    font-size: 40px;
    text-align: center;
}

#center {
    text-align: center;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-top: 15vh;
}
</style>