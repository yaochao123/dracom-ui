<template>
  <transition name="dr-overlay-fade">
    <div
      v-if="show"
      :class="['dr-overlay']"
      :style="{ 'z-index': zIndex }"
      @click="handleOverlay"
      @touchmove="touchMove"
    >
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { noop, preventDefault } from '../../../utils/index'

@Component({})
export default class DrOverlay extends Vue {
  // 是否显示遮罩
  @Prop({ type: Boolean, required: false, default: false }) show?: boolean

  // 层级
  @Prop({ type: [Number, String], required: false, default: 1000 }) zIndex?:
    | number
    | string

  // 是否禁止滚动
  @Prop({ type: Boolean, required: false, default: true }) lockScroll?: boolean

  private noop = noop
  private preventDefault = preventDefault

  /**
   * 判断是否触发禁止滚动
   */
  get touchMove() {
    return this.lockScroll ? this.preventDefault : noop
  }

  /**
   * 点击遮罩
   */
  handleOverlay() {
    this.$emit('click')
  }

  /**
   * 锁屏禁止滚动
   */
  preventTouchMove(event: Event) {
    preventDefault(event, true)
  }
}
</script>

<style lang="scss" scoped>
.dr-overlay {
  @include flex($jc: center);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--dr-overlay-zIndex);
  background-color: var(--dr-overlay-background-color);

  &-fade-enter-active,
  &-fade-leave-active {
    transition: opacity 0.3s;
  }

  &-fade-enter,
  &-fade-leave-to {
    opacity: 0;
  }
}
</style>
