import DrButton from './components/button/index'
import DrLoading from './components/loading/index'

const components = [DrButton, DrLoading]

const componentsName: string[] = ['DrButton', 'DrLoading']

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
  DrButton,
  DrLoading
}
