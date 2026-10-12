/**
 * Чтение цветов темы из файла пакета атомарной команды.
 *
 * Файлы бывают двух видов, но внутри одинаковые:
 *  - `.css` (sdds-themes): блок `:root { --имя: #ЦВЕТ; ... }`, ниже —
 *    те же переменные с другими значениями для вложенных блоков;
 *  - `.js` (beta core, high contrast): те же строки `--имя: #ЦВЕТ`, только
 *    внутри JS-кода.
 * Поэтому функция одна: из текста файла достаются все пары
 * «имя переменной → цвет».
 */
import fs from 'node:fs';

/**
 * Шаблон строки `--имя: #ЦВЕТ`.
 * Имя — строчные латинские буквы, цифры и дефисы; цвет — от 3 до 8
 * hex-цифр (#RGB, #RRGGBB или #RRGGBBAA, где AA — прозрачность).
 * Переменные, значение которых не цвет (var(...), градиенты), пропускаются:
 * генератору нужны только готовые цвета.
 */
const CSS_VARIABLE_DECLARATION = /--([a-z0-9-]+)\s*:\s*(#[0-9A-Fa-f]{3,8})\b/g;

/**
 * Все цвета файла темы: `{ имяПеременной: '#ЦВЕТ' }`.
 *
 * Одна переменная может встречаться в файле несколько раз: первой идёт
 * в `:root` (это и есть цвет темы), дальше — для вложенных блоков с другими
 * значениями. Поэтому берётся ПЕРВОЕ значение, следующие игнорируются.
 *
 * @param {string} filePath
 * @returns {Record<string, string>}
 */
export const readThemeVariables = (filePath) => {
  const text = fs.readFileSync(filePath, 'utf8');
  const variables = {};
  [...text.matchAll(CSS_VARIABLE_DECLARATION)].forEach(([, name, hex]) => {
    const isFirstDeclaration = variables[name] === undefined;
    if (isFirstDeclaration) {
      variables[name] = hex.toUpperCase();
    }
  });
  return variables;
};
