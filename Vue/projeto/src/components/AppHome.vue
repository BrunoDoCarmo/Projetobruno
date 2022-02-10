<template>
  <!-- ======= HOME STAR ======= -->
  <div class="header-hero" data-scroll-index="0">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="shape shape-4"></div>
    <div class="shape shape-5"></div>
    <div class="shape shape-6"></div>
    <div class="container">
      <div class="row align-items-center justify-content-center justify-content-lg-between">
        <div class="col-lg-6 col-md-10">
          <div class="header-hero-content">
            <h1 class="header-title wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.2s">
              <span>Launch Your App</span> With Confidence and Creative
            </h1>
            <p class="text wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aspernatur fugiat qui tenetur sit vero delectus vitae suscipit nostrum
              aliquam exercitationem necessitatibus veniam placeat, voluptatibus harum.
            </p>
            <ul class="d-flex">
              <li>
                <a href="" class="main-btn wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.8s">Download Now</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=DxHYso7lDlg" class="header-video venobox wow fadeInLeftBig" data-autoplay="true" data-vbtype="video" data-wow-duration="3s" data-wow-delay="1.2s">
                  <i class="fas fa-play"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="header-image">
            <img src="../assets/img/header/header-app.png" alt="" class="image-1 wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-shape-1"></div>
      <div class="header-shape-2">
        <img src="../assets/img/header/header-shape-2.svg" alt="">
      </div>
    </div>
  </div>
  <!-- ======= HOME END ======= -->
</template>
<script>
export default {
  name: "AppHome",
  computed: {
  }
}
</script>
<style scoped>
  /* ======= HOME CSS ======= */
  .header-hero {
    position: relative;
    top: 0;
    height: 800px;
    background-position: bottom center;
  }
  .header-hero .shape {
    position: absolute;
  }
  .header-hero .shape.shape-1 {
    position: relative;
    width: 75px;
    height: 75px;
    left: 130px;
    top: 20%;
    border-radius: 50%;
    background: #637ae4;
    animation: animation-1 2s linear infinite;
  }
  .header-hero .shape.shape-2 {
    width: 39px;
    height: 39px;
    left: 150px;
    bottom: 40px;
    border-radius: 50%;
    background: #0898e7;
    animation: animation-1 2s linear infinite;
  }
  .header-hero .shape.shape-3 {
    width: 19px;
    height: 19px;
    left: 26px;
    bottom: 25%;
    border-radius: 50%;
    background: #ff846f;
    animation: animation-1 2s linear infinite;
  }
  .header-hero .shape.shape-4 {
    width: 39px;
    height: 39px;
    left: 40%;
    top: 175px;
    border-radius: 50%;
    background: #4ebaf5;
    animation: animation-1 2s linear infinite;
  }
  .header-hero .shape.shape-5 {
    width: 19px;
    height: 19px;
    left: 50%;
    bottom: 20%;
    border-radius: 50%;
    background: #ff5b56;
    animation: animation-1 2s linear infinite;
  }
  .header-hero .shape.shape-6 {
    width: 14px;
    height: 14px;
    left: 45%;
    bottom: 70%;
    border-radius: 50%;
    background: #4ebaf5;
    animation: animation-1 2s linear infinite;
  }
  .header-hero-content {
    position: relative;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    .header-hero-content {
      margin-top: 30%;
    }
  }
  .header-hero-content .header-title {
    font-size: 42px;
    color: #38424d;
  }
  .header-hero-content .text {
    margin-top: 30px;
  }
  .header-hero-content ul {
    margin-top: 30px;
  }
  .header-hero-content ul li .header-video {
    margin-left: 50px;
  }
  .header-hero-content .header-video {
    position: relative;
    margin-top: 6px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    border-radius: 50%;
    background: #0898ef;
    color: #fff;
  }
  .header-hero-content .header-video::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: rgba(8, 152, 231, 0.8);
    z-index: -9;
    animation: video 2s linear infinite;
  }
  .header-image {
    position: relative;
    padding-top: 80px;
    animation: bounceTop-1 3s ease infinite;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
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
    background-image: url(../assets/img/header/header-shape-1.svg);
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
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