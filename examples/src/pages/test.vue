<template>
  <div class="test-page">
    <dr-search
      v-model="searchVal"
      buttonText="确定"
      @click="handleClick"
    ></dr-search>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TestPage extends Vue {
  searchVal = ''

  handleClick() {
    console.log(this.searchVal)
  }
}
</script>

<style lang="scss" scoped>
.test-page {
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: #ffffff;
}
</style>
