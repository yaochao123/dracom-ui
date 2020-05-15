<template>
  <div id="app">
    <lq-button>默认按钮</lq-button>
    <lq-button type="danger">危险按钮</lq-button>
    <lq-button type="info">信息按钮</lq-button>
    <lq-button type="warning">警告按钮</lq-button>
    <lq-button
      disabled
      type="primary"
    >禁用按钮</lq-button>
    <lq-button plain>朴素按钮</lq-button>
    <lq-button color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246))">渐变按钮</lq-button>
    <lq-button
      miniRange
      type="primary"
    >小圆角按钮</lq-button>
    <lq-button
      larRange
      type="primary"
    >大圆角按钮</lq-button>
    <lq-button
      color="red"
      plain
    >单色按钮</lq-button>
    <lq-button icon="https://micro-store.oss-cn-hangzhou.aliyuncs.com/202004/583154291799101440.png">图标按钮</lq-button>
    <lq-button @click="handleClick">点击事件</lq-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Button from '../../src/components/button/src/index.vue'

@Component({
  components: {
    Button
  }
})
export default class App extends Vue {
  handleClick() {
    alert('点击了按钮')
  }
}
</script>

<style lang="scss" scoped>
#app {
  margin: 0 100px;
}
</style>
