import DrIcon from './src/index.vue'

;(DrIcon as any).install = function(Vue: any) {
  Vue.component('DrIcon', DrIcon)
}

export default DrIcon
