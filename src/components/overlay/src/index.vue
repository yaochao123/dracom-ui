<template>
  <transition name="dr-overlay-fade">
    <div class="dr-overlay" v-if="show" @click="handleOverlay">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class DrOverlay extends Vue {
  // 是否显示遮罩
  @Prop({ type: Boolean, required: false, default: false }) show?: boolean

  /**
   * 点击遮罩
   */
  handleOverlay() {
    console.log(123)
    this.$emit('update:show', false)
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common.scss';
@import '../../../style/mixin.scss';
.dr-overlay {
  @include flex($jus: center, $ali: center);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $overlay-zIndex;
  background-color: $overlay-background-color;

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
