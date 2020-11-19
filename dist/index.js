(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ultralightCopy = factory());
}(this, (function () { 'use strict';

  function ultralightCopy(sourceStr) {
    if (document.execCommand('copy')) {
      var inputDom = document.createElement('input');
      inputDom.setAttribute('readonly', 'readonly');
      inputDom.setAttribute('value', sourceStr);
      document.body.appendChild(inputDom);
      inputDom.setSelectionRange(0, sourceStr.length);
      inputDom.select();
      document.execCommand('copy');
      document.body.removeChild(inputDom);
      return true;
    } else {
      return false;
    }
  }

  return ultralightCopy;

})));
