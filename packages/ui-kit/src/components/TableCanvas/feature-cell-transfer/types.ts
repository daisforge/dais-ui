import type { GridSelection, Rectangle } from '@glideappsfinal/glide-data-grid';

import type { ColumnConfigInternal } from '../types/column-config-internal.type';
import type { ObjectForExtending } from '../types/utils.type';

export type { Rectangle };

/** Стратегия при встрече readonly-ячейки в зоне вставки/fill */
export type ReadonlyBehavior = 'skip' | 'abort';

/** Стратегия при выходе данных за границы таблицы */
export type OverflowBehavior = 'truncate' | 'abort';

/** Режим валидации значений при вставке/fill */
export type ValidationMode = 'none' | 'type-check';

/** Разрешённые направления перетаскивания fill handle */
export type AllowedFillDirections =
  | 'horizontal'
  | 'vertical'
  | 'orthogonal'
  | 'any';

/**
 * Конфигурация одной горячей клавиши для copy/paste.
 * Проверяется через `event.code` (физический код клавиши), поэтому работает
 * одинаково на любой раскладке (RU, EN и т.д.).
 */
export type HotkeyConfig = {
  /** Физический код клавиши: `'KeyC'`, `'KeyV'`, `'Insert'` и т.д. */
  code: string;
  /** Нужно ли нажатие Ctrl (на Mac учитывается и Cmd). По умолчанию `true` */
  ctrl?: boolean;
  /** Нужно ли нажатие Shift. По умолчанию `false` */
  shift?: boolean;
  /** Нужно ли нажатие Alt. По умолчанию `false` */
  alt?: boolean;
  /** Нужно ли нажатие Meta (Cmd на Mac, Win на Windows). По умолчанию `false` */
  meta?: boolean;
};

/**
 * Настройки поведения при вставке (Ctrl+V).
 */
export type PasteConfig = {
  /**
   * Что делать с readonly-ячейками в зоне вставки.
   * `'skip'` пропускает их, `'abort'` отменяет всю вставку целиком.
   * По умолчанию `'skip'`.
   */
  readonlyBehavior?: ReadonlyBehavior;
  /** Разрешать ли вставку в subrow-ячейки. По умолчанию `true` */
  allowSubRows?: boolean;
  /**
   * Что делать при выходе данных за границы таблицы.
   * `'truncate'` обрезает лишнее, `'abort'` отменяет вставку.
   * По умолчанию `'truncate'`.
   */
  overflowBehavior?: OverflowBehavior;
  /**
   * Тиражирование источника на всё выделение (как в Excel).
   * Если `true` и в буфере одна строка/колонка, а выделение больше,
   * буфер повторится по соответствующей оси.
   * По умолчанию `false`.
   */
  broadcast?: boolean;
  /**
   * Режим валидации значений при вставке.
   * - `'none'` вставляет строку как есть без проверок
   * - `'type-check'` (по умолчанию) проверяет соответствие типу ячейки:
   *   числовые поля должны парситься в число, select-поля должны содержать
   *   значение из `options`. Невалидные ячейки пропускаются.
   */
  validation?: ValidationMode;
};

/**
 * Настройки fill handle (квадратика drag-to-fill в углу выделения).
 * Можно передать `true/false` вместо объекта если нужна базовая настройка.
 */
export type FillHandleConfig = {
  /** Включён ли fill handle. По умолчанию включён если включён cellTransfer */
  enabled?: boolean;
  /** Форма квадратика. По умолчанию `'square'` */
  shape?: 'square' | 'circle';
  /** Размер квадратика в пикселях */
  size?: number;
  /** Толщина обводки квадратика в пикселях */
  outline?: number;
  /**
   * Разрешённые направления перетаскивания.
   * `'orthogonal'` (по умолчанию) разрешает только вдоль одной оси за раз.
   */
  allowedDirections?: AllowedFillDirections;
  /**
   * Поведение при попадании readonly-ячеек в destination.
   * См. `PasteConfig.readonlyBehavior`. По умолчанию `'skip'`.
   */
  readonlyBehavior?: ReadonlyBehavior;
  /** Разрешать ли fill в subrow-ячейки. По умолчанию `true` */
  allowSubRows?: boolean;
};

/**
 * Событие при завершении drag-to-fill.
 * Содержит исходный и целевой диапазоны, а также возможность отмены.
 */
export type FillPatternEvent = {
  /** Исходный диапазон (откуда берутся значения) */
  patternSource: Rectangle;
  /** Целевой диапазон (куда тиражируются значения) */
  fillDestination: Rectangle;
  /** Вызов отменяет fill (данные не записываются) */
  preventDefault: () => void;
};

/**
 * Информация об одной ячейке, передаваемая в `onBeforeCopy` / `onBeforePaste`.
 * Позволяет колбэку принимать решение на основе данных ячейки (тип колонки,
 * raw-значение, уровень subrow).
 */
