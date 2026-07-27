/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import { readFileSync } from 'fs';
import fs from 'fs/promises';

import {
  getOSAgnosticPath,
  getStrWithReplacedNewLineSymbols,
} from '../helpers.js';

export async function copyFuncAsString(filePathExt, funcName) {
  try {
    const filePath = getOSAgnosticPath(filePathExt);

    const content = await fs.readFile(filePath, 'utf8');

    // Поиск начала объявления типа
    const startIndex = content.indexOf(`function ${funcName}`);
    if (startIndex === -1) {
      // eslint-disable-next-line no-console
      console.error(`Функция "${funcName}" не найдена.`);
      return undefined;
    }

    // Продолжение поиска конца блока с типом
    let endIndex = startIndex + `function ${funcName}`.length;
    while (content[endIndex++] !== '{'); // Пропускаем пробелы и символы между именем типа и открывающейся скобкой
    let braceCount = 1; // Начинаем считать вложенность блоков
    while (braceCount > 0 && endIndex <= content.length) {
      if (content[endIndex] === '{') {
        braceCount++;
      } else if (content[endIndex] === '}') {
        braceCount--;
      }
      endIndex++; // Переходим к следующему символу
    }

    // Вырезаем определение типа вместе с телом
    const funcDefinition = content.substring(startIndex, endIndex).trim(); // Вырезаем и удаляем лишние пробельные символы

    return getStrWithReplacedNewLineSymbols(funcDefinition);
    // await fs.writeFile(pastePath, JSON.stringify({ funcName: funcDefinition }));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Ошибка чтения файла ${filePathExt}:`, err);
    throw err;
  }
}
export function copyFuncAsStringSync(filePathExt, funcName) {
  try {
    const filePath = getOSAgnosticPath(filePathExt);

    const content = readFileSync(filePath, 'utf8');

    // Поиск начала объявления типа
    const startIndex = content.indexOf(`function ${funcName}`);
    if (startIndex === -1) {
      // eslint-disable-next-line no-console
      console.error(`Функция "${funcName}" не найдена.`);
      return undefined;
    }
    // TODO работает только с типами-объектами - не работает для функций массивов и тп.
    // Продолжение поиска конца блока с типом
    let endIndex = startIndex + `function ${funcName}`.length;
    let braceCount0 = 0; // Начинаем считать скобки блока с параметрами
    let isParamsEnd = false;
    while (!isParamsEnd && endIndex <= content.length) {
      if (content[endIndex] === '(') {
        braceCount0++;
      } else if (content[endIndex] === ')') {
        braceCount0--;
      }
      if (braceCount0 === 0) {
        isParamsEnd = true;
      }
      endIndex++; // Переходим к следующему символу
    }

    while (content[endIndex++] !== '{'); // Пропускаем пробелы и символы между именем типа и открывающейся скобкой
    let braceCount = 1; // Начинаем считать вложенность блоков
    while (braceCount > 0 && endIndex <= content.length) {
      if (content[endIndex] === '{') {
        braceCount++;
      } else if (content[endIndex] === '}') {
        braceCount--;
      }
      endIndex++; // Переходим к следующему символу
    }

    // Вырезаем определение типа вместе с телом
    const funcDefinition = `${content.substring(startIndex, endIndex)};`.trim(); // Вырезаем и удаляем лишние пробельные символы

    return getStrWithReplacedNewLineSymbols(funcDefinition);
    // await fs.writeFile(pastePath, JSON.stringify({ funcName: funcDefinition }));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Ошибка чтения файла ${filePathExt}:`, err);
    throw err;
  }
}
