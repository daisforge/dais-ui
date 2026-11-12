import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import type { RefObject } from 'react';
import { useCallback, useEffect, useRef } from 'react';

/** Ячейка с данными под курсором. */
export interface HoveredCell {
  colInd: number;
  rowInd: number;
}

/** Строки под курсором: от первой до последней включительно. */
export interface HoverRows {
  from: number;
  to: number;
}

/**
 * Строки, которые подсвечивает курсор на ячейке. Курсор на обычной ячейке
 * подсвечивает её строку, на объединённом блоке все строки блока.
 */
export type ResolveHoverRows = (
  /** Ячейка прямо под мышью. Блок по ней ищется заново при каждом расчёте. */
  rawColInd: number,
  rawRowInd: number,
) => HoverRows;

/**
 * Единый источник наведения курсора для таблицы. Хранит два значения. У них
 * разный смысл, поэтому объединить их в одно нельзя.
 *
 * Первое значение (hoveredCellRef) это ячейка с данными под курсором. Если
 * ячейка входит в объединённый блок, берётся главная ячейка блока. Служебные
 * колонки (номер строки, чекбокс) сюда не входят. Значение лежит в ссылке и не
 * вызывает перерисовку: его читают при отрисовке ячейки, чтобы выставить
 * признаки наведения (по ним, например, показывают кнопку или иконку в строке).
 * Когда курсор переходит на другую ячейку, перерисовываются только две строки:
 * прежняя и новая. Значение записывается при движении мыши.
 *
 * Второе значение (hoverRowsRef) это строки под курсором: одна строка у обычной
 * ячейки, все строки у объединённого блока. Они подсвечиваются вместе со
 * служебными колонками и с блоками, через которые проходят. Служебные колонки
 * тут учитываются. От этих строк зависят фон строки и цвет служебных колонок,
 * и их тоже читают при отрисовке (getRowThemeOverride и getCellContent),
 * поэтому значение лежит в ссылке, а не в состоянии: рендер React не нужен,
 * достаточно дорисовать прежние и новые строки. Полная перерисовка экрана на
 * каждое движение мыши была главной причиной лага наведения на больших
 * таблицах. Меняется только когда включён эффект наведения на строку
 * (hoverEffects.row), иначе движение мыши дорисовок строк не вызывает.
 *
 * Дорисовки строк от обоих значений за одно событие мыши склеиваются в один
 * вызов updateCells (микрозадача), чтобы не рисовать одни и те же строки дважды.
 * Строки блока за пределами видимой области не дорисовываются: glide нарисует
 * их заново, когда они появятся на экране.
 */
/** Если видимая область ещё неизвестна, дорисовываем не больше стольких строк. */
const MAX_ROWS_WITHOUT_REGION = 200;
const NO_ROWS: readonly number[] = [];

