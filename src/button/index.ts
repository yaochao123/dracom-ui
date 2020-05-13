import LqButton from './src/index.vue'

LqButton.install = function(Vue) {
  Vue.component(LqButton.name, LqButton)
}

export default LqButton
