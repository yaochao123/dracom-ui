import Vue from 'vue'
import VueRouter from 'vue-router'
import { navData } from './sideNav'

Vue.use(VueRouter)

const childrens: any = []
navData.forEach(item => {
  ;(childrens as any) = childrens.concat(item.children)
})

const routes = [
  {
    path: '/',
    redirect: '/introduce'
  },
  {
    path: '/test',
    component: (resolve: any) => {
      require(['@/pages/test.vue'], resolve)
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: (resolve: any) => {
      require(['@/pages/homePage.vue'], resolve)
    },
    children: childrens
  }
]

export default new VueRouter({
  mode: 'hash',
  routes
})
