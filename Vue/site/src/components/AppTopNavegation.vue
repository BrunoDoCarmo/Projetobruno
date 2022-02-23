<template>
  <header class="header-area">
    <div class="navbar-area">
      <!-- ======= NAVBAR STAR ======= -->
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img class="image" src="../assets/img/logo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Quem Somos</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Quem Somos</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="#">Já sou Cliente</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- ======= NAVBAR END ======= -->
  </header>
</template>
<script>
export default {
  name: "AppTopNavegation",
  components: {

  }
}
</script>
<style scoped>
  /* ======= NAVBAR CSS ======= */
  .navbar-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
  }
  .navbar {
    position: relative;
    padding: 1.2rem 0;
  }
  .navbar-brand .image {
    max-width: 9.4rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .navbar-collapse {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: .5rem .5rem;
      background-color: #fff;
      box-shadow: 0 1rem 2rem 0 rgb(0 0 0 / 10%);
    }
  }
  .navbar-light .navbar-toggler {
    color: transparent;
    border-color: transparent;
  }
  .navbar-nav .nav-item {
    position: relative;
    margin-left: 1.3rem;
  }
  .navbar-nav .nav-item .nav-link {
    position: relative;
    padding: .5rem 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--navbar-color);
  }
  .navbar-nav .nav-item .nav-link.active,
  .navbar-nav .nav-item .nav-link:hover {
    color: var(--navbar-color);
    text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  }
  .navbar-nav .nav-item .nav-link::before {
    content: '';
    position: absolute;
    width: .5rem;
    height: .5rem;
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