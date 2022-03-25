<template>
  <section class="feature-section pt-80" data-scroll-index="1">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7">
          <div class="section-title text-center md-30 wow fadeInUp">
            <h1 class="md-25 wow fadeInUp" data-wow-delay=".2s">
              {{ AppProgramTitle1 }} <span> {{ AppProgramTitle2 }} </span>
            </h1>
            <p class="wow fadeInUp" data-wow-delay=".4s">
              {{ AppProgramDescription }}
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <AppProgramInfoItem v-for="(AppProgramInfoItemBox, index) in AppProgramInfoItemBoxs" :key="index" :item="AppProgramInfoItemBox" />
      </div>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import AppProgramInfoItem from './AppProgramInfoItem.vue'
  export default {
    name: "AppProgramInfo",    
    computed: {
      ...mapState([
        'AppProgramTitle1',
        'AppProgramTitle2',
        'AppProgramDescription',
        'AppProgramInfoItemBoxs'
      ]),
    },
    components: {
      AppProgramInfoItem
    }
  }
</script>
<style scoped>
  .feature-section .section-title {
    margin-bottom: 1.235rem;
  }
  .feature-section .section-title h1 {
    margin-bottom: 1rem;
  }
</style>