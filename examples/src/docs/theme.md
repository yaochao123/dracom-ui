# 主题样式

### 介绍

Dracom 提供了一套[CSS变量](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)的默认主题，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法。

### 样式变量

Dracom 使用了[CSS变量](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是一些基本的样式变量，所有可用的颜色变量请参考 [配置文件](http://192.168.8.201/dracomUI/dracom-ui/blob/v1.2.0/src/style/_variables.scss)。

```css
  /* Color Palette */
  --dr-black: #000;
  --dr-white: #fff;
  --dr-blue: #1989fa;
  --dr-red: #ee0a24;
  --dr-green: #33c0af;
  --dr-orange: #ff976a;
  --dr-gray-1: #606060;
  --dr-gray-2: #e1e6eb;
```

## 定制方法

### 引入样式文件

引入依赖中存在的配置样式，或上述[配置文件](http://192.168.8.201/dracomUI/dracom-ui/blob/v1.2.0/src/style/_variables.scss)下载后修改替换部分内容引入，或替换link标签。

```javascript
// 引入全部样式 
import 'dracom-ui/lib/variables.css'

// 或引入样式替换后的全部样式 
import '@/css/variables.css'
```

### 动态变化样式

组件内置`$theme`来修改样式的全局方法，可直接使用该方法进行动态变化样式（无法获取默认加载时的CSS变量）

```javascript
//修改页面主题色
this.$theme.setStyle({'--dr-primary-color':'#ff5200'})

//获取页面主题色
this.$theme.getStyle(['--dr-primary-color']) 
// => {'--dr-primary-color':'#ff5200'}

//清理页面主题色
this.$theme.clearStyle(['--dr-primary-color']) 

```

### 额外

现代浏览器可使用另外一些参数和方法

```javascript
//修改某内容下主题色
this.$theme.setStyle({'--dr-primary-color':'#ff5200'},'.class')

//获取某内容下主题色
this.$theme.getStyle(['--dr-primary-color'],'.class') 
// => {'--dr-primary-color':'#ff5200'}

//清理某内容下主题色
this.$theme.clearStyle(['--dr-primary-color'],'.class') 

// 获取任意 Dom 节点上的实际 CSS 变量值（注意值可能带空格）
getComputedStyle(element).getPropertyValue("--my-var");

// 获取该 Dom 节点上内联属性的 CSS 变量（注意值可能带空格）
element.style.getPropertyValue("--my-var");

// 修改该 Dom 节点上内联属性的 CSS 变量
element.style.setProperty("--my-var", jsVar);

//内联样式>:root选择器>html选择器
```



## API

### 方法

| 方法名           | 说明                        | 参数                                                       | 返回值 |
| ---------------- | --------------------------- | ---------------------------------------------------------- | ------ |
| Theme.setStyle   | 设置选择器主题style样式标签 | `contentObject:object`,`cssSelector:string（现代浏览器）`  | `void` |
| Theme.getStyle   | 获取选择器主题style样式     | `contentArray:string[]`,`cssSelector:string（现代浏览器）` | `void` |
| Theme.clearStyle | 清理选择器主题style样式     | `contentArray:string[]`,`cssSelector:string（现代浏览器）` | `void` |

注意：参数`cssSelector`仅适用于现代浏览器，有关兼容性，可查询[CSS变量兼容](https://www.caniuse.com/#search=CSS%20Variables)。