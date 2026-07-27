import { split } from 'canvas-hypertxt';

import { CanvasNode } from '../core/CanvasNode';
import { DrawBatcher } from '../core/DrawBatcher';
import {
  type CanvasTextOverflow,
  invalidateOverflowTextCache,
  resolveOverflowText,
  resolveWrappedOverflowText,
} from '../utils/textOverflow';
import type {
  CanvasNodeTooltipConfig,
  CanvasNodeTooltipProps,
} from '../utils/portalHoverEvents';

/*
 * ТУЛТИПЫ НА CanvasText — как это работает и что важно знать.
 *
 * Два механизма:
 * 1. `tooltip` (база CanvasNode) — always-on, показывается при hover всегда.
 * 2. `autoTooltip` — только когда текст реально обрезан в многоточие
 *    (однострочный ellipsis или wordWrap+maxLines clamp). Неявно включает
 *    portalHoverEnabled. Явный `tooltip` приоритетнее.
 *
 * Почему обрезанность вычисляется ЛЕНИВО в getTooltip(), а не хранится с paint:
 * - Canvas tree пересоздается на каждый draw ячейки (cellRenderer: кэш дерева
 *   выключен) — инстанс CanvasText живет один кадр, логическая нода = стабильный
 *   nodeId. Инстансов «много», нода «одна».
 * - CellCanvasRoot.render диспатчит hover ДО paint (hover-стили должны попасть
 *   в тот же кадр) — getTooltip() всегда зовется у инстанса, который еще не
 *   рисовался. Любой флаг, выставляемый в paint, здесь был бы false.
 * - Portal-hover событие уходит один раз на nodeId (ранний return в
 *   CanvasHoverController.updatePortalHover) — «дослать» тултип после paint
 *   нельзя.
 * Поэтому computeIsTruncated() считает обрезку в момент hover: layout к этому
 * моменту уже прошел (rect.width финальный, cachedLines заполнены measure),
 * а resolveOverflowText/resolveWrappedOverflowText бьют в те же кэши, что
 * прогрел paint — фактически это Map-lookup. Измерения вне paint идут через
 * module-level offscreen ctx (getMeasureContext); measureText не зависит от
 * DPR-трансформаций, значения совпадают с рендерным ctx.
 *
 * Подводные камни (осознанные):
 * - Событие dispatch-once: пока курсор стоит на ноде, тултип не обновится
 *   «на лету» (например, resize колонки под курсором) — только после
 *   ухода/возврата курсора. Свойство hover-тракта, не детекта.
 * - rect.width === 0 считается обрезкой (didTruncate при непустом тексте) —
 *   тултип покажется над полностью скрытым текстом.
 * - Multiline-детект — только вертикальный clamp (didClamp = есть скрытые
 *   строки); горизонтальная обрезка отдельной wrapped-строки не учитывается.
 * - Наследники со своим paint (CanvasLink) работают без доп. кода — детект
 *   не зависит от paint. Но если наследник меняет семантику text/rect,
 *   computeIsTruncated нужно переопределять вместе с ней.
 * - НЕ хранить обрезанность на инстансе или в static-мапе по nodeId: инстанс
 *   одноразовый (см. выше), а глобальная мапа течет (ключи с rowInd) и
 *   коллидирует между таблицами. Уже проходили.
 */

const DEFAULT_FONT = '14px sans-serif';
const DEFAULT_COLOR = 'black';
const DEFAULT_LINE_HEIGHT = 1;
const DEFAULT_FONT_SIZE = 14;
const DEFAULT_OVERFLOW: CanvasTextOverflowMode = 'visible';
const DEFAULT_TEXT_OVERFLOW: CanvasTextOverflow = 'clip';
const DEFAULT_ELLIPSIS = '…';
const FONT_SIZE_REGEX = /(\d*\.?\d+)px/;
const CACHE_SEPARATOR = '|';
const MIN_WRAP_WIDTH = 30;
const PRECISE_WRAP_FONT_SUFFIX = `${CACHE_SEPARATOR}precise-wrap`;
const TEXT_WIDTH_CACHE_LIMIT = 10_000;
const SPLIT_LINES_CACHE_LIMIT = 5_000;

