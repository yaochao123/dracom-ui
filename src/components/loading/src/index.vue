<template>
  <div
    :class="[
      'dr-loading',
      { 'dr-loading-vertical': vertical },
      { 'dr-loading-button': isBtn }
    ]"
  >
    <!-- circular加载样式 -->
    <div
      :class="['dr-loading-circular']"
      v-if="type === 'circular'"
      :style="fontStyle"
    >
      <svg viewBox="25 25 50 50" :color="color">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </div>
    <!-- spinner加载样式 -->
    <div
      class="dr-loading-spinner"
      v-if="type === 'spinner'"
      :style="[fontStyle, { color: color }]"
    >
      <i v-for="line in 12" :key="line"></i>
    </div>
    <!-- 加载文字 -->
    <span
      :class="['dr-loading-text', { 'dr-loading-text-vertical': vertical }]"
      :color="color"
      :style="textStyle"
      v-if="showText"
    >
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class DrLoading extends Vue {
  // 类型
  @Prop({ type: String, required: false, default: 'circular' }) type!: string

  // 颜色
  @Prop({ type: String, required: false, default: 'currentColor' })
  color!: string

  // 图标大小
  @Prop({ type: [String, Number], required: false, default: 30 }) size!:
    | string
    | number

  // 文字大小
  @Prop({ type: [Number, String], required: false, default: '14' }) textSize!:
    | number
    | string

  // 垂直排列
  @Prop({ type: Boolean, required: false, default: false }) vertical!: boolean

  // 是否是在按钮中使用
  @Prop({ type: Boolean, required: false, default: false }) isBtn?: boolean

  /**
   * 是否显示文本
   */
  get showText() {
    if (this.$slots.default) {
      return true
    }
    return false
  }

  /**
   * 计算文本样式
   */
  get textStyle() {
    if (this.$slots.default && this.textSize) {
      const size = this.textSize
      return {
        fontSize: Number(size) / 37.5 + 'rem'
      }
    }
    return {
      fontSize: '0.374rem'
    }
  }

  /**
   * computed
   * 计算加载图标样式
   */
  get fontStyle() {
    const size = this.size
    return {
      width: Number(size) / 37.5 + 'rem',
      height: Number(size) / 37.5 + 'rem'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/animation.scss';
.dr-loading {
  display: flex;
  align-items: center;
  color: #c9c9c9;

  &-vertical {
    flex-direction: column;
  }

  &-circular {
    display: inline-block;
    color: currentColor;
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

  &-spinner {
    position: relative;
    width: 30px;
    height: 30px;
    color: currentColor;
    animation: dr-rotate 0.8s linear infinite;
    animation-timing-function: steps(12);
    @for $i from 1 through 12 {
      i {
        &:nth-child(#{$i}) {
          transform: rotate($i * 30deg);
          opacity: 1 - (0.75 / 12) * ($i - 1);
        }
      }
    }
    i {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &::before {
        display: block;
        width: 2px;
        height: 25%;
        margin: 0 auto;
        background-color: currentColor;
        border-radius: 40%;
        content: '';
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

  &-button {
    color: inherit;
  }
}
</style>
