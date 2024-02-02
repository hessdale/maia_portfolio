<template>
  <div>
    <nav-bar></nav-bar>
    <div id="about">
      <span id="who">
        <img src="../assets/AboutAssets/MaiaKid.jpg" alt="a young photo of Maia giving the peace sign" width="200px">
        <article>
          <h1 class="whiteFont">Whose kid is this?</h1>
          <p class="whiteFont">This kid is me, and she (many years later) will work
            with you to create process-driven, result-proven
            work. Raised in Vancouver, BC, this kid grew to be
            a designer and photographer with a big brain. Give
            her a brief, and she’ll run with it.</p>
        </article>
        <article>
          <h1 class="whiteFont">Not a Kid anymore.</h1>
          <p class="whiteFont">Today, this girl does it all! From photography to
            illustrations, she’s a star. Looking for a commercial
            photographer for your next project? Updated
            branding for your business? She’s got you covered.</p>
        </article>
        <img src="../assets/AboutAssets/MaiaAdult.jpg" alt="a recent headshot of Maia" width="200px">
      </span>
      <a id="email" href="mailto:headfieldmaia@gmail.com">headfieldmaia@gmail.com</a>
      <img src="../assets/AboutAssets/FloatingHeads.gif" alt="gif of floating heads of maia scrolling to the leaft">
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
}
</script>

<style scoped>
.whiteFont {
  color: #EAE5DE;
  text-align: start;
}

#about {
  background-color: #C72828;
  height: 100vh;
}

#who {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
  padding: 20px;
}

#email {
  text-decoration: none;
  color: #EAE5DE;
}
</style>