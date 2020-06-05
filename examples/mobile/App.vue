<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  created() {
    /**
     * 父页面主题色修改
     */
    window.onmessage = (e: any) => {
      const data = e.data
      if (
        data !== 'undefined' &&
        data.type !== 'webpackOk' &&
        data.type !== 'webpackErrors' &&
        data.type !== 'webpackInvalid'
      ) {
        this.$theme.setStyle(data)
      }
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 37.5px !important;
}

#app {
  min-height: calc(100vh - 20px);
  background-color: #ffffff;
  padding-bottom: 20px;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
* {
  box-sizing: border-box;
}
</style>
