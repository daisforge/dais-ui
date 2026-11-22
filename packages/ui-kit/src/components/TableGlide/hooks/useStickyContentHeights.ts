import { useRef } from 'react';

/**
 * Высоты содержимого блоков с прилипанием, снятые при отрисовке. Ключ состоит из
 * колонки и первой строки блока, поэтому после смены строк или колонок он может
 * указывать уже на другой блок: в этом случае начинаем с пустого набора.
 */
export const useStickyContentHeights = (rows: unknown, columns: unknown) => {
  const heightsRef = useRef(new Map<string, number>());
  const sourceRef = useRef({ rows, columns });

  if (
    sourceRef.current.rows !== rows ||
    sourceRef.current.columns !== columns
  ) {
    sourceRef.current = { rows, columns };
    heightsRef.current = new Map();
  }

  return heightsRef;
};
