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

### 代码演示

```js
this.$dialog({
  title: '标题',
  content: '只有通过不断的学习和练习，才能变得更强',
  confrimButton: '确定'
})

this.$dialog({
  content: '只有通过不断的学习和练习，才能变得更强',
  confrimButton: '确定'
})
```
