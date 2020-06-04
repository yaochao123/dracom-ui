<template>
  <div class="dr-icon">
    <i
      :class="['iconfont', `icon-${name}`]"
      :style="[{ 'font-size': size + 'px' },{ 'color': color }]"
    ></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class DrIcon extends Vue {
  // 图标名称
  @Prop({ type: String, required: true }) name?: string

  // 图标大小
  @Prop({ type: [Number, String], required: false, default: '26' }) size?:
    | number
    | string

  // 图标颜色
  @Prop({ type: String, required: false }) color?: string
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
