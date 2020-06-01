<template>
  <div class="test-page">
    <dr-button large-range>小圆角按钮</dr-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
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
</style>
