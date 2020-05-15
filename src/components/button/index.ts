import DrButton from './src/index.vue'
;(DrButton as any).install = function(Vue: any) {
  Vue.component(DrButton.name, DrButton)
}

export default DrButton
