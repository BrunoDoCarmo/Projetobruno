<template>
  <div>
    <div class="loader">
      <AppPreloader/>
    </div>
    <div class="main">
      <AppTopNavegation/>

      <AppWelcome/>
    </div>
  </div>
</template>
<script>
import AppPreloader from '../components/AppPreloader.vue'
import AppTopNavegation from '../components/AppTopNavegation.vue'
import AppWelcome from '../components/AppWelcome.vue'
export default {
  name: "AppHome",
  components: {
    AppPreloader,
    AppTopNavegation,
    AppWelcome
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