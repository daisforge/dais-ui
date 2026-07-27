/* eslint-disable no-nested-ternary */
export const initSizeByType = (t?: 's' | 'm' | 'l') =>
  t === 'l' ? { w: 2, h: 2 } : t === 'm' ? { w: 2, h: 1 } : { w: 1, h: 1 };
