import home from '../views/Home.vue'
import about from '../views/About.vue'
export default {
  imgLogo: require('../assets/img/Logo-Preta.png'),
  router: [
    {
      path: '/',
      name: 'home',
      component: home,
      text: 'Home'
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      text: 'Sobre'
    }
  ],
  homeTitle: 'BDS - Soluções em Sistemas',
  homeDescription: 'Software, Sites e App para uma melhor gestão do seu negócio!',
  homeDescription3: 'Pensado em todos os tamanhos de lojas, tendo o controle de forma fácil e simples sem tirar o foco do mais importante. ',
  homeDescription4: 'VENDER!',
  imgProgrammer: require('../assets/img/programmer.jpg'),
  imgUser: require('../assets/img/user.jpg'),
  AppProgramTitle: 'Nossos projetos',
  AppProgramDescription: 'Conheça alguns dos nossos sistemas!',
  programnav: [
    {
      id: '',
      text: 'PDV - WEB',
    },
    {
      id: '',
      text: 'Agronegócio',
    },
    {
      id: '',
      text: 'Transporte',
    },
    {
      id: '',
      text: 'Financeiro',
    },
    {
      id: '',
      text: 'Comercio',
    }
  ],
  AppProgramTitle1: 'Algumas das',
  AppProgramTitle2: 'Funcionalidade',
  AppProgramInfoItemBoxs: [
    {
      icon: 'fas fa-box',
      title: 'Estoque',
      text: 'Gerencie de forma simples e facil os produtos do seu estoque.'
    },
    {
      icon: 'fas fa-shopping-bag',
      title: 'Vendas',
      text: 'Realize suas vendas de forma simples, fácil e rápido.'
    },
    {
      icon: 'fas fa-store',
      title: 'Frente de Caixa',
      text: ' Controle a movimentação do caixa, registrando suas vendas.'
    },
    {
      icon: 'fas fa-piggy-bank',
      title: 'Financeiro',
      text: 'Fique por dentro de toda a suas finanças, facilitando a gestão do seu negócio.'
    },
    {
      icon: 'far fa-address-card',
      title: 'Cadastro',
      text: 'Cadastre seus cliente, fornecedores e produtos com telas de fácil interação.'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Acesso',
      text: 'Tenha níveis de acesso para cada usuário de sua empresa.'
    },
    {
      icon: 'far fa-address-card',
      title: 'Nota fiscal',
      text: 'Emita notas fiscais de forma descomplicada.'
    }
  ],
  ImgIcon: require('../assets/img/banner.jpg'),
  AppFooterItem: {
    header: {
      img: require('../assets/img/Logo-Branca.png'),
      text: 'Atuando desde 2002 no mercado de software, agregando experiência e tecnologia para nossos colaboradores!'
    },
    contacts: [
      {
        title: 'Contato',
        links: [
          {
            icon: 'fas fa-phone',
            text: '+55 (44) 99972-8673',
            link: 'tel:+554499972-8673'
          },
          {
            icon: 'fas fa-phone',
            text: '+55 (44) 99961-5259',
            link: 'tel:+554499961-5259'
          },
          {
            icon: 'fas fa-phone',
            text: '+55 (44) 3232-6083',
            link: 'tel:+55443232-6083'
          },
          {
            icon: 'fas fa-phone',
            text: '+55 (44) 3015-2439',
            link: 'tel:+55443015-2439'
          },
          {
            icon: 'fas fa-envelope',
            text: 'suporte@infobds.com.br',
            link: 'mailto:suporte@infobds.com.br'
          },
          {
            icon: 'fas fa-envelope',
            text: 'sac@infobds.com.br',
            link: 'mailto:sac@infobds.com.br'
          }
        ]
      },
      {
        title: 'Siga-nos',
        links: [
          {
            icon: 'fab fa-whatsapp',
            text: 'WhatsApp',
            link: 'https://api.whatsapp.com/send?phone=5544999615259&amp;text=Olá, vim através do site...'
          },
          {
            icon: 'fab fa-facebook-f',
            text: 'Facebook',
            link: 'https://www.facebook.com/bdsSistema'
          },
          {
            icon: '',
            text: '',
            link: ''
          }
        ]
      },
      {
        title: 'Siga-nos',
        links: [
          {
            icon: 'fab fa-whatsapp',
            text: 'WhatsApp',
            link: 'https://api.whatsapp.com/send?phone=5544999615259&amp;text=Olá, vim através do site...'
          },
          {
            icon: 'fab fa-facebook-f',
            text: 'Facebook',
            link: 'https://www.facebook.com/bdsSistema'
          },
          {
            icon: '',
            text: '',
            link: ''
          }
        ]
      }
    ]
  },
  AppFooterCredit: [
    {
      id: 1,
      prefix: 'Desenvolvido por',
      author: 'BDS - Soluções em Sistemas',
      copyright: 'Todos os direitos reservados'
    }
  ],
}
