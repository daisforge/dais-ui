import type { GridCell } from '@glideappsfinal/glide-data-grid';
import { useCallback } from 'react';

import type { InteractionSessionStore } from '../lib/canvas/interaction/interactionSessionStore';

// Editor request живет меньше обычной session: это одноразовая просьба от
// конкретного click открыть editor в ближайшем getCellContent. Если Glide не
// дошел до activation быстро, request считается устаревшим и не открывает
// editor неожиданно на позднем redraw.
const SELF_EDITOR_ACTIVATION_MAX_AGE_MS = 250;

/**
 * Применяет `editor: "open-on-click"` без отдельного ref в TableGlide.
 *
 * TableGlide не открывает editor напрямую: он только один раз подставляет
 * `activationBehaviorOverride: "single-click"` для той же ячейки, а overlay
 * дальше открывает штатный Glide pipeline.
 */
export function useCanvasEditorActivation(
  interactionSessionStore: InteractionSessionStore
) {
  return useCallback(
    (cell: readonly [number, number], cellContent: GridCell): GridCell => {
      // consumeEditorRequest возвращает request только один раз и сразу
      // помечает его использованным. Это защищает от повторного открытия
      // editor при последующих чтениях того же cell content.
      const request = interactionSessionStore.consumeEditorRequest(
        cell,
        SELF_EDITOR_ACTIVATION_MAX_AGE_MS
      );

      if (!request || request.target !== 'self') {
        return cellContent;
      }

      // Мы не открываем overlay напрямую: только на один getCellContent
      // подставляем Glide-флаг, после чего штатный activation pipeline сам
      // открывает editor для текущей ячейки.
      return {
        ...cellContent,
        activationBehaviorOverride: 'single-click',
      };
    },
    [interactionSessionStore]
  );
}
