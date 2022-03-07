<template>
  <!-- ======= HOME STAR ======= -->
  <div class="header-hero" data-scroll-index="0">
    <div class="container">
      <div class="row align-items-center justify-content-center justify-content-lg-between">
        <div class="col-lg-6 col-md-10">
          <div class="header-hero-content">
            <h1 class="header-title wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.2s">
              <span>BDS - Informática</span> <br>Software, Sites e App's para uma melhor gestão do seu negócio!
            </h1>
            <p class="text wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.4s">
              <strong>
                Pensado em todos os tamanhos de lojas, tendo o controle de forma fácil e simples sem tirar o foco do mais importante. <span>VENDER!</span>
              </strong>
            </p>
            <a href="" class="main-btn wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.8s">Download Now</a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="header-image">
              <img src="../assets/img/Devices-amico.svg" alt="" class="image-1 wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-shape-1"></div>
      <div class="header-shape-2">
          <!-- <img src="../assets/img/header/header-shape-2.svg" alt=""> -->
      </div>
    </div>
  </div>
  <!-- ======= HOME END ======= -->
</template>
<script>
export default {
  name: "AppWelcome",
  components: {

  }
}
</script>
<style scoped>
  /* ======= HOME CSS ======= */
  .header-hero {
    position: relative;
    top: 0;
    height: 100vh;
    background-position: bottom center;
    z-index: -100;
  }
  .header-hero .shape {
    position: absolute;
  }
  .header-hero-content {
    top: 75px;
    position: relative;
  }  
  @media only screen and (min-width: 768px) and (max-width: 991px),(max-width: 767px) {
    .header-hero-content {
        margin-top: 30%;
    }
  }
  .header-hero-content .header-title {
    width: 100%;
    font-size: 2.65rem;
    /* color: var(--white); */
  }
  .header-hero-content .text {
    margin-top: 30px;
    /* color: var(--white); */
  }
  .header-hero-content .main-btn {
    margin-top: 1rem;
  }
  .header-image {
    position: relative;
    top: 75px;
    padding-top: 80px;
    animation: bounceTop-1 3s ease infinite;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .header-image img {
      height: 0;
    }
  }
  .header-shape-1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: url(../assets/img/header/photo.jpg);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom-left-radius: 9999px;
    z-index: -1;
  }
  .header-shape-2 {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .vbox-close {
    color: #fff;
    background: transparent;
    font-size: 40px;
    right: 12%;
  }
</style>