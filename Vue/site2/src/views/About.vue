<template>
  <div class="about">
    <AppNavegation/>

    <AppAbout/>
  </div>
</template>
<script>
  import AppNavegation from '../components/AppNavegation.vue'
  import AppAbout from '../components/about/AppAbout.vue'
  export default {
    name: "AppAbout",
    components: {
      AppNavegation,
      AppAbout
    }
  }
</script>
<style scoped>
</style>