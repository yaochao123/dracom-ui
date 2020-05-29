<template>
  <div class="demo-overlay">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">遮罩层</div>
      <dr-button type="primary" @click="handleClick">遮罩层</dr-button>
    </div>
    <dr-overlay :show.sync="showOverlay"></dr-overlay>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { DrDialog } from 'dracom-ui'

@Component({})
export default class DemoDialog extends Vue {
  private showOverlay = false

  private handleClick() {
    this.showOverlay = true
  }
}
</script>

<style lang="scss" scoped></style>
