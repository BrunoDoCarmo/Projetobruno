<template>  
  <!-- ======= HEADER STAR ======= -->
  <header class="header-area">
    <div class="navbar-area">
      <!-- ======= NAVBAR STAR ======= -->
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img class="image" :src="imgLogo" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item" v-for="( link, index ) in router" :key="index">
                  <router-link class="nav-link" :to="{ name: link.name }">{{ link.text }}</router-link>
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
  import {mapState} from 'vuex'
  export default {
    name: "AppNavigator",
    computed: {
      ...mapState([
        'imgLogo',
        'router'
      ])
    }
  }
</script>
<style scoped>
  .navbar-area {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
    background: var(--white);
    box-shadow: 0 1rem 2rem 0 rgb(0 0 0 / 10%);
  }
  .navbar {
    position: relative;
    padding: 1rem 0;
  }
  .navbar-brand .image {
    max-width: 15rem;
  }
  .navbar-light .navbar-toggler {
    color: var(--color-1);
    border: .15rem solid var(--color-1);
  }
  .navbar-nav {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav .nav-item {
    position: relative;
    margin-left: 1rem;
  }
  .navbar-nav .nav-item .nav-link {
    position: relative;
    font-size: 2rem;
    font-weight: 400;
    color: var(--color-1);
  }
  .navbar-nav .nav-item .nav-link:focus,
  .navbar-nav .nav-item .nav-link:hover {
    color: var(--color-1);
  }
  .navbar-nav .nav-item .nav-link::before {
    content: '';
    position: absolute;
    width: 0;
    height: .2rem;
    bottom: .5rem;
    left: 50%;
    background-color: var(--color-1);
    opacity: 0;
    transition: all 0.3 ease-out 0s;
  }
  .navbar-nav .nav-item .nav-link:hover::before,
  .navbar-nav .nav-item .nav-link.active::before {
    opacity: 1;
    left: 10%;
    width: 80%;
    transition: .5s all;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .navbar-nav .nav-item .nav-link:hover::before,
    .navbar-nav .nav-item .nav-link.active::before {
      opacity: 0;
    }
  }
</style>