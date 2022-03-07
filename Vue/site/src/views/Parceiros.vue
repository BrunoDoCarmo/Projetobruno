<template>
  <div class="parceiros">
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
  name: "AppParceiros",
  components: {
    AppPreloader,
    AppTopNavegation,
    AppWelcome
  }
}
</script>