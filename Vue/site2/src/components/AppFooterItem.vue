<template>
  <div class="box">
    <img v-if="item.header.img"  :src="item.header.img" :alt="item.header.title">
    <h3 v-if="item.header.title"> {{item.header.title}} </h3>
    <p>
      {{item.header.text}}
    </p>
  </div>
  <div class="box" v-for="(contact, index) of item.contacts" :key="index">
    <h3 v-if="contact.title"> {{contact.title}} </h3>
    <a v-for="(link, index) of contact.links" :key="index" :href="link.link"><i :class="link.icon"></i>{{ link.text }}</a>
  </div>
</template>
<script>
  export default ({
    name: 'AppFooterItem',
    props: {
      item: Object
    }
  })
</script>
<style scoped>
  .footer .box-container .box {
    margin: 0 1rem;
  }
  .footer .box-container .box img {
    width: 60%;
  }
  .footer .box-container .box p {
    margin-top: 2rem;
    display: block;
    font-size: 1.6rem;
    color: var(--white);
  }
  .footer .box-container .box h3 {
    font-size: 2rem;
    padding: 1.5rem 0;
    color: var(--white);
  }
  .footer .box-container .box a {
    display: block;
    font-size: 1.6rem;
    color: var(--white);
    padding: 1rem 0;
  }
  .footer .box-container .box a i {
    color: var(--color-1);
    padding-right: .5rem;
  }
  .footer .box-container .box a:hover {
    color: var(--color-1);
  }
  .footer .box-container .box a:hover i {
    padding-right: 2rem;
  }
</style>
