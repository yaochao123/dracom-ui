<template>
  <div class="test-page">
    <dr-button type="primary" @click="handleClickBtn">弹框按钮</dr-button>
    <dr-button type="primary" @click="handleClickBtnNoTitle"
      >弹框按钮(无标题)</dr-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TestPage extends Vue {
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

<style lang="scss" scoped>
.test-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 375px;
}
</style>
