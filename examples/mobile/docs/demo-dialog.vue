<template>
  <div class="demo-dialog">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">提示弹框</div>
      <dr-button type="primary" @click="handleClickBtn">提示弹框</dr-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoDialog extends Vue {
  handleClickBtn() {
    this.$dialog('success', {
      title: '标题',
      content: '代码是写出来给人看的，附带在机器上运行',
      confirmButton: '确定'
    })
  }
}
</script>

<style lang="scss" scoped></style>
