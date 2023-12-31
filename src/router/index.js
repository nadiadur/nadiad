import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FlowerView from '../views/Flower.vue'
import FlowerDetailView from '../views/FlowerDetail.vue'
import BungaDetailView from '../views/BungaDetail.vue'
import MoneyDetailView from '../views/MoneyDetail.vue'
import SnackDetailView from '../views/SnackDetail.vue'
import BungaView from '../views/Bunga.vue'
import MoneyView from '../views/Money.vue'
import SnackView from '../views/Snack.vue'
import ProfileView from '../views/Profile.vue'
import RiviewView from '../views/Riview.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/riview',
    name: 'Riview',
    component: RiviewView
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
    path: '/bunga/:id',
    name: 'BungaDetail',
    component: BungaDetailView
  },
  {
    path: '/money/:id',
    name: 'MoneyDetail',
    component: MoneyDetailView
  },
  {
    path: '/snack/:id',
    name: 'SnackDetail',
    component: SnackDetailView
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
