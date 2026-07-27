/**
 * Измеряет сдвиг `position: fixed` координат внутри элемента.
 *
 * Если элемент находится внутри контейнера с CSS `transform` (например, Plasma Modal),
 * `position: fixed` отсчитывается от transform-предка, а не от viewport.
 * Функция возвращает этот сдвиг.
 *
 * Связана с `viewportToContainerPosition`: обе решают задачу пересчёта координат
 * между viewport и контейнером, но для разных типов позиционирования:
 * - `viewportToContainerPosition` — для `position: absolute` (наши overlay-фичи)
 * - `getFixedPositionOffset` — для `position: fixed` (Glide editor overlay)
 *
 * @returns {x, y} — сдвиг в пикселях. При отсутствии transform возвращает {x: 0, y: 0}.
 */
export function getFixedPositionOffset(element: HTMLElement): {
  x: number;
  y: number;
} {
  const probe = document.createElement('div');
  probe.style.cssText =
    'position:fixed;left:0;top:0;width:0;height:0;pointer-events:none;visibility:hidden';
  element.appendChild(probe);
  const rect = probe.getBoundingClientRect();
  element.removeChild(probe);
  return { x: rect.left, y: rect.top };
}
