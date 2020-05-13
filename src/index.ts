import LqButton from './button/index'

const components = [LqButton]

const install = function(Vue: any) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue)
}

export default {
  version: '0.1.0',
  install,
  LqButton
}
