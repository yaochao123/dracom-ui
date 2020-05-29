import DrButton from './components/button/index'
import DrLoading from './components/loading/index'
import DrDialog from './components/dialog/index'
import DrOverlay from './components/overlay/index'

const components = [DrButton, DrLoading, DrDialog, DrOverlay]

const componentsName: string[] = [
  'DrButton',
  'DrLoading',
  'DrDialog',
  'DrOverlay'
]

const install = function(Vue: any) {
  if ((install as any).installed) return
  components.forEach((component: any, i) => {
    Vue.component(componentsName[i], component)
    component.install && Vue.use(component)
  })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default {
  install,
  DrButton,
  DrLoading,
  DrDialog,
  DrOverlay
}
