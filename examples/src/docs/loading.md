# Loading 加载

### 引入

```js
import Vue from 'vue'
import { DrLoading } from 'dracom-ui'

Vue.use(DrLoading)
```

## 代码演示

### 加载类型

通过 type 属性可以设置加载图标类型，目前仅支持`circular`

```html
<dr-loading></dr-loading>
```

### 自定义颜色

通过`color`属性设置加载图标的颜色

```html
<dr-loading color="#33C0AF"></dr-loading>
```

### 自定义大小

通过`size`属性设置加载图标的大小，单位为`px`

```html
<dr-loading size="40"></dr-loading>
```

## API

### Props

| 参数  | 说明                     | 类型               | 默认值    |
| ----- | ------------------------ | ------------------ | --------- |
| color | 颜色                     | _stirng_           | `#c9c9c9` |
| size  | 加载图标大小，单位为`px` | _string \| number_ | `30px`    |
