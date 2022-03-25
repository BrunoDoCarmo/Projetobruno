<template>  
  <footer class="footer">
    <div class="box-container">
      <AppFooterItem :item="AppFooterItem" />
    </div>
    <div class="credit"> 
      <span v-for="(credit, index) of AppFooterCredit" :key="index">
        {{ credit.prefix }}
        &nbsp;
        <span class="span-color"> {{ credit.author }} </span>
        &nbsp;
        <span>|</span>
        &nbsp;
        {{ credit.copyright }}
      </span>
    </div>
  </footer>
</template>
<script>
  import {mapState} from 'vuex'
  import AppFooterItem from '../components/AppFooterItem.vue'
  export default {
    name: "AppFooter",    
    computed: {
      ...mapState([
        'FooterCredito',
        'FooterAutor',
        'FooterDireito',
        'AppFooterItem',
        'AppFooterCredit'
      ]),
    },
    components: {
      AppFooterItem
    }
  }
</script>
<style scoped>
  .footer {
    text-align: justify;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))),url(../assets/img/footer.jpg) no-repeat;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(../assets/img/footer.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 5rem 9%;
  }
  .footer .box-container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (minmax(25rem, 1fr))[auto-fit];
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
  }
  .footer .credit {
    text-align: center;
    margin-top: 2.5rem;
    padding: 1rem;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer .credit span {
    text-align: center;
    font-size: 2rem;
    color: #fff;
    display: flex;
    flex-direction: row;
  }
  .footer .credit span.span-color {
    color: var(--color-1);
  }
</style>
