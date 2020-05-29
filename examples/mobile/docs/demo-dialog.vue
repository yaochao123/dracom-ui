<template>
  <div class="demo-dialog">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">提示弹框</div>
      <dr-button type="primary" @click="handleClickBtn">提示弹框</dr-button>
      <dr-button type="primary" @click="handleClickBtnNoTitle"
        >提示弹框(无标题)</dr-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoDialog extends Vue {
  private title = '标题'
  private content = '只有通过不断的学习和练习，才能变得更强'
  private confirmButton = '确定'

  /**
   * 提示弹框
   */
  handleClickBtn() {
    this.$dialog.alert({
      title: this.title,
      content: this.content,
      confirmButton: this.confirmButton
    })
  }

  /**
   * 提示弹框(无标题)
   */
  handleClickBtnNoTitle() {
    this.$dialog.alert({
      content: this.content,
      confirmButton: this.confirmButton
    })
  }
}
</script>

<style lang="scss" scoped></style>
