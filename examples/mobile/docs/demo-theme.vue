<template>
  <div class="demo-button">
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">变更/清理该页面主题色</div>
      <div class="demo-button-row">
        <dr-button type="primary" @click="changeTheme">变更全局主题色</dr-button>
        <dr-button type="primary" @click="clearTheme">清理全局主题色</dr-button>
      </div>
    </div>
    <div class="doc-demo-block">
      <div class="doc-demo-block-title">变更/清理某内容下主题色</div>
      <div class="demo-button-row">
        <dr-button class="setion-btn" type="primary" @click="changeBtnTheme">变更按钮主题色</dr-button>
        <dr-button type="primary" @click="clearBtnTheme">清理按钮主题色</dr-button>
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
      '--dr-primary-color': '#ff5200'
    })
  }
  clearTheme() {
    this.$theme.clearStyle()
  }
  changeBtnTheme() {
    this.$theme.setStyle({
      '--dr-button-color-primary': '#223344',
      '--sd-w':'#123456'
    })
  }
  clearBtnTheme() {
    console.log(this.$theme.getStyle(['--dr-button-color-primary']))
  }
}
</script>