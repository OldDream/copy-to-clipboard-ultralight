# copy-to-clipbord-ultralight

![](https://travis-ci.org/OldDream/copy-to-clipbord-ultralight.svg?branch=main)

A 🚀 ultralight tool  ( **596Byte** )  that can copy a string to system clipboard.

⚠️ Only support modern browser.

🔑 UMD module, offer .d.ts file to support Typescript.



### Install

```
npm i copy-to-clipbord-ultralight
```



### API

`function ultralightCopy(sourceStr: string): boolean`



### DEMO

Check `demo.html` in Git for more detail.


```js
import ultralightCopy from 'copy-to-clipbord-ultralight';
// const ultralightCopy = require('copy-to-clipbord-ultralight') // import as commonJS module

document.querySelector('#test').addEventListener('click',()=> {
   if (ultralightCopy('This is test string.')) {
     alert('success !')
   } else {
     alert('copy failed !')
   }
})
```



```html
<script src="https://cdn.jsdelivr.net/npm/copy-to-clipbord-ultralight"></script>
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

We would try to use `document.execCommand('copy')` with **NO FALLBACK**. So this tool only support modern browser like Chrome, Edge, safari, etc.

 You can check compatibility here https://caniuse.com/?search=execCommand



