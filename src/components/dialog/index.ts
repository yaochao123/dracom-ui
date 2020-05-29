import DrDialog from './src/index.vue'

interface Dialog {
  alert: Function
  confirm: Function
  close: Function
}

function isInDocument(element: Element) {
  return document.body.contains(element)
}

const Drdialog = {
  install: (Vue: any) => {
    const instance = new (Vue.extend(DrDialog))()

    function initDialog(type: String, options: Object, initOptions: Object) {
      instance.$mount(document.createElement('div'))
      document.body.appendChild(instance.$el)

      if (typeof type === 'string') {
        instance.type = type
      }

      Object.assign(instance, type, options, initOptions)

      return new Promise((resolve, reject) => {
        if (!instance || !isInDocument(instance.$el)) {
          if (instance) {
            instance.$destroy()
          }
        }

        instance.handleConfirm = () => {
          instance.showModel = false
          resolve()
        }

        instance.handleCancel = () => {
          instance.showModel = false
          reject()
        }
      })
    }

    const dialog: Dialog = {
      alert: (type: String, options: Object) => {
        const alertOptions = {
          showModel: true,
          showCancelButton: false,
          showConfirmButton: true
        }

        initDialog(type, options, alertOptions)
      },

      confirm: function(type: String, options: Object) {
        const confirmOptions = {
          showModel: true,
          showCancelButton: true,
          showConfirmButton: true
        }

        initDialog(type, options, confirmOptions)
      },

      close: () => {
        instance.showModel = false
      }
    }

    Vue.prototype.$dialog = dialog
  }
}

export default Drdialog
