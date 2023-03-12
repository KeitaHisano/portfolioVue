import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import JobTimelineVue from '../views/JobTimeline.vue'
import SkillListVue from '@/components/SkillList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // component: () => import('../views/AboutView.vue')
      component: AboutViewVue
    },
    {
      path: '/job',
      name: 'job',
      component: JobTimelineVue
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillListVue
    }
  ]
})

export default router
