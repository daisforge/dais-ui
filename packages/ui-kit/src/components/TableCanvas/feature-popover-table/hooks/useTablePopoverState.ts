/* eslint-disable no-console */
import { useCallback, useMemo, useState } from 'react';

import type {
  TablePopoverContextValue,
  TablePopoverState,
} from '../context/TablePopoverContext';

/**
 * Хук для создания значения контекста поповера.
 * Вызывается в TableCanvas и передаётся в TablePopoverProvider.
 */
export const useTablePopoverState = (): TablePopoverContextValue => {
  const [state, setState] = useState<TablePopoverState>({
    isOpen: false,
    position: null,
    contentType: null,
    contentData: undefined,
    columnId: null,
  });

  const open = useCallback(
    ({
      position,
      contentType,
      contentData,
      columnId,
    }: {
      position: { x: number; y: number };
      contentType: 'filter' | 'custom';
      contentData?: unknown;
      columnId?: string;
    }) => {
      console.debug('[useTablePopoverState] OPEN called', {
        position,
        contentType,
        columnId,
      });
      setState({
        isOpen: true,
        position,
        contentType,
        contentData,
        columnId: columnId ?? null,
      });
    },
    [],
  );

  const close = useCallback(() => {
    setState((prev: TablePopoverState) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const updatePosition = useCallback((position: { x: number; y: number }) => {
    console.debug('[useTablePopoverState] UPDATE POSITION called', {
      position,
    });
    setState((prev: TablePopoverState) => ({
      ...prev,
      position,
    }));
  }, []);

  return useMemo(
    () => ({
      state,
      open,
      close,
      updatePosition,
    }),
    [state, open, close, updatePosition],
  );
};
