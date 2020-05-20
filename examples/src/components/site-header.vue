<template>
  <div class="site-header">
    <div class="header-left">
      <img
        class="header-left-icon"
        src="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
        alt=""
      >
      Dracom
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SiteHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
.site-header {
  @include flex($ali: center);
  background-color: #001938;
  height: 60px;
  padding: 0 30px;
  box-sizing: border-box;
  .header-left {
    @include flex($ali: center);
    color: #ffffff;
    font-size: 20px;
    &-icon {
      width: 28px;
      height: 28px;
      margin-right: 10px;
    }
  }
}
</style>