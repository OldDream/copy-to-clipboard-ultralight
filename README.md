# copy-to-clipbord-ultralight

A 🚀 ultralight tool  ( **616Byte** )  that can copy a string to system clipboard.

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

Import as module or use `<script src="https://cdn.jsdelivr.net/npm/copy-to-clipbord-ultralight@1.0.0/dist/index.js"></script>`.


```js
import ultralightCopy from 'copy-to-clipbord-ultralight';

document.querySelector('#test').addEventListener('click',()=> {
   if (ultralightCopy('This is test string.')) {
     alert('success !')
   } else {
     alert('copy failed !')
   }
})
```



### Compatibility

We would try to use `document.execCommand('copy')` with **NO FALLBACK**. So this tool only support modern browser like Chrome, Edge, safari, etc.

 You can check compatibility here https://caniuse.com/?search=execCommand



