import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mobile/',
    name: 'mobile',
    component: (resolve: any) => {
      require(['@@/components/demo.vue'], resolve)
    },
    children: [
      {
        path: 'demo-button',
        name: 'Button',
        component: (resolve: any) => {
          require(['@@/docs/demo-button.vue'], resolve)
        }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
