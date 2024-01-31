<template>
    <div>
        <div id="parent">
            <img @click="openFridge()" id="background" src="../assets/FridgeBackground.png" alt="" srcset="">
            <img @click="openFridgeMobile()" id="mobileBackground" src="../assets/FridgeOpen.png" alt="">
            <img @click="closeFridge()" id="openFridge" src="../assets/FridgeOpen.png"
                alt="fridge open with icons to click in it" width="600px">
            <router-link to="/contact">
                <img class="icon" id="milk" src="../assets/ContactMilk.png"
                    alt="icon of milk labeled contact"></router-link>
            <router-link to="/case-study">
                <img class="icon" id="yogurt" src="../assets/CaseStudyYogurt.png" alt="icon of yogurt labeled case study">
            </router-link>
            <router-link to="/photos">
                <img class="icon" id="pickles" src="../assets/PhotosPickels.png" alt="icon of pickles labeled photos">
            </router-link>
            <router-link to="/case-study">
                <img class="icon" id="oj" src="../assets/CaseStudyOJ.png" alt="icon of orange juice labeled case study">
            </router-link>
            <router-link to="/about">
                <img class="icon" id="sardines" src="../assets/AboutMeSardines.png" alt="icon of sardines labeled about me">
            </router-link>
            <router-link to="/portraits">
                <img class="icon" id="film" src="../assets/PortraitsFilm.png" alt="icon of a film roll labeled portraits">
            </router-link>
            <router-link to="/services">
                <img class="icon" id="butter" src="../assets/ServicesButter.png"
                    alt="icon of butter stick labeled services">
            </router-link>
            <router-link to="/design">
                <img class="icon" id="mayo" src="../assets/DesignMayo.png" alt="icon of mayo labeled design">
            </router-link>
            <router-link to="/case-study">
                <img class="icon" id="wine" src="../assets/CaseStudyWine.png" alt="icon of wine bottle labeled case study">
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
#milk {
    top: 38%;
    left: 43%;
    width: 5%;
    display: none;
    transition: transform .2s;
}

#milk:hover {
    transform: scale(1.2);
}

#yogurt {
    top: 35.9%;
    left: 50%;
    width: 5%;
    display: none;
    transition: transform .2s;
}

#yogurt:hover {
    transform: scale(1.2);
}

#pickles {
    top: 48.4%;
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
        position: relative;
        display: grid;
        width: 100%;
        top: 30%;
    }

    #parent {
        height: 100%;
    }

    #openFridge {
        width: 100%;
        left: 0;
    }

    #milk {
        top: 44%;
        left: 19%;
        width: 10%;
    }

    #yogurt {
        top: 40.6%;
        left: 37%;
        width: 11%;
    }

    #pickles {
        top: 54.3%;
        left: 30%;
        width: 8%;
    }

    #oj {
        top: 50.3%;
        left: 61%;
        width: 8%;
    }

    #sardines {
        top: 75.5%;
        left: 15%;
        width: 12%;
    }

    #film {
        top: 74.3%;
        left: 40%;
        width: 8%;
    }

    #butter {
        top: 90%;
        left: 20%;
        width: 12%;
    }

    #mayo {
        top: 82%;
        left: 57%;
        width: 8%;
    }

    #wine {
        top: 73%;
        left: 64%;
        width: 8%;
    }
}
</style>