function crudeCopy(sourceStr) {
  var inputDom = document.createElement('input');
  inputDom.setAttribute('readonly', 'readonly');
  inputDom.setAttribute('value', sourceStr);
  document.body.appendChild(inputDom);
  inputDom.setSelectionRange(0, sourceStr.length);

  if (document.execCommand('copy')) {
    inputDom.select();
    document.execCommand('copy');
    document.body.removeChild(inputDom);
    return true;
  } else {
    document.body.removeChild(inputDom);
    return false;
  }
}

export default crudeCopy;
