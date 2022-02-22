<template>
<header class="header-area">
  <div class="navbar-area">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img class="image" src="../assets/logo.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
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