import { Canvas } from '@storybook/blocks';
import React, { ComponentProps, useEffect, useRef, useState } from 'react';

type LazyCanvasProps = ComponentProps<typeof Canvas> & {
  /** Высота заглушки до появления примера, чтобы страница не прыгала */
  placeholderHeight?: number;
};

/**
 * Canvas, который монтирует стори только при подлёте к экрану.
 * Нужен на docs-страницах с большим количеством тяжёлых примеров.
 */
export const LazyCanvas = ({
  placeholderHeight = 240,
  ...props
}: LazyCanvasProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (visible || !node) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: '300px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      style={visible ? undefined : { minHeight: placeholderHeight }}
    >
      {visible && <Canvas {...props} />}
    </div>
  );
};
