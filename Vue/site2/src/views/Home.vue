<template>
  <AppNavegation/>

  <AppWelcome/>

  <AppProgramInfo/>

  <AppSpace/>

  <AppMaps/>

  <AppFooter/>
</template>
<script>
  import AppNavegation from '../components/AppNavegation.vue'
  import AppWelcome from '../components/home/AppWelcome.vue'
  import AppProgramInfo from '../components/home/AppProgramInfo.vue'
  import AppSpace from '../components/home/AppSpace.vue'
  import AppMaps from '../components/home/AppMaps.vue'
  import AppFooter from '../components/AppFooter.vue'
  export default {
    name: "AppHome",
    components: {
      AppNavegation,
      AppWelcome,
      AppProgramInfo,
      AppSpace,
      AppMaps,
      AppFooter
    }
  }
</script>
<style scoped>
</style>