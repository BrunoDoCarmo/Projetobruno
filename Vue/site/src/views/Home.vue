<template>
  <div>
      <AppNavegation/>

      <AppWelcome/>
      
      <AppProgramInfo/>
  </div>
</template>
<script>
  import AppNavegation from '../components/AppNavegation.vue'
  import AppWelcome from '../components/AppWelcome.vue'
  import AppProgramInfo from '../components/AppProgramInfo.vue'
  export default {
    name: "AppHome",
    components: {
      AppNavegation,
      AppWelcome,
      AppProgramInfo
    }
  }
</script>
<style scoped>
</style>