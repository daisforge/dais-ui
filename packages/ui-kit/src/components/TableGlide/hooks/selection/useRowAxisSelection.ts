import { CompactSelection } from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const MODIFIER_KEYS = new Set(['Control', 'Meta', 'Shift', 'Alt']);

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
  // Жест правой кнопкой (открытие контекстного меню). Живёт дольше pointerup:
  // на Windows браузер шлёт contextmenu после отпускания кнопки, и glide меняет
  // выделение, когда pointerGestureRef уже снят. Снимается следующей задачей
  // после contextmenu (glide обрабатывает его синхронно), а также следующим
  // pointerdown или нажатием клавиши, иначе чужие смены выделения без мыши
  // (сдвиг служебных колонок, обрезка строк) считались бы правым кликом.
  const rightClickGestureRef = useRef(false);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      ctrlGestureRef.current = event.ctrlKey || event.metaKey;
      ctrlBaseRowsRef.current = selectedRowsRef.current;
      pointerGestureRef.current = true;
      rightClickGestureRef.current = event.button === 2;
    };
    const onPointerUp = () => {
      pointerGestureRef.current = false;
    };
    // Клавиатура это не жест мышью: признаки правой кнопки и Ctrl с прошлого
    // клика не должны менять смысл стрелок. Сами модификаторы не считаются,
    // иначе автоповтор зажатого Ctrl сбрасывал бы признак посреди протяжки.
    const onKeyDown = (event: KeyboardEvent) => {
      if (MODIFIER_KEYS.has(event.key)) return;
      rightClickGestureRef.current = false;
      ctrlGestureRef.current = false;
    };
    let contextMenuTimer: ReturnType<typeof setTimeout> | undefined;
    const onContextMenu = () => {
      clearTimeout(contextMenuTimer);
      contextMenuTimer = setTimeout(() => {
        rightClickGestureRef.current = false;
      }, 0);
    };
    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('pointerup', onPointerUp, true);
    window.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('contextmenu', onContextMenu, true);
    return () => {
      clearTimeout(contextMenuTimer);
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('pointerup', onPointerUp, true);
      window.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('contextmenu', onContextMenu, true);
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
    rightClickGestureRef,
    clearRowSelection,
  };
}
