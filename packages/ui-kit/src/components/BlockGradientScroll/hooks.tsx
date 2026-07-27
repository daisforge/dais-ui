/**
 * Совмещает внешний и внутренний ref
 */
export const useCombinedRef =
  <T,>(externalRef: React.ForwardedRef<T>, internalRef: React.RefObject<T>) =>
  (node: T | null) => {
    (internalRef as React.MutableRefObject<T | null>).current = node;
    if (typeof externalRef === 'function') {
      externalRef(node);
    } else if (externalRef) {
      (externalRef as React.MutableRefObject<T | null>).current = node;
    }
  };
