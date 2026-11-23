import type { CSSProperties, ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Живой замер отступов на настоящем компоненте для дизайн-страниц «Для дизайнеров».
 * Отступы считаются по положению элементов в браузере, а не задаются цифрами:
 * если компонент поменяется, замер покажет новое значение.
 *
 * Каждый замер `gap` берёт два элемента по CSS-селектору внутри замера.
 * `'&'` означает саму рамку замера: так меряется отступ от края.
 * - `dir: 'v'`: по вертикали, от нижнего края `a` до верхнего края `b`
 *   (от верхнего края рамки, если `a` это `'&'`; до нижнего края рамки, если `b` это `'&'`)
 * - `dir: 'h'`: по горизонтали, от правого края `a` до левого края `b`
 *   (от левого края рамки, если `a` это `'&'`; до правого края рамки, если `b` это `'&'`)
 *
 * Цвета: `outer` для отступов от компонента до соседей на странице, `inner` для отступов внутри компонента.
 */

export type MeasureGap = {
  a: string;
  b: string;
  dir: 'v' | 'h';
  tone?: 'outer' | 'inner';
};

const TONES = {
  outer: { band: 'rgba(124, 58, 237, 0.22)', mark: 'rgb(124, 58, 237)' },
  inner: { band: 'rgba(225, 45, 45, 0.4)', mark: 'rgb(225, 45, 45)' },
};

type Band = {
  left: number;
  top: number;
  width: number;
  height: number;
  value: number;
  dir: 'v' | 'h';
  tone: 'outer' | 'inner';
};

const pick = (root: HTMLElement, selector: string) =>
  selector === '&' ? root : root.querySelector<HTMLElement>(selector);

const measure = (root: HTMLElement, gaps: MeasureGap[]): Band[] => {
  const base = root.getBoundingClientRect();
  const bands: Band[] = [];

  gaps.forEach(({ a, b, dir, tone = 'inner' }) => {
    const elA = pick(root, a);
    const elB = pick(root, b);

    if (!elA || !elB) {
      return;
    }

    const ra = elA.getBoundingClientRect();
    const rb = elB.getBoundingClientRect();

    if (dir === 'v') {
      const start = a === '&' ? ra.top : ra.bottom;
      const end = b === '&' ? rb.bottom : rb.top;
      const left = Math.max(a === '&' ? rb.left : ra.left, b === '&' ? ra.left : rb.left);
      const right = Math.min(a === '&' ? rb.right : ra.right, b === '&' ? ra.right : rb.right);
      const wide = right - left > 0;

      bands.push({
        left: (wide ? left : rb.left) - base.left,
        top: start - base.top,
        width: wide ? right - left : rb.width,
        height: end - start,
        value: Math.round(end - start),
        dir,
        tone,
      });
    } else {
      const start = a === '&' ? ra.left : ra.right;
      const end = b === '&' ? rb.right : rb.left;
      const top = Math.max(a === '&' ? rb.top : ra.top, b === '&' ? ra.top : rb.top);
      const bottom = Math.min(a === '&' ? rb.bottom : ra.bottom, b === '&' ? ra.bottom : rb.bottom);
      const tall = bottom - top > 0;

      bands.push({
        left: start - base.left,
        top: (tall ? top : rb.top) - base.top,
        width: end - start,
        height: tall ? bottom - top : rb.height,
        value: Math.round(end - start),
        dir,
        tone,
      });
    }
  });

  return bands;
};

const labelStyle = (band: Band): CSSProperties => {
  if (band.dir === 'h') {
    return { left: band.left + band.width / 2, top: band.top + Math.min(band.height / 2, 12) };
  }

  return band.width > 160
    ? { left: band.left + band.width / 2, top: band.top + band.height / 2 }
    : { left: band.left + band.width + 16, top: band.top + band.height / 2 };
};

export const Measure = ({
  gaps,
  children,
  style,
}: {
  gaps: MeasureGap[];
  children: ReactNode;
  style?: CSSProperties;
}) => {
  const box = useRef<HTMLDivElement>(null);
  const [bands, setBands] = useState<Band[]>([]);

  useLayoutEffect(() => {
    const root = box.current;

    if (!root) {
      return undefined;
    }

    const update = () => setBands(measure(root, gaps));
    const observer = new ResizeObserver(update);

    observer.observe(root);
    update();
    document.fonts?.ready.then(update);

    return () => observer.disconnect();
  }, [gaps]);

  return (
    <div ref={box} style={{ position: 'relative', ...style }}>
      {children}
      {bands.map((band, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={i} aria-hidden="true">
          <span
            style={{
              position: 'absolute',
              left: band.left,
              top: band.top,
              width: band.width,
              height: band.height,
              backgroundColor: TONES[band.tone].band,
              pointerEvents: 'none',
            }}
          />
          <span
            style={{
              position: 'absolute',
              // узкий отступ по горизонтали: компактная подпись помещается в полосу
              padding: band.dir === 'h' && band.width < 22 ? '0 2px' : '0 4px',
              borderRadius: 4,
              font: band.dir === 'h' && band.width < 22 ? '500 10px/14px sans-serif' : '500 11px/16px sans-serif',
              color: '#fff',
              backgroundColor: TONES[band.tone].mark,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              ...labelStyle(band),
            }}
          >
            {band.value}
          </span>
        </span>
      ))}
    </div>
  );
};

/**
 * Подпись к замеру: что значат цвета. Ставится под примером.
 */
export const MeasureLegend = () => (
  <div style={{ display: 'flex', gap: 16, marginTop: 12, font: '400 12px/16px sans-serif', color: '#5c636b' }}>
    <span>
      <span style={{ display: 'inline-block', width: 10, height: 10, marginRight: 6, backgroundColor: TONES.outer.mark }} />
      Отступ до соседей на странице
    </span>
    <span>
      <span style={{ display: 'inline-block', width: 10, height: 10, marginRight: 6, backgroundColor: TONES.inner.mark }} />
      Отступ внутри компонента
    </span>
  </div>
);
