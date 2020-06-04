<template>
  <button
    :class="[
      'dr-button',
      { 'dr-button-disabled': disabled },
      { 'dr-button-default': !material },
      { 'dr-button-primary': type === 'primary' },
      { 'dr-button-danger': type === 'danger' },
      { 'dr-button-info': type === 'info' },
      { 'dr-button-warning': type === 'warning' },
      { 'dr-button-plain': plain },
      { 'dr-button-block': block },
      { 'dr-button-mini-range': miniRange },
      { 'dr-button-large-range': largeRange }
    ]"
    :style="btnStyle"
    :disabled="disabled"
    @click="handleBtnClick"
  >
    <span
      class="dr-button-material"
      :style="{ top: y + 'px', left: x + 'px' }"
      v-if="material && showMaterial"
    ></span>
    <div class="dr-button-content">
      <!-- 加载状态 -->
      <div class="dr-button-loading" v-if="loading">
        <dr-loading :size="loadingSize" isBtn></dr-loading>
      </div>
      <!-- 图标 -->
      <img
        :class="['dr-button-icon', { 'dr-button-icon-margin-right': iconMr }]"
        :src="icon"
        alt
        v-if="icon"
      />
      <!-- 字体图标 -->
      <dr-icon
        :class="{ 'dr-button-icon-margin-right': iconMr }"
        :name="iconFont"
        :color="iconColor"
        :size="iconSize"
        v-if="iconFont"
      ></dr-icon>
      <!-- 按钮文本 -->
      <span :class="['dr-button-text']" :style="{ color: textColor }" v-if="text">{{ text }}</span>
      <!-- slot插槽 -->
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import DrLoading from '../../loading/src/index.vue'

interface Style {
  color: string
  background: string
  borderColor: string
  border?: number
}

@Component({
  components: {
    DrLoading
  }
})
export default class drButton extends Vue {
  // 按钮内容
  @Prop({ type: String, required: false }) text?: string

  // 是否禁用
  @Prop({ type: Boolean, required: false, default: false }) disabled!: boolean

  // 是否使用material风格
  @Prop({ type: Boolean, required: false, default: false }) material!: boolean

  // 按钮颜色
  @Prop({ type: String, required: false }) color?: string

  // 按钮文本颜色
  @Prop({ type: String, required: false }) textColor?: string

  // 按钮类型(primary|danger|warning|info)
  @Prop({ type: String, required: false }) type?: string

  // 朴素按钮
  @Prop({ type: Boolean, required: false, default: false }) plain!: boolean

  // 块级元素
  @Prop({ type: Boolean, required: false, default: false }) block!: boolean

  // 图标按钮
  @Prop({ type: String, required: false }) icon?: string

  // 字体图标
  @Prop({ type: String, required: false }) iconFont?: string

  // 字体图标颜色
  @Prop({ type: String, required: false, default: 'currentColor' })
  iconColor!: string

  @Prop({ type: [Number, String], required: false, default: '14' }) iconSize!:
    | number
    | string

  // 小圆角按钮
  @Prop({ type: Boolean, required: false, default: false })
  miniRange!: false

  // 大圆角按钮
  @Prop({ type: Boolean, required: false, default: false }) largeRange!: false

  // 是否显示加载状态
  @Prop({ type: Boolean, required: false, default: false }) loading!: false

  // 加载图标大小
  @Prop({ type: [Number, String], required: false, default: 20 }) loadingSize!:
    | string
    | number

  // 按钮样式
  private btnStyle: Style = {
    color: '',
    background: '',
    borderColor: ''
  }

  // 是否存在图标
  private iconMr = false

  // material风格
  private x = 0
  private y = 0
  private showMaterial = false
  private timer: any

  /**
   * created
   */
  private created() {
    // 插槽有内容且有图标
    if (this.$slots.default && (this.icon || this.iconFont)) {
      this.iconMr = true
    }
    this.initButton()
  }

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

  /**
   * 点击按钮
   */
  @Emit('click') private handleBtnClick(e: any) {
    if (this.material) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.showMaterial = true
      this.x = e.offsetX
      this.y = e.offsetY
      this.timer = setTimeout(() => {
        this.showMaterial = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.dr-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 44px;
  padding: 0 15px;
  outline: none;
  border: var(--dr-border-width-base) solid var(--dr-border-color);
  color: #606060;
  background-color: var(--dr-white);
  box-sizing: border-box;
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
  &-default {
    &:active::before {
      @include absolute(50%, 50%);
      width: 100%;
      height: 100%;
      background-color: var(--dr-black);
      border: inherit;
      border-color: var(--dr-black);
      border-radius: inherit;
      opacity: 0.1;
      content: '';
    }
  }

  &-material {
    position: absolute;
    transform: translate(-50%, -50%);
    animation: move 0.5s linear infinite;
    border-radius: 50%;
    pointer-events: none;
    background-color: #fff;
  }

  &-content {
    @include flex($jc: center);
    height: inherit;
  }

  &-primary {
    color: var(--dr-white);
    background-color: var(--dr-button-color-primary);
    border: var(--dr-border-width-base) solid var(--dr-button-color-primary);
  }

  &-info {
    color: var(--dr-white);
    background-color: var(--dr-button-color-info);
    border: var(--dr-border-width-base) solid var(--dr-button-color-info);
  }

  &-danger {
    color: var(--dr-white);
    background-color: var(--dr-button-color-danger);
    border: var(--dr-border-width-base) solid var(--dr-button-color-danger);
  }

  &-warning {
    color: var(--dr-white);
    background-color: var(--dr-button-color-warning);
    border: var(--dr-border-width-base) solid var(--dr-button-color-warning);
  }

  &-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &-plain {
    background-color: var(--dr-white);
    font-weight: 400;
  }

  &-block {
    width: 100%;
    display: block;
  }

  &-mini-range {
    border-radius: var(--dr-border-radius-md);
  }

  &-large-range {
    border-radius: var(--dr-border-radius-xl);
  }

  &-loading {
    margin-right: 5px;
  }

  &-icon {
    width: 14px;
    height: 14px;
    &-margin-right {
      margin-right: 5px;
    }
  }

  @keyframes move {
    from {
      width: 0;
      height: 0;
      opacity: 0.7;
    }
    to {
      width: 1000px;
      height: 1000px;
      opacity: 0;
    }
  }
}
</style>
