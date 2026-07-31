/* eslint-disable @typescript-eslint/no-explicit-any */

export const infinityscrollThrottle = <R, A extends any[]>(
  fn: (...args: A) => R,

  delay: number,
): [(...args: A) => R | undefined, () => void] => {
  let lastArgs: any[] = [];

  let wait = false;

  let timeout: undefined | number;

  let cancelled = false;

  return [
    (...args: A) => {
      if (cancelled) return undefined;

      if (wait) {
        lastArgs = [fn, args];

        return undefined;
      }

      const val = fn(...args);

      wait = true;

      timeout = window.setTimeout(() => {
        if (lastArgs.length && lastArgs?.[0] && lastArgs?.[1]) {
          lastArgs[0](...lastArgs[1]);

          lastArgs = [];
        }
        wait = false;
      }, delay);

      return val;
    },

    () => {
      cancelled = true;

      clearTimeout(timeout);
    },
  ];
};
