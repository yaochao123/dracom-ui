<template>
  <div class="dr-search">
    <input
      class="dr-search-input"
      type="text"
      placeholder="请输入搜索内容"
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class DrSearch extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../style/common.scss';
@import '../../../style/mixin.scss';
.dr-search {
  @include flex();

  &-input {
    box-sizing: border-box;
    padding: 8px 10px;
    @include flex($flex: 1);
    border: $search-input-border;
    height: $search-input-height;
    background-color: $search-input-background-color;
    border-radius: $search-input-border-radius;
    outline: none;
    font-size: $search-input-font-size;
    color: $search-input-color;

    &::-webkit-input-placeholder {
      font-size: $search-input-placeholder-font-size;
      color: $search-input-placeholder-color;
    }
  }
}
</style>