// Hyper wrapping быстрый, но на emoji/combining/ZWJ и fallback glyphs чаще
// расходится с реальным canvas width. Термины: combining mark — знак к
// предыдущей букве (café); ZWJ — невидимая склейка emoji; variation selector —
// выбор emoji/text вида; regional indicator — часть флага; skin tone modifier —
// тон кожи emoji; surrogate pair — два UTF-16 code unit для одного символа вне BMP.
const RISKY_WRAP_TEXT_REGEX =
  /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F\u200D\uFE0E\uFE0F\u2600-\u27BF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/;

const fontMetricsCache = new Map<
  string,
  { fontSize: number; lineHeightPx: number }
>();
const textWidthCache = new Map<string, number>();
const splitLinesCache = new Map<string, string[]>();

// Разделяемый ctx для измерений вне paint (авто-тултип в hover-пути).
// measureText не зависит от DPR-трансформаций рендерного ctx, поэтому
// offscreen-канвас дает те же значения при том же ctx.font.
let measureCtx: CanvasRenderingContext2D | null = null;

function getMeasureContext(): CanvasRenderingContext2D | null {
  if (measureCtx === null && typeof document !== 'undefined') {
    measureCtx = document.createElement('canvas').getContext('2d');
  }
  return measureCtx;
}

function setBoundedCacheValue<T>(
  cache: Map<string, T>,
  key: string,
  value: T,
  limit: number
): void {
  // Ключи содержат текст ячейки, поэтому ограничиваем module-level cache для
  // больших таблиц с множеством уникальных значений.
  if (cache.size >= limit) {
    cache.clear();
  }

  cache.set(key, value);
}

export type CanvasTextOverflowMode = 'visible' | 'hidden';

/**
 * Авто-тултип для CanvasText: показывается ТОЛЬКО когда текст реально обрезан в
 * многоточие (textOverflow: 'ellipsis'). По умолчанию текст = собственный текст
 * ноды; можно переопределить строкой/трансформ-функцией либо скрыть (enabled: false).
 * Пропсы оформления — те же, что у обычного tooltip (CanvasNodeTooltipConfig).
 */
export type CanvasTextAutoTooltip =
  | boolean
  | (CanvasNodeTooltipProps & {
      /** @default true — скрыть можно через false */
      enabled?: boolean;
      /**
       * Переопределение/трансформация текста тултипа. По умолчанию — собственный
       * текст ноды. Вернуть `null` — не показывать.
       */
      text?: string | ((fullText: string) => string | null);
      mouseEnterDelay?: number;
      mouseLeaveDelay?: number;
    });

export interface CanvasTextOptions {
  font?: string;
  fontSize?: number;
  lineHeightPx?: number;
  color?: string;
  wordWrap?: boolean;
  lineHeight?: number;
  overflow?: CanvasTextOverflowMode;
  textOverflow?: CanvasTextOverflow;
  ellipsis?: string;
  maxLines?: number;
  autoTooltip?: CanvasTextAutoTooltip;
}

function buildFontMetricsKey(
  font: string,
  lineHeight: number,
  fontSize: number | undefined,
  lineHeightPx: number | undefined
): string {
  return `${font}${CACHE_SEPARATOR}${lineHeight}${CACHE_SEPARATOR}${
    fontSize ?? ''
  }${CACHE_SEPARATOR}${lineHeightPx ?? ''}`;
}

function buildTextWidthKey(font: string, text: string): string {
  return `${font}${CACHE_SEPARATOR}${text}`;
}

function buildTextMeasureKey(
  font: string,
  text: string,
  lineHeight: number
): string {
  return `${font}${CACHE_SEPARATOR}${text}${CACHE_SEPARATOR}${lineHeight}`;
}

