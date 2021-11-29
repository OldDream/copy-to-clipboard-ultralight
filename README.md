# copy-to-clipboard-ultralight

![](https://travis-ci.org/OldDream/copy-to-clipboard-ultralight.svg?branch=main)
[![](https://data.jsdelivr.com/v1/package/npm/copy-to-clipboard-ultralight/badge)](https://www.jsdelivr.com/package/npm/copy-to-clipboard-ultralight)

Language : English | [中文](./README.zh-CN.md)

🚀 A ultralight tool  ( **596Byte** )  that can copy a string to system clipboard.

💫 Wide browser support, for example IE >= 9.

📦 UMD module & ESModule, offer .d.ts file to support Typescript.git



### Install

```
npm i copy-to-clipboard-ultralight
```



### API

`function ultralightCopy(sourceStr: string): boolean`



### DEMO

[CodeSandBox online demo](https://codesandbox.io/s/copy-to-clipboard-ultralight-demo-g1851)

[Online demo](https://www.huangyn.icu/temp-html/copy-to-clipboard-ultralight-demo.html)

Check `demo.html` in Git for more detail.


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



### Compatibility

We would try to use `document.execCommand('copy')` with **NO FALLBACK**. So this tool only support browser like Chrome, Edge, safari, IE >= 10, etc.

 I suggest you to run [Online demo](https://www.huangyn.icu/temp-html/copy-to-clipboard-ultralight-demo.html) in your target browser, or check compatibility here https://caniuse.com/?search=execCommand%3A%20copy%20command



