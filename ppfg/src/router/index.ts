import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamPick from '../views/TeamPick.vue'
import AddMember from '../views/AddMember.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/pick',
      name: 'pick',
      component: TeamPick
    },
    {
      path: '/member',
      name: 'member',
      component: AddMember
    },
    {
      path: '/up',
      name: 'up',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TeamBattle.vue')
    },
    {
      path: '/',
      redirect: 'pick'
    }
  ]
})

export default router
