import DrButton from './src/index.vue'

;(DrButton as any).install = function(Vue: any) {
  Vue.component('DrButton', DrButton)
}

export default DrButton
