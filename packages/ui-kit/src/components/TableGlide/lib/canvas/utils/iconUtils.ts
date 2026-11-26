/// <reference lib="es2021.weakref" />

import { isValidElement, ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

const MAX_FALLBACK_VARIANTS = 1024;
const cacheableProps = ['size', 'color', 'className'];
type IconVariants = Map<string, string>;

function createIconCache() {
  let size = 0;
  // Финализатор нужен только для диагностического счётчика. Он не хранит SVG.
  const released =
    typeof FinalizationRegistry === 'function'
      ? new FinalizationRegistry<undefined>(() => {
          size -= 1;
        })
      : undefined;
  // В старых браузерах без финализаторов используем ограниченный кэш,
  // чтобы сохранить точный счётчик и ограничить расход памяти.
  const byType = released
    ? new WeakMap<object, IconVariants>()
    : new Map<object, IconVariants>();

  return {
    get size() {
      return size;
    },
    get(type: object, variant: string) {
      return byType.get(type)?.get(variant);
    },
    set(type: object, variant: string, svg: string) {
      if (byType instanceof Map && size >= MAX_FALLBACK_VARIANTS) {
        byType.clear();
        size = 0;
      }
      let variants = byType.get(type);
      if (!variants) {
        variants = new Map();
        byType.set(type, variants);
      }
      if (!variants.has(variant)) {
        released?.register(type, undefined);
        size += 1;
      }
      variants.set(variant, svg);
    },
  };
}

let iconCache = createIconCache();

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

  // В массиве JSON явный undefined станет null. Пропущенный пропс помечаем
  // отдельно: компонент может проверять его наличие через оператор in.
  const variant = cacheableProps.map((key) =>
    key in props ? props[key] : false,
  );
  return { type, variant: JSON.stringify(variant) };
}

export function reactIconToSvg(iconElement: ReactElement): string {
  const cacheKey = getCacheKey(iconElement);
  const cached = cacheKey && iconCache.get(cacheKey.type, cacheKey.variant);
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
    iconCache.set(cacheKey.type, cacheKey.variant, svgString);
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
  iconCache = createIconCache();
}

/**
 * Возвращает количество SVG в кэше. Освобождённые варианты вычитаются
 * после выполнения финализаторов сборщиком мусора.
 */
export function getIconCacheSize(): number {
  return iconCache.size;
}
