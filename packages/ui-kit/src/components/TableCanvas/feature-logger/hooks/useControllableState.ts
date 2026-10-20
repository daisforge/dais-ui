import { useCallback, useRef, useState } from 'react';

export function useControllableState<T>(
  value: T | undefined,
  defaultValue: T | (() => T),
  onChange?: (next: T) => void,
): [T, (next: T | ((prev: T) => T)) => void] {
  const [inner, setInner] = useState<T>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;

  const currentRef = useRef(current);
  currentRef.current = current;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const set = useCallback(
    (next: T | ((prev: T) => T)) => {
      const resolved =
        typeof next === 'function'
          ? (next as (prev: T) => T)(currentRef.current)
          : next;
      if (Object.is(resolved, currentRef.current)) return;
      if (!isControlled) {
        currentRef.current = resolved;
        setInner(resolved);
      }
      onChangeRef.current?.(resolved);
    },
    [isControlled],
  );

  return [current, set];
}
