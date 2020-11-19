function ultralightCopy(sourceStr: string): boolean {
  if (document.execCommand('copy')) {
    const inputDom = document.createElement('input');
    inputDom.setAttribute('readonly', 'readonly');
    inputDom.setAttribute('value', sourceStr);
    document.body.appendChild(inputDom);
    inputDom.setSelectionRange(0, sourceStr.length);
    inputDom.select();
    document.execCommand('copy');
    document.body.removeChild(inputDom);
    return true
  } else {
    return false
  }
}

export default ultralightCopy 