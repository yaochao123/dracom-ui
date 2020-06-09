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

const Dracom = {
  install(Vue: any) {
    components.forEach(component => {
      Vue.use(component)
    })
  }
}

export default Dracom
