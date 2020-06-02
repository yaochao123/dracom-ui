<template>
  <div class="test-page">
    <dr-search></dr-search>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TestPage extends Vue {}
</script>

<style lang="scss" scoped>
.test-page {
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: #ffffff;
}
</style>
