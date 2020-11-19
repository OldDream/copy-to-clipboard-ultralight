# copy-to-clipbord-ultralight

A 🚀 ultralight tool that can copy a string to system clipboard.

⚠️ Only support modern browser.

🔑 Support Typescript.



### Compatibility

We would try to use `document.execCommand('copy')` with **NO FALLBACK**. So this tool only support modern browser like Chrome, Edge, safari, etc.

 You can check compatibility here https://caniuse.com/?search=execCommand



### API

`function ultralightCopy(sourceStr: string): boolean`

