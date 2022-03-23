import { createRouter, createWebHistory } from 'vue-router'
import Mercurio from '@/views/Mercurio.vue'
import Terra from '@/views/Terra.vue'

const routes = [
  {
    path: '/Terra',
    name: 'Home',
    component: Terra,
  },
  
  {
    path: '/',
    name: 'Mercurio',
    component: Mercurio,
  },

  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
