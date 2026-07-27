/* eslint-disable no-console */
import { createSafeResizeObserver } from '@ui-kit/utils';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef
} from 'react';

type ResizeCallback = (entries: ResizeObserverEntry[]) => void;

type TableResizeObserverContextValue = {
  subscribe: (callback: ResizeCallback) => () => void;
  getCurrentWidth: () => number | null;
};

const TableResizeObserverContext =
  createContext<TableResizeObserverContextValue | null>(null);

export const useTableResizeObserver = (callback: ResizeCallback) => {
  const context = useContext(TableResizeObserverContext);
  if (!context) {
    throw new Error(
      'useTableResizeObserver must be used within TableResizeObserverProvider'
    );
  }

  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const wrappedCallback = (entries: ResizeObserverEntry[]) => {
      callbackRef.current(entries);
    };
    return context.subscribe(wrappedCallback);
  }, [context]);
};

export const useTableResizeObserverWidth = () => {
  const context = useContext(TableResizeObserverContext);
  if (!context) {
    throw new Error(
      'useTableResizeObserverWidth must be used within TableResizeObserverProvider'
    );
  }
  return context.getCurrentWidth;
};

export const TableResizeObserverProvider = ({
  children,
  element
}: {
  children: React.ReactNode;
  element: HTMLElement | null;
}) => {
  const observerRef = useRef<ResizeObserver | null>(null);
  const callbacksRef = useRef<Set<ResizeCallback>>(new Set());
  const currentWidthRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  // Единый ResizeObserver
  useEffect(() => {
    // Отключаем предыдущий observer, если элемент изменился
    if (observerRef.current && elementRef.current !== element) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (!element) {
      elementRef.current = null;
      return undefined;
    }

    elementRef.current = element;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      if (entry) {
        currentWidthRef.current = entry.contentRect.width;
        // Вызываем все подписанные колбеки
        callbacksRef.current.forEach((callback: ResizeCallback) => {
          try {
            callback(entries);
          } catch (error) {
            console.error('Error in resize observer callback:', error);
          }
        });
      }
    };

    observerRef.current = createSafeResizeObserver(handleResize);
    observerRef.current.observe(element);

    // Первый вызов для получения начальной ширины
    const initialWidth = element.getBoundingClientRect().width;
    if (initialWidth > 0) {
      currentWidthRef.current = initialWidth;
      const initialEntries = [
        {
          contentRect: { width: initialWidth, height: 0 }
        } as ResizeObserverEntry
      ];
      callbacksRef.current.forEach((callback: ResizeCallback) => {
        try {
          callback(initialEntries);
        } catch (error) {
          console.error('Error in initial resize observer callback:', error);
        }
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      elementRef.current = null;
    };
  }, [element]);

  const subscribe = useCallback((callback: ResizeCallback) => {
    callbacksRef.current.add(callback);
    return () => {
      callbacksRef.current.delete(callback);
    };
  }, []);

  const getCurrentWidth = useCallback(() => currentWidthRef.current, []);

  const value: TableResizeObserverContextValue = useMemo(
    () => ({
      subscribe,
      getCurrentWidth
    }),
    [subscribe, getCurrentWidth]
  );

  return (
    <TableResizeObserverContext.Provider value={value}>
      {children}
    </TableResizeObserverContext.Provider>
  );
};

// Компонент-обертка для TableResizeObserverProvider, который обновляется при изменении ref
export const TableResizeObserverProviderWrapper = ({
  children,
  refTableContainer
}: {
  children: React.ReactNode;
  refTableContainer: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const [element, setElement] = React.useState<HTMLElement | null>(
    refTableContainer?.current ?? null
  );

  React.useLayoutEffect(() => {
    // Обновляем элемент при изменении ref (синхронно после DOM мутаций)
    if (refTableContainer?.current) {
      setElement(refTableContainer.current);
    }
  }, [refTableContainer]);

  return (
    <TableResizeObserverProvider element={element}>
      {children}
    </TableResizeObserverProvider>
  );
};
