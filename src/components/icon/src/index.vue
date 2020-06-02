<template>
  <div
    class="dr-icon"
    :style="iconSize"
  >
    <svg class="dr-icon-svg">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class DrIcon extends Vue {
  // 图标名称
  @Prop({ type: String, required: true }) name?: string

  // 图标大小
  @Prop({ type: [Number, String], required: false, default: '1em' }) size?:
    | number
    | string

  // 计算图标大小
  get iconSize() {
    return {
      width: Number(this.size) / 37.5 + 'rem',
      height: Number(this.size) / 37.5 + 'rem'
    }
  }
}
</script>

<style lang="scss" scoped>
.dr-icon {
  &-svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
</style>
