<template>
  <div class="parceiros">
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
  name: "AppParceiros",
  components: {
    AppPreloader,
    AppTopNavegation,
    AppWelcome
  }
}
</script>