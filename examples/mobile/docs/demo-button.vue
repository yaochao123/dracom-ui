<template>
  <div class="demo-button">
    <div class="doc-demo-block">
      <!-- 按钮类型 -->
      <div class="doc-demo-block-title">按钮类型</div>
      <div class="demo-button-row">
        <dr-button>默认按钮</dr-button>
        <dr-button type="primary">默认按钮</dr-button>
        <dr-button type="info">信息按钮</dr-button>
      </div>
      <dr-button type="warning">警告按钮</dr-button>
      <dr-button type="danger">危险按钮</dr-button>
    </div>
    <div class="doc-demo-block">
      <!-- 禁用状态 -->
      <div class="doc-demo-block-title">禁用状态</div>
      <dr-button disabled type="primary">禁用状态</dr-button>
      <dr-button disabled type="danger">禁用状态</dr-button>
    </div>
    <div class="doc-demo-block">
      <!-- 圆角按钮 -->
      <div class="doc-demo-block-title">圆角按钮</div>
      <dr-button mini-range>小圆角按钮</dr-button>
      <dr-button large-range>大圆角按钮</dr-button>
    </div>
    <div class="doc-demo-block">
      <!-- 加载状态 -->
      <div class="doc-demo-block-title">加载状态</div>
      <dr-button type="info" loading></dr-button>
      <dr-button type="primary" loading>加载中...</dr-button>
    </div>
    <div class="doc-demo-block">
      <!-- 图标按钮 -->
      <div class="doc-demo-block-title">图标按钮</div>
      <dr-button
        icon="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
      ></dr-button>
      <dr-button
        icon="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
        >图标按钮</dr-button
      >
    </div>
    <div class="doc-demo-block">
      <!-- 自定义颜色 -->
      <div class="doc-demo-block-title">自定义颜色</div>
      <dr-button color="#33C0AF">单色按钮</dr-button>
      <dr-button color="#33C0AF" plain>单色按钮</dr-button>
      <dr-button
        color="linear-gradient(270deg,rgba(76,216,234,1) 0%,rgba(109,219,211,1) 100%)"
        >渐变色按钮</dr-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoButton extends Vue {}
</script>

<style lang="scss" scoped></style>
