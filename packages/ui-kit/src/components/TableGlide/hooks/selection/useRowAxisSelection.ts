import { CompactSelection } from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * Ось выделения СТРОК по клику/драгу на колонке нумерации (независимая от glide).
 *
 * Строки храним своим стейтом и рисуем СВОИМ оверлеем (заливка + рамка, как у
 * колонок) — см. `useColumnRowHighlightRegions`. Здесь — состояние, производные
 * индексы и жестовые ref'ы (Ctrl/Meta-накопление, признак «изменение вызвано
 * мышью»); логика раскладки строк из glide-range живёт в оркестраторе
 * `useTableSelectionSystem`.
 */
export function useRowAxisSelection() {
  const [selectedRows, setSelectedRows] = useState<CompactSelection>(() =>
    CompactSelection.empty()
  );

  const headerSelectedRowIndexes = useMemo(
    () => selectedRows.toArray(),
    [selectedRows]
  );

  // Зеркало selectedRows — чтобы читать актуальный набор в обработчике
  // pointerdown, не пересоздавая колбэки выделения.
  const selectedRowsRef = useRef(selectedRows);
  selectedRowsRef.current = selectedRows;

  // Ctrl/Meta-жест по нумерации → накопительный (group) выбор строк. Модификатор
  // и базовый набор снимаем на pointerdown: он несёт ctrlKey/metaKey и идёт ДО
  // нативного изменения выделения glide, поэтому при драге сужение корректно
  // убирает лишние строки (всегда считаем от базового снимка, а не от стейта).
  const ctrlGestureRef = useRef(false);
  const ctrlBaseRowsRef = useRef<CompactSelection>(CompactSelection.empty());
  // Признак «изменение выделения вызвано кликом мыши» (а не стрелками) — нужен
  // для sticky-подсветки строки: true между pointerdown и pointerup.
  const pointerGestureRef = useRef(false);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      ctrlGestureRef.current = event.ctrlKey || event.metaKey;
      ctrlBaseRowsRef.current = selectedRowsRef.current;
      pointerGestureRef.current = true;
    };
    const onPointerUp = () => {
      pointerGestureRef.current = false;
    };
    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('pointerup', onPointerUp, true);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('pointerup', onPointerUp, true);
    };
  }, []);

  const clearRowSelection = useCallback(() => {
    setSelectedRows(CompactSelection.empty());
  }, []);

  return {
    selectedRows,
    setSelectedRows,
    headerSelectedRowIndexes,
    selectedRowsRef,
    ctrlGestureRef,
    ctrlBaseRowsRef,
    pointerGestureRef,
    clearRowSelection,
  };
}