function buildSplitLinesKey(
  font: string,
  text: string,
  wrapWidth: number,
  hyperWrappingAllowed: boolean
): string {
  return `${font}${CACHE_SEPARATOR}${text}${CACHE_SEPARATOR}${wrapWidth}${CACHE_SEPARATOR}${hyperWrappingAllowed}`;
}

export class CanvasText extends CanvasNode {
  text: string;

  font: string = DEFAULT_FONT;

  color: string = DEFAULT_COLOR;

  fontSize: number | undefined;

  lineHeightPx: number | undefined;

  wordWrap = false;

  lineHeight: number = DEFAULT_LINE_HEIGHT;

  overflow: CanvasTextOverflowMode = DEFAULT_OVERFLOW;

  textOverflow: CanvasTextOverflow = DEFAULT_TEXT_OVERFLOW;

  ellipsis: string = DEFAULT_ELLIPSIS;

  maxLines: number | undefined;

  autoTooltip: CanvasTextAutoTooltip | undefined;

  private lastMeasureKey = '';

  private cachedLines: string[] | null = null;

  private cachedLinesKey = '';

  private lastPaintedTextWidth = 0;

  constructor(id: string, text: string, options?: CanvasTextOptions) {
    super(id);
    this.text = text;
    if (options) {
      if (options.font) this.font = options.font;
      if (options.fontSize !== undefined) this.fontSize = options.fontSize;
      if (options.lineHeightPx !== undefined)
        this.lineHeightPx = options.lineHeightPx;
      if (options.color) this.color = options.color;
      if (options.wordWrap !== undefined) this.wordWrap = options.wordWrap;
      if (options.lineHeight !== undefined) {
        this.lineHeight = options.lineHeight;
        // Явный lineHeight задает множитель и важнее lineHeightPx из темы.
        this.lineHeightPx = undefined;
      }
      if (options.overflow !== undefined) this.overflow = options.overflow;
      if (options.textOverflow !== undefined)
        this.textOverflow = options.textOverflow;
      if (options.ellipsis !== undefined) this.ellipsis = options.ellipsis;
      if (options.maxLines !== undefined) this.maxLines = options.maxLines;
      if (options.autoTooltip !== undefined)
        this.autoTooltip = options.autoTooltip;
    }
  }

  measure(ctx: CanvasRenderingContext2D) {
    const { font, text, wordWrap, lineHeight, rect, fontSize } = this;
    const { lineHeightPx } = getCachedFontMetrics(
      font,
      lineHeight,
      fontSize,
      this.lineHeightPx
    );

    if (this.isSingleLineClampEnabled()) {
      this.measureSingleLineClamp(ctx, font, text, lineHeightPx, rect);
    } else if (wordWrap) {
      this.measureWordWrap(ctx, font, text, lineHeightPx, rect);
    } else {
      this.measureSingleLine(ctx, font, text, lineHeightPx, rect);
    }
  }

  private measureWordWrap(
    ctx: CanvasRenderingContext2D,
    font: string,
    text: string,
    lineHeightPx: number,
    rect: { width: number; height: number }
  ) {
    const wrapWidth = resolveWrapWidth(this.style.width, rect.width);

    if (wrapWidth > 0) {
      const resolvedMaxLines = this.getResolvedMaxLines();
      const shouldUsePreciseWrap =
        this.overflow === 'hidden' &&
        resolvedMaxLines !== undefined &&
        resolvedMaxLines > 1 &&
        hasRiskyTextForWrap(text);
      const hyperWrappingAllowed = !shouldUsePreciseWrap;
      const linesKey = buildSplitLinesKey(
        font,
        text,
        wrapWidth,
        hyperWrappingAllowed
      );
      if (linesKey !== this.cachedLinesKey || this.cachedLines === null) {
        this.cachedLines = getSplitLines(
          ctx,
          text,
          font,
          wrapWidth,
          hyperWrappingAllowed
        );
        this.cachedLinesKey = linesKey;
      }
      rect.width = wrapWidth;
      // В wordWrap + maxLines layout должен получить высоту только видимых строк:
      // так bounds, clip и hit-test остаются синхронизированы с отрисовкой.
      const lineCount =
        resolvedMaxLines !== undefined && this.overflow === 'hidden'
          ? Math.min(this.cachedLines.length, resolvedMaxLines)
          : this.cachedLines.length;
      rect.height = lineCount * lineHeightPx;
    } else {
      rect.width = getCachedTextWidth(ctx, text, font);
      rect.height = lineHeightPx;
      this.cachedLines = null;
    }
  }

