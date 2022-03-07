<template>
  <div class="area_do_cliente">
    <AppPreloader/>
    <AppTopNavegation/>
    <AppWelcome/>
  </div>
</template>
<script>
import AppPreloader from '../components/AppPreloader.vue'
import AppTopNavegation from '../components/AppTopNavegation.vue'
import AppWelcome from '../components/AppWelcome.vue'
export default {
  name: "AppArea_do_Cliente",
  components: {
    AppPreloader,
    AppTopNavegation,
    AppWelcome
  }
}
</script>