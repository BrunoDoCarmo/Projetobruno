<template>
  <div class="contato">
    <AppPreloader/>
    <AppTopNavegation/>
    <AppWelcome/>
  </div>
</template>
<script>
import AppPreloader from '../components/preloader.vue'
import AppTopNavegation from '../components/navegation.vue'
import AppWelcome from '../components/welcome.vue'
export default {
  name: "AppContato",
  components: {
    AppPreloader,
    AppTopNavegation,
    AppWelcome
  }
}
</script>