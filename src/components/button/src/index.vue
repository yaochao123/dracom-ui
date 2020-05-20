<template>
  <button
    :disabled="disabled"
    class="dr-button"
    :class="[
      { 'dr-button-disabled': disabled },
      { 'dr-button-primary': type === 'primary' },
      { 'dr-button-danger': type === 'danger' },
      { 'dr-button-info': type === 'info' },
      { 'dr-button-warning': type === 'warning' },
      { 'dr-button-plain': plain },
      { 'dr-button-miniRange': miniRange },
      { 'dr-button-larRange': larRange }
    ]"
    :style="btnStyle"
    @click="handleBtnClick"
  >
    <img class="dr-button-icon" v-if="icon" :src="icon" alt="" />
    <span class="dr-button-text" :style="{ color: textColor }">
      {{ text }}
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

interface Style {
  color: string
  background: string
  borderColor: string
  border?: number
}

@Component({})
export default class drButton extends Vue {
  // 按钮内容
  @Prop({ type: String, required: false, default: '' }) text!: string

  // 是否禁用
  @Prop({ type: Boolean, required: false, default: false }) disabled!: boolean

  // 按钮颜色
  @Prop({ type: String, required: false, default: '' }) color!: string

  // 按钮文本颜色
  @Prop({ type: String, required: false, default: '' }) textColor!: string

  // 按钮类型(primary|danger|warning|info)
  @Prop({ type: String, required: false, default: '' }) type!: string

  // 朴素按钮
  @Prop({ type: Boolean, required: false, default: false }) plain!: boolean

  // 图标按钮
  @Prop({ type: String, required: false, default: '' }) icon!: string

  // 小圆角按钮
  @Prop({ type: Boolean, required: false, default: false }) miniRange!: false

  // 大圆角按钮
  @Prop({ type: Boolean, required: false, default: false }) larRange!: false

  // data
  private btnStyle: Style = {
    color: '',
    background: '',
    borderColor: ''
  }

  // 生命周期
  private created() {
    this.initButton()
  }

  // methods
  /**
   * 初始化按钮
   */
  private initButton() {
    if (this.color) {
      this.btnStyle.color = this.plain ? this.color : 'white'
      if (!this.plain) {
        this.btnStyle.background = this.color
      }
      if (this.color.indexOf('gradient') !== -1) {
        this.btnStyle.border = 0
      } else {
        this.btnStyle.borderColor = this.color
      }
    }
  }

  // emit
  /**
   * 点击按钮
   */
  @Emit('click') private handleBtnClick() {}
}
</script>

<style lang="scss" scoped>
@import '../../../style/mixin.scss';
@import '../../../style/color.scss';
.dr-button {
  @include flex($jus: center, $ali: center);
  position: relative;
  height: 44px;
  padding: 0 15px;
  outline: none;
  border: $border-width-base solid $border-color;
  color: #606060;
  background-color: $white;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  &:active::before {
    @include position($type: absolute, $t: 50%, $l: 50%, $tt: -50%, $tl: -50%);
    width: 100%;
    height: 100%;
    background-color: $black;
    border: inherit;
    border-color: $black;
    border-radius: inherit;
    opacity: 0.1;
    content: '';
  }

  &-primary {
    color: $white;
    background-color: $button-primary;
    border: $border-width-base solid $button-primary;
  }

  &-info {
    color: $white;
    background-color: $button-info;
    border: $border-width-base solid $button-info;
  }

  &-danger {
    color: $white;
    background-color: $button-danger;
    border: $border-width-base solid $button-danger;
  }

  &-warning {
    color: $white;
    background-color: $button-warning;
    border: $border-width-base solid $button-warning;
  }

  &-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &-plain {
    background-color: $white;
    font-weight: 400;
  }

  &-miniRange {
    border-radius: $border-radius-mini;
  }

  &-larRange {
    width: 100%;
    border-radius: $border-radius-larRange;
  }

  .dr-button-icon {
    width: 1em;
    height: 1em;
  }

  .dr-button-text {
    margin-left: 5px;
  }
}
</style>
