import { isValidElement, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

const iconCache = new Map<string, string>();
const componentIds = new WeakMap<object, number>();
let nextComponentId = 0;

function getCacheKey({ type, props }: ReactElement<Record<string, unknown>>) {
  // Native SVG trees and custom rendering props (e.g. children, style) can
  // contain arbitrary React values. Render those directly.
  if (
    (typeof type !== 'function' && typeof type !== 'object') ||
    !Object.keys(props).every(
      (key) =>
        (key === 'size' || key === 'color' || key === 'className') &&
        typeof props[key] === 'string',
    )
  ) {
    return undefined;
  }

  // Component names can collide across minified modules and memo wrappers.
  let id = componentIds.get(type);
  if (id === undefined) {
    id = nextComponentId;
    nextComponentId += 1;
    componentIds.set(type, id);
  }

  return JSON.stringify([
    id,
    props['size'],
    props['color'],
    props['className'],
  ]);
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
    // eslint-disable-next-line no-console -- surface invalid icon inputs to consumers
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
 * Type guard to check if a value is a React element (icon component).
 */
export function isReactIcon(value: unknown): value is ReactElement {
  return isValidElement(value);
}

/**
 * Normalizes icon input - accepts either SVG string or React element.
 * Returns SVG string.
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
 * Clears the icon cache. Useful for testing or memory management.
 */
export function clearIconCache(): void {
  iconCache.clear();
}

/**
 * Returns the current size of the icon cache.
 */
export function getIconCacheSize(): number {
  return iconCache.size;
}
