<template>
  <div>
    <div class="loader">
      <preloader/>
    </div>
    <div class="main">
      <navegation/>

      <welcome/>
      
      <AppTest/>

      <about/>
    </div>
  </div>
</template>
<script>
import preloader from '../components/preloader.vue'
import navegation from '../components/navegation.vue'
import welcome from '../components/welcome.vue'
import AppTest from '../components/AppTest.vue'
import about from '../components/about.vue'
export default {
  name: "AppHome",
  components: {
    preloader,
    navegation,
    welcome,
    AppTest,
    about
  },
  methods: {
    eventHandler() {
      const loader = document.querySelector('.loader');
      const main = document.querySelector('.main');

      function init() {
        setTimeout(() => {
          loader.style.opacity = 0;
          loader.style.display = "none";
          main.style.display = 'block';
          setTimeout(() => (main.style.opacity = 1), 50);
        }, 1250);
      }
      init();
    },
    generateTopBar() {
      window.addEventListener('load',this.eventHandler)
    }
  },
  mounted(){
    this.generateTopBar(true)
  }
}
</script>
<style scoped>
.main {
  opacity: 0;
  display: none;
  transition: opacity 1s ease-in;
}
</style>