<template>
  <div id="home">
    <AppTopNavigation />
    <AppHome />
  </div>
</template>

<script>
import AppTopNavigation from "../components/AppTopNavigation.vue";
import AppHome from "../components/AppHome.vue";
import '../assets/css/App.css';
export default {
  name: 'Home',
  components: {
    AppTopNavigation,
    AppHome,
  }
};
</script>