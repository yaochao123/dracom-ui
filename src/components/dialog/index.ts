import Dialog from './src/index.vue'

interface dialog {
  initDialog: Function
  alert: Function
  confirm: Function
  close: Function
  setDefaultOptions: Function
}

function isInDocument(element: Element) {
  return document.body.contains(element)
}

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

function resetOptions(element: any, cb?: Function) {
  Object.assign(element, defaultOptions)
  cb && cb()
}

const DrDialog: any = {
  install: (Vue: any) => {
    const DialogConstructor = Vue.extend(Dialog)

    const initDialog = (
      type: String,
      options: any,
      initOptions: Object,
      promise: any
    ) => {
      let instance = new DialogConstructor()
      instance.$mount(document.createElement('div'))
      document.body.appendChild(instance.$el)

      Object.assign(instance, type, options, initOptions, promise)

      if (typeof type === 'string') {
        instance.type = type
      }

      if (instance.closeOnOverlay) {
        setTimeout(() => {
          instance.$el.lastChild.addEventListener('click', () => {
            resetOptions(instance)
          })
        }, 0)
      }

      if (instance.closeOnPopState) {
        window.addEventListener(
          'popstate',
          () => {
            resetOptions(instance)
          },
          false
        )
      }

      const { resolve, reject } = promise

      instance.handleConfirm = () => {
        resetOptions(instance, resolve)
      }

      instance.handleCancel = () => {
        resetOptions(instance, reject)
      }
    }

    const dialog = {
      alert(type: String, options: any) {
        const alertOptions = {
          showModel: true,
          showCancelButton: false,
          showConfirmButton: true
        }
        return new Promise(resolve => {
          initDialog(type, options, alertOptions, { resolve })
        })
      },
      confirm(type: String, options: Object) {
        const confirmOptions = {
          showModel: true,
          showCancelButton: true,
          showConfirmButton: true
        }
        return new Promise((resolve, reject) => {
          initDialog(type, options, confirmOptions, {
            resolve,
            reject
          })
        })
      }
    }

    Vue.prototype.$dialog = dialog
  }
}

DrDialog.Component = Dialog

export default DrDialog
