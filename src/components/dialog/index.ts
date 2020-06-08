import Dialog from './src/index.vue'

interface dialog {
  alert: Function
  confirm: Function
  close: Function
  setDefaultOptions: Function
}

function isInDocument(element: Element) {
  return document.body.contains(element)
}

const DrDialog: any = {
  install: (Vue: any) => {
    const instance = new (Vue.extend(Dialog))()
    const defaultOptions = {
      showModel: false,
      type: '',
      title: '',
      primaryColor: '',
      content: '',
      showCancelButton: true,
      showConfirmButton: true,
      overlay: true,
      lockScroll: true,
      closeOnOverlay: false,
      closeOnPopState: true,
      cancelButton: '',
      confirmButton: ''
    }

    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    function resetOptions(cb?: Function) {
      Object.assign(instance, defaultOptions)
      cb && cb()
    }

    function initDialog(
      type: String,
      options: Object,
      initOptions: Object,
      promise: any
    ) {
      Object.assign(instance, type, options, initOptions, promise)

      if (typeof type === 'string') {
        instance.type = type
      }

      if (instance.closeOnOverlay) {
        setTimeout(() => {
          instance.$el.lastChild.addEventListener('click', () => {
            resetOptions()
          })
        }, 0)
      }

      if (instance.closeOnPopState) {
        window.addEventListener(
          'popstate',
          () => {
            resetOptions()
          },
          false
        )
      }

      if (!instance || !isInDocument(instance.$el)) {
        if (instance) {
          instance.$destroy()
        }
      }

      const { resolve, reject } = promise

      instance.handleConfirm = () => {
        resetOptions(resolve)
      }

      instance.handleCancel = () => {
        resetOptions(reject)
      }
    }

    const dialog: dialog = {
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

      confirm: (type: String, options: Object) => {
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
      },

      setDefaultOptions: (options: Object) => {
        Object.assign(instance, options)
      }
    }

    Vue.prototype.$dialog = dialog
  }
}

DrDialog.Component = Dialog

export default DrDialog
