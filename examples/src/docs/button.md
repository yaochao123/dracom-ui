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

通过`icon`属性设置按钮图标，目前支持网络图片和本地图片，后续支持字体图标

```html
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

暂未编写

### Events

暂未编写
