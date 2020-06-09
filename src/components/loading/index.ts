import DrLoading from './src/index.vue'
;(DrLoading as any).install = function(Vue: any) {
  Vue.component('DrLoading', DrLoading)
}

export default DrLoading
