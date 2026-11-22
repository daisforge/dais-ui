import { useCallback, useEffect, useRef, useState } from 'react';

import type { CanvasDropdownItem } from '../../../../TableGlideInstance';
import type { ResolvedCanvasDropdownConfig } from '../types';

export type DropdownItemsStatus = 'ready' | 'loading' | 'error';

export interface DropdownItemsState {
  status: DropdownItemsStatus;
  items: CanvasDropdownItem[];
  error: unknown;
}

const isPromise = (value: unknown): value is Promise<unknown> =>
  typeof (value as { then?: unknown })?.then === 'function';

/**
 * Пункты Dropdown: готовый массив `items` или результат `getItems`. Пока
 * промис не выполнился, статус `loading`, при ошибке `error`. Запрос уходит
 * при открытии и при `retry`. При закрытии, размонтировании и новом запросе
 * прежний отменяется через AbortSignal, а его ответ отбрасывается.
 */
export function useDropdownItems(
  config: Pick<ResolvedCanvasDropdownConfig, 'items' | 'getItems'>,
): DropdownItemsState & { retry: () => void } {
  const { getItems } = config;
  const [state, setState] = useState<DropdownItemsState>(() => ({
    status: getItems ? 'loading' : 'ready',
    items: config.items ?? [],
    error: undefined,
  }));
  const abortRef = useRef<AbortController | null>(null);

  const load = useCallback(() => {
    if (!getItems) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const isCurrent = () => !controller.signal.aborted;

    let result: ReturnType<typeof getItems>;
    try {
      result = getItems({ signal: controller.signal });
    } catch (error) {
      setState({ status: 'error', items: [], error });
      return;
    }

    if (!isPromise(result)) {
      setState({ status: 'ready', items: result, error: undefined });
      return;
    }

    setState({ status: 'loading', items: [], error: undefined });
    result.then(
      (items) => {
        if (isCurrent()) {
          setState({ status: 'ready', items, error: undefined });
        }
      },
      (error: unknown) => {
        if (isCurrent()) setState({ status: 'error', items: [], error });
      },
    );
  }, [getItems]);

  useEffect(() => {
    load();
    return () => {
      abortRef.current?.abort();
      abortRef.current = null;
    };
  }, [load]);

  return { ...state, retry: load };
}
