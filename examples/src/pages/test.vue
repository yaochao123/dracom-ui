<template>
  <div class="test-page">
    <dr-loading type="spinner" color="#33C0AF" size="40"></dr-loading>
    <dr-loading color="#33C0AF" size="40"></dr-loading>
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
