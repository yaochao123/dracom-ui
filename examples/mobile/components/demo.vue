<template>
  <div class="demo-page">
    <demo-nav></demo-nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DemoNav from './demo-nav.vue'

@Component({
  components: {
    DemoNav
  }
})
export default class Demo extends Vue {}
</script>

<style lang="scss">
.doc-demo-block {
  padding: 0 16px;
}

.doc-demo-block-title {
  padding: 20px 0;
  margin: 0;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}

// 按钮样式
.demo-button-row {
  margin-bottom: 12px;
}

button {
  margin-right: 16px;
}
</style>
