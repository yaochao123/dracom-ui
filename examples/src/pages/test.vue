<template>
  <div class="test-page">
    <dr-button color="red" material block @click="handleClick">按钮</dr-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TestPage extends Vue {
  mounted() {
    console.log(this.$dialog)
  }
  handleClick() {
    this.$dialog
      .alert({
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
  width: 375px;
}
</style>
