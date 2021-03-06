# Dialog 弹出框

### 引入

```js
import Vue from 'vue'
import { DrDialog } from 'dracom-ui'
Vue.use(DrDialog)
```

### 使用方法

弹出框组件支持函数调用和组件调用两种方法

### 函数调用

```js
this.$dialog('success', {
  title: '弹出框标题',
  content: '这是函数调用形式',
  cancelButton: '关闭',
  confirmButton: '确定'
})
  .then(() => {
    // 确认回调
  })
  .catch(() => {
    // 取消回调
  })
```

### 组件调用

```html
<dr-dialog
  v-model="showModel"
  type="success"
  title="弹出框标题"
  content="这是组件调用形式"
  cancelButton="关闭"
  confirmButton="确定"
></dr-dialog>
```

## 代码演示

### 提示弹框

```js
提示弹框，只包含一个确认按钮

this.$dialog.alert({
  title: '提示弹框',
  content: '这是一段弹出框的内容',
  confirmButton: '确定'
}).then(() => {})

this.$dialog.alert({
  content: '这是一段弹出框的内容',
  confirmButton: '确定'
}).then(() => {})
```

### 确认弹框

```js
确认弹框，包含取消和确认两个按钮

this.$dialog.confirm({
  title: '确认弹框',
  content: '这是一段弹出框的内容',
  cancelButton: '取消',
  confirmButton: '确定'
}).then(() => {

}).catch(() => {})
```

### 类型弹框

```js
包含成功和失败两种类型

this.$dialog
  .alert('success', {
    title: '成功弹框',
    content: '这是一段弹出框的内容',
    confirmButton: '确定'
  })
  .then(() => {})

this.$dialog
  .alert('fail', {
    title: '失败弹框',
    content: '这是一段弹出框的内容',
    confirmButton: '确定'
  })
  .then(() => {})
```

### 主题色

```js
通过`primaryColor`属性设置主题色

this.$dialog.alert('success', {
  title: '主题色',
  content: '这是一段弹出框的内容',
  primaryColor: '#409EFF',
  confirmButton: '确定'
}).then(() => {})
```

## API

### 方法

| 方法名                   | 说明                             | 参数             | 返回值    |
| ------------------------ | -------------------------------- | ---------------- | --------- |
| Dialog.alert             | 展示弹框                         | `type` `options` | `Promise` |
| Dialog.confirm           | 确认弹框                         | `type` `options` | `Promise` |
| Dialog.close             | 关闭弹框                         | -                | `void`    |
| Dialog.setDefaultOptions | 修改默认配置，对所有 Dialog 生效 | `options`        | `void`    |

### Options

通过函数调用`Dialog`时，传入以下参数：
| 参数 | 说明 | 类型 | 默认值 |
| -------------- | -------- | ---------------- | --------- |
| type | `success`成功、`fail`失败| _string_ | - |
| title | 弹出框标题 | _string_ | - |
| content | 弹出框内容 | _string_ | - |
| primaryColor| 弹出框主题色 | _string_ | `#33C0AF` |
| cancelButton | 取消按钮内容 | _string_ | - |
| confirmButton | 确认按钮内容 | _string_ | - |
| width | 弹出框宽度，单位`px` | _number\|string_ | `300` |
| showCancelButton | 是否显示取消按钮 | _boolean_ | `true` |
| showConfirmButton | 是否显示确认按钮 | _boolean_ | `true` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| lockScroll | 是否禁止背景滚动 | _boolean_ | `true` |
| closeOnOverlay | 是否通过点击遮罩层关闭弹框 | _boolean_ | `false` |
| closeOnPopstate | 是否在页面回退时关闭弹框 | _boolean_ | `true` |

### Props

通过组件调用`Dialog`是，传入以下 Props：
| 参数 | 说明 | 类型 | 默认值 |
| -------------- | -------- | ---------------- | --------- |
| v-model | 是否显示弹框 | _boolean_ | - |
| type | `success`成功、`fail`失败| _string_ | - |
| title | 弹出框标题 | _string_ | - |
| content | 弹出框内容 | _string_ | - |
| primary-color| 弹出框主题色 | _string_ | `#33C0AF` |
| cancel-button | 取消按钮内容 | _string_ | - |
| confirm-button | 确认按钮内容 | _string_ | - |
| width | 弹出框宽度，单位`px` | _number\|string_ | `300` |
| show-cancel-button | 是否显示取消按钮 | _boolean_ | `true` |
| show-confirm-button | 是否显示确认按钮 | _boolean_ | `true` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| lock-scroll | 是否禁止背景滚动 | _boolean_ | `true` |
| close-on-overlay | 是否通过点击遮罩层关闭弹框 | _boolean_ | `false` |
| close-on-popstate | 是否在页面回退时关闭弹框 | _boolean_ | `true` |

### Events

通过组件调用`Dialog`时，支持一下事件：
| 事件 | 说明 | 回调参数 |
| -------------- | -------- | ---------------- |
| cancel | 点击取消按钮时触发 | - |
| confirm | 点击确定按钮时触发 | - |
