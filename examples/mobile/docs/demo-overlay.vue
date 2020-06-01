<template>
  <div class="demo-overlay">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">基础用法</div>
      <dr-button type="primary" @click="() => (showOverlay = true)"
        >基础用法</dr-button
      >
    </div>
    <dr-overlay
      :show="showOverlay"
      @click="() => (showOverlay = false)"
    ></dr-overlay>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">嵌入内容</div>
      <dr-button type="primary" @click="() => (overlay = true)"
        >嵌入内容</dr-button
      >
      <dr-overlay :show="overlay" @click="() => (overlay = false)">
        <img
          src="https://micro-store.oss-cn-hangzhou.aliyuncs.com/202006/596876056249921536.jpg!crop_small"
          alt=""
        />
      </dr-overlay>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoDialog extends Vue {
  private showOverlay = false
  private overlay = false
}
</script>

<style lang="scss" scoped>
img {
  width: 120px;
  height: 120px;
}
</style>
