<template>
  <div class="demo-nav">
    <div class="demo-nav-title">{{ title }}</div>
    <svg class="demo-nav-back" viewBox="0 0 1000 1000" @click="onBack">
      <path fill="#969799" fill-rule="evenodd" :d="path" />
    </svg>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DemoNav extends Vue {
  private path =
    'M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z'

  get title() {
    return this.$route.name
  }

  private onBack() {
    this.$router.go(-1)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
.demo-nav {
  position: relative;
  @include flex($jus: center, $ali: center);
  height: 56px;
  font-size: 17px;
  font-weight: 500;
  &-back {
    @include position($type: absolute, $t: 16px, $l: 16px);
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}
</style>
