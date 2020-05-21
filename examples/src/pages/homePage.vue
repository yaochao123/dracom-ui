<template>
  <div class="home-page">
    <!-- 头部 -->
    <site-header></site-header>
    <!-- 左侧导航 -->
    <site-nav></site-nav>
    <!-- 文档部分 -->
    <site-content>
      <router-view></router-view>
    </site-content>
    <!-- 展示框 -->
    <doc-simulator></doc-simulator>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SiteHeader from '@/components/site-header.vue'
import SiteNav from '@/components/site-nav.vue'
import SiteContent from '@/components/site-content.vue'
import DocSimulator from '@/components/doc-simulator.vue'

@Component({
  name: 'homePage',
  components: {
    SiteHeader,
    SiteNav,
    SiteContent,
    DocSimulator
  }
})
export default class HomePage extends Vue {}
</script>

<style lang="scss"></style>
