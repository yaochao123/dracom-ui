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

目前只支持全局引入，组件文档内的引入流程可以忽略，后续支持按需引入

```js
import 'dracom-ui/lib/variables.css'
import Dracom from 'dracom-ui'
Vue.use(Dracom)
```

注意：由于使用了css变量进行主题及颜色变换，故如需在传统浏览器也要兼容该css变量，请使用[mutationobserver-shim](https://github.com/megawac/MutationObserver.js)与[css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill)进行兼容操作（具体可参考相关文档注释）

```javascript
// css变量兼容
import 'mutationobserver-shim'
import cssVars from 'css-vars-ponyfill'
cssVars({
  watch: true
});
```

使用依赖后浏览器兼容性

| IE   | Edge | Chrome | Firefox | Safari |
| ---- | ---- | ------ | ------- | ------ |
| 9+   | 12+  | 19+    | 6+      | 6+     |

### 编写组件流程

从[dracom-ui](http://192.168.8.201/dracomUI/dracom-ui.git)下载项目

```shell
#执行以下操作
npm install
npm run serve
```

```shell
#编写或修改完组件后，执行
npm run build:lib
```

```shell
#注意：使用下面命令修改版本号，要将git里面的文件清空
npm version patch #（1.0.0 -> 1.0.1）
npm version minor #（1.0.0 -> 1.1.0）
npm version major #（1.0.0 -> 2.0.0）
```

```shell
#然后登录npm账号，账号密码在前端群里，执行
npm publish
```

```shell
#未来不稳定供测试版本部署
npm publish --tag next 
#下载测试版本
npm install dracom-ui@next --save
```

