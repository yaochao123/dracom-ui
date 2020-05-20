<template>
  <div class="demo-button">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">按钮类型</div>
      <div class="demo-button-row">
        <dr-button>默认按钮</dr-button>
        <dr-button type="primary">默认按钮</dr-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Demo extends Vue {}
</script>

<style lang="scss" scoped></style>
