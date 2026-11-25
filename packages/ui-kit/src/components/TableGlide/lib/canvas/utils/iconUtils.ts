import { isValidElement, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

// TODO: оценить размер кэша и подобрать лимит для таблиц, создающих типы иконок при отрисовке.
const iconCache = new Map<string, string>();
const componentIds = new WeakMap<object, number>();
const cacheableProps = ['size', 'color', 'className'];
let nextComponentId = 0;

function getCacheKey({ type, props }: ReactElement<Record<string, unknown>>) {
  // Встроенные SVG и иконки с дополнительными пропсами рисуем напрямую:
  // на результат могут влиять дочерние элементы, стили и другие значения.
  if (
    (typeof type !== 'function' && typeof type !== 'object') ||
    !Object.keys(props).every(
      (key) =>
        cacheableProps.includes(key) &&
        (props[key] === undefined || typeof props[key] === 'string'),
    )
  ) {
    return undefined;
  }

  // Имена компонентов могут совпадать после минификации или вызова React.memo.
  // Ссылка на тип компонента позволяет различать такие иконки.
  let id = componentIds.get(type);
  if (id === undefined) {
    id = nextComponentId;
    nextComponentId += 1;
    componentIds.set(type, id);
  }

  // В массиве JSON явный undefined станет null. Пропущенный пропс помечаем
  // отдельно: компонент может проверять его наличие через оператор in.
  const variant = cacheableProps.map((key) =>
    key in props ? props[key] : false,
  );
  return JSON.stringify([id, ...variant]);
}

export function reactIconToSvg(iconElement: ReactElement): string {
  const cacheKey = getCacheKey(iconElement);
  const cached = cacheKey === undefined ? undefined : iconCache.get(cacheKey);
  if (cached !== undefined) {
    return cached;
  }

  const htmlString = renderToString(iconElement);
  const svgMatch = htmlString.match(/<svg[\s\S]*?<\/svg>/);
  if (!svgMatch) {
    // eslint-disable-next-line no-console -- предупреждаем разработчика, если компонент иконки не вернул SVG
    console.warn(
      'Could not extract SVG from React icon component:',
      iconElement.type,
    );
    return '';
  }

  const svgString = svgMatch[0];
  if (cacheKey !== undefined) {
    iconCache.set(cacheKey, svgString);
  }
  return svgString;
}

/**
 * Проверяет, является ли значение React-элементом.
 */
export function isReactIcon(value: unknown): value is ReactElement {
  return isValidElement(value);
}

/**
 * Возвращает готовую строку SVG или получает её из React-элемента.
 */
export function normalizeIcon(icon: string | ReactElement): string {
  if (typeof icon === 'string') {
    return icon;
  }

  if (isReactIcon(icon)) {
    return reactIconToSvg(icon);
  }

  return '';
}

/**
 * Удаляет все сохранённые SVG из кэша.
 */
export function clearIconCache(): void {
  iconCache.clear();
}

/**
 * Возвращает количество SVG в кэше.
 */
export function getIconCacheSize(): number {
  return iconCache.size;
}
