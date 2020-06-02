# Icon 图标

### 介绍

引入`iconfont`字体图标，可以通过组件`Icon`使用，也可通过`类名`使用

### 引入

```js
import Vue from 'vue'
import { DrIcon } from 'dracom-ui'

Vue.use(DrIcon)
```

## 代码演示

### 组件调用

```html
<dr-icon name="success" size="30"></dr-icon>

<dr-icon name="fail" size="30"></dr-icon>
```

### 类名调用

```html
<i class="iconfont icon-search"></i>

<i class="iconfont icon-delete"></i>
```

## API

### Props

| 参数 | 说明                                   | 类型             | 默认值 |
| ---- | -------------------------------------- | ---------------- | ------ |
| name | 图标名称，所选图标必须在图标库里已存在 | _string_         | `-`    |
| size | 图标大小,单位`px`                      | _number\|string_ | `1em`  |
