<template>
  <div class="site-header">
    <div class="header-left">
      <img
        class="header-left-icon"
        src="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
        alt
      />
      Dracom
    </div>
    <div class="header-right">
      <div class="set-theme">
        <p class="set-font">主题色</p>
        <div class="theme-preview-wrapper">
          <div
            class="theme-preview"
            :style="{
              background: colors.a
                ? `rgba(${colors.rgba.r},${colors.rgba.g},${colors.rgba.b},${colors.rgba.a})`
                : colors.hex
            }"
          ></div>
        </div>
        <div ref="popper" class="poper">
          <sketch-picker v-model="colors" @input="updateValue"></sketch-picker>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// @ts-ignore
import { Sketch } from 'vue-color'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

@Component({
  components: {
    'sketch-picker': Sketch
  }
})
export default class SiteHeader extends Vue {
  private colors: object = { hex: '#33c0af' }

  mounted() {
    tippy('.theme-preview', {
      trigger: 'click',
      arrow: false,
      content: this.$refs.popper as HTMLDivElement,
      interactive: true
    })
  }

  updateValue(val: any) {
    let rgba = `rgba(${val.rgba.r},${val.rgba.g},${val.rgba.b},${val.rgba.a})`
    this.addStyle(`:root{--dr-primary-color:${rgba}}`)
    this.addChildStyle(`:root{--dr-primary-color:${rgba}}`)
  }

  addStyle(content: string) {
    let style = document.createElement('style')
    style.type = 'text/css'
    style.dataset.type = 'theme'
    style.appendChild(document.createTextNode(content))
    let head = document.querySelector('head')
    let finnalStyle = head?.lastChild as HTMLStyleElement
    if (finnalStyle.dataset.type === 'theme') {
      head?.removeChild(finnalStyle)
    }
    head?.appendChild(style)
  }

  addChildStyle(content: string) {
    let style = document.createElement('style')
    style.type = 'text/css'
    style.dataset.type = 'theme'
    style.appendChild(document.createTextNode(content))
    let childHead = document
      .querySelector('iframe')
      ?.contentWindow?.document.querySelector('head')
    console.log(childHead)
    let childFinnalStyle = childHead?.lastChild as HTMLStyleElement
    if (childFinnalStyle.dataset.type === 'theme') {
      childHead?.removeChild(childFinnalStyle)
    }
    childHead?.appendChild(style)
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  @include flex($jc: space-between);
  background-color: #001938;
  height: 60px;
  padding: 0 30px;
  box-sizing: border-box;
  .header-left {
    @include flex;
    color: #ffffff;
    font-size: 20px;
    &-icon {
      width: 28px;
      height: 28px;
      margin-right: 10px;
    }
  }
  .header-right {
    .set-font {
      margin-right: 10px;
      font-size: 14px;
      color: #ffffff;
    }
    .set-theme {
      @include flex;
    }
    .theme-preview-wrapper {
      @include flex($jc: center);
      width: 34px;
      height: 34px;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #ccc;
      .theme-preview {
        width: 30px;
        height: 30px;
        border-radius: 2px;
        border: 1px solid #999;
        cursor: pointer;
      }
    }

    /deep/ .tippy-content {
      padding: 0;
    }
  }
}
</style>
