###

<div class="dr-doc-intro" style="text-align: center;">
  <img class="dr-doc-intro-logo" style="width: 100px; height: 100px; margin: 16px 0;" src="https://liujia-app.oss-cn-hangzhou.aliyuncs.com/201812/407060844277714944.png">
  <h2 style="margin: 0; font-size: 36px; line-height: 60px; text-align: center;">DracomUI</h2>
  <p style="text-align: center; margin-bottom: 20px;">基于Vue移动端组件库</p>
</div>

### npm 安装

```js
npm install dracom-ui --save
```

### 引入 DracomUI

```js
import Dracom from 'dracom-ui'

Vue.use(Dracom)
```

### 编写组件流程

从`http://192.168.8.201/dracomUI/dracom-ui.git`下载项目

```js
执行以下操作
npm install
npm run serve
```

```
编写或修改完组件后
执行 npm run build:lib
```

```js
注意：使用下面命令修改版本号，要将git里面的文件清空
npm version patch （1.0.0 -> 1.0.1）
npm version minor （1.0.0 -> 1.1.0）
npm version major （1.0.0 -> 2.0.0）
```

```js
然后登录npm账号，账号密码在前端群里
执行 npm publish
```
