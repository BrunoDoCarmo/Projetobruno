<template>
  <div id="app">
    <div class="loader">
      <AppPreloader/>
    </div>
    <div class="main">
      <AppHome/>
    </div>
  </div>
</template>
<script>
  import AppPreloader from './components/AppPreloader.vue'
  import AppHome from './views/Home.vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-icons/font/bootstrap-icons.css'
  import 'bootstrap/dist/js/bootstrap.js'
  // import 'font-awesome/css/font-awesome.css'
  import './App.css'
  export default {
    name: 'App',
    components: {
      AppPreloader,
      AppHome
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
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.main {
  opacity: 0;
  display: none;
  transition: opacity 1s ease-in;
}
</style>