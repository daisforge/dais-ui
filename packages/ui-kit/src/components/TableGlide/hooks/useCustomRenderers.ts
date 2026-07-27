import type {
  CustomCell,
  CustomRenderer,
} from '@glideappsfinal/glide-data-grid';
import { useMemo } from 'react';

import {
  createCanvasCellRenderer,
  type CanvasClickDispatchResult,
} from '../lib/canvas';
import type {
  BeginInteractionSessionArgs,
  FindInteractionSessionArgs,
  InteractionSession,
} from '../lib/canvas/interaction/interactionSessionStore';

/** Generic custom renderer type */
type GenericCustomRenderer = CustomRenderer<CustomCell>;

interface UseCustomRenderersOptions {
  /**
   * Renderer получает session API из `TableGlide`, чтобы не принимать
   * interaction-решения самостоятельно и не вызывать canvas `onClick` повторно.
   */
  beginOrGetInteractionSession?: (
    args: BeginInteractionSessionArgs
  ) => InteractionSession;
  consumeCanvasClickResult?: (
    args: FindInteractionSessionArgs
  ) => CanvasClickDispatchResult | undefined;
}

export function useCustomRenderers(
  options: UseCustomRenderersOptions = {}
): GenericCustomRenderer[] | undefined {
  const hasCanvasColumns = useMemo(
    // () => columns.some((column) => Boolean(column?.renderCell)),
    () => true,
    []
  );

  return useMemo(() => {
    const renderers: GenericCustomRenderer[] = [];

    if (hasCanvasColumns) {
      renderers.push(
        createCanvasCellRenderer({
          beginOrGetInteractionSession: options.beginOrGetInteractionSession,
          consumeCanvasClickResult: options.consumeCanvasClickResult,
        }) as unknown as GenericCustomRenderer
      );
    }

    return renderers.length > 0 ? renderers : undefined;
  }, [
    hasCanvasColumns,
    options.beginOrGetInteractionSession,
    options.consumeCanvasClickResult,
  ]);
}
