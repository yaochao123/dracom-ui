# 主题样式

### 介绍

Dracom 提供了一套CSS变量的默认主题，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法。

### 样式变量

Dracom 使用了CSS变量对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

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

引入依赖中存在的配置样式，或上述[配置文件](http://192.168.8.201/dracomUI/dracom-ui/blob/v1.2.0/src/style/_variables.scss)下载后修改替换部分内容引入，或替换link标签

```javascript
// 引入全部样式 
import 'dracom-ui/lib/variables.css'

// 或引入样式替换后的全部样式 
import '@/css/variables.css'
```

### 动态变化样式

组件内置来修改样式的全局方法，可直接使用该方法进行动态变化样式

```

```

