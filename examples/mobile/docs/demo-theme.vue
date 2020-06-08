<template>
  <div class="demo-button">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">变更/清理该页面默认按钮色</div>
      <div class="demo-button-row">
        <dr-button type="primary" @click="changeTheme">变更</dr-button>
        <dr-button type="primary" @click="clearTheme">清理</dr-button>
      </div>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">变更/清理某内容下默认按钮色（仅现代浏览器）</div>
      <div class="demo-button-row setion-btn">
        <dr-button type="primary" @click="changeBtnTheme">变更</dr-button>
        <dr-button type="primary" @click="clearBtnTheme">清理</dr-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoButton extends Vue {
  changeTheme() {
    this.$theme.setStyle({
      '--dr-button-color-primary': '#ff5200'
    })
  }
  clearTheme() {
    this.$theme.clearStyle()
  }
  changeBtnTheme() {
    this.$theme.setStyle(
      {
        '--dr-button-color-primary': '#223344'
      },
      '.setion-btn'
    )
  }
  clearBtnTheme() {
    this.$theme.clearStyle(['--dr-button-color-primary'], '.setion-btn')
  }
}
</script>