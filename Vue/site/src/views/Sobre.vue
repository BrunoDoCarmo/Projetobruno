<template>
  <div class="sobre">
    <AppPreloader/>
    <AppTopNavegation/>
    <!-- <AppWelcome/> -->
  </div>
</template>
<script>
import AppPreloader from '../components/AppPreloader.vue'
import AppTopNavegation from '../components/AppTopNavegation.vue'
// import AppWelcome from '../components/AppWelcome.vue'
export default {
  name: "AppSobre",
  components: {
    AppPreloader,
    AppTopNavegation,
    // AppWelcome
  }
}
</script>