/**
 * Последняя известная позиция курсора во viewport.
 *
 * Нужна поповеру по наведению: Glide перерисовывает ячейки со своей
 * сохранённой позицией курсора (например, когда таблица прокрутилась под
 * неподвижной мышью или курсор быстро ушёл за пределы canvas), и show из шины
 * наведения может прийти без движения мыши. Решение «курсор над якорем»
 * поэтому принимаем по реальной позиции, а не по самому событию.
 */
let lastPointer: { x: number; y: number } | null = null;
let subscribers = 0;

const handlePointerMove = (event: PointerEvent) => {
  lastPointer = { x: event.clientX, y: event.clientY };
};

// Курсор ушёл за пределы окна: считаем его снаружи любого якоря.
const handleMouseOut = (event: MouseEvent) => {
  if (!event.relatedTarget) {
    lastPointer = { x: -Infinity, y: -Infinity };
  }
};

/**
 * Начать следить за курсором. Возвращает отписку; слушатели общие на всех
 * подписчиков. После отписки последняя позиция сохраняется: её читают сразу
 * после закрытия поповера, чтобы решить, показывать ли поповер под курсором.
 */
export function trackPointer(): () => void {
  if (typeof document === 'undefined') return () => {};

  subscribers += 1;
  if (subscribers === 1) {
    document.addEventListener('pointermove', handlePointerMove, {
      passive: true,
      capture: true,
    });
    document.addEventListener('mouseout', handleMouseOut, true);
  }

  let released = false;
  return () => {
    if (released) return;
    released = true;
    subscribers -= 1;
    if (subscribers === 0) {
      document.removeEventListener('pointermove', handlePointerMove, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
    }
  };
}

/** Последняя позиция курсора или null, если курсор ещё не двигался. */
export function getLastPointer(): { x: number; y: number } | null {
  return lastPointer;
}
