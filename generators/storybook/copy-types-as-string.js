/* eslint-disable no-continue */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import { readFileSync } from 'fs';
import fs from 'fs/promises';

import {
  getOSAgnosticPath,
  getStrWithReplacedNewLineSymbols,
} from '../helpers.js';

/**
 * Ищет начало объявления `type Name`, `interface Name` или `const Name` в содержимом файла.
 * Для const также проверяет `export const Name`.
 * Возвращает индекс начала или -1, если не найдено.
 */
function findDeclarationStart(content, typeName) {
  const typeIndex = content.indexOf(`type ${typeName}`);
  const interfaceIndex = content.indexOf(`interface ${typeName}`);
  const constIndex = content.indexOf(`const ${typeName}`);

  // Для const находим начало строки (может быть export const)
  let constStart = -1;
  if (constIndex !== -1) {
    // Проверяем, есть ли `export` перед `const`
    const beforeConst = content
      .substring(Math.max(0, constIndex - 20), constIndex)
      .trimEnd();
    if (beforeConst.endsWith('export')) {
      constStart =
        constIndex - (constIndex - content.lastIndexOf('export', constIndex));
    } else {
      constStart = constIndex;
    }
  }

  const candidates = [typeIndex, interfaceIndex, constStart].filter(
    (i) => i !== -1
  );
  if (candidates.length === 0) return -1;
  return Math.min(...candidates);
}

/**
 * Возвращает длину ключевого слова (`type`, `interface`, `const` или `export const`) + имени,
 * чтобы продолжить парсинг после имени типа.
 */
function getDeclarationPrefixLength(content, startIndex, typeName) {
  if (content.startsWith(`interface ${typeName}`, startIndex)) {
    return `interface ${typeName}`.length;
  }
  if (content.startsWith(`export const ${typeName}`, startIndex)) {
    return `export const ${typeName}`.length;
  }
  if (content.startsWith(`const ${typeName}`, startIndex)) {
    return `const ${typeName}`.length;
  }
  return `type ${typeName}`.length;
}

export async function copyTypeAsString(filePathExt, typeName) {
  try {
    const filePath = getOSAgnosticPath(filePathExt);

    const content = await fs.readFile(filePath, 'utf8');

    // Поиск начала объявления типа (type или interface)
    const startIndex = findDeclarationStart(content, typeName);
    if (startIndex === -1) {
      // eslint-disable-next-line no-console
      console.error(`Тип "${typeName}" не найден.`);
      return undefined;
    }

    // Продолжение поиска конца блока с типом
    let endIndex =
      startIndex + getDeclarationPrefixLength(content, startIndex, typeName);
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
    const typeDefinition = content.substring(startIndex, endIndex).trim(); // Вырезаем и удаляем лишние пробельные символы

    return getStrWithReplacedNewLineSymbols(typeDefinition);
    // await fs.writeFile(pastePath, JSON.stringify({ typeName: typeDefinition }));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Ошибка чтения файла ${filePathExt}:`, err);
    throw err;
  }
}

/**
 * Извлекает определение типа (type/interface) из файла как строку.
 * Парсит с учётом вложенных скобок: { }, < >, ( ).
 * Корректно обрабатывает:
 * - объекты: type A = { ... }
 * - generic/utility: type A = Omit<B, 'x'>, Pick<B, 'y'>
 * - intersection: type A = B & C & { ... }
 * - union: type A = 'a' | 'b' | C
 * - функции: type A = (arg: string) => void
 * - стрелочные функции (=>) не путаются с закрытием generic (>)
 * - строковые литералы: скобки внутри строк игнорируются
 * - interface: interface A { ... }
 * - комбинации: type A = Omit<B, 'x'> & { extra: string }
 */
