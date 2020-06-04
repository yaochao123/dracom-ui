<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class App extends Vue {
  mounted() {}
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
