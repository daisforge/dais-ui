import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import type { RefObject } from 'react';
import { useCallback, useRef, useState } from 'react';

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
 * Второе значение (hoverRow) это номер строки под курсором. Внутри
 * объединённого блока это строка прямо под мышью, а не главная ячейка блока.
 * Служебные колонки тут учитываются. Значение лежит в состоянии, потому что от
 * него зависит фон строки и подсветка служебных колонок, а смена фона это
 * перерисовка. Меняется только когда включён эффект наведения на строку
 * (hoverEffects.row), иначе движение мыши перерисовок не вызывает.
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

  // Перерисовываем строки целиком, а не только ячейку под курсором: наведение
  // может влиять на любую колонку этой строки. Например, курсор на ячейке
  // "Название", а иконка должна появиться в соседней колонке действий.
  const damageRows = useCallback(
    (...rowIndexes: Array<number | undefined>) => {
      const ref = dataEditorRef.current;
      if (!ref) {
        return;
      }

      const rowIndexesToUpdate = new Set<number>();

      rowIndexes.forEach((rowInd) => {
        if (typeof rowInd === 'number' && rowInd >= 0 && rowInd < rowsCount) {
          rowIndexesToUpdate.add(rowInd);
        }
      });

      const cells: Array<{ cell: [number, number] }> = [];

      rowIndexesToUpdate.forEach((rowInd) => {
        for (let colInd = 0; colInd < columnsCount; colInd += 1) {
          cells.push({ cell: [colInd, rowInd] });
        }
      });

      if (cells.length > 0) {
        ref.updateCells?.(cells);
      }
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
  const [hoverRow, setHoverRow] = useState<number | undefined>(undefined);

  const handleHoverRowChange = useCallback((nextRow: number | undefined) => {
    setHoverRow((prev) => (prev === nextRow ? prev : nextRow));
  }, []);

  return {
    hoveredCellRef,
    setHoveredCell,
    hoverRow,
    // Если наведение на строку выключено, наружу не отдаём функцию, и тогда
    // слежение за строкой не ведётся вовсе.
    onHoverRowChange: isRowHoverEnabled ? handleHoverRowChange : undefined,
  };
}
