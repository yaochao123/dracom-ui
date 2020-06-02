<template>
  <div class="dr-search">
    <div class="dr-search-input-wrapper">
      <input
        class="dr-search-input"
        type="text"
        placeholder="请输入搜索内容"
        :value="inputValue"
        @input="input($event)"
      />
      <i class="dr-search-input-search-icon iconfont icon-search"></i>
      <i
        class="dr-search-input-delete-icon iconfont icon-delete"
        v-show="inputValue"
        @click="clear"
      ></i>
    </div>
    <span
      class="dr-search-cancel"
      v-show="showButton"
      @click="handleClickBtn"
      >{{ buttonText }}</span
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class DrSearch extends Vue {
  // 是否显示右侧按钮
  @Prop({ type: Boolean, required: false, default: true }) showButton?: boolean

  // 右侧按钮内容
  @Prop({ type: String, required: false, default: '取消' }) buttonText?: string

  // 输入框绑定内容
  private inputValue = ''

  // 输入框内容发生变化
  input($event: any) {
    const value = $event.target.value
    this.inputValue = value
    this.$emit('input', value)
  }

  // 点击右侧按钮
  handleClickBtn() {
    this.$emit('click')
  }

  // 清楚输入框内容
  clear() {
    this.inputValue = ''
    this.$emit('input', '')
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common.scss';
@import '../../../style/mixin.scss';
.dr-search {
  @include flex($ali: center);

  &-input-wrapper {
    @include flex($flex: 1);
    position: relative;
  }

  &-input {
    @include flex($flex: 1);
    box-sizing: border-box;
    padding: 8px 10px;
    border: $search-input-border;
    height: $search-input-height;
    background-color: $search-input-background-color;
    border-radius: $search-input-border-radius;
    outline: none;
    font-size: $search-input-font-size;
    color: $search-input-color;
    padding: 0 30px;

    &::-webkit-input-placeholder {
      font-size: $search-input-placeholder-font-size;
      color: $search-input-placeholder-color;
    }
  }

  &-input-search-icon {
    position: absolute;
    top: 48%;
    left: 9px;
    transform: translateY(-50%);
    color: #a2a2a2;
    width: 14px;
    height: 14px;
  }

  &-input-delete-icon {
    position: absolute;
    top: 48%;
    right: 10px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    color: rgba(120, 120, 120, 0.7);
  }

  &-cancel {
    margin-left: 18px;
    font-size: $search-input-cancel-font-size;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: $search-input-cancel-font-weight;
    color: rgba(0, 0, 0, 1);
  }
}
</style>
