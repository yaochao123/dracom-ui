import Vue from 'vue'
import App from '@/App.vue'
import '@/style/reset.css'
import Dracom from 'dracom-ui'

Vue.config.productionTip = false

Vue.use(Dracom)
new Vue({
  render: h => h(App)
}).$mount('#app')
