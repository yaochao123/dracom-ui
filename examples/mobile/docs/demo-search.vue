<template>
  <div class="demo-search">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">基础用法</div>
      <dr-search v-model="searchVal"></dr-search>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">点击事件</div>
      <dr-search
        v-model="searchVal"
        button-text="确定"
        @click="handleClick"
      ></dr-search>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoSearch extends Vue {
  private searchVal = ''

  private handleClick() {
    this.$dialog
      .alert({
        title: '提示',
        content: `输入框当前内容：${this.searchVal}`,
        confirmButton: '确定'
      })
      .then(() => {})
  }
}
</script>

<style lang="scss" scoped>
</style>