import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/ceshi',
    name: 'Ceshi',
    component: () => import('@/views/ceshi/index.vue')
  },
  {
    path: '/ceshi2',
    name: 'Ceshi2',
    component: () => import('@/views/ceshi/ceshi2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
