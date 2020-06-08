import DrButton from './src/index.vue'
;(DrButton as any).install = (Vue: any) => {
  Vue.Component(DrButton.name, DrButton)
}

export default DrButton
