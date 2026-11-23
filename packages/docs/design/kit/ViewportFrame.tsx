import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Показ примера в окне заданной ширины, например 1920, 1440 или 1280 px.
 * Отступы и колонки страниц зависят от ширины окна браузера, поэтому пример
 * открывается отдельным окном (iframe) нужной ширины и уменьшается под колонку текста.
 *
 * `storyId` это id примера из index.json Storybook, например `для-дизайнеров-layout--spacing-1440`.
 * Пример в окне показывается без отступов Storybook, поэтому у такой истории `layout: 'fullscreen'`.
 *
 * `visibleWidth`: показать только левую часть окна этой ширины. Так несколько окон разной ширины
 * показываются в одном масштабе и размеры элементов можно сравнить глазами.
 */
export const ViewportFrame = ({
  storyId,
  width,
  height,
  caption,
  visibleWidth = width,
}: {
  storyId: string;
  width: number;
  height: number;
  caption?: string;
  visibleWidth?: number;
}) => {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const root = box.current;

    if (!root) {
      return undefined;
    }

    const update = () => setScale(Math.min(1, root.clientWidth / visibleWidth));
    const observer = new ResizeObserver(update);

    observer.observe(root);
    update();

    return () => observer.disconnect();
  }, [visibleWidth]);

  return (
    <figure style={{ margin: 0 }}>
      <div ref={box} style={{ position: 'relative', width: '100%', maxWidth: visibleWidth, height: height * scale, overflow: 'hidden' }}>
        <iframe
          title={caption ?? storyId}
          src={`iframe.html?id=${encodeURIComponent(storyId)}&viewMode=story`}
          width={width}
          height={height}
          loading="lazy"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            border: 0,
            transform: `scale(${scale})`,
            transformOrigin: '0 0',
          }}
        />
      </div>
      {caption ? (
        <figcaption style={{ marginTop: 8, font: '400 12px/16px sans-serif', color: '#5c636b' }}>{caption}</figcaption>
      ) : null}
    </figure>
  );
};
