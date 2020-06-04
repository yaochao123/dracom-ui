# Loading 加载

### 引入

```js
import Vue from 'vue'
import { DrLoading } from 'dracom-ui'
Vue.use(DrLoading)
```

## 代码演示

### 加载类型

通过 type 属性可以设置加载图标类型，默认类型为`circular`，可选类型`spinner`

```html
<dr-loading></dr-loading> <dr-loading type="spinner"></dr-loading>
```

### 自定义颜色

通过`color`属性设置加载图标的颜色

```html
<dr-loading color="#33C0AF"></dr-loading>
<dr-loading type="spinner" color="#33C0AF"></dr-loading>
```

### 自定义大小

通过`size`属性设置加载图标的大小，单位为`px`

```html
<dr-loading size="40"></dr-loading>
<dr-loading type="spinner" size="40"></dr-loading>
```

### 加载文案

可以在图标右侧通过插槽插入加载文案

```html
<dr-loading>加载中...</dr-loading>
```

### 垂直排列

通过`vertical`属性设置图标和文案垂直排列

```html
<dr-loading vertical>加载中...</dr-loading>
<dr-loading type="spinner" vertical>加载中...</dr-loading>
```

## API

### Props

| 参数      | 说明                     | 类型               | 默认值     |
| --------- | ------------------------ | ------------------ | ---------- |
| type      | 类型，可选类型`spinner`  | _string_           | `circular` |
| color     | 颜色                     | _stirng_           | `#c9c9c9`  |
| size      | 加载图标大小，单位为`px` | _string \| number_ | `30px`     |
| text-size | 加载问题大小，单位为`px` | _string \| number_ | `14px`     |
| vertical  | 图标、文字垂直排列       | _boolean_          | `false`    |
