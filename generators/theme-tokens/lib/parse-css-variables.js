/**
 * Чтение CSS-переменных темы из файла пакета атомарной команды.
 *
 * Файлы бывают двух видов, но по содержимому одинаковы:
 *  - `.css` (sdds-themes): блок `:root { --token: #HEX; ... }`, ниже —
 *    переопределения тех же переменных для вложенных скоупов;
 *  - `.js` (beta core, high contrast): модуль темы, в котором те же строки
 *    `--token: #HEX` лежат внутри шаблонных строк.
 * Поэтому парсер один: из текста достаются все пары «имя переменной → hex».
 */
import fs from 'node:fs';

/**
 * Объявление CSS-переменной с hex-значением: `--имя: #ЦВЕТ`.
 * Имя — kebab-case (строчные латинские, цифры, дефис); цвет — 3–8 hex-цифр
 * (#RGB, #RRGGBB, #RRGGBBAA). Переменные с не-hex значениями (var(...),
 * градиенты) намеренно пропускаются — генератору нужны только готовые цвета.
 */
const CSS_VARIABLE_DECLARATION = /--([a-z0-9-]+)\s*:\s*(#[0-9A-Fa-f]{3,8})\b/g;

/**
 * Карта `{ имяПеременной: '#HEX' }` по файлу темы.
 *
 * Переменная может объявляться в файле несколько раз: сначала в `:root`
 * (значение самой темы), затем в переопределениях для вложенных скоупов.
 * Значением темы считается ПЕРВОЕ объявление — поздние не перезаписывают.
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
