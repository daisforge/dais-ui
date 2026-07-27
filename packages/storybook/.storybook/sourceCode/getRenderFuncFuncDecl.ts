/* eslint-disable no-plusplus */
export const getRenderFuncFuncDecl = (
  formattedStr: string,
  replaceNameOfFunc?: string
): string | null => {
  const renderFuncDeclIndex = formattedStr.indexOf('render() {');
  // не нашли funcDeclaration - render() {}
  if (renderFuncDeclIndex === -1) {
    return null;
  }
  const openBody: number[] = [];
  const closeBody: number[] = [];
  let isSuccess = openBody.length >= 1 && openBody.length === closeBody.length;
  for (
    let i = renderFuncDeclIndex;
    !isSuccess && i < formattedStr.length;
    i++
  ) {
    if (formattedStr[i] === '{') {
      openBody.push(i);
    }
    if (formattedStr[i] === '}') {
      closeBody.push(i);
    }
    isSuccess = openBody.length >= 1 && openBody.length === closeBody.length;
  }
  // корректно не смогли выявить границы render() {}
  if (!isSuccess) {
    return null;
  }
  const endIndex = closeBody[closeBody.length - 1];

  if (endIndex === undefined) {
    return null;
  }
  const restCode = formattedStr.slice(renderFuncDeclIndex, endIndex + 1);
  const correctCode = `function ${restCode}`;

  if (replaceNameOfFunc !== undefined) {
    return correctCode.replace('render', replaceNameOfFunc);
  }
  return correctCode;
};
