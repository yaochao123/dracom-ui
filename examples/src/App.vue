<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  private mounted() {
    window.onmessage = (e: any) => {
      const data = e.data
      if (
        data &&
        data.type !== 'webpackOk' &&
        data.type !== 'webpackErrors' &&
        data.type !== 'webpackInvalid'
      ) {
        const currentPath = this.$route.path.split('/')[1]
        if (currentPath !== data) {
          if (data.indexOf('webpackHotUpdate') === -1) {
            this.$router.replace({ path: `/${data}` })
          }
        }
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
  min-width: 1100px;
  background-color: #f7f8fa;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
</style>
