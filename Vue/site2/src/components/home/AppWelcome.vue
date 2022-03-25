<template>
  <!-- <section class="home"> -->
    <!-- ======= HOME STAR ======= -->
    <!-- <div class="col-lg-12 col-md-10">
      <div class="header-hero" data-scroll-index="0">
        <div class="container">
          <div class="row align-items-center justify-content-center justify-content-lg-between">
            <div class="col-lg-6 col-md-10">
              <div class="header-hero-content">
                <div class="box">
                  <h1 class="header-title wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.2s">
                    <span>{{ homeDescription1 }}</span> 
                    <br>{{ homeDescription2 }}
                  </h1>
                  <p class="text wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.4s">
                    <strong>
                      {{ homeDescription3 }}
                      <span>{{ homeDescription4 }}</span>
                    </strong>
                  </p>
                  <AppFormEmail/>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="header-shape-1">
                <div class="header-image">
                    <img  :src="imgUser" alt="" class="image-1 wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- ======= HOME END ======= -->
  <!-- </section> -->
  <section class="home" id="home">
    <div class="col-lg-12 col-md-10">
      <div class="swiper home-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="box">
              <div class="col-lg-6 col-md-10">
                <div class="header-hero-content">
                  <h1 class="header-title wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.2s">
                    <span>{{ homeTitle }}</span> 
                    <br>{{ homeDescription }}
                  </h1>
                  <p class="text wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.4s">
                    <strong>
                      {{ homeDescription3 }}
                      <span>{{ homeDescription4 }}</span>
                    </strong>
                  </p>
                  <AppFormEmail/>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="header-shape-1">
                  <div class="header-image">
                      <img  :src="imgUser" alt="" class="image-1 wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import AppFormEmail from '../AppFormEmail.vue'
  import {mapState} from 'vuex'
  export default {
    name: "AppWelcome",
    components: {
      AppFormEmail
    },
    computed: {
      ...mapState([
        'imgUser',
        'imgProgrammer',
        'homeTitle',
        'homeDescription',
        'homeDescription3',
        'homeDescription4',
      ]),
    }
  }
</script>
<style scoped>
  .home {
    padding: 0;
  }
  .home .box {
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 2%;
  }
  .header-shape-1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: url(../../assets/img/programmer.jpg);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom-left-radius: 9999px;
    z-index: -100;
  }
  .header-title span {
    font-size: 4rem;
  }
  .header-title {
    font-size: 2.65rem;
  }
  .text {
    font-size: 1.8rem;
    margin: 3.5rem 0;
  }
  .header-image {
    position: relative;
    height: 100%;
  }
  .header-image img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 35%;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    .home {
      padding: 2rem 0;
    }
    .home .box {
      margin-top: -2rem;
      align-items: flex-end;
    }
    .header-shape-1 {
      height: 50vh;
      width: 100%;
    }
    .header-image img {
      width: 25%;
    }
  }
  @media (max-width: 640px) {
    .home {
      padding: 2rem 0;
    }
    .home .box {
      margin-top: -7rem;
      align-items: flex-end;
    }
    .header-shape-1 {
      height: 55vh;
      width: 100%;
    }
    .header-image img {
      width: 45%;
    }
  }
  @media (max-width: 440px) {
  .header-title span {
    font-size: 2.5rem;
  }
  .header-title {
    font-size: 1.65rem;
  }
  .text {
    font-size: 1.34rem;
    margin: 1.65rem 0;
  }
    .header-shape-1 {
      height: 55vh;
      width: 100%;
    }
    .home .box {
      margin-top: -7rem;
      align-items: flex-end;
    }
  }
</style>