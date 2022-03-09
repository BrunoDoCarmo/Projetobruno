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
  import debounce from 'lodash/debounce';
  import {mapState} from 'vuex'
  export default {
    name: "AppTopNavigator",
    computed: {
      ...mapState([
        'imgLogo',
        'router'
      ])
    },
    methods: {
      handleScroll() {
        this.isUserScrolling = (window.scrollY > 0);
        let navbar = document.querySelector('.header-area .navbar-area')
        window.onscroll = () => {
          navbar.classList.remove('sticky')
          if (window.scrollY > 0){
            document.querySelector('.navbar-area').classList.add('sticky')
          }
          else{
            document.querySelector('.navbar-area').classList.remove('sticky')
          }
        }
      },
    },
    mounted() {
      this.handleDebouncedScroll = debounce(this.handleScroll, 10);
      window.addEventListener('scroll', this.handleDebouncedScroll);
    },
  }
</script>
<style scoped>
  /* ======= NAVBAR CSS ======= */
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
    max-width: 8rem;
  }
  .navbar-light .navbar-toggler {
    color: var(--color-1);
    border: .15rem solid var(--color-1);
  }
  .navbar-nav {
    display: flex;
    flex-direction: column;
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
    font-size: 1.2rem;
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
    height: .1rem;
    bottom: .5rem;
    left: 50%;
    background-color: var(--color-1);
    opacity: 0;
    transition: all 0.3 ease-out 0s;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .navbar-collapse {
      padding: .5rem 1rem;
      position: fixed;
      top: 5rem;
      bottom: 0;
      left: 100%;
      width: 100%;
      overflow-y: auto;
      visibility: hidden;
      color: var(--color-1);
      background: var(--white);
      transition: transform .3s ease-in-out, visibility .3s ease-in-out;
    }
    .navbar-collapse.show {
      visibility: visible;
      transform: translateX(-100%);
    }
    .navbar-nav .nav-item {
      margin-left: 0;
    }
    .navbar-nav .nav-item .nav-link{
      left: 0;
      margin-bottom: 1.5rem;
      color: var(--color-1);
      text-shadow: 0 0 0 rgba(0, 0, 0, 0.75);
    }
    .navbar-nav .nav-item .nav-link:focus,
    .navbar-nav .nav-item .nav-link:hover {
      color: var(--color-1);
    }
    .navbar-nav .nav-item .nav-link::before {
      position: relative;
    }
  }
  .navbar-nav .nav-item .nav-link.active::before {
    opacity: 1;
    left: 15%;
    width: 70%;
  }
  .navbar-nav .nav-item .nav-link:hover::before{
    opacity: 1;
    left: 15%;
    width: 70%;
    transition: .5s all;
  }
  .nav-link.private {
    border: 1px solid var(--color-1);
    border-radius: .5rem;
    width: 10rem;
  }
</style>