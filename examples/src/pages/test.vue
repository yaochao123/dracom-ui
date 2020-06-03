<template>
  <div class="test-page">
    <dr-button @click="handleClick" icon-font="success">按钮</dr-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TestPage extends Vue {
  handleClick() {
    this.$dialog
      .alert({
        type: 'success',
        title: '测试弹框',
        content: '这是测试弹框',
        confirmButton: '确定'
      })
      .then(() => {})
  }
}
</script>

<style lang="scss" scoped>
.test-page {
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: #ffffff;
}
</style>
