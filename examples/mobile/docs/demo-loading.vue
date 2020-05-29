<template>
  <div class="demo-loading">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">加载类型</div>
      <div class="demo-loading">
        <dr-loading></dr-loading>
      </div>
      <div class="demo-loading">
        <dr-loading type="spinner"></dr-loading>
      </div>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">自定义颜色</div>
      <div class="demo-loading">
        <dr-loading color="#33C0AF"></dr-loading>
      </div>
      <div class="demo-loading">
        <dr-loading type="spinner" color="#33C0AF"></dr-loading>
      </div>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">自定义大小</div>
      <div class="demo-loading">
        <dr-loading size="40"></dr-loading>
      </div>
      <div class="demo-loading">
        <dr-loading type="spinner" size="40"></dr-loading>
      </div>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">加载文案</div>
      <dr-loading>加载中...</dr-loading>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">垂直排列</div>
      <div class="demo-loading">
        <dr-loading vertical>加载中...</dr-loading>
      </div>
      <div class="demo-loading">
        <dr-loading type="spinner" vertical>加载中...</dr-loading>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoLoading extends Vue {}
</script>

<style lang="scss" scoped>
.demo-loading {
  display: inline-block;
  margin-right: 20px;
}
</style>
