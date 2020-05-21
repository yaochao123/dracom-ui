<template>
  <span class="dr-loading" :style="fontStyle">
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" :stroke="color" fill="none"></circle>
    </svg>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class DrLoading extends Vue {
  // 颜色
  @Prop({ type: String, required: false, default: 'currentColor' })
  color!: string

  // 图标大小
  @Prop({ type: [String, Number], required: false, default: 20 }) size?:
    | string
    | number

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
  display: inline-block;
  svg {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 0;
    animation: dr-rotate 1.8s linear infinite;
    color: currentColor;
    circle {
      animation: dr-circular 1.5s ease-in-out infinite;
      color: currentColor;
      stroke-width: 3;
      stroke-linecap: round;
    }
  }

  @keyframes dr-circular {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40;
    }

    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120;
    }
  }
}
</style>
