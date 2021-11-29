# copy-to-clipboard-ultralight
 
![](https://travis-ci.org/OldDream/copy-to-clipboard-ultralight.svg?branch=main)
[![](https://data.jsdelivr.com/v1/package/npm/copy-to-clipboard-ultralight/badge)](https://www.jsdelivr.com/package/npm/copy-to-clipboard-ultralight)

Language : [English]((./README.md)) | 中文


🚀 体积小（ <1kb ）.

💫 支持广（ >= IE10 ）.

📦 格式多（UMD module + ESModule + Typescript）.



### 安装

```
npm i copy-to-clipboard-ultralight
```



### API

`function ultralightCopy(sourceStr: string): boolean`



### DEMO

[CodeSandBox online demo](https://codesandbox.io/s/copy-to-clipboard-ultralight-demo-g1851)

[Online demo2](https://www.huangyn.icu/temp-html/copy-to-clipboard-ultralight-demo.html)

具体代码详见git中的 `demo.html` .


```js
import ultralightCopy from 'copy-to-clipboard-ultralight';
// const ultralightCopy = require('copy-to-clipboard-ultralight') // import as commonJS module

document.querySelector('#test').addEventListener('click',()=> {
   if (ultralightCopy('This is test string.')) {
     alert('success !')
   } else {
     alert('copy failed !')
   }
})
```



```html
<script src="https://cdn.jsdelivr.net/npm/copy-to-clipboard-ultralight"></script>
<script>
  document.querySelector('#test').addEventListener('click',()=> {
    if (ultralightCopy('This is test string.')) {
      alert('success !')
    } else {
      alert('copy failed !')
    }
  })
</script>
```



### 兼容性

主要使用下面这个方法 `document.execCommand('copy')`, 兼容性极佳，号称可支持到IE9（我没试过）。

 可在目标浏览器中运行 [在线 demo](https://www.huangyn.icu/temp-html/copy-to-clipboard-ultralight-demo.html) 进行实测。
 
 或者去Can I Use 看看： https://caniuse.com/?search=execCommand%3A%20copy%20command



