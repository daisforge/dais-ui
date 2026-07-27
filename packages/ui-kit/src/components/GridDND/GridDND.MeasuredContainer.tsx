import { useEffect, useRef } from 'react';
import { Responsive } from 'react-grid-layout';

// import 'react-resizable/css/styles.css'; // если нужна возможность ресайза (не забыть добавить в vite.config.ts)
import { useContainerWidth } from './hooks/useContainerWidth';

/**
 * Wrapper для Responsive, который измеряет ширину контейнера и передает ее в Responsive
 * Решает проблему с прыжком размера при загрузке страницы
 * https://github.com/react-grid-layout/react-grid-layout/issues/1940 - прыжок размера при загрузке страницы
 * @param props - пропсы для Responsive
 * @returns - Responsive с измеренной шириной
 */
export function MeasuredContainer(
  props: React.ComponentProps<typeof Responsive>
) {
  const { onWidthChange, margin, cols, containerPadding } = props;
  const { ref, width } = useContainerWidth<HTMLDivElement>();
  const prevWidthRef = useRef(0);
  // Эффект нужен для инициализации width, если контейнер изначально был не lg, а какой-то другой
  useEffect(() => {
    if (width > 0 && width !== prevWidthRef.current) {
      onWidthChange?.(
        width,
        margin as [number, number],
        cols as unknown as number,
        containerPadding as [number, number]
      );
      prevWidthRef.current = width;
    }
  }, [width, onWidthChange, margin, cols, containerPadding]);
  return (
    <div ref={ref} style={{ width: '100%' }}>
      {/* Не рендерим RGL, пока ширина не измерена — убираем «прыжок» */}
      {width > 0 && <Responsive {...props} width={width} />}
    </div>
  );
}
