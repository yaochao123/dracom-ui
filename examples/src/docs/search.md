# Search 搜索框

### 介绍

用于在页面顶部进行搜索功能

### 引入

```js
import Vue from 'vue'
import { DrSearch } from 'dracom-ui'

Vue.use(DrSearch)
```

## 代码演示

### 基础用法

```html
<dr-search v-model="searchVal"></dr-search>
```

```js
export default {
  data() {
    return {
      searchVal: ''
    }
  }
}
```

### 点击事件

```html
<dr-search
  v-model="searchVal"
  button-text="确定"
  @click="handleClick"
></dr-search>
```

## API

### Props

| 参数        | 说明             | 类型      | 默认值           |
| ----------- | ---------------- | --------- | ---------------- |
| button-text | 右侧按钮内容     | _string_  | `取消`           |
| placeholder | 占位内容         | _string_  | `请输入搜索内容` |
| show-button | 是否显示右侧按钮 | _boolean_ | `true`           |

### Events

| 事件名 | 说明                     | 回调参数                      |
| ------ | ------------------------ | ----------------------------- |
| input  | 输入框内容发生变化时触发 | _value: String(当前输入的值)_ |
| click  | 点击右侧按钮时触发       | _event: Event_                |