export function copyTypeAsStringSync(filePathExt, typeName) {
  try {
    const filePath = getOSAgnosticPath(filePathExt);

    const content = readFileSync(filePath, 'utf8');

    // Поиск начала объявления типа (type или interface)
    const startIndex = findDeclarationStart(content, typeName);

    if (startIndex === -1) {
      // eslint-disable-next-line no-console
      console.error(`Тип "${typeName}" не найден.`);
      return undefined;
    }
    // Парсим тип с учётом вложенных скобок: { }, < >, ( )
    // Поддерживает: объекты, Omit/Pick/generic, intersection (&), union (|),
    // функции (=>), массивы, conditional types (?:), строковые литералы,
    // interface extends, множественные generic с дефолтами
    const isInterface = content.startsWith(`interface ${typeName}`, startIndex);
    let endIndex =
      startIndex + getDeclarationPrefixLength(content, startIndex, typeName);

    let braceCount = 0; // { }
    let angleCount = 0; // < >
    let parenCount = 0; // ( )
    let bracketCount = 0; // [ ]
    let foundEquals = isInterface; // для interface не нужен '='
    let foundBody = false;
    let inString = false; // внутри строкового литерала
    let stringChar = ''; // ' или "

    while (endIndex < content.length) {
      const ch = content[endIndex];
      const prevCh = endIndex > 0 ? content[endIndex - 1] : '';

      // Обработка строковых литералов — не считаем скобки внутри строк
      if (!inString && (ch === "'" || ch === '"' || ch === '`')) {
        inString = true;
        stringChar = ch;
        endIndex++;
        continue;
      }
      if (inString) {
        if (ch === stringChar && prevCh !== '\\') {
          inString = false;
        }
        endIndex++;
        continue;
      }

      // Ищем '=' для type (отделяем generic параметры от тела)
      if (!foundEquals && ch === '=') {
        foundEquals = true;
        endIndex++;
        continue;
      }

      if (ch === '{') {
        braceCount++;
        foundBody = true;
      } else if (ch === '}') {
        braceCount--;
      } else if (ch === '<') {
        angleCount++;
        // foundBody на '<' НЕ ставим — generic params не считаются телом
      } else if (ch === '>') {
        // Отличаем '=>' (стрелочная функция) от '>' (закрытие generic)
        if (prevCh === '=') {
          // '=>' — не закрытие generic, пропускаем
        } else if (angleCount > 0) {
          angleCount--;
        }
      } else if (ch === '(') {
        parenCount++;
        if (foundEquals) foundBody = true; // '(' после '=' — тело (функциональный тип)
      } else if (ch === ')') {
        parenCount--;
      } else if (ch === '[') {
        bracketCount++;
        if (foundEquals) foundBody = true; // '[' после '=' — indexed access type
      } else if (ch === ']') {
        bracketCount--;
      }

      endIndex++;

      // Тип заканчивается на ';' когда все скобки закрыты
      if (
        ch === ';' &&
        braceCount === 0 &&
        angleCount === 0 &&
        parenCount === 0 &&
        bracketCount === 0
      ) {
        break;
      }

      // Для типов/interface, заканчивающихся без ';'
      if (
        foundBody &&
        braceCount === 0 &&
        angleCount === 0 &&
        parenCount === 0 &&
        bracketCount === 0
      ) {
        // Смотрим что дальше — возможно тип ещё не закончился
        let lookAhead = endIndex;
        while (lookAhead < content.length && /\s/.test(content[lookAhead])) {
          lookAhead++;
        }
        const nextCh = content[lookAhead];
        const nextCh2 = content[lookAhead + 1];

        // '&' или '|' — intersection/union, продолжаем
        if (nextCh === '&' || nextCh === '|') {
          endIndex = lookAhead + 1;
          foundBody = false;
          continue;
        }
        // '=>' — стрелочная функция, продолжаем
        if (nextCh === '=' && nextCh2 === '>') {
          endIndex = lookAhead + 2;
          foundBody = false;
          continue;
        }
        // '?' — conditional type (T extends X ? Y : Z), продолжаем
        if (nextCh === '?') {
          endIndex = lookAhead + 1;
          foundBody = false;
          continue;
        }
        // '(' — начало аргументов функции после generic <T>, продолжаем
        if (nextCh === '(') {
          foundBody = false;
          continue;
        }
        // '=' — ещё не дошли до тела, продолжаем
        if (nextCh === '=' && nextCh2 !== '>') {
          foundBody = false;
          continue;
        }
        // 'extends' после generic params в interface, продолжаем
        if (content.substring(lookAhead, lookAhead + 7) === 'extends') {
          endIndex = lookAhead + 7;
          foundBody = false;
          continue;
        }
        // '{' после generic params — начало тела, продолжаем парсинг
        if (nextCh === '{') {
          foundBody = false;
          continue;
        }
        // '[]' — массив, продолжаем
        if (nextCh === '[' && nextCh2 === ']') {
          endIndex = lookAhead + 2;
          continue;
        }
        // '[' — indexed access type (например [keyof typeof X]), продолжаем парсинг
        if (nextCh === '[') {
          foundBody = false;
          continue;
        }
        // 'as const' — часть const assertion, захватываем
        if (content.substring(lookAhead, lookAhead + 8) === 'as const') {
          endIndex = lookAhead + 8;
          // Пропускаем пробелы и захватываем ';' если есть
          while (endIndex < content.length && /\s/.test(content[endIndex])) {
            endIndex++;
          }
          if (endIndex < content.length && content[endIndex] === ';') {
            endIndex++;
          }
          break;
        }
        // ';' — захватываем
        if (nextCh === ';') {
          endIndex = lookAhead + 1;
        }
        break;
      }
    }

    // Вырезаем определение типа вместе с телом
    const typeDefinition = content.substring(startIndex, endIndex).trim(); // Вырезаем и удаляем лишние пробельные символы

    return getStrWithReplacedNewLineSymbols(typeDefinition);
    // await fs.writeFile(pastePath, JSON.stringify({ typeName: typeDefinition }));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Ошибка чтения файла ${filePathExt}:`, err);
    throw err;
  }
}
