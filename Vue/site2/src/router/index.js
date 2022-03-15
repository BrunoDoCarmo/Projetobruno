import { createRouter, createWebHistory } from 'vue-router'
import state from '../store/state'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: state.router
})
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: state
//   }
// ]

export default router