<template>
  <!-- ======= PRELOADER ======= -->
  <div class="preloader">
    <div class="loader">
      <div class="spinner">
        <div class="spinner-container">
          <div class="spinner-rotator">
            <div class="spinner-left">
              <div class="spinner-circle"></div>
            </div>
            <div class="spinner-right">
              <div class="spinner-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "AppPreloader",
    methods: {
      handleScroll() {
        var loader = document.querySelector('.preloader')
        window.addEventListener("load",function() {
          loader.style.display = "none";
        })
      },
    },
  }
</script>
<style scoped>
  /* ======= PRELOADER CSS ======= */
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    display: table;
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 99999;
  }
  .preloader .loader {
    display: table-cell;
    vertical-align: middle;
  }
  .preloader .loader .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 64px;
    margin-left: -32px;
    z-index: 18;
    pointer-events: none;
  }
  .preloader .loader .spinner .spinner-container {
    pointer-events: none;
    position: absolute;
    width: 100%;
    padding-bottom: 100%;
    top: 50%;
    left: 50%;
    margin-top: -50%;
    margin-left: -50%;
    animation: spinner-linspin 1568ms linear infinite;
  }
  .preloader .loader .spinner .spinner-container .spinner-rotator {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: spinner-easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .preloader .loader .spinner .spinner-container .spinner-rotator .spinner-right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    left: 50%;
  }
  .preloader .loader .spinner .spinner-container .spinner-rotator .spinner-left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    right: 50%;
  }
  .preloader .loader .spinner-right .spinner-circle {
    left: -100%;
    right: 0;
    border-left-color: #eceff8;
    animation: spinner-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
      both;
  }
  .preloader .loader .spinner-left .spinner-circle {
    left: 0;
    right: -100%;
    border-right-color: #eceff8;
    animation: spinner-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .preloader .loader .spinner-circle {
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 100%;
    border-style: solid;
    border-color: #0898e7 #0898e7 #eceff8;
    border-radius: 50%;
    border-width: 6px;
  }
</style>