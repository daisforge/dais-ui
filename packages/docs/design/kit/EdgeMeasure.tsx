import type { ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Живой замер отступов между любыми краями двух элементов, для дизайн-страниц «Для дизайнеров».
 * Общий `Measure` из kit меряет только промежуток между элементами. Здесь можно взять любой край:
 * например, от левого края поля до начала значения или от края окна до шапки.
 *
 * `a`, `b`: CSS-селекторы внутри замера. `ae`, `be`: края элементов. Значение: `b[be] - a[ae]` в px.
 * Отступы считаются по положению элементов в браузере: если компонент поменяется, замер покажет новое значение.
 * Помощник временно лежит в папке PopupDF и нужен ещё NumberFormat Input и Analytical Widget. Кандидат в kit.
 */

export type Edge = 'top' | 'bottom' | 'left' | 'right';

/** `aside`: нарисовать тонкую полосу снаружи справа от элемента `b`, а не поверх него. Для высоты элемента */
export type EdgeGap = { a: string; ae: Edge; b: string; be: Edge; aside?: boolean };

type Band = { left: number; top: number; width: number; height: number; value: number; vertical: boolean };

const MARK = 'rgb(225, 45, 45)';
const BAND = 'rgba(225, 45, 45, 0.4)';

const measureEdges = (root: HTMLElement, gaps: EdgeGap[]): Band[] => {
  const base = root.getBoundingClientRect();
  const bands: Band[] = [];

  gaps.forEach(({ a, ae, b, be, aside = false }) => {
    const elA = root.querySelector<HTMLElement>(a);
    const elB = root.querySelector<HTMLElement>(b);

    if (!elA || !elB) {
      return;
    }

    const ra = elA.getBoundingClientRect();
    const rb = elB.getBoundingClientRect();
    const vertical = ae === 'top' || ae === 'bottom';

    if (vertical) {
      const left = Math.max(ra.left, rb.left);
      const right = Math.min(ra.right, rb.right);
      const wide = right - left > 0;

      bands.push({
        left: (aside ? rb.right + 8 : wide ? left : rb.left) - base.left,
        top: ra[ae] - base.top,
        width: aside ? 4 : wide ? Math.min(right - left, 120) : rb.width,
        height: rb[be] - ra[ae],
        value: Math.round(rb[be] - ra[ae]),
        vertical,
      });
    } else {
      const top = Math.max(ra.top, rb.top);
      const bottom = Math.min(ra.bottom, rb.bottom);
      const tall = bottom - top > 0;

      bands.push({
        left: ra[ae] - base.left,
        top: (tall ? top : rb.top) - base.top,
        width: rb[be] - ra[ae],
        height: tall ? bottom - top : rb.height,
        value: Math.round(rb[be] - ra[ae]),
        vertical,
      });
    }
  });

  return bands;
};

export const EdgeMeasure = ({ gaps, children }: { gaps: EdgeGap[]; children: ReactNode }) => {
  const box = useRef<HTMLDivElement>(null);
  const [bands, setBands] = useState<Band[]>([]);

  useLayoutEffect(() => {
    const root = box.current;

    if (!root) {
      return undefined;
    }

    const update = () => setBands(measureEdges(root, gaps));
    const observer = new ResizeObserver(update);
    // окно появляется в рамке не сразу: пересчитываем, когда в рамке что-то меняется
    const mutations = new MutationObserver(() => window.requestAnimationFrame(update));
    const timers = [200, 600, 1200, 2500, 5000].map((t) => window.setTimeout(update, t));

    observer.observe(root);
    mutations.observe(root, { childList: true, subtree: true });
    // плавное раскрытие внутри рамки (например, строка чипов) меняет положение без смены размера рамки
    root.addEventListener('transitionend', update);
    root.addEventListener('animationend', update);
    update();
    document.fonts?.ready.then(update);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.removeEventListener('transitionend', update);
      root.removeEventListener('animationend', update);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [gaps]);

  return (
    <div ref={box} style={{ position: 'relative' }}>
      {children}
      {bands.map((band, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={i} aria-hidden="true">
          <span
            style={{
              position: 'absolute',
              left: band.left,
              top: band.top,
              width: Math.max(band.width, 1),
              height: Math.max(band.height, 1),
              backgroundColor: BAND,
              pointerEvents: 'none',
              zIndex: 10000,
            }}
          />
          <span
            style={{
              position: 'absolute',
              left: band.vertical ? band.left + band.width + 10 : band.left + band.width / 2,
              top: band.vertical ? band.top + band.height / 2 : band.top + band.height + 10,
              padding: '0 4px',
              borderRadius: 4,
              font: '500 11px/16px sans-serif',
              color: '#fff',
              backgroundColor: MARK,
              transform: band.vertical ? 'translateY(-50%)' : 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 10000,
            }}
          >
            {band.value}
          </span>
        </span>
      ))}
    </div>
  );
};
