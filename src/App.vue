<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  message = 'Hello!'
  hello = '123'
}
</script>

<style lang="scss"></style>
