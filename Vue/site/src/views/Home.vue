<template>
  <div class="home">
    <AppPreloader/>
    <AppTopNavegation/>
    <AppWelcome/>
    <AppTest/>
  </div>
</template>
<script>
import AppPreloader from '../components/AppPreloader.vue'
import AppTopNavegation from '../components/AppTopNavegation.vue'
import AppWelcome from '../components/AppWelcome.vue'
import AppTest from '../components/AppTest.vue'
export default {
  name: "AppHome",
  components: {
    AppPreloader,
    AppTopNavegation,
    AppWelcome,
    AppTest,
  }
}
</script>