import { useCallback, useState } from 'react';

interface UseActiveRowHighlightParams {
  /** Controlled-значение подсвеченной строки (highlightActiveType='row'). */
  highlightActiveRow?: number;
  /** Сеттер/эмиттер подсвеченной строки. Вызывается на каждый коммит подсветки. */
  onHighlightActiveRowChange?: (row: number | undefined) => void;
  /**
   * Подсветка строки controlled (значением владеют снаружи). Если не задан —
   * fallback на старое правило (controlled = задан сеттер).
   */
  isHighlightActiveRowControlled?: boolean;
}

/**
 * Ось «подсвеченной активной строки» (highlightActiveType='row') — чисто
 * ВИЗУАЛЬНАЯ подсветка, не путать с выделением ячеек/строк.
 *
 * «Залипает» на строке КЛИКА: навигация стрелками двигает выделение, но подсветку
 * строки оставляет; меняется только новым кликом по data-ячейке (за это отвечает
 * оркестратор, вызывая `commitActiveRow`). Controlled — значение владеется снаружи
 * (`highlightActiveRow`), иначе внутренним стейтом. Колбэк
 * `onHighlightActiveRowChange` вызывается на каждый коммит независимо от режима.
 */
export function useActiveRowHighlight({
  highlightActiveRow,
  onHighlightActiveRowChange,
  isHighlightActiveRowControlled,
}: UseActiveRowHighlightParams) {
  const [activeRowInternal, setActiveRowInternal] = useState<number | undefined>(
    undefined
  );

  const isActiveRowControlled =
    isHighlightActiveRowControlled ?? onHighlightActiveRowChange !== undefined;

  const activeRow = isActiveRowControlled
    ? highlightActiveRow
    : activeRowInternal;

  const commitActiveRow = useCallback(
    (value: number | undefined) => {
      if (!isActiveRowControlled) {
        setActiveRowInternal(value);
      }
      onHighlightActiveRowChange?.(value);
    },
    [isActiveRowControlled, onHighlightActiveRowChange]
  );

  return { activeRow, commitActiveRow };
}
