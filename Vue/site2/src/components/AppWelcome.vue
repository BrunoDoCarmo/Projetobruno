<template>
  <section>
    <!-- ======= HOME STAR ======= -->
    <div class="header-hero" data-scroll-index="0">
      <div class="container">
        <div class="row align-items-center justify-content-center justify-content-lg-between">
          <div class="col-lg-6 col-md-10">
            <div class="header-hero-content">
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
    <!-- ======= HOME END ======= -->
  </section>
</template>
<script>
  import AppFormEmail from './AppFormEmail.vue'
  import {mapState} from 'vuex'
  export default {
    name: "AppWelcome",
    components: {
      AppFormEmail
    },
    computed: {
      ...mapState([
        'imgUser',
        'homeDescription1',
        'homeDescription2',
        'homeDescription3',
        'homeDescription4',
      ]),
    }
  }
</script>
<style scoped>
  /* ======= HOME CSS ======= */
  .header-hero {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .header-hero .shape {
    position: absolute;
  }
  .header-hero-content {
    position: relative;
    width: 100%;
    height: 80vh;
    display: grid;
    grid-template-rows: 60% 25% auto;
    padding-top: 85%;
    padding-bottom: 10%;
  }
  .header-hero-content .header-title {
    font-size: 1.2rem;
  }
  .header-hero-content .header-title span {
    font-size: 2rem;
  }
  .header-hero-content .text {
    margin-top: -2.5rem;
  }
  .header-image {
    position: relative;
    height: 100%;
  }
  .header-image img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    width: 50%;
    border-radius: 50%;
  }
  .main-btn {
    text-align: center;
  }
  .header-shape-1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background-image: url(../assets/img/programmer.jpg);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom-left-radius: 9999px;
    z-index: -100;
  }
  @media screen and (min-width: 400px) and (max-width:486px) {
    .header-hero-content {
      padding-bottom: 0;
      margin-top: 2rem;
    }
    .header-hero-content .header-title {
      margin-top: 1rem;
      font-size: 2.25rem;
    }
    .header-hero-content .header-title span {
      font-size: 3rem;
    }
    .header-hero-content .text {
      margin-top: 0;
    }
    .header-image img {
      transform: translate(-50%, -35%);
    }
  }
  @media screen and (min-width: 512px) {
    .header-hero-content {
      padding-top: 52%;
      padding-bottom: 2.5%;
      margin-top: 2rem;
    }
    .header-hero-content .header-title {
      font-size: 1.5rem;
    }
    .header-hero-content .header-title span {
      font-size: 2.75rem;
    }
    .header-hero-content .text {
      font-size: 1rem;
      margin-top: -1.2rem;
    }
    .header-image img {
      width: 40%;
      transform: translate(-50%, -48%);
    }
  }
  @media screen and (min-width: 678px) {
    .header-hero-content {
      padding-top: 37%;
      padding-bottom: 2.5%;
      margin-top: 2rem;
    }
    .header-hero-content .header-title {
      margin-top: .25rem;
      font-size: 1.75rem;
    }
    .header-hero-content .text {
      margin-top: -.25rem;
    }
    .header-hero-content .header-title span {
      font-size: 3rem;
    }
    .header-image img {
      width: 30%;
    }
  }
  @media screen and (min-width: 800px) {
    .header-hero-content {
      padding-top: 10%;
      padding-bottom: 10%;
      margin-top: 2rem;
      height: 75vh;
    }
    .header-hero-content .text {
      font-size: 1.15rem;
      margin-top: -1.5rem;
    }
    .header-image img {
      left: 0;
      bottom: 0;
      transform: translateY(0);
      width: 40%;
    }
    .header-shape-1 {
      width: 50%;
      height: 100%;
    }
  }
  @media screen and (min-width: 1000px) {
    .header-image img {
      bottom: 20%;
      transform: translateY(-20%);
    }
  }
</style>