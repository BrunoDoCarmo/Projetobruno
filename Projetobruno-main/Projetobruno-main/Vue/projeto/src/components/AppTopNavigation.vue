<template>
  <!-- ======= HEADER STAR ======= -->
  <header class="header-area">
    <div class="navbar-area">
      <!-- ======= NAVBAR STAR ======= -->
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img class="image" src="../assets/img/header/logo/landapp-logo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" data-scroll-nav="0" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-scroll-nav="1" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-scroll-nav="2" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-scroll-nav="3" href="#">Testimonial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-scroll-nav="4" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-scroll-nav="5" href="#">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-scroll-nav="6" href="#"><i class="fab fa-whatsapp"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- ======= NAVBAR END ======= -->
  </header>
  <!-- ======= HEADER END ======= -->
</template>
<script>
export default {
  name: "AppTopNavigator",
  computed: {
  }
}
</script>
<style scoped>
  .navbar-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
  }
  .sticky {
    position: fixed;
    background: #fff;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.5);
  }
  .navbar {
    position: relative;
    padding: 20px 0;
  }
  .navbar-brand .image {
    max-width: 150px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    .navbar-collapse {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 5px 12px;
      background-color: #fff;
      box-shadow: 0 15px 20px 0 rgb(0 0 0 / 10%);
    }
  }
  .navbar-light .navbar-toggler {
    color: transparent;
    border-color: transparent;
  }
  .navbar-nav .nav-item {
    position: relative;
    margin-left: 40px;
  }
  .navbar-nav .nav-item .nav-link {
    position: relative;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 400;
    color: #38424d;
  }
  .navbar-nav .nav-item .nav-link.active,
  .navbar-nav .nav-item .nav-link:hover {
    color: #ff846f;
  }
  .navbar-nav .nav-item .nav-link::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    bottom: 0;
    left: 50%;
    border-radius: 50%;
    background-color: #38424d;
    opacity: 0;
    transition: all 0.3 ease-out 0s;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    .navbar-nav .nav-item .nav-link::before {
      position: relative;
    }
  }
  .navbar-nav .nav-item .nav-link.active::before,
  .navbar-nav .nav-item .nav-link:hover::before {
    opacity: 1;
  }
</style>