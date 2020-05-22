<template>
  <div :class="['dr-loading', { 'dr-loading-vertical': vertical }]">
    <!-- circular加载样式 -->
    <div :class="['dr-loading-circular', className]" :style="fontStyle">
      <svg viewBox="25 25 50 50" :color="color">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </div>
    <span
      :class="['dr-loading-text', { 'dr-loading-text-vertical': vertical }]"
      :style="textStyle"
      :color="color"
      v-if="showText"
      ><slot
    /></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class DrLoading extends Vue {
  // 颜色
  @Prop({ type: String, required: false, default: 'currentColor' })
  color!: string

  // 图标大小
  @Prop({ type: [String, Number], required: false, default: 30 }) size?:
    | string
    | number

  // class类名，用于继承父组件颜色
  @Prop({ type: String, required: false, default: '' }) className?: string

  // 文字大小
  @Prop({ type: [Number, String], required: false, default: '14' }) textSize?:
    | number
    | string

  // 垂直排列
  @Prop({ type: Boolean, required: false, default: false }) vertical?: boolean

  /**
   * computed
   * 是否显示文本
   */
  get showText() {
    if (this.$slots.default) {
      return true
    }
    return false
  }

  /**
   * computed
   * 计算文本样式
   */
  get textStyle() {
    if (this.$slots.default && this.textSize) {
      if (typeof this.textSize === 'string') {
        const size =
          this.textSize.indexOf('px') !== -1
            ? this.textSize
            : this.textSize + 'px'
        return {
          fontSize: size
        }
      }
      if (typeof this.textSize === 'number') {
        return {
          fontSize: this.textSize + 'px'
        }
      }
    }
    return {
      fontSize: '14px'
    }
  }

  /**
   * computed
   * 计算加载图标样式
   */
  get fontStyle() {
    if (typeof this.size === 'string') {
      const size = this.size.indexOf('px') !== -1 ? this.size : this.size + 'px'
      return {
        width: size,
        height: size
      }
    }
    if (typeof this.size === 'number') {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/animation.scss';
.dr-loading {
  display: flex;
  align-items: center;

  &-vertical {
    flex-direction: column;
  }

  &-circular {
    display: inline-block;
    color: #c9c9c9;
    svg {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 0;
      animation: dr-rotate 1.8s linear infinite;
      circle {
        stroke: currentColor;
        animation: dr-circular 1.5s ease-in-out infinite;
        stroke-width: 3;
        stroke-linecap: round;
      }
    }
  }

  &-text {
    color: #c9c9c9;
    margin-left: 8px;

    &-vertical {
      margin: 8px 0 0 0;
    }
  }
}
</style>
