<template>
  <div class="home">
    <AppTopNavegation/>
    <AppWelcome/>
  </div>
</template>
<script>
import AppTopNavegation from '../components/AppTopNavegation.vue'
import AppWelcome from '../components/AppWelcome.vue'
export default {
  name: "AppHome",
  components: {
    AppTopNavegation,
    AppWelcome
  }
}
</script>
