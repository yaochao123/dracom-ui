<template>
  <div class="test-page">
    <dr-button type="primary" @click="handleClick">弹框按钮</dr-button>
    <dr-dialog
      v-model="showDialog"
      type="success"
      title="弹框标题"
      content="您还未订购该功能，开通VIP套餐 即可使用哦～"
      cancel="关闭"
      confirm="确定"
      @confirm="confirm"
    ></dr-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DrDialog from '@src/dialog/src/index.vue'
import DrOverlay from '@src/overlay/src/index.vue'
@Component({
  components: {
    DrDialog,
    DrOverlay
  }
})
export default class TestPage extends Vue {
  private showDialog = false

  private handleClick() {
    this.showDialog = true
  }

  private confirm() {
    console.log(123)
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
