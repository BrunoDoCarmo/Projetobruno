<template>
  <div class="box">
  </div>
</template>
<script>
  export default ({
    name: 'AppSpace',
  })
</script>
<style scoped>
  .box{
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    height: 50vh;
    background-image: url(../../assets/img/banner.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: -100;
  }
</style>