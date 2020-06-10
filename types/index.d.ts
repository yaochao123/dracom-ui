import Vue from 'vue'
import { DrComponent } from './component'

declare function install(vue: typeof Vue): void

declare class DrButton extends DrComponent {}
declare class DrLoading extends DrComponent {}
declare class DrDialog extends DrComponent {}
declare class DrOverlay extends DrComponent {}
declare class DrSearch extends DrComponent {}
declare class DrIcon extends DrComponent {}
declare class DrTab extends DrComponent {}
declare class DrTheme extends DrComponent {}

declare const _default: {
  install: typeof install
}

export {
  DrButton,
  DrLoading,
  DrDialog,
  DrOverlay,
  DrSearch,
  DrIcon,
  DrTab,
  DrTheme
}

export default _default
