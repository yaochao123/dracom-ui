<template>
  <div class="test-page">
    <dr-button
      type="primary"
      icon="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
      >测试</dr-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DrLoading from '@src/loading/src/index.vue'
import DrButton from '@src/button/src/index.vue'
@Component({
  components: {
    DrLoading,
    DrButton
  }
})
export default class TestPage extends Vue {}
</script>

<style lang="scss" scoped>
.test-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 375px;
}
.loading-wrapper {
  width: 30px;
  height: 30px;
}
</style>