export function useHoverState({
  isRowHoverEnabled,
  dataEditorRef,
  columnsCount,
  rowsCount,
  resolveHoverRows,
  visibleRegionRef,
  getPinnedRows,
  onHoverRowsChange,
}: {
  isRowHoverEnabled: boolean;
  /** Строки под курсором по ячейке; без него подсвечивается строка под мышью. */
  resolveHoverRows?: ResolveHoverRows;
  dataEditorRef: RefObject<DataEditorRef | null>;
  /** Число отображаемых колонок: перерисовка строки обновляет все её ячейки. */
  columnsCount: number;
  /** Число строк данных (без итоговой summary-строки). */
  rowsCount: number;
  /** Видимая область: дорисовка строк блока обрезается по её строкам. */
  visibleRegionRef?: RefObject<{ y: number; height: number } | null>;
  /** Прилипшие строки: glide рисует их всегда, но в видимую область не включает. */
  getPinnedRows?: () => readonly number[] | undefined;
  /** Строки под курсором сменились (рендера React при этом нет). */
  onHoverRowsChange?: () => void;
}) {
  // Ячейка под курсором (для признаков наведения в содержимом ячеек).
  const hoveredCellRef = useRef<HoveredCell | null>(null);

  // Строки, которые ждут дорисовки до конца текущей задачи.
  const pendingRowsRef = useRef<Set<number> | null>(null);

  // Перерисовываем строки целиком, а не только ячейку под курсором: наведение
  // может влиять на любую колонку этой строки. Например, курсор на ячейке
  // "Название", а иконка должна появиться в соседней колонке действий.
  const damageRowRanges = useCallback(
    (...ranges: Array<HoverRows | undefined>) => {
      const visible = visibleRegionRef?.current;
      const visibleFrom = visible ? visible.y : 0;
      // Без известной области (первый кадр) дорисовываем не больше первых строк
      const visibleTo = visible
        ? visible.y + visible.height
        : MAX_ROWS_WITHOUT_REGION - 1;
      const pinned = getPinnedRows?.() ?? NO_ROWS;
      const toUpdate: number[] = [];
      ranges.forEach((range) => {
        if (!range) return;
        const from = Math.max(range.from, 0, visibleFrom);
        const to = Math.min(range.to, rowsCount - 1, visibleTo);
        for (let rowInd = from; rowInd <= to; rowInd += 1) {
          toUpdate.push(rowInd);
        }
        // Прилипшие строки диапазона видны и вне области
        pinned.forEach((rowInd) => {
          if (
            rowInd >= range.from &&
            rowInd <= range.to &&
            rowInd < rowsCount &&
            (rowInd < from || rowInd > to)
          ) {
            toUpdate.push(rowInd);
          }
        });
      });
      if (toUpdate.length === 0) return;

      if (pendingRowsRef.current === null) {
        pendingRowsRef.current = new Set();
        queueMicrotask(() => {
          const rowsToUpdate = pendingRowsRef.current;
          pendingRowsRef.current = null;
          const ref = dataEditorRef.current;
          if (!rowsToUpdate || !ref) return;

          const cells: Array<{ cell: [number, number] }> = [];
          rowsToUpdate.forEach((rowInd) => {
            for (let colInd = 0; colInd < columnsCount; colInd += 1) {
              cells.push({ cell: [colInd, rowInd] });
            }
          });
          ref.updateCells?.(cells);
        });
      }
      toUpdate.forEach((rowInd) => pendingRowsRef.current?.add(rowInd));
    },
    [dataEditorRef, columnsCount, rowsCount, visibleRegionRef, getPinnedRows],
  );

  const damageRows = useCallback(
    (...rowIndexes: Array<number | undefined>) => {
      damageRowRanges(
        ...rowIndexes.map((rowInd) =>
          typeof rowInd === 'number' ? { from: rowInd, to: rowInd } : undefined,
        ),
      );
    },
    [damageRowRanges],
  );

  const setHoveredCell = useCallback(
    (next: HoveredCell | null) => {
      const prev = hoveredCellRef.current;
      const isSameCell =
        prev?.colInd === next?.colInd && prev?.rowInd === next?.rowInd;

      if (isSameCell) {
        return;
      }

      hoveredCellRef.current = next;
      // При смене курсора обновляем прежнюю и новую строки: у одной наведение
      // убираем, у другой показываем.
      damageRows(prev?.rowInd, next?.rowInd);
    },
    [damageRows],
  );

  // Строки под курсором (для фона строк и подсветки служебных колонок).
  const hoverRowsRef = useRef<HoverRows | undefined>(undefined);

  // Последнее наведение и свежий расчёт строк: при смене данных блок под
  // курсором может стать другим, строки пересчитываются без движения мыши.
  const lastHoverRef = useRef<readonly [number, number] | undefined>(undefined);
  const resolveHoverRowsRef = useRef(resolveHoverRows);
  resolveHoverRowsRef.current = resolveHoverRows;
  const onHoverRowsChangeRef = useRef(onHoverRowsChange);
  onHoverRowsChangeRef.current = onHoverRowsChange;

  const applyHoverRows = useCallback(() => {
    const last = lastHoverRef.current;
    const resolve = resolveHoverRowsRef.current;
    const next: HoverRows | undefined = !last
      ? undefined
      : resolve
      ? resolve(last[0], last[1])
      : { from: last[1], to: last[1] };
    const prev = hoverRowsRef.current;
    if (prev?.from === next?.from && prev?.to === next?.to) return;
    hoverRowsRef.current = next;
    damageRowRanges(prev, next);
    onHoverRowsChangeRef.current?.();
  }, [damageRowRanges]);

  const handleHoverRowChange = useCallback(
    (rawCell: readonly [number, number] | undefined) => {
      lastHoverRef.current = rawCell;
      applyHoverRows();
    },
    [applyHoverRows],
  );

  useEffect(() => {
    applyHoverRows();
  }, [resolveHoverRows, applyHoverRows]);

  return {
    hoveredCellRef,
    setHoveredCell,
    hoverRowsRef,
    // Та же склейка дорисовок для других причин перерисовать строки (смена
    // активной строки и выделенного диапазона), чтобы за одно событие уходил
    // один вызов updateCells.
    damageRows,
    // Если наведение на строку выключено, наружу не отдаём функцию, и тогда
    // слежение за строкой не ведётся вовсе.
    onHoverRowChange: isRowHoverEnabled ? handleHoverRowChange : undefined,
  };
}
