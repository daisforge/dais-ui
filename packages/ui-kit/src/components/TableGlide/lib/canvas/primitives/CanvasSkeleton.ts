import { CanvasLeaf } from '../core/CanvasLeaf';
import { DrawBatcher } from '../core/DrawBatcher';

/** Точка остановки градиента (color stop) */
export interface CanvasSkeletonGradientStop {
  /** Позиция цвета от 0 до 1 */
  offset: number;
  /** Цвет в CSS-формате (hex, rgb, rgba, hsl, hsla, именованные) */
  color: string;
}

/** Опции для создания скелетона. API приближен к RectSkeleton из plasma-dev */
export interface CanvasSkeletonOptions {
  /**
   * Радиус скругления углов.
   * Ключи: 0, 8, 12, 14, 16, 18, 20, 24, 28, 32, 250
   * Или CSS-строки: "8px", "1rem"
   * По умолчанию: 16 (= 16px)
   */
  roundness?: Roundness | string;

  /** CSS linear-gradient для скелетона */
  customGradientColor?: string;

  /** Более контрастный градиент */
  lighter?: boolean;

  /** Включить shimmer-анимацию (по умолчанию: true) */
  animated?: boolean;

  /** Длительность цикла анимации в мс (по умолчанию: 4000) */
  shimmerDuration?: number;
}

/** Маппинг roundness: ключ → rem-значение */
const ROUNDNESS_MAP = {
  250: 15.625,
  32: 2,
  28: 1.75,
  24: 1.5,
  20: 1.25,
  18: 1.125,
  16: 1,
  14: 0.875,
  12: 0.75,
  8: 0.5,
  0: 0,
} as const;

export type Roundness = keyof typeof ROUNDNESS_MAP;

const DEFAULT_ROUNDNESS: Roundness = 16;
const REM_BASE_PX = 16;
const DEFAULT_GRADIENT_ANGLE = 90;
const DEFAULT_FALLBACK_COLOR = 'rgba(8, 8, 8, 0.08)';
const DEFAULT_SHIMMER_DURATION = 4000;

/** Виртуальная ширина viewport для эмуляции CSS vw-анимации */
const VIRTUAL_VIEWPORT_WIDTH = 1920;

/** Градиент (light тема) — симметричный, 0%=50%=100% */
const DEFAULT_GRADIENT =
  'linear-gradient( 90deg, rgba(8, 8, 8, 0.09) 0%, rgba(8, 8, 8, 0.08) 6.25%, rgba(8, 8, 8, 0.05) 12.5%, rgba(8, 8, 8, 0.01) 25%, rgba(8, 8, 8, 0.05) 37.5%, rgba(8, 8, 8, 0.08) 43.75%, rgba(8, 8, 8, 0.09) 50%, rgba(8, 8, 8, 0.08) 56.25%, rgba(8, 8, 8, 0.05) 62.5%, rgba(8, 8, 8, 0.01) 75%, rgba(8, 8, 8, 0.05) 87.5%, rgba(8, 8, 8, 0.08) 93.75%, rgba(8, 8, 8, 0.09) 100% )';

/** Контрастный градиент */
const DEFAULT_GRADIENT_LIGHTER =
  'linear-gradient( 90deg, rgba(8, 8, 8, 0.36) 0%, rgba(8, 8, 8, 0.32) 6.25%, rgba(8, 8, 8, 0.20) 12.5%, rgba(8, 8, 8, 0.04) 25%, rgba(8, 8, 8, 0.20) 37.5%, rgba(8, 8, 8, 0.32) 43.75%, rgba(8, 8, 8, 0.36) 50%, rgba(8, 8, 8, 0.08) 56.25%, rgba(8, 8, 8, 0.20) 62.5%, rgba(8, 8, 8, 0.04) 75%, rgba(8, 8, 8, 0.20) 87.5%, rgba(8, 8, 8, 0.32) 93.75%, rgba(8, 8, 8, 0.36) 100% )';

/** Глобальное время старта для синхронизации всех скелетонов */
let globalShimmerStartTime: number | null = null;

/** Карта CSS-направлений в углы */
const DIRECTION_MAP: Record<string, number> = {
  right: 90,
  left: 270,
  top: 0,
  bottom: 180,
  'top right': 45,
  'right top': 45,
  'bottom right': 135,
  'right bottom': 135,
  'bottom left': 225,
  'left bottom': 225,
  'top left': 315,
  'left top': 315,
};

/**
 * Canvas-примитив для скелетона (placeholder при загрузке).
 */
