<template>
  <div
    class="doc-simulator"
    :class="{ 'doc-simulator-fixed': isFixed }"
  >
    <iframe
      :src="src"
      frameborder="0"
      :style="simulatorStyle"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DocSimulator extends Vue {
  // 页面header的高度，为0时展示框固定
  private top = 60

  // 基本路由，开发生产环境不同
  private baseUrl =
    process.env.NODE_ENV === 'development'
      ? '/mobile/'
      : 'https://wx.yinnima.com/dracomUI/mobile.html#/mobile/'

  private created() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  }

  /**
   * 展示框是否固定
   */
  get isFixed() {
    if (this.top <= 0) {
      return true
    }
    return false
  }

  get src() {
    const path = this.$route.path.split('/')[1]
    return this.baseUrl + `demo-${path}`
  }

  /**
   * iframe样式
   */
  get simulatorStyle() {
    const height = Math.min(640, window.innerHeight - 90)
    return {
      height: height + 'px'
    }
  }

  /**
   * 监听滚动
   */
  onScroll() {
    const { pageYOffset: offset } = window
    this.top = Math.max(0, 60 - offset)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
.doc-simulator {
  @include position($type: absolute, $t: 90px, $r: 30px);
  @media screen and (max-width: 1100px) {
    left: 750px;
  }
  z-index: 1;
  box-sizing: border-box;
  width: 360px;
  min-width: 360px;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #ffffff;
  border-radius: 12px;
  font-size: 16px;
  box-shadow: #ebedf0 0 4px 12px;
  height: calc(100vh - 95px);
  color: #323233;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
    Segoe UI, Arial, Roboto, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  &-fixed {
    position: fixed;
    top: 30px;
  }
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
