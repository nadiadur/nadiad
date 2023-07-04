import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FlowerView from '../views/Flower.vue'
import FlowerDetailView from '../views/FlowerDetail.vue'
import BungaView from '../views/Bunga.vue'
import MoneyView from '../views/Money.vue'
import SnackView from '../views/Snack.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/flower',
    name: 'Flower',
    component: FlowerView
  },
  {
    path: '/bunga',
    name: 'Bunga',
    component: BungaView
  },
  {
    path: '/money',
    name: 'Money',
    component: MoneyView
  },
  {
    path: '/snack',
    name: 'Snack',
    component: SnackView
  },
  {
    path: '/flower/:id',
    name: 'FlowerDetail',
    component: FlowerDetailView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
