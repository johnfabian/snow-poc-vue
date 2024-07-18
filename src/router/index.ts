import Home from '@/views/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/Services.vue')
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: () => import('@/views/Knowledge.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: () => import('@/views/Tickets.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('@/views/Reports..vue')
  },
  // Catch-all route for 404 - Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

// Navigation guard example (optional)
router.beforeEach((to, from, next) => {
  // You can add navigation guards here
  // For example, checking authentication status
  next()
})

export default router
