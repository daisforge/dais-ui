/* eslint-disable no-plusplus */
import type { TDatePickerFormat } from '../../types';
import { monthLongNames, monthShortNames } from './consts';
import type { TMouthNames } from './types';

const monthAllNames: TMouthNames = { ...monthShortNames, ...monthLongNames };

/** Собирает regex-паттерн из ключей словаря месяцев: "янв\.|фев\.|мар\.|..." */
const getMouthNamesPattern = (monthNames: TMouthNames) =>
  Object.keys(monthNames)
    .map((month) => month.replace('.', '\\.'))
    .join('|');

type TokenType = 'day' | 'month-num' | 'month-text' | 'year';

const monthTextPattern = `(${getMouthNamesPattern(monthAllNames)})`;

/**
 * Словарь токенов формата: [строка токена, regex-группа, семантический тип].
 * Порядок важен: длинные токены (MMMM, YYYY) проверяются раньше коротких (MMM, YY, MM),
 * чтобы "MMMM" не распознался как "MM" + "MM".
 */
const TOKEN_DEFS: [string, string, TokenType][] = [
  ['MMMM', monthTextPattern, 'month-text'],
  ['MMM', monthTextPattern, 'month-text'],
  ['YYYY', '(\\d{4})', 'year'],
  ['DD', '(\\d{2})', 'day'],
  ['YY', '(\\d{2})', 'year'],
  ['MM', '(\\d{2})', 'month-num']
];

/** Экранирует спецсимволы regex (точка, тире и т.д.) для использования как литерал */
const escapeRegex = (char: string) =>
  char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

type FormatInfo = { regex: RegExp; tokens: TokenType[] };
const formatCache = new Map<string, FormatInfo>();

/**
 * Разбирает формат-строку (например "DD.MM.YYYY") на regex + массив типов токенов.
 *
 * Идёт по строке слева направо:
 * - если начало совпадает с токеном (DD, MM, YYYY...), добавляет его regex-группу
 * - иначе символ считается разделителем (точка, тире, пробел), добавляется как литерал
 *
 * Результат для "DD-MM-YYYY":
 *   regex:  /^(\d{2})-(\d{2})-(\d{4})$/
 *   tokens: ['day', 'month-num', 'year']
 */
const parseFormat = (format: string): FormatInfo => {
  let remaining = format;
  let regexStr = '^';
  const tokens: TokenType[] = [];

  while (remaining.length > 0) {
    let matched = false;
    for (const [token, pattern, type] of TOKEN_DEFS) {
      if (remaining.startsWith(token)) {
        regexStr += pattern;
        tokens.push(type);
        remaining = remaining.slice(token.length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      // символ-разделитель (точка, тире, пробел), экранируем и добавляем как литерал
      regexStr += escapeRegex(remaining.charAt(0));
      remaining = remaining.slice(1);
    }
  }

  regexStr += '$';
  return { regex: new RegExp(regexStr), tokens };
};

/** Кеширует результат parseFormat, чтобы не парсить один и тот же формат повторно */
const getFormatInfo = (format: TDatePickerFormat): FormatInfo => {
  let info = formatCache.get(format);
  if (!info) {
    info = parseFormat(format);
    formatCache.set(format, info);
  }
  return info;
};

const getFullYear = (year: number): number => (year < 100 ? 2000 + year : year);

/**
 * Конвертирует строку даты в ISO-формат по указанному формату.
 *
 * 1. Получает regex и типы токенов для формата (из кеша или парсит)
 * 2. Матчит строку даты по regex, извлекает группы (день, месяц, год)
 * 3. Обходит группы, заполняя day/month/year по типу каждого токена
 * 4. Если формат без дня (MM.YYYY), день = 1 по умолчанию
 */
export const convertToISO = ({
  date,
  format
}: {
  date: string;
  format: TDatePickerFormat;
}): string => {
  const { regex, tokens } = getFormatInfo(format);
  const match = date.match(regex);
  if (!match) return '';

  try {
    let day = 1;
    let monthNum = 0;
    let year = new Date().getFullYear();
    let monthResolved = false;

    // match[0] = вся строка, match[1..N] = захваченные группы по порядку токенов
    for (let i = 0; i < tokens.length; i++) {
      const value = match[i + 1];
      if (!value) return '';

      switch (tokens[i]) {
        case 'day':
          day = Number(value);
          if (Number.isNaN(day)) return '';
          break;
        case 'month-num':
          monthNum = Number(value) - 1;
          if (Number.isNaN(monthNum)) return '';
          monthResolved = true;
          break;
        case 'month-text': {
          const key = value as keyof typeof monthAllNames;
          const num = monthAllNames[key];
          if (typeof num !== 'number') return '';
          monthNum = num;
          monthResolved = true;
          break;
        }
        case 'year':
          year = getFullYear(Number(value));
          if (Number.isNaN(year)) return '';
          break;
        default:
          break;
      }
    }

    if (!monthResolved) return '';
    return new Date(year, monthNum, day).toISOString();
  } catch {
    return '';
  }
};
