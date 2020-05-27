<template>
  <div class="test-page">
    <dr-loading type="spinner" size="40" color="red"></dr-loading>
    <dr-loading size="40" color="red"></dr-loading>
    <dr-button loading type="primary"></dr-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DrLoading from '@src/loading/src/index.vue'
import DrButton from '@src/button/src/index.vue'
@Component({
  components: {
    DrLoading,
    DrButton
  }
})
export default class TestPage extends Vue {}
</script>

<style lang="scss" scoped>
.test-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 375px;
}
</style>
