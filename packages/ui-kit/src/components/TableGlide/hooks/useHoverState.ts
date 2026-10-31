import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import type { RefObject } from 'react';
import { useCallback, useRef } from 'react';

/** Ячейка с данными под курсором. */
export interface HoveredCell {
  colInd: number;
  rowInd: number;
}

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
 * Второе значение (hoverRowRef) это номер строки под курсором. Внутри
 * объединённого блока это строка прямо под мышью, а не главная ячейка блока.
 * Служебные колонки тут учитываются. От него зависят фон строки и цвет
 * служебных колонок, и их тоже читают при отрисовке (getRowThemeOverride и
 * getCellContent), поэтому значение лежит в ссылке, а не в состоянии: рендер
 * React не нужен, достаточно дорисовать прежнюю и новую строки. Полная
 * перерисовка экрана на каждое движение мыши была главной причиной лага
 * наведения на больших таблицах. Меняется только когда включён эффект
 * наведения на строку (hoverEffects.row), иначе движение мыши дорисовок
 * строк не вызывает.
 *
 * Дорисовки строк от обоих значений за одно событие мыши склеиваются в один
 * вызов updateCells (микрозадача), чтобы не рисовать одни и те же строки дважды.
 */
export function useHoverState({
  isRowHoverEnabled,
  dataEditorRef,
  columnsCount,
  rowsCount,
}: {
  isRowHoverEnabled: boolean;
  dataEditorRef: RefObject<DataEditorRef | null>;
  /** Число отображаемых колонок: перерисовка строки обновляет все её ячейки. */
  columnsCount: number;
  /** Число строк данных (без итоговой summary-строки). */
  rowsCount: number;
}) {
  // Ячейка под курсором (для признаков наведения в содержимом ячеек).
  const hoveredCellRef = useRef<HoveredCell | null>(null);

  // Строки, которые ждут дорисовки до конца текущей задачи.
  const pendingRowsRef = useRef<Set<number> | null>(null);

  // Перерисовываем строки целиком, а не только ячейку под курсором: наведение
  // может влиять на любую колонку этой строки. Например, курсор на ячейке
  // "Название", а иконка должна появиться в соседней колонке действий.
  const damageRows = useCallback(
    (...rowIndexes: Array<number | undefined>) => {
      const valid = rowIndexes.filter(
        (rowInd): rowInd is number =>
          typeof rowInd === 'number' && rowInd >= 0 && rowInd < rowsCount,
      );
      if (valid.length === 0) return;

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
      valid.forEach((rowInd) => pendingRowsRef.current?.add(rowInd));
    },
    [dataEditorRef, columnsCount, rowsCount],
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

  // Номер строки под курсором (для фона строки и подсветки служебных колонок).
  const hoverRowRef = useRef<number | undefined>(undefined);

  const handleHoverRowChange = useCallback(
    (nextRow: number | undefined) => {
      const prevRow = hoverRowRef.current;
      if (prevRow === nextRow) return;
      hoverRowRef.current = nextRow;
      damageRows(prevRow, nextRow);
    },
    [damageRows],
  );

  return {
    hoveredCellRef,
    setHoveredCell,
    hoverRowRef,
    // Если наведение на строку выключено, наружу не отдаём функцию, и тогда
    // слежение за строкой не ведётся вовсе.
    onHoverRowChange: isRowHoverEnabled ? handleHoverRowChange : undefined,
  };
}
