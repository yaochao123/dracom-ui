<template>
  <div id="app">
    <dr-button>默认按钮</dr-button>
    <dr-button type="danger">危险按钮</dr-button>
    <dr-button type="info">信息按钮</dr-button>
    <dr-button type="warning">警告按钮</dr-button>
    <dr-button disabled type="primary">禁用按钮</dr-button>
    <dr-button plain>朴素按钮</dr-button>
    <dr-button color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246))"
      >渐变按钮</dr-button
    >
    <dr-button miniRange type="primary">小圆角按钮</dr-button>
    <dr-button larRange type="primary">大圆角按钮</dr-button>
    <dr-button color="red" plain>单色按钮</dr-button>
    <dr-button icon="https://micro-store.oss-cn-hangzhou.aliyuncs.com/202004/583154291799101440.png"
      >图标按钮</dr-button
    >
    <dr-button @click="handleClick">点击事件</dr-button>
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
