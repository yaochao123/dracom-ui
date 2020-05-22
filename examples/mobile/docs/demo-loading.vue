<template>
  <div class="demo-loading">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">加载类型</div>
      <dr-loading></dr-loading>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">自义定颜色</div>
      <dr-loading color="#33C0AF"></dr-loading>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">自义定大小</div>
      <dr-loading size="30"></dr-loading>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoLoading extends Vue {}
</script>

<style lang="scss" scoped></style>
