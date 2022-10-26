import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/login', component: import('../views/login/login-view.vue') },
  { path: '/main', component: import('../views/main/main-view.vue') },
  {
    path: '/:pathMatch(.*)',
    component: import('../views/not-found/not-found.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
