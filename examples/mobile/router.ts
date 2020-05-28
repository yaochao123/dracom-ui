import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mobile',
    name: 'mobile',
    component: (resolve: any) => {
      require(['@@/components/demo.vue'], resolve)
    },
    children: [
      {
        path: 'demo-introduce',
        name: 'Introduce',
        component: (resolve: any) => {
          require(['@@/docs/demo-introduce.vue'], resolve)
        }
      },
      {
        path: 'demo-button',
        name: 'Button',
        component: (resolve: any) => {
          require(['@@/docs/demo-button.vue'], resolve)
        }
      },
      {
        path: 'demo-loading',
        name: 'Loading',
        component: (resolve: any) => {
          require(['@@/docs/demo-loading.vue'], resolve)
        }
      },
      {
        path: 'demo-dialog',
        name: 'Dialog',
        component: (resolve: any) => {
          require(['@@/docs/demo-dialog.vue'], resolve)
        }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'hash',
  routes
})
