import { createSafeResizeObserver } from '@ui-kit/utils';
import { useLayoutEffect, useRef, useState } from 'react';

export function useContainerWidth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let raf = 0;
    const ro = createSafeResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setWidth(w));
    });

    ro.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return { ref, width };
}