  private measureSingleLineClamp(
    ctx: CanvasRenderingContext2D,
    font: string,
    text: string,
    lineHeightPx: number,
    rect: { width: number; height: number }
  ) {
    const clampWidth = resolveWrapWidth(this.style.width, rect.width);

    if (clampWidth > 0) {
      rect.width = clampWidth;
      rect.height = lineHeightPx;
    } else {
      rect.width = getCachedTextWidth(ctx, text, font);
      rect.height = lineHeightPx;
    }

    // maxLines=1 намеренно идет через single-line paint: так текст не режется
    // по word-wrap точке и заполняет доступную ширину до ellipsis.
    this.cachedLines = null;
  }

  private measureSingleLine(
    ctx: CanvasRenderingContext2D,
    font: string,
    text: string,
    lineHeightPx: number,
    rect: { width: number; height: number }
  ) {
    const measureKey = buildTextMeasureKey(font, text, lineHeightPx);
    if (measureKey !== this.lastMeasureKey) {
      this.lastMeasureKey = measureKey;
      rect.width = getCachedTextWidth(ctx, text, font);
      rect.height = lineHeightPx;
    }
    this.cachedLines = null;
  }

  protected getLastPaintedTextWidth(): number {
    // Наследники вроде CanvasLink используют не исходную ширину строки,
    // а ширину текста, который действительно ушел в DrawBatcher.
    return this.lastPaintedTextWidth;
  }

  /**
   * Эффективный конфиг тултипа для hover-контроллера.
   * Явный `tooltip` (always-on) приоритетнее. Иначе — авто-тултип: показываем
   * ТОЛЬКО когда текст реально обрезан в многоточие.
   *
   * Обрезанность вычисляется лениво в момент hover, а не читается из paint:
   * canvas tree пересоздается на каждый draw, и hover диспатчится ДО paint
   * свежего дерева — флаг, выставленный в paint, здесь всегда был бы false.
   */
  override getTooltip(): CanvasNodeTooltipConfig | undefined {
    if (this.tooltip) {
      return this.tooltip;
    }

    const auto = this.autoTooltip;
    if (!auto) {
      return undefined;
    }

    const cfg = typeof auto === 'object' ? auto : undefined;
    const enabled = cfg ? cfg.enabled !== false : auto === true;
    if (!enabled || !this.computeIsTruncated()) {
      return undefined;
    }

    let text: string | null = this.text;
    if (cfg && typeof cfg.text === 'function') {
      text = cfg.text(this.text);
    } else if (cfg && typeof cfg.text === 'string') {
      text = cfg.text;
    }
    if (text === null || text === '') {
      return undefined;
    }

    if (!cfg) {
      return text;
    }

    const { enabled: _enabled, text: _text, ...tooltipProps } = cfg;
    return { ...tooltipProps, text };
  }

  /**
   * Лениво определяет, обрезан ли текст в многоточие при текущем rect.
   * Повторяет выбор ветки paint: wrapped-строки — по didClamp, одиночная
   * строка — по didTruncate. К моменту вызова layout уже прошел (rect
   * финальный), а расчеты идут через общие кэши textOverflow, поэтому после
   * первого paint это lookup по ключу, а не повторное измерение.
   */
  private computeIsTruncated(): boolean {
    if (this.overflow !== 'hidden' || this.textOverflow !== 'ellipsis') {
      return false;
    }

    const ctx = getMeasureContext();
    if (!ctx) {
      return false;
    }

    const lines = this.cachedLines;
    if (lines !== null && lines.length > 0) {
      const resolvedMaxLines = this.getResolvedMaxLines();
      if (resolvedMaxLines === undefined) {
        return false;
      }
      return resolveWrappedOverflowText({
        ctx,
        lines,
        font: this.font,
        maxWidth: this.rect.width,
        maxLines: resolvedMaxLines,
        textOverflow: this.textOverflow,
        ellipsis: this.ellipsis,
      }).didClamp;
    }

    return resolveOverflowText({
      ctx,
      text: this.text,
      font: this.font,
      maxWidth: this.rect.width,
      textOverflow: this.textOverflow,
      ellipsis: this.ellipsis,
    }).didTruncate;
  }

