/** Simple throttle util */
export const throttle = <R, A extends unknown[]>(
  fn: (...args: A) => R,
  delay = 200,
) => {
  let inThrottle: boolean;

  return (...args: A) => {
    if (inThrottle) {
      return;
    }
    inThrottle = true;

    fn(...args);

    setTimeout(() => {
      inThrottle = false;
    }, delay);
  };
};

export const throttleWithLastCall = <R, A extends unknown[]>(
  fn: (...args: A) => R,
  delay = 200,
) => {
  let lastArgs: A | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let inThrottle = false;

  const throttledFn = (...args: A) => {
    lastArgs = args;

    if (!inThrottle) {
      fn(...args);
      inThrottle = true;

      timeoutId = setTimeout(() => {
        // Освобождаем старый id до trailing-вызова: он может создать новый
        // таймер, который cancel() должен видеть (например при unmount).
        timeoutId = null;
        inThrottle = false;
        if (lastArgs !== args) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          throttledFn(...lastArgs!);
        }
      }, delay);
    }
  };

  throttledFn.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    inThrottle = false;
    timeoutId = null;
    lastArgs = null;
  };

  return throttledFn;
};
