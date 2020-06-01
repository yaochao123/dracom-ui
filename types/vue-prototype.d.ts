import Vue from 'vue'

interface dialog {
  alert: Function
  confirm: Function
  close: Function
  setDefaultOptions: Function
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: dialog
  }
}
