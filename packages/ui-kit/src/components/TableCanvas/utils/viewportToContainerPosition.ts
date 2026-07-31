/**
 * Переводит координаты из viewport (getBoundingClientRect, clientX/clientY)
 * в координаты относительно контейнера для position: absolute.
 * Универсально для таблицы в любом месте страницы (под контентом, в модалке, в аккордеоне).
 */
export function viewportToContainerPosition(
  viewportX: number,
  viewportY: number,
  container: HTMLElement,
): { x: number; y: number } {
  const rect = container.getBoundingClientRect();
  return {
    x: viewportX - rect.left + container.scrollLeft,
    y: viewportY - rect.top + container.scrollTop,
  };
}
