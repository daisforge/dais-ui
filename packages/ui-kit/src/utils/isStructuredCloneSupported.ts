export const isStructuredCloneSupported =
  (typeof window !== 'undefined' &&
    'structuredClone' in window &&
    typeof window.structuredClone === 'function') ||
  (typeof globalThis !== 'undefined' &&
    'structuredClone' in globalThis &&
    typeof globalThis.structuredClone === 'function');
