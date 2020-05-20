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

### 图标按钮

通过`icon`属性设置按钮图标，目前仅支持网络图片，后续支持字体图标

```html
<dr-button
  icon="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png"
  >图标按钮</dr-button
>
```

### 自定义颜色

通过`color`属性可以自定义按钮颜色

```html
<dr-button color="＃33C0AF">单色按钮</dr-button>
<dr-button color="＃33C0AF" plain>单色按钮</dr-button>
<dr-button
  color="linear-gradient(270deg,rgba(76,216,234,1) 0%,rgba(109,219,211,1) 100%)"
  >渐变色按钮</dr-button
>
```

## API

### Props

| 参数                 | 说明                                                                                      | 类型               | 默认值     |
| -------------------- | ----------------------------------------------------------------------------------------- | ------------------ | ---------- |
| type                 | 类型，可选值为 `primary` `info` `warning` `danger`                                        | _string_           | `default`  |
| size                 | 尺寸，可选值为 `large` `small` `mini`                                                     | _string_           | `normal`   |
| text                 | 按钮文字                                                                                  | _string_           | -          |
| color `v2.1.8`       | 按钮颜色，支持传入`linear-gradient`渐变色                                                 | _string_           | -          |
| icon                 | 左侧[图标名称](#/zh-CN/icon)或图片链接                                                    | _string_           | -          |
| icon-prefix `v2.6.0` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props)                      | _string_           | `van-icon` |
| tag                  | 根节点的 HTML 标签                                                                        | _string_           | `button`   |
| native-type          | 原生 button 标签的 type 属性                                                              | _string_           | -          |
| block                | 是否为块级元素                                                                            | _boolean_          | `false`    |
| plain                | 是否为朴素按钮                                                                            | _boolean_          | `false`    |
| square               | 是否为方形按钮                                                                            | _boolean_          | `false`    |
| round                | 是否为圆形按钮                                                                            | _boolean_          | `false`    |
| disabled             | 是否禁用按钮                                                                              | _boolean_          | `false`    |
| hairline             | 是否使用 0.5px 边框                                                                       | _boolean_          | `false`    |
| loading              | 是否显示为加载状态                                                                        | _boolean_          | `false`    |
| loading-text         | 加载状态提示文字                                                                          | _string_           | -          |
| loading-type         | [加载图标类型](#/zh-CN/loading)，可选值为`spinner`                                        | _string_           | `circular` |
| loading-size         | 加载图标大小                                                                              | _string_           | `20px`     |
| url                  | 点击后跳转的链接地址                                                                      | _string_           | -          |
| to                   | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -          |
| replace              | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false`    |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: Event_      |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |
