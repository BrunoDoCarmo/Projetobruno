<template>
  <form class="d-flex">
    <input class="form-control" type="email" value="" placeholder="Search" aria-label="Search">
    <button class="main-btn" type="submit">Search</button>
  </form>
</template>
<script>
  export default {
    name: 'AppFormEmail',
  }
</script>
<style scoped>
  input[type="email"] {
    margin-right: .25rem;
  }
  .main-btn {
    width: 30%;
    margin-left: .25rem;
  }
</style>