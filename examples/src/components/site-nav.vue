<template>
  <div class="site-nav" :style="style">
    <div class="site-nav-list" v-for="(item, index) in navData" :key="index">
      <ul class="site-nav-section">
        <p class="site-nav-title">{{ item.name }}</p>
        <li
          class="site-nav-item"
          :class="{
            'site-nav-item-active':
              item.id === activeId && innerIndex === activeIndex
          }"
          v-for="(innerItem, innerIndex) in item.children"
          :key="innerIndex"
          @click="goPage(innerItem.path, innerIndex, item.id)"
        >
          {{ innerItem.navName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { navData } from '../sideNav'
@Component({})
export default class SiteNav extends Vue {
  // 左侧导航数据
  private navData = navData
  // 左侧导航一级激活id
  private activeId = 0
  // 左侧导航二级激活索引
  private activeIndex = 0
  // 左侧导航距离顶部距离
  private top = 60

  // 刷新页面保持索引不变
  private created() {
    if (sessionStorage.getItem('activeId')) {
      this.activeId = Number(sessionStorage.getItem('activeId'))
      sessionStorage.removeItem('activeId')
    }
    if (sessionStorage.getItem('activeIndex')) {
      this.activeIndex = Number(sessionStorage.getItem('activeIndex'))
      sessionStorage.removeItem('activeIndex')
    }
    window.addEventListener('beforeunload', e => {
      sessionStorage.setItem('activeId', String(this.activeId))
      sessionStorage.setItem('activeIndex', String(this.activeIndex))
    })

    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  }

  /**
   *  浏览器前进后退左侧激活
   */
  @Watch('$route')
  get(newVal: any, oldVal: any) {
    const navData = [...this.navData],
      path = this.$route.path
    navData.forEach((v, i) => {
      v.children.forEach((vv, vi) => {
        if (newVal.path === vv.path) {
          this.activeId = v.id
          this.activeIndex = vi
        }
      })
    })
  }

  // computed
  /**
   * 计算左侧导航距离顶部距离
   */
  get style() {
    return {
      top: this.top + 'px'
    }
  }

  /**
   * 点击左侧导航
   * @param {String} path 跳转路由
   * @param {Number} index 二级激活索引
   * @param {Number} id 一级激活id
   */
  private goPage(path: string, index: number, id: number) {
    const currentPath = this.$route.path
    if (currentPath === path) return
    this.$router.push({ path })
    this.activeIndex = index
    this.activeId = id
  }

  /**
   * 监听页面滚动
   */
  onScroll() {
    const { pageYOffset: offset } = window
    this.top = Math.max(0, 60 - offset)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
@import '@/style/color.scss';
.site-nav {
  @include position($type: fixed, $t: 60px, $l: 0, $b: 0);
  background-color: #ffffff;
  width: 220px;
  padding: 24px 0;
  box-sizing: border-box;
  box-shadow: 0 8px 12px #ebedf0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: rgba(69, 90, 100, 0.2);
    }
  }
  .site-nav-list {
    margin-bottom: 16px;
    .site-nav-section {
      .site-nav-title {
        padding: 8px 0 8px 30px;
        color: $nav-color;
        font-weight: 500;
        font-size: 15px;
        line-height: 28px;
      }
      .site-nav-item {
        padding: 8px 0 8px 30px;
        color: $nav-color;
        font-size: 14px;
        line-height: 28px;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
        cursor: pointer;
        &:hover {
          color: $nav-color-active;
        }
        &-active {
          color: $nav-color-active;
        }
      }
    }
  }
}
</style>
