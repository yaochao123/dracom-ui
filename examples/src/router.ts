import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: (resolve: any) => {
      require(['@/pages/homePage.vue'], resolve)
    },
    children: [
      {
        path: '/button',
        name: 'Button',
        component: (resolve: any) => {
          require(['@/docs/button.md'], resolve)
        }
      },
      {
        path: '/loading',
        name: 'Loading',
        component: (resolve: any) => {
          require(['@src/loading/src/index.vue'], resolve)
        }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