export class CanvasSkeleton extends CanvasLeaf {
  private borderRadius: number;
  private _gradientStops: CanvasSkeletonGradientStop[] | null = null;
  private _gradientAngle: number = DEFAULT_GRADIENT_ANGLE;
  private animated: boolean;
  private shimmerDuration: number;

  constructor(id: string, options?: CanvasSkeletonOptions) {
    super(id);

    // Выбираем градиент: custom > lighter > default
    const gradientSource =
      options?.customGradientColor ??
      (options?.lighter ? DEFAULT_GRADIENT_LIGHTER : DEFAULT_GRADIENT);

    const parsed = parseLinearGradient(gradientSource);
    if (parsed) {
      this._gradientStops = parsed.stops;
      this._gradientAngle = parsed.angle;
    }

    this.borderRadius = resolveRoundness(options?.roundness);
    this.animated = options?.animated ?? true;
    this.shimmerDuration = options?.shimmerDuration ?? DEFAULT_SHIMMER_DURATION;
  }

  measure(_ctx: CanvasRenderingContext2D) {
    // Layout читает размер leaf-ноды из child.rect (FlexTreeBuilder, CanvasContainer).
    // Переносим фиксированные numeric-размеры из style в rect.
    // Процентные размеры ('100%') обрабатываются отдельно flex-логикой.
    const { style, rect } = this;
    if (typeof style.width === 'number') rect.width = style.width;
    if (typeof style.height === 'number') rect.height = style.height;
  }

  onPaint(batcher: DrawBatcher, _ctx: CanvasRenderingContext2D): void {
    const { x, y, width, height } = this.rect;

    if (width <= 0 || height <= 0) {
      return;
    }

    const { _gradientStops: gradientStops, borderRadius } = this;

    // Fallback если градиент не распарсился
    if (!gradientStops || gradientStops.length < 2) {
      if (borderRadius > 0) {
        batcher.roundedRect(x, y, width, height, borderRadius, {
          fillStyle: DEFAULT_FALLBACK_COLOR,
        });
      } else {
        batcher.fillRect(x, y, width, height, DEFAULT_FALLBACK_COLOR);
      }
      return;
    }

    const animationCtx = batcher.getAnimationContext();
    const frameTime = animationCtx?.frameTime;

    // Статичный градиент (анимация выключена)
    if (!this.animated || frameTime === undefined) {
      batcher.linearGradientRect(
        x,
        y,
        width,
        height,
        borderRadius,
        gradientStops,
        this._gradientAngle
      );
      return;
    }

    // Анимация: синхронизируем все скелетоны через глобальное время
    globalShimmerStartTime ??= frameTime;

    const elapsed = frameTime - globalShimmerStartTime;
    const progress = (elapsed % this.shimmerDuration) / this.shimmerDuration;

    batcher.custom((ctx) => {
      ctx.save();

      // Clip чтобы градиент не выходил за границы
      ctx.beginPath();
      if (borderRadius > 0) {
        ctx.roundRect(x, y, width, height, borderRadius);
      } else {
        ctx.rect(x, y, width, height);
      }
      ctx.clip();

      // Вычисляем смещённый градиент
      const { startX, startY, endX, endY } = getViewportBasedGradientLine(
        x,
        y,
        height,
        progress
      );

      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      for (const stop of gradientStops) {
        gradient.addColorStop(stop.offset, stop.color);
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, width, height);
      ctx.restore();
    });

    // Запрашиваем следующий кадр
    animationCtx?.requestAnimationFrame?.();
  }
}

/** Проверяет, является ли число ключом ROUNDNESS_MAP */
function isRoundnessKey(value: number): value is Roundness {
  return value in ROUNDNESS_MAP;
}

/** Конвертирует roundness в пиксели (поддерживает число, "Npx", "Nrem") */
function resolveRoundness(roundness: Roundness | string | undefined): number {
  if (roundness === undefined) {
    return ROUNDNESS_MAP[DEFAULT_ROUNDNESS] * REM_BASE_PX;
  }

  if (typeof roundness === 'number') {
    return isRoundnessKey(roundness)
      ? ROUNDNESS_MAP[roundness] * REM_BASE_PX
      : roundness;
  }

  const trimmed = roundness.trim();
  const numericValue = Number(trimmed);

  if (!Number.isNaN(numericValue)) {
    return isRoundnessKey(numericValue)
      ? ROUNDNESS_MAP[numericValue] * REM_BASE_PX
      : numericValue;
  }

  const pxMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)px$/i);
  if (pxMatch) {
    const [, value] = pxMatch;
    return parseFloat(value!);
  }

  const remMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)rem$/i);
  if (remMatch) {
    const [, value] = remMatch;
    return parseFloat(value!) * REM_BASE_PX;
  }

  return ROUNDNESS_MAP[DEFAULT_ROUNDNESS] * REM_BASE_PX;
}

