<template>
    <div>
        <div id="background">
            <img id="openFridge" src="../assets/FridgeOpen.png" alt="fridge open with icons to click in it">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#background {
    width: 100%;
    background-size: cover;
    background-image: url(@/assets/FridgeBackground.png);
    display: grid;
}

#openFridge {
    width: 50%;
    position: relative;
    /* display: none; */
}
</style>