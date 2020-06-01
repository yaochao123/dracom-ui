<template>
  <div class="test-page">
    <dr-button large-range @click="handleClick">小圆角按钮</dr-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TestPage extends Vue {
  handleClick() {
    this.$dialog
      .alert({
        title: '测试弹框',
        content: '这是测试弹框',
        confirmButton: '知道了'
      })
      .then(() => {})
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
