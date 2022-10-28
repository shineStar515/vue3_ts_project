import { createRouter, createWebHistory } from 'vue-router'
import { localCache } from '@/utils/cache'

const routes = [
  { path: '/', redirect: '/main' },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login-view.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main-view.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/not-found/not-found.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const value = localCache.get('token')
  if (to.path != '/login' && !value) {
    return '/login'
  }
})
export default router
