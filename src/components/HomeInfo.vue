<template>
    <div>
        <div id="parent">
            <img @click="openFridge()" id="background" src="../assets/FridgeBackground.png" alt="" srcset="">
            <img @click="closeFridge()" id="openFridge" src="../assets/FridgeOpen.png"
                alt="fridge open with icons to click in it" width="600px">
            <img @hover="enlargeIcon('milk')" class="icon" id="milk" src="../assets/ContactMilk.png"
                alt="icon of milk labeled contact">
            <img class="icon" id="yogurt" src="../assets/CaseStudyYogurt.png" alt="icon of yogurt labeled case study">
            <img class="icon" id="pickles" src="../assets/PhotosPickels.png" alt="icon of pickles labeled photos">
            <img class="icon" id="oj" src="../assets/CaseStudyOJ.png" alt="icon of orange juice labeled case study">
            <img class="icon" id="sardines" src="../assets/AboutMeSardines.png" alt="icon of sardines labeled about me">
            <img class="icon" id="film" src="../assets/PortraitsFilm.png" alt="icon of a film roll labeled portraits">
            <img class="icon" id="butter" src="../assets/ServicesButter.png" alt="icon of butter stick labeled services">
            <img class="icon" id="mayo" src="../assets/DesignMayo.png" alt="icon of mayo labeled design">
            <img class="icon" id="wine" src="../assets/CaseStudyWine.png" alt="icon of wine bottle labeled case study">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        enlargeIcon(name) {
            currentWidth = document.getElementById(name).style.width
            document.getElementById(name).style.width = currentWidth + 2
        },
        openFridge() {
            document.getElementById("openFridge").style.display = 'block'
            document.getElementById("milk").style.display = 'block'
            document.getElementById("yogurt").style.display = 'block'
            document.getElementById("pickles").style.display = 'block'
            document.getElementById("oj").style.display = 'block'
            document.getElementById("sardines").style.display = 'block'
            document.getElementById("film").style.display = 'block'
            document.getElementById("butter").style.display = 'block'
            document.getElementById("mayo").style.display = 'block'
            document.getElementById("wine").style.display = 'block'
        },
        closeFridge() {
            document.getElementById("openFridge").style.display = 'none'
            document.getElementById("milk").style.display = 'none'
            document.getElementById("yogurt").style.display = 'none'
            document.getElementById("pickles").style.display = 'none'
            document.getElementById("oj").style.display = 'none'
            document.getElementById("sardines").style.display = 'none'
            document.getElementById("film").style.display = 'none'
            document.getElementById("butter").style.display = 'none'
            document.getElementById("mayo").style.display = 'none'
            document.getElementById("wine").style.display = 'none'
        }
    },
}
</script>

<style scoped>
#milk {
    top: 37.5%;
    left: 43%;
    width: 5%;
    display: none;
}

#yogurt {
    top: 35.5%;
    left: 50%;
    width: 5%;
    display: none;
}

#pickles {
    top: 48%;
    left: 47%;
    width: 3.7%;
    display: none;
}

#oj {
    top: 44.7%;
    left: 60.5%;
    width: 3.5%;
    display: none;
}

#sardines {
    top: 67%;
    left: 43%;
    width: 5%;
    display: none;
}

#film {
    top: 64%;
    left: 50%;
    width: 5%;
    display: none;
}

#butter {
    top: 79%;
    left: 43%;
    width: 6%;
    display: none;
}

#mayo {
    top: 74%;
    left: 59%;
    width: 3%;
    display: none;
}

#wine {
    top: 66.7%;
    left: 61.5%;
    width: 3%;
    display: none;
}

.icon {
    position: absolute;
}

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