/** Извлекает fallback из CSS var() */
function extractFromCssVar(cssValue: string): string {
  const trimmed = cssValue.trim();
  const varMatch = trimmed.match(/^var\s*\(\s*[^,]+,\s*([\s\S]+)\s*\)$/i);
  return varMatch?.[1]?.trim() ?? trimmed;
}

/** Конвертирует угол из разных единиц в градусы */
function convertAngleToDegrees(value: number, unit: string): number {
  switch (unit.toLowerCase()) {
    case 'rad':
      return (value * 180) / Math.PI;
    case 'turn':
      return value * 360;
    case 'grad':
      return (value * 180) / 200;
    default:
      return value;
  }
}

/** Парсит CSS linear-gradient в структуру для Canvas */
function parseLinearGradient(cssGradient: string): {
  stops: CanvasSkeletonGradientStop[];
  angle: number;
} | null {
  const normalized = extractFromCssVar(cssGradient);

  const match = normalized.match(/^linear-gradient\s*\(([\s\S]+)\)$/i);
  if (!match?.[1]) {
    return null;
  }

  // Разбиваем по запятым, учитывая вложенные скобки (для rgba и т.д.)
  const parts: string[] = [];
  let current = '';
  let parenDepth = 0;

  for (const char of match[1]) {
    if (char === '(') parenDepth++;
    if (char === ')') parenDepth--;

    if (char === ',' && parenDepth === 0) {
      parts.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    parts.push(current.trim());
  }

  const [firstPart] = parts;
  if (parts.length < 2 || !firstPart) {
    return null;
  }

  // Парсим угол или направление
  let angle = DEFAULT_GRADIENT_ANGLE;
  let colorStartIndex = 0;

  const angleMatch = firstPart.match(
    /^(-?\d+(?:\.\d+)?)(deg|rad|turn|grad)?$/i
  );

  if (angleMatch?.[1]) {
    const [, valueStr, unit = 'deg'] = angleMatch;
    angle = convertAngleToDegrees(parseFloat(valueStr!), unit);
    colorStartIndex = 1;
  } else if (firstPart.startsWith('to ')) {
    const direction = firstPart.substring(3).trim().toLowerCase();
    const mappedAngle = DIRECTION_MAP[direction];
    if (mappedAngle !== undefined) {
      angle = mappedAngle;
      colorStartIndex = 1;
    }
  }

  // Парсим цветовые остановки
  const stops: CanvasSkeletonGradientStop[] = [];
  const colorParts = parts.slice(colorStartIndex);

  for (let i = 0; i < colorParts.length; i++) {
    const part = colorParts[i];
    if (!part) continue;

    const colorStopMatch = part
      .trim()
      .match(
        /^(#[0-9a-fA-F]{3,8}|rgba?\s*\([^)]+\)|hsla?\s*\([^)]+\)|[a-zA-Z]+)(?:\s+(-?\d+(?:\.\d+)?)(%))?$/
      );

    if (!colorStopMatch?.[1]) continue;

    const [, color, offsetStr, percent] = colorStopMatch;
    const offset =
      percent === '%'
        ? parseFloat(offsetStr!) / 100
        : colorParts.length > 1
        ? i / (colorParts.length - 1)
        : 0;

    stops.push({
      offset: Math.max(0, Math.min(1, offset)),
      color: color!,
    });
  }

  if (stops.length < 2) {
    return null;
  }

  return { stops, angle };
}

/**
 * Вычисляет координаты градиента для viewport-based анимации.
 * Эмулирует CSS: left: -100vw, width: 200vw, translateX(0 → 100vw)
 */
function getViewportBasedGradientLine(
  x: number,
  y: number,
  height: number,
  progress: number
): { startX: number; startY: number; endX: number; endY: number } {
  const vw = VIRTUAL_VIEWPORT_WIDTH;
  const translateX = progress * vw;

  // Градиент шириной 2vw, начинается за левым краем элемента
  const gradientStartX = x - vw + translateX;
  const gradientEndX = x + vw + translateX;
  const centerY = y + height / 2;

  return {
    startX: gradientStartX,
    startY: centerY,
    endX: gradientEndX,
    endY: centerY,
  };
}
