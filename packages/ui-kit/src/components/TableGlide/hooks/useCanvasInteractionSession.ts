import { useCallback, useMemo } from 'react';

import {
  createInteractionSessionStore,
  type BeginInteractionSessionArgs,
  type FindInteractionSessionArgs,
} from '../lib/canvas/interaction/interactionSessionStore';

/**
 * React-обвязка над interaction session store.
 *
 * Хук держит один store на экземпляр TableGlide и отдает стабильные callbacks
 * для renderer-ов, click bridge, contextmenu capture и editor activation.
 */
export function useCanvasInteractionSession() {
  // Один store на экземпляр TableGlide. В нем живет только текущий короткий
  // gesture, поэтому useMemo достаточно: состояние не должно пересоздаваться
  // между render-ами таблицы.
  const store = useMemo(() => createInteractionSessionStore(), []);

  // Renderer, click bridge и contextmenu hook получают стабильную ссылку,
  // чтобы все фазы одного gesture работали с одним session store.
  const beginOrGetInteractionSession = useCallback(
    (args: BeginInteractionSessionArgs) => store.beginOrGet(args),
    [store]
  );

  // Renderer.onClick забирает replay-result, если canvas onClick уже был
  // выполнен раньше в handleCellClickedBridge.
  const consumeCanvasClickResult = useCallback(
    (args: FindInteractionSessionArgs) => store.consumeClickResult(args),
    [store]
  );

  return {
    interactionSessionStore: store,
    beginOrGetInteractionSession,
    consumeCanvasClickResult,
  };
}
