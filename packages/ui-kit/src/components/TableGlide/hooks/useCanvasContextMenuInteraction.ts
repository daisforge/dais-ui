import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { useEffect, type RefObject } from 'react';

import type { GlideProps } from '../types';
import type { InteractionSessionStore } from '../lib/canvas/interaction/interactionSessionStore';
import { resolveCanvasCellInteractionTargetFromDomPoint } from '../lib/canvas/interaction/resolveCanvasCellInteractionTarget';

type OnCellContextMenu = NonNullable<GlideProps['onCellContextMenu']>;

interface UseCanvasContextMenuInteractionArgs {
  eventTarget: EventTarget | null;
  dataEditorRef: RefObject<DataEditorRef | null>;
  getCellContent: (cell: [number, number]) => unknown;
  interactionSessionStore: InteractionSessionStore;
  onCellContextMenuExternal: OnCellContextMenu | undefined;
}

/**
 * Capture-layer для contextmenu.
 *
 * Нужен только потому, что текущий Glide после `onCellContextMenu` может
 * сдвинуть selection. Для `contextMenu: "keep-selection"` мы перехватываем
 * событие раньше Glide, вручную вызываем внешний handler и не меняем active
 * cell.
 *
 * Listener вешается на DOM-контейнер Glide, а не на canvas-ноду: canvas-кнопка
 * не является DOM-элементом, поэтому ее ownership восстанавливается через
 * DOM-координаты -> Glide mouse args -> canvas hit-test.
 */
export function useCanvasContextMenuInteraction({
  eventTarget,
  dataEditorRef,
  getCellContent,
  interactionSessionStore,
  onCellContextMenuExternal,
}: UseCanvasContextMenuInteractionArgs): void {
  useEffect(() => {
    if (!eventTarget) {
      return undefined;
    }

    const handleContextMenuCapture: EventListener = (event) => {
      if (!(event instanceof MouseEvent)) {
        return;
      }

      const nativeEvent = event;

      // Keyboard context menu часто приходит без полезных координат. В v1 не
      // пытаемся привязать его к canvas primitive: оставляем table-level path.
      if (nativeEvent.clientX === 0 && nativeEvent.clientY === 0) {
        return;
      }

      // На capture-фазе у нас есть только DOM-событие. Resolver переводит
      // screen/client coordinates обратно в cell + relativePoint, чтобы ниже
      // использовать тот же interaction contract, что и click/select-фазы.
      const resolvedTarget = resolveCanvasCellInteractionTargetFromDomPoint({
        dataEditor: dataEditorRef.current,
        getCellContent,
        clientX: nativeEvent.clientX,
        clientY: nativeEvent.clientY,
        nativeEvent,
      });

      if (!resolvedTarget) {
        return;
      }

      const { cell, interaction, mouseArgs, relativePoint } = resolvedTarget;
      const session = interactionSessionStore.beginOrGet({
        cell,
        relativePoint,
        interaction,
        button: nativeEvent.button,
        source: 'contextmenu',
      });

      // `normal` означает: ownership не забираем, пусть Glide обработает
      // contextmenu штатно вместе со своей selection-логикой.
      if (session.decision.contextMenuMode === 'normal') {
        return;
      }

      // Помечаем capture-фазу, чтобы TableGlide bridge не вызвал внешний
      // onCellContextMenu второй раз, если Glide все же дойдет до своего
      // onCellContextMenu после нашего ручного вызова.
      interactionSessionStore.consumePhase(session, 'contextmenu-capture');
      nativeEvent.stopPropagation();
      nativeEvent.stopImmediatePropagation?.();

      // `none` подавляет и table menu, и native browser menu.
      if (session.decision.contextMenuMode === 'none') {
        if (nativeEvent.cancelable) {
          nativeEvent.preventDefault();
        }
        return;
      }

      if (!mouseArgs || !onCellContextMenuExternal) {
        return;
      }

      // `manual-keep-selection` сохраняет проектный handler/menu, но не пускает
      // событие в Glide contextmenu pipeline, где может сдвинуться selection.
      onCellContextMenuExternal(cell, {
        ...mouseArgs,
        preventDefault: () => {
          if (nativeEvent.cancelable) {
            nativeEvent.preventDefault();
          }
        },
      });
    };

    // true = capture phase: обработчик сработает до bubble-обработчиков Glide.
    eventTarget.addEventListener('contextmenu', handleContextMenuCapture, true);

    return () => {
      eventTarget.removeEventListener(
        'contextmenu',
        handleContextMenuCapture,
        true
      );
    };
  }, [
    dataEditorRef,
    eventTarget,
    getCellContent,
    interactionSessionStore,
    onCellContextMenuExternal,
  ]);
}
