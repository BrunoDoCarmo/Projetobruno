import Home from '../views/Home.vue'
import Sobre from '../views/About.vue'
// import Parceiros from '../views/Parceiros.vue'
// import Contato from '../views/Contato.vue'
// import Area_do_Cliente from '../views/Area_do_Cliente.vue'
export default {
  imgLogo: require("../assets/img/Logo-Preta.png"),
  router: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      text: 'Home'
    },
    {
      path: '/Sobre',
      name: 'Sobre',
      component: Sobre,
      text: 'Sobre'
    },
    // {
    //   path: '/Parceiros',
    //   name: 'Parceiros',
    //   component: Parceiros,
    //   text: 'Parceiros'
    // },
    // {
    //   path: '/Contatos',
    //   name: 'Contato',
    //   component: Contato,
    //   text: 'Contato'
    // },
    // {
    //   path: '/Area_do_Cliente',
    //   name: 'Área do Cliente',
    //   component: Area_do_Cliente,
    //   text: 'Área do Cliente'
    // },
  ],
  homeDescription1: 'BDS - Informática',
  homeDescription2: 'Software, Sites e App para uma melhor gestão do seu negócio!',
  homeDescription3: 'Pensado em todos os tamanhos de lojas, tendo o controle de forma fácil e simples sem tirar o foco do mais importante. ',
  homeDescription4: 'VENDER!',
  imgProgrammer: require("../assets/img/programmer.jpg"),
  imgUser: require("../assets/img/user.jpg"),
}