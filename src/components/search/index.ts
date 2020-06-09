import DrSearch from './src/index.vue'
;(DrSearch as any).install = function(Vue: any) {
  Vue.component('DrSearch', DrSearch)
}

export default DrSearch
