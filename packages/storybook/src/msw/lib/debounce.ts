/** Simple debounce util */
export const debounce = <R, A extends unknown[]>(
  fn: (...args: A) => R,
  delay = 200,
) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: A) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
