import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Parceiros from '../views/Parceiros.vue'
import Contato from '../views/Contato.vue'
import Area_do_Cliente from '../views/Area_do_Cliente.vue'
export default {
  appLogo: require("../assets/img/header/Logo-Preta.png"),
  appNavLinks: [
    {
      id: '',
      text: 'Home'
    },
    {
      id: '',
      text: 'Sobre'
    },
    {
      id: '',
      text: 'Parceiros'
    },
    {
      id: '',
      text: 'Contato'
    },
    {
      id: '',
      text: 'Área do Cliente'
    }
  ],
  router: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      text: 'Home',
    },
    {
      path: '/Sobre',
      name: 'Sobre',
      component: Sobre,
      text: 'Sobre',
    },
    {
      path: '/Parceiros',
      name: 'Parceiros',
      component: Parceiros,
      text: 'Parceiros'
    },
    {
      path: '/Contatos',
      name: 'Contato',
      component: Contato,
      text: 'Contato'
    },
    {
      path: '/Area_do_Cliente',
      name: 'Área do Cliente',
      component: Area_do_Cliente,
      text: 'Área do Cliente'
    },
  ]
}