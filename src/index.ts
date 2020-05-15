import DrButton from './components/button/index'

const components = [DrButton]

const componentsName: string[] = ['DrButton']

const install = function(Vue: any) {
  if ((install as any).installed) return
  components.forEach((component: any, i) => {
    Vue.component(componentsName[i], component)
  })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default {
  install,
  DrButton
}
