import Vue from 'vue'

declare function install(vue: typeof Vue): void

declare class DrButton extends Vue {}
declare class DrLoading extends Vue {}

declare const _default: {
  install: typeof install
}

export { DrButton, DrLoading }

export default _default