  private getResolvedMaxLines(): number | undefined {
    if (
      this.maxLines === undefined ||
      !Number.isFinite(this.maxLines) ||
      this.maxLines <= 0
    ) {
      return undefined;
    }

    const normalizedMaxLines = Math.floor(this.maxLines);

    return normalizedMaxLines > 0 ? normalizedMaxLines : undefined;
  }

  private isSingleLineClampEnabled(): boolean {
    return (
      this.wordWrap &&
      this.overflow === 'hidden' &&
      this.getResolvedMaxLines() === 1
    );
  }

  private isMultilineClampEnabled(): boolean {
    return (
      this.wordWrap &&
      this.overflow === 'hidden' &&
      this.getResolvedMaxLines() !== undefined
    );
  }

  onPaint(batcher: DrawBatcher, ctx: CanvasRenderingContext2D) {
    const { font, text, rect, color } = this;
    const lines = this.cachedLines;

    if (lines !== null && lines.length > 0) {
      this.paintMultiline(batcher, ctx, font, color, lines, rect);
    } else {
      this.paintSingleLine(batcher, ctx, text, font, color, rect);
    }
  }

  private paintMultiline(
    batcher: DrawBatcher,
    ctx: CanvasRenderingContext2D,
    font: string,
    color: string,
    lines: string[],
    rect: { x: number; y: number; width: number; height: number }
  ) {
    const { lineHeightPx } = getCachedFontMetrics(
      font,
      this.lineHeight,
      this.fontSize,
      this.lineHeightPx
    );
    const resolvedMaxLines = this.getResolvedMaxLines();
    const visibleLines =
      this.isMultilineClampEnabled() && resolvedMaxLines !== undefined
        ? resolveWrappedOverflowText({
            ctx,
            lines,
            font,
            maxWidth: rect.width,
            maxLines: resolvedMaxLines,
            textOverflow: this.textOverflow,
            ellipsis: this.ellipsis,
          }).lines
        : lines;
    const contentHeight = visibleLines.length * lineHeightPx;
    let y = rect.y + Math.max(0, (rect.height - contentHeight) * 0.5);
    this.lastPaintedTextWidth = 0;

    for (let i = 0, len = visibleLines.length; i < len; i += 1) {
      const v = visibleLines[i];
      if (v !== undefined) {
        if (this.overflow === 'hidden') {
          // При maxLines высота измеряется по видимым строкам, а clip остается
          // защитой от overhang и слишком узких bounds.
          batcher.fillTextClipped(
            v,
            rect.x,
            y,
            font,
            color,
            rect,
            'top',
            'left'
          );
        } else {
          batcher.fillText(v, rect.x, y, font, color, 'top');
        }
        y += lineHeightPx;
      }
    }
  }

  private paintSingleLine(
    batcher: DrawBatcher,
    ctx: CanvasRenderingContext2D,
    text: string,
    font: string,
    color: string,
    rect: { x: number; y: number; width: number; height: number }
  ) {
    const textY = rect.y + rect.height * 0.5;

    if (this.overflow === 'hidden') {
      // Layout уже назначил этой ноде финальный rect, поэтому ellipsis считаем по rect.width.
      // Так визуальная область текста остается согласованной с bounds для hit-test.
      const resolvedText = resolveOverflowText({
        ctx,
        text,
        font,
        maxWidth: rect.width,
        textOverflow: this.textOverflow,
        ellipsis: this.ellipsis,
      });

      this.lastPaintedTextWidth = Math.min(
        resolvedText.width,
        Math.max(0, rect.width)
      );

      if (resolvedText.text.length === 0) {
        // При слишком узком rect не помещается даже ellipsis, поэтому не
        // отправляем в batcher пустую команду отрисовки.
        return;
      }

      batcher.fillTextClipped(
        resolvedText.text,
        rect.x,
        textY,
        font,
        color,
        rect,
        'middle',
        'left'
      );
      return;
    }

    // В visible-режиме сохраняем старое поведение: текст рисуется целиком,
    // а lastPaintedTextWidth нужен только для совместимости с CanvasLink.
    this.lastPaintedTextWidth = getCachedTextWidth(ctx, text, font);
    batcher.fillText(text, rect.x, textY, font, color, 'middle');
  }
}

