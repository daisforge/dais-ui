import path from 'path';
/**
 * @param {string} filePath
 * @returns {string}
 */
export function getOSAgnosticPath(filePath) {
  const filePathArr = (filePath ?? '').split(
    filePath.includes('/') ? '/' : '\\'
  );
  return path.join(...filePathArr);
}

/**
 * @param {string} str
 * @returns {string}
 */
export function getStrWithReplacedNewLineSymbols(str) {
  return str.replaceAll('\r\n', '\n');
}
