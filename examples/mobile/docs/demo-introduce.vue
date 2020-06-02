<template>
  <div class="demo-introduce">
    <div class="demo-introduce-title">
      <img
        class="demo-introduce-title-img"
        src="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
        alt=""
      />
      <span>DracomUI</span>
    </div>
    <h2 class="demo-introduce-doc">基于Vue移动端组件库</h2>
    <ul class="demo-introduce-list">
      <li
        class="demo-introduce-list-section"
        v-for="(item, index) in navList"
        :key="index"
      >
        <h3 class="demo-introduce-list-section-title">{{ item.name }}</h3>
        <div
          class="demo-introduce-list-section-item"
          v-for="(innerItem, innerIndex) in item.children"
          :key="innerIndex"
          @click="goPage(innerItem)"
        >
          {{ innerItem.navName }}
          <arrow-right></arrow-right>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ArrowRight from '../components/arrow-right.vue'
import { navData } from '../../src/router/sideNav'

@Component({
  components: {
    ArrowRight
  }
})
export default class DemoIntroduce extends Vue {
  // 组件列表
  private navList: any = []

  /**
   * created
   */
  private created() {
    this.navList = navData.slice(1)
  }

  /**
   * methods
   * 前往组件详情页
   */
  private goPage(data: any) {
    const path = data.path.split('/')[1]
    window.parent.postMessage(`${path}`, '*')
    this.$router.push({ path: `demo-${path}` })
  }
}
</script>

<style lang="scss" scoped>
.demo-introduce {
  padding: 46px 20px 20px;
  box-sizing: border-box;
  line-height: 1.2;
  &-title {
    display: flex;
    align-items: center;
    margin: 0 0 16px 16px;
    .demo-introduce-title-img {
      width: 32px;
    }
    span {
      margin-left: 16px;
      font-weight: 500;
      font-size: 30px;
    }
  }
  &-doc {
    margin: 0 0 40px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  &-list {
    &-section {
      &-title {
        margin: 24px 0 8px 16px;
        color: rgba(69, 90, 100, 0.6);
        font-size: 14px;
      }
      &-item {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        margin: 0 0 12px;
        padding-left: 20px;
        color: #323233;
        font-weight: 500;
        font-size: 14px;
        line-height: 40px;
        background: #f7f8fa;
        border-radius: 99px;
        -webkit-transition: background 0.3s;
        transition: background 0.3s;
        cursor: pointer;
        &:hover {
          background: darken(#f7f8fa, 3%);
        }

        &:active {
          background: darken(#f7f8fa, 6%);
        }
      }
    }
  }
}
</style>
