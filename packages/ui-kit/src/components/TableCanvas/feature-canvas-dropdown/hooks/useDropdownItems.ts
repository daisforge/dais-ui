import { useCallback, useEffect, useRef, useState } from 'react';

import type { CanvasDropdownItem } from '../../TableGlideInstance';
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
 * Пункты дропдауна по конфигу: готовый массив `items` или результат
 * `getItems`. Если `getItems` вернул промис, пока он не разрешился, статус
 * `loading`; ошибка промиса или исключение из `getItems` дают `error`.
 *
 * Запрос уходит при открытии и при `retry`. Ответ, пришедший после закрытия
 * дропдауна или после нового запроса, игнорируется.
 */
export function useDropdownItems(
  config: Pick<ResolvedCanvasDropdownConfig, 'items' | 'getItems'>,
): DropdownItemsState & { retry: () => void } {
  const [state, setState] = useState<DropdownItemsState>(() => ({
    status: config.getItems ? 'loading' : 'ready',
    items: config.items ?? [],
    error: undefined,
  }));
  const requestRef = useRef(0);

  const load = useCallback(() => {
    const { getItems } = config;
    if (!getItems) return;
    requestRef.current += 1;
    const request = requestRef.current;
    const isCurrent = () => requestRef.current === request;

    let result: ReturnType<typeof getItems>;
    try {
      result = getItems();
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
  }, [config]);

  useEffect(() => {
    load();
    return () => {
      // Размонтирование: ответ больше не нужен.
      requestRef.current += 1;
    };
  }, [load]);

  return { ...state, retry: load };
}
