import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/home'
import Recommend from './../views/recommend'
import Search from './../views/search'
import Chat from './../views/chat'
import Me from './../views/me'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
