import type { SpanAlignment } from '@ui-kit/components/TableGlide';

/** Слитные шапки на уровне КОЛОНКИ — примешивается в `ColumnConfig`. */
export type SpanColumnConfig = {
  /**
   * Слить шапку листовой колонки (без группы): заголовок занимает всю высоту шапки
   * одной ячейкой, без пустой полосы сверху. Перекрывает `tableConfig.spanGroupHeader`.
   * У колонок внутри группы не действует.
   */
  spanGroupHeader?: boolean;
  /** Выравнивание заголовка в слитой ячейке. Работает только со `spanGroupHeader: true`. */
  spanGroupHeaderAlign?: SpanAlignment;
};

/** Слитные шапки на уровне ТАБЛИЦЫ — примешивается в `tableConfig` (общие дефолты). */
export type SpanTableConfig = {
  /**
   * Слить шапки сразу у ВСЕХ листовых колонок (без группы) — заголовок на всю высоту
   * шапки. Точечно перекрывается на колонке (`columnConfig[].spanGroupHeader`).
   * @default false
   */
  spanGroupHeader?: boolean;
  /**
   * Слить «мелкие» группы: групп-ячейку без более глубоких подгрупп тянет по вертикали
   * до ряда колонок — вместо пустой полосы под заголовком.
   * @default false
   */
  spanShallowGroups?: boolean;
  /**
   * Дефолт выравнивания заголовка в слитых ячейках. Перекрывается значением
   * на колонке (`spanGroupHeaderAlign`).
   */
  spanAlign?: SpanAlignment;
};
