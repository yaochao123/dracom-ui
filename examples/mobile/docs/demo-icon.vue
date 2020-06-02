<template>
  <div class="demo-search">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">组件调用</div>
      <div class="dr-icon-wrapper">
        <dr-icon
          name="success"
          size="30"
          color="blue"
        ></dr-icon>
      </div>
      <div class="dr-icon-wrapper">
        <dr-icon
          name="fail"
          size="30"
          color="blue"
        ></dr-icon>
      </div>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">类名调用</div>
      <div class="dr-icon-wrapper">
        <i class="iconfont icon-search" />
      </div>
      <div class="dr-icon-wrapper">
        <i class="iconfont icon-delete" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoIcon extends Vue {}
</script>

<style lang="scss" scoped>
.dr-icon-wrapper {
  display: inline-block;
  margin-right: 20px;
}

.iconfont {
  font-size: 30px;
  color: #a2a2a2;
}
</style>