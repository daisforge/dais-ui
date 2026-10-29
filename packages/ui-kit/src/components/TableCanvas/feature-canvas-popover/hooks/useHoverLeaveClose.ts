import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import { isPointInRect, type PopoverRect, unionRect } from '../utils/geometry';
import { getLastPointer, trackPointer } from '../utils/pointerPosition';

export interface UseHoverLeaveCloseParams {
  /** Включено только для поповера с `trigger: 'hover'`. */
  enabled: boolean;
  /** Якорь поповера: невидимый DOM-элемент на месте canvas-элемента. */
  anchorRef: RefObject<HTMLElement | null>;
  /** Сам поповер. */
  popoverRef: RefObject<HTMLElement | null>;
  /** Запас вокруг зоны «якорь и поповер» (px). */
  expand: number;
  /** Сколько курсор может пробыть вне якоря и поповера (мс). */
  delay: number;
  onLeave: () => void;
}

/**
 * Закрывает поповер по наведению, когда курсор ушёл и с якоря, и с поповера.
 *
 * Зона, где поповер держится, это общий прямоугольник якоря и поповера: так
 * курсор может идти от элемента к поповеру любым путём, в том числе по
 * диагонали через зазор и хвостик.
 *
 * Положение курсора проверяем по геометрии, а не по hide-событиям шины
 * наведения: шина откладывает скрытие и отменяет его, когда показывается
 * соседний элемент, и hide для якоря может не прийти совсем. Пока курсор
 * не двигается над якорем или поповером, поповер остаётся открытым.
 */
export function useHoverLeaveClose({
  enabled,
  anchorRef,
  popoverRef,
  expand,
  delay,
  onLeave,
}: UseHoverLeaveCloseParams) {
  const onLeaveRef = useRef(onLeave);
  onLeaveRef.current = onLeave;

  useEffect(() => {
    if (!enabled) return undefined;

    let timer: number | null = null;

    const cancel = () => {
      if (timer !== null) {
        window.clearTimeout(timer);
        timer = null;
      }
    };

    const schedule = () => {
      if (timer !== null) return;
      timer = window.setTimeout(() => {
        timer = null;
        onLeaveRef.current();
      }, delay);
    };

    const isInside = (x: number, y: number) => {
      const rects = [anchorRef.current, popoverRef.current]
        .filter((el): el is HTMLElement => !!el)
        .map((el): PopoverRect => el.getBoundingClientRect());
      const zone = unionRect(rects);
      return !!zone && isPointInRect(x, y, zone, expand);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (isInside(event.clientX, event.clientY)) {
        cancel();
      } else {
        schedule();
      }
    };

    // Курсор ушёл за пределы окна.
    const handleMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) schedule();
    };

    // Нажатие вне зоны закрывает сразу. На сенсорных экранах pointermove между
    // касаниями нет, и без этого поповер по наведению после касания висел бы.
    const handlePointerDown = (event: PointerEvent) => {
      if (!isInside(event.clientX, event.clientY)) {
        cancel();
        onLeaveRef.current();
      }
    };

    document.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('pointerdown', handlePointerDown, true);

    // Поповер мог открыться, когда курсор уже не над якорем (show пришёл от
    // перерисовки без движения мыши): тогда закрываем, не дожидаясь движения.
    const releasePointer = trackPointer();
    const pointer = getLastPointer();
    if (pointer && !isInside(pointer.x, pointer.y)) {
      schedule();
    }

    return () => {
      releasePointer();
      cancel();
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, [enabled, anchorRef, popoverRef, expand, delay]);
}
