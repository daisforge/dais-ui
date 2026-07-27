import { type Layout } from 'react-grid-layout';

export function layoutsShallowEqual(
  a: Layout[] | undefined,
  b: Layout[] | undefined
) {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  const A = [...a].sort((x, y) => (x.i > y.i ? 1 : -1));
  const B = [...b].sort((x, y) => (x.i > y.i ? 1 : -1));
  for (let i = 0; i < A.length; i += 1) {
    const x = A[i];
    const y = B[i];
    if (!x || !y) return false;
    if (x.i !== y.i || x.x !== y.x || x.y !== y.y || x.w !== y.w || x.h !== y.h)
      return false;
  }
  return true;
}
