import DrDialog from './src/index.vue'

function isInDocument(element: Element) {
  return document.body.contains(element)
}

const Drdialog = {
  install: (Vue: any) => {
    const instance = new (Vue.extend(DrDialog))()

    const dialog = {
      alert: function(type: String, options: Object) {
        const args = arguments

        if (!instance || !isInDocument(instance.$el)) {
          if (instance) {
            instance.$destroy()
          }
        }

        instance.$mount(document.createElement('div'))
        document.body.appendChild(instance.$el)

        if (args.length === 1) {
          if (typeof args[0] === 'string') {
            instance.type = args[0]
          }
          if (typeof args[0] === 'object') {
            Object.assign(instance, args[0])
          }
        }
        if (args.length === 2) {
          instance.type = type
          Object.assign(instance, options)
        }
        instance.showModel = true

        return new Promise((resolve, reject) => {
          instance.handleConfirm = () => {
            instance.showModel = false
            resolve()
          }

          instance.handleCancel = () => {
            instance.showModel = false
            reject()
          }
        })
      },

      close: () => {
        instance.showModel = false
      }
    }

    Vue.prototype.$dialog = dialog.alert

    Vue.prototype.$dialog.alert = dialog.alert

    Vue.prototype.$dialog.close = dialog.close
  }
}

export default Drdialog
