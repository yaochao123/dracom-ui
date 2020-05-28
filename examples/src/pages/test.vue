<template>
  <div class="test-page">
    <dr-button type="primary" @click="handleClick">弹框按钮</dr-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class TestPage extends Vue {
  private handleClick() {}
}
</script>

<style lang="scss" scoped>
.test-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 375px;
}
</style>
