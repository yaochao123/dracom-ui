<template>
  <div class="test-page">
    <dr-tab></dr-tab>
    <dr-button color="red" material block>按钮</dr-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TestPage extends Vue {}
</script>

<style lang="scss" scoped></style>