export type CellTransferCellInfo = {
  /** Объект строки, в которой находится ячейка */
  row: ObjectForExtending;
  /** Конфиг колонки (срез важных полей) */
  column: TransferColumnConfig;
  /** Индекс колонки в массиве columns */
  colIndex: number;
  /** Индекс строки в массиве flattenedRows */
  rowIndex: number;
  /** Уровень вложенности subrow: 0 — parent, 1+ — subrow */
  lvl: number;
  /** Сырое значение из `row[key]` или `row[subKey]` (без форматирования) */
  rawValue: unknown;
  /** Текстовое представление ячейки (то что попадает в TSV) */
  formattedValue: string;
};

/**
 * Метаданные для `onBeforeCopy` — что именно копируется.
 */
export type CopyMeta = {
  /** Прямоугольный диапазон выделения в координатах таблицы */
  range: Rectangle;
  /** Двумерный массив информации о каждой ячейке, той же формы что data */
  cells: CellTransferCellInfo[][];
};

/**
 * Метаданные для `onBeforePaste` — куда и что вставляется.
 */
export type PasteMeta = {
  /** Верхний-левый угол целевой области (куда начинается вставка) */
  target: { col: number; row: number };
  /** Двумерный массив информации о целевых ячейках, той же формы что data */
  targetCells: CellTransferCellInfo[][];
  /** Текущее выделение в таблице */
  selection: GridSelection;
};

/** Источник вызова `onRowsChange` — кто инициировал изменение строк */
export type RowsChangeType = 'edit' | 'paste' | 'fill';

/**
 * Метаданные для `onBeforeFill` — информация об источнике и цели fill handle.
 */
export type FillMeta = {
  /** Исходный диапазон (откуда тянули) */
  sourceRange: Rectangle;
  /** Целевой диапазон (куда заполнили) */
  destinationRange: Rectangle;
  /** Двумерный массив информации об исходных ячейках */
  sourceCells: CellTransferCellInfo[][];
  /** Двумерный массив информации о целевых ячейках (до заполнения) */
  targetCells: CellTransferCellInfo[][];
};

/**
 * Конфигурация переноса данных между ячейками (copy, paste, fill handle)
 * для TableCanvas. Передаётся через `tableConfig.cellTransfer`.
 */
export type CellTransferConfig = {
  /**
   * Явное включение/выключение всей фичи.
   * По умолчанию copy работает всегда, а paste и fill handle следуют
   * за `editModeEnabled`. При `false` отключается всё.
   */
  enabled?: boolean;
  /**
   * Переопределение хоткеев.
   * Можно передать один `HotkeyConfig` или массив альтернативных комбинаций.
   * По умолчанию: copy = Ctrl+C / Cmd+C, paste = Ctrl+V / Cmd+V.
   */
  hotkeys?: {
    /** Хоткей(и) для копирования */
    copy?: HotkeyConfig | HotkeyConfig[];
    /** Хоткей(и) для вставки */
    paste?: HotkeyConfig | HotkeyConfig[];
  };
  /** Настройки paste (readonly, overflow, broadcast, validation) */
  paste?: PasteConfig;
  /** Настройки fill handle. `true/false` — быстрое вкл/выкл без деталей */
  fillHandle?: boolean | FillHandleConfig;
  /**
   * Колбэк перед копированием.
   * Можно модифицировать данные (вернуть новый `string[][]`) или отменить
   * операцию (вернуть `false`).
   * Если onBeforeCopy нужен для side-эффектов, то функция должна вернуть data из первого аргумента без изменений.
   */
  onBeforeCopy?: (data: string[][], meta: CopyMeta) => string[][] | false;
  /**
   * Колбэк перед вставкой.
   * Можно модифицировать данные (вернуть новый `string[][]`) или отменить
   * операцию (вернуть `false`).
   * Если onBeforePaste нужен для side-эффектов, то функция должна вернуть data из первого аргумента без изменений.
   */
  onBeforePaste?: (data: string[][], meta: PasteMeta) => string[][] | false;
  /**
   * Колбэк перед fill handle (drag-to-fill).
   * Вызывается перед применением значений. Можно модифицировать данные
   * (вернуть новый `string[][]`) или отменить операцию (вернуть `false`).
   *
   * `meta.sourceCells` содержит полную информацию об исходных ячейках,
   * включая объекты строк (`row`) — позволяет получить source row
   * и использовать данные из соседних колонок.
   * Если onBeforeFill нужен для side-эффектов, то функция должна вернуть data из первого аргумента без изменений.
   */
  onBeforeFill?: (data: string[][], meta: FillMeta) => string[][] | false;
};

/**
 * Элемент, отдаваемый генератором `iterateCellRange` для каждой валидной ячейки
 * диапазона.
 */
export type CellIterationItem<R extends ObjectForExtending> = {
  /** Объект строки */
  row: R;
  /** Конфиг колонки */
  column: TransferColumnConfig;
  /** Индекс колонки в массиве columns */
  colIndex: number;
  /** Индекс строки в массиве flattenedRows */
  rowIndex: number;
  /** Уровень вложенности subrow: 0 — parent, 1+ — subrow */
  lvl: number;
};

export type TransferColumnConfig = Pick<
  ColumnConfigInternal<ObjectForExtending, unknown>,
  | 'key'
  | 'name'
  | 'isServiceColumn'
  | 'copyData'
  | 'editable'
  | 'editingCell'
  | 'contentFormat'
  | 'subRow'
>;
