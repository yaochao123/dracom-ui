<template>
  <div class="test-page">
    <dr-button type="primary" @click="handleClickBtn">弹框按钮</dr-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TestPage extends Vue {
  private title = '标题'
  private content = '这是一段弹出框的内容'
  private confirmButton = '确定'

  /**
   * 提示弹框
   */
  handleClickBtn() {
    this.$dialog
      .confirm({
        title: this.title,
        content: this.content,
        confirmButton: this.confirmButton,
        cancelButton: '取消'
      })
      .then(() => {
        console.log(123)
      })
      .catch(() => {
        console.log(456)
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
