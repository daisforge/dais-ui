/**
 * Последняя позиция курсора в окне. Нужна для Popover по наведению: glide
 * может прислать событие наведения без движения мыши (например, при прокрутке),
 * поэтому над элементом ли курсор, проверяем по его настоящей позиции.
 */
let lastPointer: { x: number; y: number } | null = null;
let subscribers = 0;

const handlePointerMove = (event: PointerEvent) => {
  lastPointer = { x: event.clientX, y: event.clientY };
};

// Курсор ушёл за пределы окна: считаем, что он не над элементом.
const handleMouseOut = (event: MouseEvent) => {
  if (!event.relatedTarget) {
    lastPointer = { x: -Infinity, y: -Infinity };
  }
};

/**
 * Начинает следить за курсором и возвращает функцию отписки. Обработчики
 * общие на всех. После отписки позиция сохраняется: её читают сразу после
 * закрытия Popover, чтобы решить, открывать ли следующий под курсором.
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

export function getLastPointer(): { x: number; y: number } | null {
  return lastPointer;
}
