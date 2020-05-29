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

    const defaultOptions = {
      showModel: false,
      type: '',
      title: '',
      primaryColor: '#33C0AF',
      content: '',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButton: '',
      confirmButton: ''
    }

    function resetOptions() {
      Object.assign(instance, defaultOptions)
    }

    function initDialog(
      type: String,
      options: Object,
      initOptions: Object,
      promise: any
    ) {
      instance.$mount(document.createElement('div'))
      document.body.appendChild(instance.$el)

      if (typeof type === 'string') {
        instance.type = type
      }

      Object.assign(instance, type, options, initOptions)

      if (!instance || !isInDocument(instance.$el)) {
        if (instance) {
          instance.$destroy()
        }
      }

      const { resolve, reject } = promise

      instance.handleConfirm = () => {
        resolve()
        resetOptions()
      }

      instance.handleCancel = () => {
        reject()
        resetOptions()
      }
    }

    const dialog: Dialog = {
      alert: (type: String, options: Object) => {
        const alertOptions = {
          showModel: true,
          showCancelButton: false,
          showConfirmButton: true
        }
        return new Promise((resolve, reject) => {
          initDialog(type, options, alertOptions, { resolve, reject })
        })
      },

      confirm: function(type: String, options: Object) {
        const confirmOptions = {
          showModel: true,
          showCancelButton: true,
          showConfirmButton: true
        }
        return new Promise((resolve, reject) => {
          initDialog(type, options, confirmOptions, { resolve, reject })
        })
      },

      close: () => {
        instance.showModel = false
      }
    }

    Vue.prototype.$dialog = dialog
  }
}

export default Drdialog
