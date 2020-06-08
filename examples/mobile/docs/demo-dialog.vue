<template>
  <div class="demo-dialog">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">提示弹框</div>
      <dr-button type="primary" @click="alert">提示弹框</dr-button>
      <dr-button type="primary" @click="alertNoTitle"
        >提示弹框(无标题)</dr-button
      >
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">确认弹框</div>
      <dr-button type="primary" @click="confirm">确认弹框</dr-button>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">弹框类型</div>
      <dr-button type="primary" @click="success">成功弹框</dr-button>
      <dr-button type="primary" @click="fail">失败弹框</dr-button>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">自定义颜色</div>
      <dr-button type="primary" @click="primary">自定义颜色</dr-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoDialog extends Vue {
  /**
   * 提示弹框
   */
  private alert() {
    console.log(this.$dialog)
    this.$dialog
      .alert({
        title: '提示弹框',
        content: '这是一段弹出框的内容',
        confirmButton: '确定'
      })
      .then(() => {})
  }

  /**
   * 提示弹框(无标题)
   */
  private alertNoTitle() {
    this.$dialog
      .alert({
        content: '这是一段弹出框的内容',
        confirmButton: '确定'
      })
      .then(() => {})
  }

  /**
   * 确认弹框
   */
  private confirm() {
    this.$dialog
      .confirm({
        title: '确认弹框',
        content: '这是一段弹出框的内容',
        cancelButton: '取消',
        confirmButton: '确定'
      })
      .then(() => {})
      .catch(() => {})
  }

  /**
   * 成功弹框
   */
  private success() {
    this.$dialog
      .alert('success', {
        title: '成功弹框',
        content: '这是一段弹出框的内容',
        confirmButton: '确定'
      })
      .then(() => {})
  }

  /**
   * 失败弹框
   */
  private fail() {
    this.$dialog
      .alert('fail', {
        title: '失败弹框',
        content: '这是一段弹出框的内容',
        confirmButton: '确定'
      })
      .then(() => {})
  }

  /**
   * 自定义颜色
   */
  private primary() {
    this.$dialog
      .alert('success', {
        title: '自定义颜色',
        content: '这是一段弹出框的内容',
        primaryColor: '#409EFF',
        confirmButton: '确定'
      })
      .then(() => {})
  }
}
</script>

<style lang="scss" scoped></style>
