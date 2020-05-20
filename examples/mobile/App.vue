<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DemoPage from '@@/components/demo.vue'

@Component({
  components: {
    DemoPage
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: #ffffff;
  padding-bottom: 20px;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
