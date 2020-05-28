<template>
  <div>
    <transition name="dr-dialog-bounce">
      <div class="dr-dialog" v-if="showModel">
        <!-- 弹框标题 -->
        <div class="dr-dialog-title">
          <dr-dialog-icon :color="primaryColor" :type="type" v-if="type"
            >{{ title }}
          </dr-dialog-icon>
        </div>
        <!-- 弹框内容 -->
        <div class="dr-dialog-content" v-html="content" v-if="content"></div>
        <!-- 弹框按钮 -->
        <div class="dr-dialog-button">
          <div
            v-if="cancel"
            class="dr-dialog-button-cancel"
            :style="[
              { border: `1px solid ${primaryColor}` },
              { color: primaryColor }
            ]"
            @click="handleCancel"
          >
            {{ cancel }}
          </div>
          <div
            v-if="confirm"
            :class="[
              'dr-dialog-button-confirm',
              { 'dr-dialog-button-confirm-only': !cancel }
            ]"
            :style="[{ backgroundColor: primaryColor }]"
            @click="handleConfirm"
          >
            {{ confirm }}
          </div>
        </div>
      </div>
    </transition>
    <!-- 遮罩 -->
    <dr-overlay :show="showModel"></dr-overlay>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator'
import DrDialogIcon from '../components/dr-dialog-icon.vue'
import DrOverlay from '../../overlay/src/index.vue'

@Component({
  components: {
    DrDialogIcon,
    DrOverlay
  }
})
export default class DrDialog extends Vue {
  // 是否显示弹框
  @Model('handleClick', { type: Boolean }) showModel?: boolean

  // 图标类型
  @Prop({ type: String, required: false, default: '' }) type?: string

  // 标题内容
  @Prop({ type: String, required: false, default: '标题' }) title?: string

  // 主题色
  @Prop({ type: String, required: false, default: '#33C0AF' })
  primaryColor?: string

  // 正文内容
  @Prop({ type: String, required: false, default: '' }) content?: string

  // 关闭按钮内容
  @Prop({ type: String, required: false, default: '' }) cancel?: string

  //确定按钮内容
  @Prop({ type: String, required: false, default: '' }) confirm?: string

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
}
</script>

<style lang="scss" scoped>
@import '../../../style/mixin.scss';
@import '../../../style/common.scss';
.dr-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  background-color: $dialog-background-color;
  border-radius: $dialog-border-radius;
  padding: 36px 24px 22px 24px;
  box-sizing: border-box;
  transform: translate3d(-50%, -50%, 0);
  transition: 0.3s;
  transition-property: transform, opacity;
  z-index: 2001;

  &-title {
    @include flex($jus: center, $ali: center);
    font-size: $dialog-title-size;
    color: $dialog-title-color;
    font-weight: $dialog-title-weight;
  }

  &-content {
    @include flex($jus: center);
    margin: 20px 0 31px 0;
    font-size: $dialog-content-size;
    color: $dialog-content-color;
    line-height: 20px;
    text-align: center;
  }

  &-button {
    @include flex($jus: space-between);
    &-cancel,
    &-confirm {
      @include flex($jus: center, $ali: center);
      height: 36px;
      border-radius: $dialog-button-radius;
      font-size: $dialog-button-size;
      font-weight: $dialog-button-weight;
      width: 114px;
      cursor: pointer;
    }
    &-confirm {
      color: $dialog-button-confirm-color;
      &-only {
        flex: 1;
        height: 44px;
      }
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
