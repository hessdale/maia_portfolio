<template>
    <div>
        <div id="parent">
            <img id="background" src="../assets/FridgeBackground.png" alt="" srcset="">
            <img @click="openFridge()" id="openFridge" src="../assets/FridgeOpen.png"
                alt="fridge open with icons to click in it" width="600px">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openFridge() {

        }
    },
}
</script>

<style scoped>
#parent {
    position: relative;
}

#background {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
}

#openFridge {
    position: absolute;
    width: 40%;
    top: 21%;
    left: 35.5%;
    display: none;
}
</style>