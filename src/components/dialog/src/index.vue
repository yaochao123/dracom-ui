<template>
  <div>
    <transition name="dr-dialog-bounce">
      <div class="dr-dialog" v-if="showModel">
        <!-- 弹框标题 -->
        <div
          :class="['dr-dialog-title', { 'dr-dialog-title-only': !content }]"
          v-if="title || type"
        >
          <dr-dialog-icon :color="primaryColor" :type="type" v-if="type">
          </dr-dialog-icon>
          {{ title }}
        </div>
        <!-- 弹框内容 -->
        <div
          :class="[
            'dr-dialog-content',
            { 'dr-dialog-content-no-title': !title && !type }
          ]"
          v-html="content"
          v-if="content"
        ></div>
        <!-- 弹框按钮 -->
        <div
          class="dr-dialog-button"
          v-if="showCancelButton || showConfirmButton"
        >
          <div
            v-if="showCancelButton"
            :class="[
              'dr-dialog-button-cancel',
              { 'dr-dialog-button-only': !showConfirmButton }
            ]"
            :style="[
              { border: `1px solid ${primaryColor}` },
              { color: primaryColor }
            ]"
            @click="handleCancel"
          >
            {{ cancelButton }}
          </div>
          <div
            v-if="showConfirmButton"
            :class="[
              'dr-dialog-button-confirm',
              { 'dr-dialog-button-only': !showCancelButton }
            ]"
            :style="[{ backgroundColor: primaryColor }]"
            @click="handleConfirm"
          >
            {{ confirmButton }}
          </div>
        </div>
      </div>
    </transition>
    <!-- 遮罩 -->
    <dr-overlay
      :show="showModel && overlay"
      :lock-scroll="lockScroll"
      @click="handleOverlay"
    ></dr-overlay>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import DrDialogIcon from '../components/dr-dialog-icon.vue'
import DrOverlay from '../../overlay/src/index.vue'

Component.registerHooks(['beforeRouteLeave'])
@Component({
  components: {
    DrDialogIcon,
    DrOverlay
  }
})
export default class Dialog extends Vue {
  // 是否显示弹框
  @Model('handleClick', { type: Boolean }) showModel?: boolean

  // 图标类型
  @Prop({ type: String, required: false, default: '' }) type?: string

  // 标题内容
  @Prop({ type: String, required: false, default: '' }) title?: string

  // 主题色
  @Prop({ type: String, required: false, default: '#33C0AF' })
  primaryColor?: string

  // 正文内容
  @Prop({ type: String, required: false, default: '' }) content?: string

  // 是否显示取消按钮
  @Prop({ type: Boolean, required: false, default: true })
  showCancelButton?: boolean

  // 是否显示确认按钮
  @Prop({ type: Boolean, required: false, default: true })
  showConfirmButton?: boolean

  // 是否显示遮罩层
  @Prop({ type: Boolean, required: false, default: true }) overlay?: boolean

  // 是否禁止背景滚动
  @Prop({ type: Boolean, required: false, default: true }) lockScroll?: boolean

  // 点击遮罩层关闭弹框
  @Prop({ type: Boolean, required: false, default: false })
  closeOnOverlay?: boolean

  @Prop({ type: Boolean, required: false, default: true })
  closeOnPopState?: boolean

  // 关闭按钮内容
  @Prop({ type: String, required: false, default: '' }) cancelButton?: string

  //确定按钮内容
  @Prop({ type: String, required: false, default: '' }) confirmButton?: string

  /**
   * 点击关闭按钮
   */
  private handleCancel() {
    this.$emit('handleClick', false)
    this.$emit('cancel')
  }

  /**
   * 点击确认按钮
   */
  private handleConfirm() {
    this.$emit('handleClick', false)
    this.$emit('confirm')
  }

  // 点击遮罩层
  private handleOverlay() {
    if (this.closeOnOverlay) {
      this.$emit('handleClick', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.dr-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  background-color: var(--dr-dialog-background-color);
  border-radius: var(--dr-dialog-border-radius);
  padding: 36px 24px 22px 24px;
  box-sizing: border-box;
  transform: translate3d(-50%, -50%, 0);
  transition: 0.3s;
  transition-property: transform, opacity;
  z-index: 2001;

  &-title {
    @include flex($jc: center);
    font-size: var(--dr-dialog-title-size);
    color: var(--dr-dialog-title-color);
    font-weight: var(--dr-dialog-title-weight);
    &-only {
      margin-bottom: 20px;
    }
  }

  &-content {
    @include flex($jc: center);
    margin: 20px 0 31px 0;
    font-size: var(--dr-dialog-content-size);
    color: var(--dr-dialog-content-color);
    line-height: 20px;
    text-align: center;
    &-no-title {
      margin-top: 0;
    }
  }

  &-button {
    @include flex($jc: space-between);
    &-cancel,
    &-confirm {
      @include flex($jc: center);
      height: 36px;
      border-radius: var(--dr-dialog-button-radius);
      font-size: var(--dr-dialog-button-size);
      font-weight: var(--dr-dialog-button-weight);
      width: 114px;
      cursor: pointer;
    }
    &-confirm {
      color: var(--dr-dialog-button-confirm-color);
    }

    &-only {
      flex: 1;
      height: 44px;
    }
  }

  &-bounce-enter {
    transform: translate3d(-50%, -50%, 0) scale(0.7);
    opacity: 0;
  }

  &-bounce-leave-active {
    transform: translate3d(-50%, -50%, 0) scale(0.9);
    opacity: 0;
  }
}
</style>
