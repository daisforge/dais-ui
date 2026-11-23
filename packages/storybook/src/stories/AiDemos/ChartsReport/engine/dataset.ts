/**
 * Разбор CSV и профилирование колонок.
 *
 * В продукте этот шаг выполняет бэкенд (CSV/XLSX), в LLM уходит только
 * профиль: имена колонок, типы и несколько значений. Полные данные модель
 * не видит — их агрегирует runtime отчёта.
 */

export type CellValue = string | number | null;
export type DataRow = Record<string, CellValue>;

export type ColumnType = 'number' | 'date' | 'category' | 'text';

export type ColumnProfile = {
  name: string;
  type: ColumnType;
  /** Количество различных значений */
  distinct: number;
  /** Несколько примеров значений — ровно то, что видит LLM */
  samples: string[];
  /** Значения категории в порядке первого появления (до 30) */
  values?: string[];
  min?: number | string;
  max?: number | string;
};

export type DatasetProfile = {
  fileName: string;
  rows: number;
  columns: ColumnProfile[];
};

export type Dataset = {
  profile: DatasetProfile;
  rows: DataRow[];
};

const DATE_RE = /^(\d{4}-\d{2}(-\d{2})?|\d{2}\.\d{2}\.\d{4})$/;

/** Делит строку CSV с учётом кавычек */
function splitLine(line: string, delimiter: string): string[] {
  const result: string[] = [];
  let current = '';
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === delimiter && !quoted) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/** «1 234,5» и «1234.5» → число; иначе null */
function toNumber(raw: string): number | null {
  const normalized = raw.replace(/[\s\u00a0]/g, '').replace(',', '.');
  if (!/^-?\d+(\.\d+)?$/.test(normalized)) return null;
  return Number(normalized);
}

/** 31.01.2025 → 2025-01-31, остальные даты оставляем как есть */
function normalizeDate(raw: string): string {
  const match = raw.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return match ? `${match[3]}-${match[2]}-${match[1]}` : raw;
}

export function parseCsv(text: string, fileName: string): Dataset {
  const lines = text
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0);
  if (lines.length < 2) {
    throw new Error('В файле нет строк с данными');
  }

  const header = lines[0] ?? '';
  const delimiter =
    (header.match(/;/g)?.length ?? 0) > (header.match(/,/g)?.length ?? 0)
      ? ';'
      : ',';
  const names = splitLine(header, delimiter);
  const rawRows = lines.slice(1).map((line) => splitLine(line, delimiter));

  const columns: ColumnProfile[] = names.map((name, index) => {
    const raw = rawRows.map((row) => row[index] ?? '').filter(Boolean);
    const distinctValues = Array.from(new Set(raw));
    const isNumber = raw.length > 0 && raw.every((v) => toNumber(v) !== null);
    const isDate = raw.length > 0 && raw.every((v) => DATE_RE.test(v));

    let type: ColumnType = 'text';
    if (isDate) type = 'date';
    else if (isNumber) type = 'number';
    else if (distinctValues.length <= Math.max(30, raw.length * 0.3))
      type = 'category';

    const profile: ColumnProfile = {
      name,
      type,
      distinct: distinctValues.length,
      samples: distinctValues.slice(0, 3),
    };
    if (type === 'category') profile.values = distinctValues.slice(0, 30);
    if (type === 'number') {
      const numbers = raw.map((v) => toNumber(v) as number);
      profile.min = Math.min(...numbers);
      profile.max = Math.max(...numbers);
    }
    if (type === 'date') {
      const dates = raw.map(normalizeDate).sort();
      [profile.min] = dates;
      profile.max = dates[dates.length - 1];
    }
    return profile;
  });

  const rows: DataRow[] = rawRows.map((raw) => {
    const row: DataRow = {};
    columns.forEach((column, index) => {
      const value = raw[index] ?? '';
      if (value === '') row[column.name] = null;
      else if (column.type === 'number') row[column.name] = toNumber(value);
      else if (column.type === 'date') row[column.name] = normalizeDate(value);
      else row[column.name] = value;
    });
    return row;
  });

  return {
    profile: { fileName, rows: rows.length, columns },
    rows,
  };
}

/** plural(144, 'строка', 'строки', 'строк') → «144 строки» */
export function plural(count: number, one: string, few: string, many: string) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} ${one}`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14))
    return `${count} ${few}`;
  return `${count} ${many}`;
}

const TYPE_LABEL: Record<ColumnType, string> = {
  number: 'число',
  date: 'дата',
  category: 'категория',
  text: 'текст',
};

export const columnTypeLabel = (type: ColumnType) => TYPE_LABEL[type];

/** Короткое описание профиля для сообщения агента */
export function describeProfile(profile: DatasetProfile): string {
  const columns = profile.columns
    .map((column) => `${column.name} (${TYPE_LABEL[column.type]})`)
    .join(', ');
  return `${plural(profile.rows, 'строка', 'строки', 'строк')}, ${plural(
    profile.columns.length,
    'колонка',
    'колонки',
    'колонок',
  )}: ${columns}`;
}
