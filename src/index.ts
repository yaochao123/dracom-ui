import './static/iconfont/iconfont.css'

import DrButton from './components/button/index'
import DrLoading from './components/loading/index'
import DrDialog from './components/dialog/index'
import DrOverlay from './components/overlay/index'
import DrSearch from './components/search/index'
import DrIcon from './components/icon/index'
import DrTab from './components/tab/index'
import DrTheme from './components/theme/index'

const components = [
  DrButton,
  DrLoading,
  DrDialog,
  DrOverlay,
  DrSearch,
  DrIcon,
  DrTab,
  DrTheme
]

const componentsName: string[] = [
  'DrButton',
  'DrLoading',
  'DrDialog',
  'DrOverlay',
  'DrSearch',
  'DrIcon',
  'DrTab',
  'DrTheme'
]

const install = function(Vue: any) {
  if ((install as any).installed) return
  components.forEach((component: any, i) => {
    if (component.install) {
      Vue.component(componentsName[i], component.Component)
      Vue.use(component)
    } else {
      Vue.component(componentsName[i], component)
    }
  })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default {
  install,
  ...components
}
