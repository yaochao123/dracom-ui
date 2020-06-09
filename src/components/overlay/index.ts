import DrOverlay from './src/index.vue'
;(DrOverlay as any).install = function(Vue: any) {
  Vue.component('DrOverlay', DrOverlay)
}

export default DrOverlay
