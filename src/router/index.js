import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GardenView from '../views/GardenView.vue'
import NewPlantView from '../views/NewPlantView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/garden',
    name: 'garden',
    component: GardenView
  },
  {
    path: '/garden/newplant',
    name: 'newplant',
    component: NewPlantView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
