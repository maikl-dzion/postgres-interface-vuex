import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/About.vue')
    },

    {
      path: '/databases',
      name: 'databases',
      component: () => import('./pages/Databases.vue')
    },

    {
      path: '/users',
      name: 'users',
      component: () => import('./pages/Users.vue')
    },

    {
      path: '/data_list',
      name: 'data_list',
      component: () => import('./pages/DataList.vue')
    }
    
  ]
})
