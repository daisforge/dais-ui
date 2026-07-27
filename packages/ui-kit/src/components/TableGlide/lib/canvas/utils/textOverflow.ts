export type CanvasTextOverflow = 'clip' | 'ellipsis';

export interface ResolvedOverflowText {
  text: string;
  // сокращен ли текст
  didTruncate: boolean;
  width: number;
}

type SegmenterLike = {
  segment: (input: string) => Iterable<{ segment: string }>;
};

type IntlWithSegmenter = typeof Intl & {
  Segmenter?: new (
    locale?: string | string[],
    // grapheme - Разбивает строку на полноценные визуальные символы (полезно для корректного подсчета длины текста с эмодзи).
    options?: { granularity?: 'grapheme' }
  ) => SegmenterLike;
};

interface ResolveOverflowTextArgs {
  ctx: CanvasRenderingContext2D;
  text: string;
  font: string;
  maxWidth: number;
  textOverflow: CanvasTextOverflow;
  ellipsis: string;
  forceEllipsis?: boolean;
}

interface ResolveWrappedOverflowTextArgs {
  ctx: CanvasRenderingContext2D;
  lines: readonly string[];
  font: string;
  maxWidth: number;
  maxLines: number;
  textOverflow: CanvasTextOverflow;
  ellipsis: string;
}

export interface ResolvedWrappedOverflowText {
  lines: string[];
  didClamp: boolean;
}

const CACHE_SEPARATOR = '|';
const DEFAULT_MAX_WIDTH_CACHE_PRECISION = 2;
const TEXT_OVERFLOW_CACHE_LIMIT = 10_000;

// В canvas измерение текста идет через ctx.measureText, и на таблицах это может
// повторяться много раз. Поэтому отдельно кэшируем ширину строки и итог truncation.
const textWidthCache = new Map<string, number>();
const overflowTextCache = new Map<string, ResolvedOverflowText>();

function setBoundedCacheValue<T>(cache: Map<string, T>, key: string, value: T) {
  // Ключи содержат текст ячейки, поэтому не даем cache бесконечно расти на
  // таблицах с большим количеством уникальных значений.
  if (cache.size >= TEXT_OVERFLOW_CACHE_LIMIT) {
    cache.clear();
  }

  cache.set(key, value);
}

// для кэша ширины
function buildTextWidthKey(font: string, text: string): string {
  return `${font}${CACHE_SEPARATOR}${text}`;
}

function buildOverflowTextKey({
  text,
  font,
  maxWidth,
  textOverflow,
  ellipsis,
  forceEllipsis,
}: Omit<ResolveOverflowTextArgs, 'ctx'>): string {
  // Ширину округляем до сотых пикселя, чтобы мелкие float-колебания layout
  // не создавали почти одинаковые cache key при ресайзе.
  return [
    font,
    text,
    maxWidth.toFixed(DEFAULT_MAX_WIDTH_CACHE_PRECISION),
    textOverflow,
    ellipsis,
    forceEllipsis ? 'force' : 'normal',
  ].join(CACHE_SEPARATOR);
}

function getCachedTextWidth(
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string
): number {
  const key = buildTextWidthKey(font, text);
  let width = textWidthCache.get(key);

  // еще нет в кэше ширины
  if (width === undefined) {
    // measureText зависит от текущего ctx.font, поэтому font выставляется прямо
    // перед измерением и входит в cache key.
    ctx.font = font;
    width = ctx.measureText(text).width;
    setBoundedCacheValue(textWidthCache, key, width);
  }

  return width;
}

function splitGraphemes(text: string): string[] {
  // Grapheme cluster - это один видимый символ для пользователя: например emoji,
  // флаг из двух code point или буква вместе с комбинируемым ударением.
  const Segmenter =
    typeof Intl !== 'undefined'
      ? (Intl as IntlWithSegmenter).Segmenter
      : undefined;

  // Режем строку по видимым символам, чтобы не разорвать emoji,
  // флаги или буквы с комбинируемыми знаками посередине.
  if (typeof Segmenter === 'function') {
    // Intl.Segmenter умеет резать строку именно по grapheme clusters,
    // поэтому ellipsis не оставит половину emoji или отдельно стоящий диакритик.
    const segmenter = new Segmenter(undefined, { granularity: 'grapheme' });

    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }

  // Fallback хуже Segmenter, но Array.from хотя бы не режет surrogate pairs
  // внутри обычных emoji так, как это сделал бы split('').
  return Array.from(text);
}

function getTruncatedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string,
  maxWidth: number,
  ellipsis: string
): ResolvedOverflowText {
  const ellipsisWidth = getCachedTextWidth(ctx, ellipsis, font);

  if (ellipsisWidth > maxWidth) {
    // Если даже сам символ ellipsis не помещается, рисовать нечего:
    // clip все равно скрыл бы текст целиком.
    return { text: '', didTruncate: true, width: 0 };
  }

  const graphemes = splitGraphemes(text);
  let low = 0;
  let high = graphemes.length;
  let bestText = ellipsis;
  let bestWidth = ellipsisWidth;

  // Бинарный поиск нужен, чтобы не удалять символы по одному на длинных строках таблицы.
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    // Проверяем префикс длины mid плюс ellipsis. Если он помещается,
    // пробуем взять больше grapheme clusters; если нет - сужаем диапазон.
    const candidate = `${graphemes.slice(0, mid).join('')}${ellipsis}`;
    const candidateWidth = getCachedTextWidth(ctx, candidate, font);

    if (candidateWidth <= maxWidth) {
      bestText = candidate;
      bestWidth = candidateWidth;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return {
    text: bestText,
    didTruncate: true,
    width: bestWidth,
  };
}

export function resolveOverflowText(
  args: ResolveOverflowTextArgs
): ResolvedOverflowText {
  const {
    ctx,
    text,
    font,
    maxWidth,
    textOverflow,
    ellipsis,
    forceEllipsis = false,
  } = args;
  const normalizedMaxWidth = Math.max(0, maxWidth);

  if (
    normalizedMaxWidth <= 0 ||
    (text.length === 0 && !(forceEllipsis && textOverflow === 'ellipsis'))
  ) {
    // Нулевая ширина означает, что layout не оставил тексту места.
    // В таком состоянии важно не рисовать исходную строку за пределами rect.
    return { text: '', didTruncate: text.length > 0, width: 0 };
  }

  const cacheKey = buildOverflowTextKey({
    text,
    font,
    maxWidth: normalizedMaxWidth,
    textOverflow,
    ellipsis,
    forceEllipsis,
  });

  const cached = overflowTextCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  const fullWidth = getCachedTextWidth(ctx, text, font);
  let result: ResolvedOverflowText;

  if (fullWidth <= normalizedMaxWidth && !forceEllipsis) {
    result = { text, didTruncate: false, width: fullWidth };
  } else if (textOverflow === 'clip') {
    // Для clip возвращаем исходный текст: renderer обрежет его через ctx.clip,
    // а вызывающий код все еще узнает, что строка была длиннее bounds.
    result = { text, didTruncate: true, width: fullWidth };
  } else {
    result = getTruncatedText(ctx, text, font, normalizedMaxWidth, ellipsis);
  }

  setBoundedCacheValue(overflowTextCache, cacheKey, result);

  return result;
}

export function resolveWrappedOverflowText({
  ctx,
  lines,
  font,
  maxWidth,
  maxLines,
  textOverflow,
  ellipsis,
}: ResolveWrappedOverflowTextArgs): ResolvedWrappedOverflowText {
  const normalizedMaxLines = Math.max(0, Math.floor(maxLines));
  const visibleLineCount = Math.min(lines.length, normalizedMaxLines);
  const visibleLines = lines.slice(0, visibleLineCount);
  const didClamp = lines.length > visibleLineCount;

  if (textOverflow === 'ellipsis' && visibleLines.length > 0) {
    const lastIndex = visibleLines.length - 1;
    const lastLine = visibleLines[lastIndex] ?? '';

    // Последняя видимая строка может сама помещаться по ширине, но ellipsis
    // нужен как маркер скрытых строк ниже maxLines. Last-line guard также
    // не дает ложнопоместившейся Unicode-строке клипнуться без ellipsis.
    visibleLines[lastIndex] = resolveOverflowText({
      ctx,
      text: lastLine,
      font,
      maxWidth,
      textOverflow,
      ellipsis,
      forceEllipsis: didClamp,
    }).text;
  }

  return {
    lines: visibleLines,
    didClamp,
  };
}

export function invalidateOverflowTextCache(): void {
  textWidthCache.clear();
  overflowTextCache.clear();
}
