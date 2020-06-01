# Overlay 遮罩层

### 引入

```js
import Vue from 'vue'
import { DrOverlay } from 'dracom-ui'

Vue.use(DrOverlay)
```

## 代码演示

### 基础用法

```html
<dr-button type="primary" @click="() => showOverlay = true">基础用法</dr-button>
<dr-overlay :show="showOverlay" @click="() => showOverlay = false"></dr-overlay>
```

```js
export default {
  data() {
    return {
      showOverlay: false
    }
  }
}
```

### 嵌入内容

通过默认插槽在遮罩层上嵌入内容

```html
<dr-button type="primary" @click="() => showOverlay = true">嵌入内容</dr-button>
<dr-overlay :show="overlay" @click="() => overlay = false">
  <img
    src="https://micro-store.oss-cn-hangzhou.aliyuncs.com/202006/596876056249921536.jpg!crop_small"
    alt=""
  />
</dr-overlay>
```

## API

### Props

| 参数        | 说明             | 类型             | 默认值  |
| ----------- | ---------------- | ---------------- | ------- |
| show        | 是否显示遮罩层   | _boolean_        | `false` |
| z-index     | 遮罩层层级       | _number\|string_ | `1`     |
| lock-scroll | 是否禁止屏幕滚动 | _boolean_        | `true`  |

### Events

| 事件名 | 说明       | 回掉参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，用于在遮罩层上方嵌入内容 |
