import Vue from 'vue'

interface dialog {
  alert: Function
  confirm: Function
  close: Function
  setDefaultOptions: Function
}

interface theme {
  setStyle: Function
  getStyle: Function
  clearStyle: Function
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: dialog
    $theme: theme
  }
}
