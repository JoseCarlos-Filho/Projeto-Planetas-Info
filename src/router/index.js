import { createRouter, createWebHistory } from 'vue-router'
import Mercurio from '@/views/Mercurio.vue'
import Terra from '@/views/Terra.vue'
import Venus from '@/views/Venus.vue'
import Marte from '@/views/Marte.vue'
import Jupiter from '@/views/Jupiter.vue'
import Saturno from '@/views/Saturno.vue'
import Urano from '@/views/Urano.vue'
import Netuno from '@/views/Netuno.vue'



const routes = [
  {
    path: '/',
    name: 'Terra',
    component: Terra
  },
  
  {
    path: '/Mercurio',
    name: 'Mercurio',
    component: Mercurio
  },

  {
    path: '/Venus',
    name: 'Venus',
    component: Venus
  },

  {
    path: '/Marte',
    name: 'Marte',
    component: Marte
  },

  {
    path: '/Jupiter',
    name: 'Jupiter',
    component: Jupiter
  },

  {
    path: '/Saturno',
    name: 'Saturno',
    component: Saturno
  },

  {
    path: '/Urano',
    name: 'Urano',
    component: Urano
  },

  {
    path: '/Netuno',
    name: 'Netuno',
    component: Netuno
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
