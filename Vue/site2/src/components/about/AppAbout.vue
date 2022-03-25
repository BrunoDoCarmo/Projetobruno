<template>
  <section class="about-area pt-70 pb-120" data-scroll-index="2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="about-image wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.5s">
            <div class="about-shape"></div>
            <img src="../../assets/img/user.jpg" alt="" class="app">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-content mt-50 wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
            <div class="section-title">
              <h1 class="title">
                Comes With All You Neede
              </h1>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo sint blanditiis rerum? Minus, voluptatum maiores? Sunt recusandae corporis distinctio voluptate omnis, molestiae atque sapiente labore iure enim! Illum, suscipit!
              </p>
            </div>
            <a href="" class="main-btn">Get The App</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "AppAbout",
    components: {

    }
  }
</script>
<style scoped>
  /* ======= ABOUT CSS ======= */
  .about-area {
    overflow: hidden;
  }
  .about-image {
    display: inline-block;
    position: relative;
    text-align: center;
    margin-left: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .about-image .about-shape {
    position: relative;
    width: 394px;
    height: 394px;
    background: #0898e7;
    border-radius: 50%;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    .about-image .about-shape {
      width: 380px;
      height: 380px;
    }
  }
  .about-image .about-shape::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #0898e7;
    border-top-color: transparent;
    border-right-color: transparent;
    transform: scale(1.1) rotate(25deg);
  }
  .about-image .app {
    /* max-width: 280px; */
    position: absolute;
    top: 0;
    left: 0;
    /* transform: rotate(-25deg) translateY(-15%); */
  }
  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    .about-image .app {
      max-width: 250px;
    }
  }
  .title {
    font-size: 35px;
    font-weight: 600;
  }
  .text {
    margin-top: 20px;
  }
  .about-content .main-btn {
    margin-top: 40px;
  }
</style>