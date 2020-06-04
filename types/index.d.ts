import Vue from 'vue'

declare function install(vue: typeof Vue): void

declare class DrButton extends Vue {}
declare class DrLoading extends Vue {}
declare class DrDialog extends Vue {}
declare class DrOverlay extends Vue {}
declare class DrSearch extends Vue {}
declare class DrIcon extends Vue {}

declare const _default: {
  install: typeof install
}

export { DrButton, DrLoading, DrDialog, DrOverlay, DrSearch, DrIcon }

export default _default
