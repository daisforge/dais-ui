export const percentToPx = (vPercent: number, maxPx: number) =>
  (vPercent / 100) * maxPx;
export const pxToPercent = (vPx: number, maxPx: number) => (vPx / maxPx) * 100;
