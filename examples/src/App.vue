<template>
  <div id="app">
    <Button>默认按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button disabled type="primary">禁用按钮</Button>
    <Button plain>朴素按钮</Button>
    <Button color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246))">渐变按钮</Button>
    <Button miniRange type="primary">小圆角按钮</Button>
    <Button larRange type="primary">大圆角按钮</Button>
    <Button color="red" plain>单色按钮</Button>
    <Button icon="https://micro-store.oss-cn-hangzhou.aliyuncs.com/202004/583154291799101440.png"
      >图标按钮</Button
    >
    <Button @click="handleClick">点击事件</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Button from '../../src/button/src/index.vue'

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
