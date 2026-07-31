import { ObjectForExtending } from '../types';

/**
 * Локаль для сортировки.
 * Используем 'ru', чтобы кириллица и латиница
 * сортировались предсказуемо (а не по кодам Unicode).
 */
const LOCALE = 'ru';

/**
 * Настройки Intl.Collator:
 * - numeric: true  → строковые числа сравниваются как числа ("2" < "10", а не "2" > "10")
 * - sensitivity: 'base' → регистр и диакритика не влияют ("а" === "А")
 */
const COLLATOR_OPTIONS: Intl.CollatorOptions = {
  numeric: true,
  sensitivity: 'base',
};

// ── helpers ──────────────────────────────────────────────────────

/**
 * Проверяет, является ли значение «пустым».
 * Пустым считается: null, undefined, пустая строка, строка из пробелов.
 *
 * Экспортируется для использования в useSortedRows —
 * там нужно определить, является ли значение пустым,
 * чтобы НЕ инвертировать результат при DESC
 * (пустые всегда остаются внизу).
 */
export const isBlank = (v: unknown): boolean => String(v ?? '').trim() === '';

/**
 * Приводит значение к строке и обрезает пробелы по краям.
 * null / undefined → пустая строка.
 */
const normalizeString = (v: unknown): string => String(v ?? '').trim();

/**
 * Пытается распарсить значение как число.
 *
 * Обработка:
 * - пробелы-разделители тысяч удаляются ("1 000" → 1000)
 * - запятая заменяется на точку ("3,14" → 3.14)
 * - если результат не finite (NaN, Infinity) → null
 * - пустая строка → null
 *
 * @returns число или null, если значение невалидно
 */
const parseNumber = (v: unknown): number | null => {
  const raw = String(v ?? '').trim();

  if (!raw) return null;

  const normalized = raw.replace(/\s/g, '').replace(',', '.');
  const n = Number(normalized);

  return Number.isFinite(n) ? n : null;
};

// ── comparators ──────────────────────────────────────────────────
//
// Все встроенные компараторы следуют единому контракту:
//
// 1. Пустые значения ВСЕГДА уходят вниз (return 1 / -1).
//    Направление (ASC/DESC) на них НЕ влияет —
//    за это отвечает useSortedRows, который не инвертирует
//    результат для пустых.
//
// 2. Компаратор возвращает:
//      < 0 → a перед b
//        0 → равны
//      > 0 → b перед a
//
// 3. Направление (ASC/DESC) применяется в useSortedRows:
//      ASC  → compResult как есть
//      DESC → -compResult (инверсия), НО не для пустых значений
//

/**
 * Строковый компаратор.
 *
 * Приоритет обработки:
 * 1. Оба пустые → 0 (равны)
 * 2. Один пустой → пустой уходит вниз
 * 3. Оба непустые → localeCompare с настройками LOCALE + COLLATOR_OPTIONS
 *
 * Благодаря `numeric: true`:
 *   "7" < "41" < "100" (а не "100" < "41" < "7" как при посимвольном сравнении)
 *
 * Благодаря `sensitivity: 'base'`:
 *   "яблоко" === "Яблоко" (регистр не учитывается)
 *
 * @param sortKey — ключ поля, по которому сортируем
 */
export const stringComparator =
  <RowType extends ObjectForExtending>(sortKey: keyof RowType) =>
  (a: RowType, b: RowType): number => {
    const av = normalizeString(a[sortKey]);
    const bv = normalizeString(b[sortKey]);

    // оба пустые — равны
    if (!av && !bv) return 0;

    // один пустой — он уходит вниз
    if (!av) return 1;
    if (!bv) return -1;

    return av.localeCompare(bv, LOCALE, COLLATOR_OPTIONS);
  };

/**
 * Числовой компаратор.
 *
 * Приоритет обработки:
 * 1. Оба невалидные (null) → 0
 * 2. Один невалидный → он уходит вниз
 * 3. Оба валидные → простое вычитание (av - bv)
 *
 * Понимает:
 * - запятую как десятичный разделитель ("3,14" → 3.14)
 * - пробелы-разделители тысяч ("1 000" → 1000)
 * - строки с ведущими нулями ("01" → 1)
 *
 * НЕ понимает (вернёт null, значение уйдёт вниз):
 * - текст ("abc")
 * - смешанные строки ("12abc")
 * - Infinity, NaN
 *
 * @param sortKey — ключ поля, по которому сортируем
 */
export const numberComparator =
  <RowType extends ObjectForExtending>(sortKey: keyof RowType) =>
  (a: RowType, b: RowType): number => {
    const av = parseNumber(a[sortKey]);
    const bv = parseNumber(b[sortKey]);

    // оба невалидные — равны
    if (av === null && bv === null) return 0;

    // один невалидный — он уходит вниз
    if (av === null) return 1;
    if (bv === null) return -1;

    return av - bv;
  };
