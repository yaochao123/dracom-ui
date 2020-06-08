import Vue from 'vue'
import router from './router'
import App from './App.vue'
import '@/style/reset.css'
import '@src/style/variables.css'
// import 'dracom-ui/lib/index/style/.css'
// import Dracom from 'dracom-ui'
import Dracom from '../../src/index'

// css变量兼容
import 'mutationobserver-shim'
import cssVars from 'css-vars-ponyfill'
cssVars({
  watch: true
})

Vue.config.productionTip = false

Vue.use(Dracom)

/**
 * 父页面主题色修改
 */
window.onmessage = (e: any) => {
  const data = e.data
  if (
    data !== 'undefined' &&
    data.type !== 'webpackOk' &&
    data.type !== 'webpackErrors' &&
    data.type !== 'webpackInvalid'
  ) {
    let style = document.createElement('style')
    style.type = 'text/css'
    style.dataset.type = 'theme'
    style.appendChild(document.createTextNode(data))
    let head: any = document.querySelector('head')
    let finnalStyle = head.lastChild
    if (finnalStyle.dataset.type === 'theme') {
      head.removeChild(finnalStyle)
    }
    head.appendChild(style)
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
