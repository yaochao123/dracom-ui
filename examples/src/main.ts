import Vue from 'vue'
import router from './router'
import App from '@/App.vue'
import '@/style/reset.css'
// import Dracom from 'dracom-ui'
import Dracom from '../../src/index'

Vue.config.productionTip = false

Vue.use(Dracom)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
