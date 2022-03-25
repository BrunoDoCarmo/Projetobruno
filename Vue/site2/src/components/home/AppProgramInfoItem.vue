<template>
  <div class="col-lg-3 space">
    <div class="single-feature wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.2s">
      <div class="icon">
        <i :class="item.icon"></i>
      </div>
      <div class="content">
        <h3> {{item.title}} </h3>
        <p>
          {{item.text}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default ({
    name: 'AppProgramInfoItem',
    computed: {
      ...mapState([
        'appServicesButton'
      ])
    },
    props: {
      item: Object
    }
  })
</script>
<style scoped>
  .feature-section .space{
    margin: .65rem auto;
  }
  .feature-section .single-feature {
    padding: 1.5rem;
    height: 100%;
    text-align: center;
    box-shadow: 0 1rem 3rem 0 rgba(154 154 154 / 59%);
    border-radius: 1rem;
  }
  .feature-section .single-feature:hover {
    transform: scale(1.1);
  }
  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    /* .feature-section .single-feature {
      box-shadow: none;
    } */
    .feature-section .single-feature:hover {
      transform: none;
    }
  }
  .feature-section .single-feature .icon {
    position: relative;
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    margin: .25rem auto .25rem;
    color: var(--color-1);
    font-size: 3.35rem;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    transition: var(--tran-01);
  }
  .feature-section .single-feature .content h3 {
    font-weight: 600;
    font-size: 1.35rem;
    color: var(--color-1);
    margin-bottom: .65rem;
  }
</style>