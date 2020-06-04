import Vue from 'vue'
import router from './router/router'
import App from '@/App.vue'
import '@/style/reset.css'
import '@src/style/variables.css'
import Dracom from 'dracom-ui'
// import Dracom from '../../src/index'

// css变量兼容
import 'mutationobserver-shim'
import cssVars from 'css-vars-ponyfill'
cssVars({
  watch: true
})

Vue.config.productionTip = false

Vue.use(Dracom)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
