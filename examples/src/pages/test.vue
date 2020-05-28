<template>
  <div class="test-page">
    <dr-button type="primary" @click="handleClick">弹框按钮</dr-button>
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
    this.$dialog('success', {
      title: '测试标题',
      content: '代码是写给人看的',
      cancelButton: '关闭',
      confirmButton: '确定'
    })
      .then(() => {})
      .catch(() => {})
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
