import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ide/:id',
      name: 'detail',
      component: () => import('./views/DetailView.vue'),
      props: true
    },
    {
      path: '/faq/:index',
      name: 'faqDetail',
      component: () => import('./views/FaqDetailView.vue'),
      props: true
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
