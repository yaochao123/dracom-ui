import DrDialog from './src/index.vue'

function isInDocument(element: Element) {
  return document.body.contains(element)
}

const Dialog = {}
;(Dialog as any).install = (Vue: any) => {
  const instance = new (Vue.extend(DrDialog))()

  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  const dialog = (type: String, options: Object) => {
    if (!instance || !isInDocument(instance.$el)) {
      instance.type = type
      instance.showModel = true
      return new Promise((resolve, reject) => {
        Object.assign(instance, options)
      })
    }
  }

  Vue.prototype.$dialog = dialog

  Vue.prototype.$dialog.close = () => {
    instance.showModel = false
  }
}

export default DrDialog
