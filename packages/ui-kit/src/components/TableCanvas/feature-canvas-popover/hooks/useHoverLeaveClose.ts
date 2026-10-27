import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import { isPointInRect, type PopoverRect, unionRect } from '../utils/geometry';
import { getLastPointer, trackPointer } from '../utils/pointerPosition';

export interface UseHoverLeaveCloseParams {
  /** Включено только для Popover с `trigger: 'hover'`. */
  enabled: boolean;
  /** Невидимый элемент на месте canvas-элемента, к которому привязан Popover. */
  anchorRef: RefObject<HTMLElement | null>;
  popoverRef: RefObject<HTMLElement | null>;
  /** Запас вокруг элемента и Popover (px). */
  expand: number;
  /** Сколько курсор может пробыть снаружи до закрытия (мс). */
  delay: number;
  onLeave: () => void;
}

/**
 * Закрывает Popover по наведению, когда курсор ушёл и с элемента, и с Popover.
 *
 * Popover держится, пока курсор внутри общего прямоугольника элемента и
 * Popover: так к нему можно вести мышь любым путём, в том числе по диагонали.
 * Положение курсора проверяем по координатам, потому что событие скрытия от
 * таблицы может не прийти, если курсор сразу попал на соседний элемент.
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

    // Нажатие снаружи закрывает сразу: на сенсорном экране курсор между
    // касаниями не двигается, и Popover иначе остался бы открытым.
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

    // Popover мог открыться, когда курсор уже ушёл с элемента: тогда закрываем,
    // не дожидаясь движения мыши.
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
