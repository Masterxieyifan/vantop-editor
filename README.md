<!--
 * @Author: Shixin
 * @Date: 2021-07-19 09:01:09
 * @LastEditors: Shixin
 * @LastEditTime: 2021-07-19 09:20:54
 * @Description: Do not edit
 * @FilePath: /vantop-editor/README.md
 * 🍻 Write code drunkenly.
-->
### 富文本编辑器组件说明

```text
基于 tinymce与@packy-tang/vue-tinymce 的二次封装
```

```text
更多说明请查阅以下文档
```

[tinymce 中文文档传送门](http://tinymce.ax-z.cn/)
[@packy-tang/vue-tinymce 传送门](https://packy-tang.gitee.io/vue-tinymce/#/?id=vue-tinymce)

### 安装组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://cdn.jsdelivr.net/npm/tinymce-plugins-plus/tinymce/tinymce.min.js"></script>
  </body>
</html>
```

```js
yarn add tinymce @packy-tang/vue-tinymce -S
```

```js
import Vue from "vue";

import tinymce from "tinymce";
import VueTinymce from "@packy-tang/vue-tinymce";

Vue.prototype.$tinymce = tinymce; // 将全局tinymce对象指向给Vue作用域下
Vue.use(VueTinymce); // 安装vue的tinymce组件
```

```js
import VantopEditor from "vantop-editor";
```

```js
<vantop-editor
    v-model="content"
    class="vantop-editor"
    :editorSetting="editorSetting"
    @input="handlerEditor"
>
</vantop-editor>
```

### 属性

| 参数          | 说明              | 是否必须 |
| ------------- | ----------------- | -------- |
| plugins       | 编辑器插件配置    | 否       |
| toolbar       | 编辑器工具栏配置  | 否       |
| editorSetting | 编辑器完整配置项  | 否       |
| cdn           | 资源文件 cdn 地址 | 否       |
