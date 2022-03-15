<template>
  <div>
    <AppNavegation/>

    <AppAbout/>
  </div>
</template>
<script>
  import AppAbout from '../components/AppAbout.vue'
  export default {
    name: "AppAbout",
    components: {
      AppAbout
    }
  }
</script>
<style scoped>
</style>