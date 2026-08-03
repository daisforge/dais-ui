import { useCallback, useRef, useState } from 'react';

export const useDebouncedFn = <F, A extends unknown[]>(
  fn: (this: F, ...args: A) => unknown,
  delay: number,
) => {
  // debounce state
  const [debouncing, setIsDebouncing] = useState(false);

  // timeout for debounce
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debounceFn = useCallback(
    // eslint-disable-next-line func-names
    function (this: F, ...args: A) {
      // set debounce is active
      setIsDebouncing(true);

      // clear timeout if debounced fn is triggered again before timeout expires
      clearTimeout(timeoutRef.current);

      // start timeout
      timeoutRef.current = setTimeout(() => {
        // execute debounced fn if it is not triggered before timeout expires
        fn.apply(this, args);

        // set debounce is inactive
        setIsDebouncing(false);
      }, delay);
    },
    [delay, fn],
  );
  return [debounceFn, { debouncing }] as const;
};
