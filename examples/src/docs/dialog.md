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
    // 确认回掉
  })
  .catch(() => {
    // 取消回掉
  })
```

### 组件调用

```html
<dr-dialog
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
  content: '只有通过不断的学习和练习，才能变得更强',
  confirmButton: '确定'
}).then(() => {

})

this.$dialog.alert({
  content: '只有通过不断的学习和练习，才能变得更强',
  confirmButton: '确定'
}).then(() => {

})
```

### 确认弹框

```js
确认弹框，包含取消和确认两个按钮

this.$dialog.confirm({
  title: '确认弹框',
  content: '只有通过不断的学习和练习，才能变得更强',
  cancelButton: '取消',
  confirmButton: '确定'
}).then(() => {

}).catch(() => {

})
```

### 类型弹框

```js
包含成功和失败两种类型

this.$dialog.alert('success', {
  title: '成功弹框',
  content: '只有通过不断的学习和练习，才能变得更强',
  confirmButton: '确定'
}).then(() => {

})

this.$dialog.alert('fail', {
  title: '失败弹框',
  content: '只有通过不断的学习和练习，才能变得更强',
  confirmButton: '确定'
}).then(() => {

})
```

### 主题色
```js
通过`primaryColor`属性设置主题色

this.$dialog.alert('success', {
  title: '主题色',
  content: '只有通过不断的学习和练习，才能变得更强',
  primaryColor: '#409EFF',
  confirmButton: '确定'
}).then(() => {

})
```
