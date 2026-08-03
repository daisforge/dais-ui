import { ReactNode } from 'react';

import { cls } from '../classNames';

export function hasLeftAndMainHandler(children: ReactNode) {
  const arr = [cls.left, cls.main];
  return (
    !!children &&
    Array.isArray(children) &&
    arr.every((className) =>
      children.some((c) => c?.type?.attrs?.[1].className?.includes(className)),
    )
  );
}