function getCachedFontMetrics(
  font: string,
  lineHeight: number,
  fontSizeFromTheme: number | undefined,
  lineHeightPxFromTheme: number | undefined
): { fontSize: number; lineHeightPx: number } {
  const key = buildFontMetricsKey(
    font,
    lineHeight,
    fontSizeFromTheme,
    lineHeightPxFromTheme
  );
  let metrics = fontMetricsCache.get(key);
  if (metrics === undefined) {
    const match = FONT_SIZE_REGEX.exec(font);
    const fontSize =
      fontSizeFromTheme ??
      (match && match[1] !== undefined ? Number(match[1]) : DEFAULT_FONT_SIZE);
    metrics = {
      fontSize,
      lineHeightPx: lineHeightPxFromTheme ?? fontSize * lineHeight,
    };
    fontMetricsCache.set(key, metrics);
  }
  return metrics;
}

function getCachedTextWidth(
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string
): number {
  const key = buildTextWidthKey(font, text);
  let width = textWidthCache.get(key);
  if (width === undefined) {
    ctx.font = font;
    width = ctx.measureText(text).width;
    setBoundedCacheValue(textWidthCache, key, width, TEXT_WIDTH_CACHE_LIMIT);
  }
  return width;
}

function getSplitLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string,
  wrapWidth: number,
  hyperWrappingAllowed: boolean
): string[] {
  ctx.font = font;
  const normalizedWrapWidth = Math.max(wrapWidth, MIN_WRAP_WIDTH);
  const cacheKey = buildSplitLinesKey(
    font,
    text,
    normalizedWrapWidth,
    hyperWrappingAllowed
  );

  let lines = splitLinesCache.get(cacheKey);
  if (!lines) {
    // canvas-hypertxt кеширует по text/font/width и не учитывает hyperWrappingAllowed.
    // Для precise wrapping даем отдельный font key, чтобы не взять старый hyper-wrapped результат.
    const splitFontKey = hyperWrappingAllowed
      ? font
      : `${font}${PRECISE_WRAP_FONT_SUFFIX}`;

    lines = normalizeSplitResult(
      split(ctx, text, splitFontKey, normalizedWrapWidth, hyperWrappingAllowed)
    );
    setBoundedCacheValue(
      splitLinesCache,
      cacheKey,
      lines,
      SPLIT_LINES_CACHE_LIMIT
    );
  }

  return lines;
}

function resolveWrapWidth(
  styleWidth: number | string | undefined,
  rectWidth: number
): number {
  if (typeof styleWidth === 'number' && styleWidth > 0) {
    return styleWidth;
  }
  return rectWidth > 0 ? rectWidth : 0;
}

function hasRiskyTextForWrap(text: string): boolean {
  return RISKY_WRAP_TEXT_REGEX.test(text);
}

function normalizeSplitResult(result: ReturnType<typeof split>): string[] {
  if (Array.isArray(result)) {
    return result;
  }
  const resultObj = result as { lines?: string[] };
  if (resultObj.lines && Array.isArray(resultObj.lines)) {
    return resultObj.lines;
  }
  return [];
}

export function invalidateTextCache(): void {
  fontMetricsCache.clear();
  textWidthCache.clear();
  splitLinesCache.clear();
  invalidateOverflowTextCache();
}
