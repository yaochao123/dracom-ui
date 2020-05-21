# Button 按钮

### 引入

```js
import Vue from 'vue'
import { DrButton } from 'dracom-ui'

Vue.use(DrButton)
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<dr-button type="default">默认按钮</dr-button>
<dr-button type="primary">主要按钮</dr-button>
<dr-button type="info">信息按钮</dr-button>
<dr-button type="warning">警告按钮</dr-button>
<dr-button type="danger">危险按钮</dr-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<dr-button disabled type="primary">禁用状态</dr-button>
<dr-button disabled type="danger">禁用状态</dr-button>
```

### 圆角按钮

通过`miniRange`来设置小圆角按钮，`larRange`来设置大圆角按钮

```html
<dr-button miniRange>小圆角按钮</dr-button>
<dr-button larRange>大圆角按钮</dr-button>
```

### 加载状态

通过`loading`属性设置按钮为加载状态，可以通过`loadingSize`设置加载图标大小

```html
<dr-button type="info" loading></dr-button>
<dr-button type="primary" loading>加载中...</dr-button>
```

### 图标按钮

通过`icon`属性设置按钮图标，目前支持网络图片和本地图片，后续支持字体图标

```html
<dr-button
  icon="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
></dr-button>
<dr-button
  icon="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
  >图标按钮</dr-button
>
```

### 自定义颜色

通过`color`属性可以自定义按钮颜色

```html
<dr-button color="#33C0AF">单色按钮</dr-button>
<dr-button color="#33C0AF" plain>单色按钮</dr-button>
<dr-button
  color="linear-gradient(270deg,rgba(76,216,234,1) 0%,rgba(109,219,211,1) 100%)"
  >渐变色按钮</dr-button
>
```

## API

### Props

| 参数        | 说明                                               | 类型               | 默认值    |
| ----------- | -------------------------------------------------- | ------------------ | --------- |
| type        | 类型，可选值为 `primary` `info` `warning` `danger` | _string_           | `default` |
| text        | 按钮文本内容                                       | _string_           | -         |
| textColor   | 按钮文本颜色                                       | _string_           | -         |
| color       | 按钮颜色，支持传入 linear-gradient 渐变色          | _string_           | -         |
| icon        | 左侧图标链接                                       | _string_           | -         |
| plain       | 是否为朴素按钮                                     | _boolean_          | `false`   |
| disabled    | 是否禁用按钮                                       | _boolean_          | `false`   |
| block       | 是否为块级元素                                     | _boolean_          | `false`   |
| miniRange   | 是否为小圆角按钮                                   | _boolean_          | `false`   |
| larRange    | 是否为大圆角按钮                                   | _boolean_          | `false`   |
| loading     | 是否显示加载图标                                   | _boolean_          | `false`   |
| loadingSize | 加载图标大小                                       | _string \| number_ | `20`      |

### Events

| 事件名 | 说明                               | 回调参数       |
| ------ | ---------------------------------- | -------------- |
| click  | 点击按钮，且按钮不为禁用状态时触发 | _event: Event_ |
