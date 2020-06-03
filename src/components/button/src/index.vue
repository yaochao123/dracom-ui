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
      { 'dr-button-block': block },
      { 'dr-button-mini-range': miniRange },
      { 'dr-button-large-range': largeRange }
    ]"
    :style="btnStyle"
    @click="handleBtnClick"
  >
    <div class="dr-button-content">
      <!-- 是否显示加载状态 -->
      <div
        class="dr-button-loading"
        v-if="loading"
      >
        <dr-loading
          :size="loadingSize"
          isBtn
        ></dr-loading>
      </div>
      <!-- 是否显示图标 -->
      <img
        :class="['dr-button-icon', { 'dr-button-icon-margin-right': iconMr }]"
        v-if="icon"
        :src="icon"
        alt=""
      />
      <!-- 按钮文本 -->
      <span
        :class="['dr-button-text']"
        :style="{ color: textColor }"
        v-if="text"
      >
        {{ text }}
      </span>
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

  // 块级元素
  @Prop({ type: Boolean, required: false, default: false }) block!: boolean

  // 图标按钮
  @Prop({ type: String, required: false, default: '' }) icon!: string

  // 小圆角按钮
  @Prop({ type: Boolean, required: false, default: false }) miniRange!: false

  // 大圆角按钮
  @Prop({ type: Boolean, required: false, default: false }) largeRange!: false

  // 是否显示加载状态
  @Prop({ type: Boolean, required: false, default: false }) loading!: false

  // 加载图标大小
  @Prop({ type: [Number, String], required: false, default: 20 }) loadingSize!:
    | string
    | number

  // data
  private btnStyle: Style = {
    color: '',
    background: '',
    borderColor: ''
  }

  private iconMr: boolean = false

  /**
   * created
   */
  private created() {
    // 插槽有内容且有图标
    if (this.$slots.default && this.icon) {
      this.iconMr = true
    }
    this.initButton()
  }

  /**
   * methods
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
   * emit
   * 点击按钮
   */
  @Emit('click') private handleBtnClick() {}
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
  cursor: pointer;
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

  .dr-button-icon {
    width: 1em;
    height: 1em;
    &-margin-right {
      margin-right: 5px;
    }
  }
}
</style>
