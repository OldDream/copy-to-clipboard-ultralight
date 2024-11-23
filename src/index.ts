/*
 * @Author: huangyuning huangyuning@vv.cn
 * @Date: 2021-06-19 13:21:53
 * @LastEditors: huangyuning huangyuning@vv.cn
 * @LastEditTime: 2024-11-20 13:56:25
 * @FilePath: /copy-to-clipboard-ultralight/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

function ultralightCopy(sourceStr: string = ""): boolean {
  const d = document // rudeuce size
  try {
    const inputDom = d.createElement('input');
    // inputDom.setAttribute('readonly', 'readonly');
    // inputDom.setAttribute('style', 'position: fixed; top:0; left:0; opacity:0;');
    // inputDom.setAttribute('value', sourceStr);
    Object.assign(inputDom, {
      readonly: 'readonly',
      style: 'position: fixed; top:0; left:0; opacity:0;',
      value: sourceStr,
    });
    d.body.appendChild(inputDom);
    inputDom.setSelectionRange(0, sourceStr.length);
    inputDom.select();
    d.execCommand('copy');
    d.body.removeChild(inputDom);
    return true
  } catch (error) {
    return false
  }
}

export default ultralightCopy