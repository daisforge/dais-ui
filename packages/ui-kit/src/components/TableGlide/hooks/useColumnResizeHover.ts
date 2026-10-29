import type {
  DataEditorRef,
  GridColumn,
} from '@glideappsfinal/glide-data-grid';
import type { CSSProperties, RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { GlideProps } from '../types';

interface Options {
  enabled: boolean;
  columns: readonly GridColumn[];
  container: HTMLDivElement | null;
  dataEditorRef: RefObject<DataEditorRef | null>;
  onColumnResizeStart?: GlideProps['onColumnResizeStart'];
}

/** Hover дополняет нативную линию Glide, которая рисуется только при drag. */
export function useColumnResizeHover(options: Options) {
  const optionsRef = useRef(options);
  optionsRef.current = options;
  const hoveredColumn = useRef<number | null>(null);
  const draggedColumn = useRef<number | null>(null);
  const restoreFrame = useRef<number | null>(null);
  const [lineStyle, setLineStyle] = useState<CSSProperties | null>(null);

  const clearHover = useCallback(() => {
    if (restoreFrame.current !== null) {
      cancelAnimationFrame(restoreFrame.current);
      restoreFrame.current = null;
    }
    hoveredColumn.current = null;
    setLineStyle(null);
  }, []);

  const showHover = useCallback(
    (index: number) => {
      const { enabled, columns, container, dataEditorRef } = optionsRef.current;
      const column = columns[index];
      const bounds = dataEditorRef.current?.getBounds(index, -1);
      const canvas = container?.querySelector('canvas');
      if (
        !enabled ||
        !column ||
        column.resizable === false ||
        (column.minWidth !== undefined &&
          column.minWidth === column.maxWidth) ||
        !bounds ||
        !canvas ||
        !container
      ) {
        clearHover();
        return;
      }

      const rect = container.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const scale = rect.width / container.offsetWidth;
      if (!Number.isFinite(scale) || scale <= 0) {
        clearHover();
        return;
      }

      hoveredColumn.current = index;
      const next = {
        // getBounds включает 1px разделителя. Ещё 1px — половина линии
        // толщиной 2px; абсолютные координаты отсчитываются внутри рамки.
        left:
          (bounds.x + bounds.width - rect.left) / scale -
          container.clientLeft -
          2,
        top: (canvasRect.top - rect.top) / scale - container.clientTop,
        height: canvasRect.height / scale,
      };
      setLineStyle((prev) =>
        prev?.left === next.left &&
        prev.top === next.top &&
        prev.height === next.height
          ? prev
          : next,
      );
    },
    [clearHover],
  );

  const onMouseMove = useCallback<NonNullable<GlideProps['onMouseMove']>>(
    (event) => {
      if (restoreFrame.current !== null) {
        cancelAnimationFrame(restoreFrame.current);
        restoreFrame.current = null;
      }
      if (event.isTouch || event.buttons !== 0 || !event.isEdge) {
        clearHover();
        return;
      }
      if (event.kind === 'header') {
        showHover(event.location[0]);
        return;
      }
      // Glide отдаёт правую сторону последней колонки как out-of-bounds.
      if (event.kind === 'out-of-bounds') {
        showHover(optionsRef.current.columns.length - 1);
        return;
      }
      clearHover();
    },
    [clearHover, showHover],
  );

  const onColumnResizeStart = useCallback<
    NonNullable<GlideProps['onColumnResizeStart']>
  >(
    (...args) => {
      const [, , index] = args;
      draggedColumn.current = index;
      clearHover();
      optionsRef.current.onColumnResizeStart?.(...args);
    },
    [clearHover],
  );

  const { container, enabled } = options;
  useEffect(() => {
    clearHover();
    if (!container || !enabled) return undefined;

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      draggedColumn.current = hoveredColumn.current;
      clearHover();
    };
    const onPointerUp = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const index = draggedColumn.current;
      draggedColumn.current = null;
      if (
        index === null ||
        (event.pointerType && event.pointerType !== 'mouse')
      )
        return;
      // Ждём применения последней ширины; не возвращаем hover за пределами
      // шапки или когда курсор ушёл от границы (например, достигнут maxWidth).
      restoreFrame.current = requestAnimationFrame(() => {
        restoreFrame.current = null;
        const bounds = optionsRef.current.dataEditorRef.current?.getBounds(
          index,
          -1,
        );
        if (!bounds) return;
        const rect = container.getBoundingClientRect();
        if (
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          Math.abs(event.clientX - bounds.x - bounds.width) <= 5 &&
          event.clientY >= bounds.y &&
          event.clientY < bounds.y + bounds.height
        ) {
          showHover(index);
        }
      });
    };
    const reset = () => {
      clearHover();
    };
    const onBlur = () => {
      draggedColumn.current = null;
      reset();
    };
    container.addEventListener('pointerdown', onPointerDown, true);
    container.addEventListener('mouseleave', reset);
    window.addEventListener('pointerup', onPointerUp, true);
    window.addEventListener('scroll', reset, true);
    window.addEventListener('resize', reset);
    window.addEventListener('blur', onBlur);
    let observedWidth = container.clientWidth;
    let observedHeight = container.clientHeight;
    const observer = new ResizeObserver(() => {
      // Первое уведомление приходит и без изменения размера. Оно не должно
      // стирать hover, появившийся сразу после монтирования таблицы.
      if (
        observedWidth === container.clientWidth &&
        observedHeight === container.clientHeight
      )
        return;
      observedWidth = container.clientWidth;
      observedHeight = container.clientHeight;
      reset();
    });
    observer.observe(container);

    return () => {
      if (restoreFrame.current !== null)
        cancelAnimationFrame(restoreFrame.current);
      restoreFrame.current = null;
      draggedColumn.current = null;
      observer.disconnect();
      container.removeEventListener('pointerdown', onPointerDown, true);
      container.removeEventListener('mouseleave', reset);
      window.removeEventListener('pointerup', onPointerUp, true);
      window.removeEventListener('scroll', reset, true);
      window.removeEventListener('resize', reset);
      window.removeEventListener('blur', onBlur);
    };
  }, [clearHover, container, enabled, showHover]);

  return {
    lineStyle: enabled ? lineStyle : null,
    onMouseMove,
    onColumnResizeStart,
  };
}
