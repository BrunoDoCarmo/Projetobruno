<template>
  <div class="home">
    <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
    <!-- <AppPreloader/> -->

    <AppTopNavegation/>
  </div>
</template>
<script>
// import loader from "vue-ui-preloader";
import AppTopNavegation from '../components/AppTopNavegation.vue'
// import AppPreloader from '../components/AppPreloader.vue'
// Vue.use(loader);
export default {
  name: "AppHome",
  components: {
    AppTopNavegation,
    // AppPreloader
  }
}
</script>
