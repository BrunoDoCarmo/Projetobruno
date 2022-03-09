<template>
  <div class="area_do_cliente">
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
  name: "AppArea_do_Cliente",
  components: {
    AppPreloader,
    AppTopNavegation,
    AppWelcome
  }
}
</script>