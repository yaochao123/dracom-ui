import Vue from 'vue'

declare function install(vue: typeof Vue): void

declare class LqButton extends Vue {}

declare const _default: {
  install: typeof install
}

export { LqButton }

export default _default
