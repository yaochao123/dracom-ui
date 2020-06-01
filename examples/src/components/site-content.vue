<template>
  <div class="site-content">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class SiteContent extends Vue {}
</script>

<style lang="scss">
@import '@/style/common.scss';
.site-content {
  margin: 0 390px 0 220px;
  padding: 30px;
  box-sizing: border-box;
  line-height: 1.5;
  color: #323233;

  .card {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: $doc-border-radius;
    box-shadow: 0 8px 12px #ebedf0;
    box-sizing: border-box;
  }

  pre {
    margin: 20px 0 0;
  }

  h1 {
    margin: 0 0 30px;
    font-size: 30px;
    cursor: default;
  }

  h2 {
    margin: 45px 0 20px;
    font-size: 22px;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 18px;
  }

  .hljs-params,
  .hljs-keyword,
  .hljs-attribute {
    color: #8080ff;
  }

  .hljs-string,
  .hljs-meta,
  .hljs-symbol,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-addition {
    color: #4fc08d;
  }

  .hljs-name,
  .hljs-attr {
    color: #4994df;
  }

  .hljs-literal {
    color: #eb6f6f;
  }

  code {
    color: #58727e;
    font-weight: 400;
    font-size: 13.4px;
    font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
    line-height: 26px;
    white-space: pre-wrap;
    word-wrap: break-word;
    -webkit-font-smoothing: auto;
  }

  p {
    color: #34495e;
    font-size: 14px;
    line-height: 26px;
  }

  p > code {
    font-size: 14px;
    display: inline;
    margin: 2px 3px;
    padding: 2px 5px;
    font-size: 13px;
    font-family: inherit;
    word-break: keep-all;
    background-color: #f0f2f5;
    border-radius: 4px;
    -webkit-font-smoothing: antialiased;
  }

  table {
    width: 100%;
    margin-top: 12px;
    color: #34495e;
    font-size: 13px;
    line-height: 1.5;
    border-collapse: collapse;
    th {
      padding: 8px 10px;
      font-weight: 500;
      text-align: left;
      &:first-child {
        padding-left: 0;
      }
      &:last-child th {
        padding-right: 0;
      }
    }
    td {
      padding: 8px;
      border-top: 1px solid #f1f4f8;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
    code {
      display: inline;
      margin: 2px 3px;
      padding: 2px 5px;
      font-size: 13px;
      font-family: inherit;
      word-break: keep-all;
      background-color: #f0f2f5;
      border-radius: 4px;
      -webkit-font-smoothing: antialiased;
    }
    em {
      color: #4fc08d;
      font-size: 12.5px;
      font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
      font-style: normal;
      -webkit-font-smoothing: auto;
    }
  }
}
</style>
