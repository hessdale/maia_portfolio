<template>
    <div id="page">
        <div id="parent">
            <img @click="openFridge()" id="background" src="../assets/HomeAssets/FridgeBackground.png"
                alt="background of a kitchen with washer and a fridge with a sign above saying click to open my fridge">
            <img @click="openFridgeMobile()" id="mobileBackground" src="../assets/HomeAssets/FridgeMobileBackground.png"
                alt="closed fridge icon with no kitchen surrounding it for mobile view">
            <img @click="closeFridge()" id="openFridge" src="../assets/HomeAssets/FridgeOpen.png"
                alt="fridge open with icons in it and icons directing to pages">
            <router-link to="/contact">
                <img class="icon" id="milk" src="../assets/HomeAssets/ContactMilk.png"
                    alt="icon of milk labeled contact"></router-link>
            <router-link to="/case-study">
                <img class="icon" id="yogurt" src="../assets/HomeAssets/CaseStudyYogurt.png"
                    alt="icon of yogurt labeled case study">
            </router-link>
            <router-link to="/photos">
                <img class="icon" id="pickles" src="../assets/HomeAssets/PhotosPickels.png"
                    alt="icon of pickles labeled photos">
            </router-link>
            <router-link to="/case-study">
                <img class="icon" id="oj" src="../assets/HomeAssets/CaseStudyOJ.png"
                    alt="icon of orange juice labeled case study">
            </router-link>
            <router-link to="/about">
                <img class="icon" id="sardines" src="../assets/HomeAssets/AboutMeSardines.png"
                    alt="icon of sardines labeled about me">
            </router-link>
            <router-link to="/portraits">
                <img class="icon" id="film" src="../assets/HomeAssets/PortraitsFilm.png"
                    alt="icon of a film roll labeled portraits">
            </router-link>
            <router-link to="/services">
                <img class="icon" id="butter" src="../assets/HomeAssets/ServicesButter.png"
                    alt="icon of butter stick labeled services">
            </router-link>
            <router-link to="/design">
                <img class="icon" id="mayo" src="../assets/HomeAssets/DesignMayo.png" alt="icon of mayo labeled design">
            </router-link>
            <router-link to="/case-study">
                <img class="icon" id="wine" src="../assets/HomeAssets/CaseStudyWine.png"
                    alt="icon of wine bottle labeled case study">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openFridgeMobile() {
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
#page{
    background-color: #EADDA7;
    height: 100vh;
}
#milk {
    top: 38.7%;
    left: 43%;
    width: 5%;
    display: none;
    transition: transform .2s;
}

#milk:hover {
    transform: scale(1.2);
}

#yogurt {
    top: 36.5%;
    left: 50%;
    width: 5%;
    display: none;
    transition: transform .2s;
}

#yogurt:hover {
    transform: scale(1.2);
}

#pickles {
    top: 48%;
    left: 47%;
    width: 3.7%;
    display: none;
    transition: transform .2s;
}

#pickles:hover {
    transform: scale(1.2);
}

#oj {
    top: 45.2%;
    left: 60.5%;
    width: 3.5%;
    display: none;
    transition: transform .2s;
}

#oj:hover {
    transform: scale(1.2);
}

#sardines {
    top: 67.3%;
    left: 43%;
    width: 5%;
    display: none;
    transition: transform .2s;
}

#sardines:hover {
    transform: scale(1.2);
}

#film {
    top: 64.3%;
    left: 50%;
    width: 5%;
    display: none;
    transition: transform .2s;
}

#film:hover {
    transform: scale(1.2);
}

#butter {
    top: 79.3%;
    left: 43%;
    width: 6%;
    display: none;
    transition: transform .2s;
}

#butter:hover {
    transform: scale(1.2);
}

#mayo {
    top: 74.3%;
    left: 59%;
    width: 3%;
    display: none;
    transition: transform .2s;
}

#mayo:hover {
    transform: scale(1.2);
}

#wine {
    top: 67.37%;
    left: 61.5%;
    width: 3%;
    display: none;
    transition: transform .2s;
}

#wine:hover {
    transform: scale(1.2);
}

.icon {
    position: absolute;
}

#parent {
    position: relative;
    background-color: #EADDA7;
}

#background {
    position: relative;
    width: 100%;
    top: 12%;
}

#openFridge {
    position: absolute;
    width: 40%;
    top: 21.7%;
    left: 35.5%;
    display: none;
}

#mobileBackground {
    display: none;
    width: 100%;
}

@media only screen and (max-width: 600px) {
    #background {
        display: none;
    }

    #mobileBackground {
        display: grid;
        position: relative;
        top: 4vh;
        left: 5.7%;
        width: 90%;
    }

    #openFridge {
        display: grid;
        position: absolute;
        top: 3vh;
        left: 0;
        width: 100%;
    }

    #parent {
        height: 100%;
    }

    #milk {
        top: 10%;
        left: 16%;
        width: 10%;
    }

    #yogurt {
        top: 9%;
        left: 35%;
        width: 11%;
    }

    #pickles {
        top: 13.4%;
        left: 27%;
        width: 8%;
    }

    #oj {
        top: 12.2%;
        left: 62%;
        width: 8%;
    }

    #sardines {
        top: 20.2%;
        left: 14.5%;
        width: 12%;
    }

    #film {
        top: 20%;
        left: 35%;
        width: 8%;
    }

    #butter {
        top: 25%;
        left: 14%;
        width: 12%;
    }

    #mayo {
        top: 23%;
        left: 57%;
        width: 7%;
    }

    #wine {
        top: 20.6%;
        left: 65%;
        width: 7%;
    }
}
</style>