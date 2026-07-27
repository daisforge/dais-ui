/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
export type TextBaseline =
  | 'top'
  | 'middle'
  | 'bottom'
  | 'alphabetic'
  | 'hanging'
  | 'ideographic';
export type TextAlign = 'left' | 'right' | 'center' | 'start' | 'end';

interface BaseCommand {
  zIndex: number;
  order: number;
}

interface FillRectCommand extends BaseCommand {
  type: 'fillRect';
  x: number;
  y: number;
  width: number;
  height: number;
  fillStyle: string;
}

interface StrokeRectCommand extends BaseCommand {
  type: 'strokeRect';
  x: number;
  y: number;
  width: number;
  height: number;
  strokeStyle: string;
  lineWidth: number;
}

interface FillTextCommand extends BaseCommand {
  type: 'fillText';
  text: string;
  x: number;
  y: number;
  font: string;
  fillStyle: string;
  textBaseline: TextBaseline;
  textAlign?: TextAlign;
}

interface FillTextClippedCommand extends BaseCommand {
  type: 'fillTextClipped';
  text: string;
  x: number;
  y: number;
  font: string;
  fillStyle: string;
  textBaseline: TextBaseline;
  textAlign?: TextAlign;
  clipX: number;
  clipY: number;
  clipWidth: number;
  clipHeight: number;
}

interface DrawImageCommand extends BaseCommand {
  type: 'drawImage';
  image: CanvasImageSource;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface RoundedRectCommand extends BaseCommand {
  type: 'roundedRect';
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
}

export interface GradientStop {
  offset: number;
  color: string;
}

interface LinearGradientRectCommand extends BaseCommand {
  type: 'linearGradientRect';
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
  gradientStops: GradientStop[];
  angle: number;
}

/** Контекст анимации для shimmer и других эффектов */
export interface AnimationContext {
  /** Время текущего кадра в миллисекундах (из Glide DrawArgs.frameTime) */
  frameTime?: number;
  /** Функция для запроса следующего кадра анимации */
  requestAnimationFrame?: () => void;
}

interface CustomCommand extends BaseCommand {
  type: 'custom';
  fn: (ctx: CanvasRenderingContext2D) => void;
}

export type DrawCommand =
  | FillRectCommand
  | StrokeRectCommand
  | FillTextCommand
  | FillTextClippedCommand
  | DrawImageCommand
  | RoundedRectCommand
  | CustomCommand
  | LinearGradientRectCommand;

function compareCommands(a: DrawCommand, b: DrawCommand): number {
  if (a.zIndex !== b.zIndex) {
    return a.zIndex - b.zIndex;
  }

  // При одинаковом zIndex сохраняем порядок JSX/paint. Тип команды не должен
  // поднимать текст над фоном или иконкой вопреки дереву canvas-ноды.
  return a.order - b.order;
}

const hasNativeRoundRect =
  typeof Path2D !== 'undefined' &&
  typeof CanvasRenderingContext2D.prototype.roundRect === 'function';

export class DrawBatcher {
  private commands: DrawCommand[] = [];

  private orderCounter = 0;

  private currentZIndex = 0;

  /** Контекст анимации (устанавливается перед render, читается примитивами) */
  private animationContext?: AnimationContext;

  /** Устанавливает контекст анимации для текущего цикла рендеринга */
  setAnimationContext(context?: AnimationContext): this {
    this.animationContext = context;
    return this;
  }

  /** Возвращает текущий контекст анимации */
  getAnimationContext(): AnimationContext | undefined {
    return this.animationContext;
  }

  setZIndex(zIndex: number): this {
    this.currentZIndex = zIndex;
    return this;
  }

  getZIndex(): number {
    return this.currentZIndex;
  }

  pushZIndex(delta = 1): this {
    this.currentZIndex += delta;
    return this;
  }

  popZIndex(delta = 1): this {
    this.currentZIndex -= delta;
    return this;
  }

  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    fillStyle: string
  ): this {
    this.commands.push({
      type: 'fillRect',
      x,
      y,
      width,
      height,
      fillStyle,
      zIndex: this.currentZIndex,
      order: this.orderCounter++,
    });
    return this;
  }

  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    strokeStyle: string,
    lineWidth = 1
  ): this {
    this.commands.push({
      type: 'strokeRect',
      x,
      y,
      width,
      height,
      strokeStyle,
      lineWidth,
      zIndex: this.currentZIndex,
      order: this.orderCounter++,
    });
    return this;
  }

  fillText(
    text: string,
    x: number,
    y: number,
    font: string,
    fillStyle: string,
    textBaseline: TextBaseline = 'middle',
    textAlign?: TextAlign
  ): this {
    this.commands.push({
      type: 'fillText',
      text,
      x,
      y,
      font,
      fillStyle,
      textBaseline,
      textAlign,
      zIndex: this.currentZIndex,
      order: this.orderCounter++,
    });
    return this;
  }

  fillTextClipped(
    text: string,
    x: number,
    y: number,
    font: string,
    fillStyle: string,
    clipRect: { x: number; y: number; width: number; height: number },
    textBaseline: TextBaseline = 'middle',
    textAlign?: TextAlign
  ): this {
    // Команда хранит clipRect вместе с текстом, чтобы primitive не рисовал
    // напрямую в canvas и не ломал общий порядок batch rendering.
    this.commands.push({
      type: 'fillTextClipped',
      text,
      x,
      y,
      font,
      fillStyle,
      textBaseline,
      textAlign,
      clipX: clipRect.x,
      clipY: clipRect.y,
      clipWidth: clipRect.width,
      clipHeight: clipRect.height,
      zIndex: this.currentZIndex,
      order: this.orderCounter++,
    });

    return this;
  }

  drawImage(
    image: CanvasImageSource,
    x: number,
    y: number,
    width: number,
    height: number
  ): this {
    this.commands.push({
      type: 'drawImage',
      image,
      x,
      y,
      width,
      height,
      zIndex: this.currentZIndex,
      order: this.orderCounter++,
    });
    return this;
  }

  roundedRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    options?: {
      fillStyle?: string;
      strokeStyle?: string;
      lineWidth?: number;
    }
  ): this {
    this.commands.push({
      type: 'roundedRect',
      x,
      y,
      width,
      height,
      radius,
      fillStyle: options?.fillStyle,
      strokeStyle: options?.strokeStyle,
      lineWidth: options?.lineWidth,
      zIndex: this.currentZIndex,
      order: this.orderCounter++,
    });
    return this;
  }

  linearGradientRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    gradientStops: GradientStop[],
    angle: number = 90
  ): this {
    this.commands.push({
      type: 'linearGradientRect',
      x,
      y,
      width,
      height,
      radius,
      gradientStops,
      angle,
      zIndex: this.currentZIndex,
      order: this.orderCounter++,
    });
    return this;
  }

  custom(fn: (ctx: CanvasRenderingContext2D) => void): this {
    this.commands.push({
      type: 'custom',
      fn,
      zIndex: this.currentZIndex,
      order: this.orderCounter++,
    });
    return this;
  }

  clear(): this {
    this.commands.length = 0;
    this.orderCounter = 0;
    this.currentZIndex = 0;
    this.animationContext = undefined;
    return this;
  }

  get commandCount(): number {
    return this.commands.length;
  }

  flush(ctx: CanvasRenderingContext2D): void {
    const { commands } = this;
    const len = commands.length;

    if (len === 0) {
      return;
    }

    // Batching остается: команды все еще flush-ятся пачкой. Но сортировка больше
    // не группирует по типу/state key, чтобы не менять visual stacking.
    commands.sort(compareCommands);

    let currentFillStyle = '';
    let currentStrokeStyle = '';
    let currentLineWidth = -1;
    let currentFont = '';
    let currentTextBaseline: TextBaseline | '' = '';
    let currentTextAlign: TextAlign | '' = '';

    for (let i = 0; i < len; i++) {
      const cmd = commands[i];
      if (cmd !== undefined) {
        switch (cmd.type) {
          case 'fillRect':
            if (currentFillStyle !== cmd.fillStyle) {
              ctx.fillStyle = cmd.fillStyle;
              currentFillStyle = cmd.fillStyle;
            }
            ctx.fillRect(cmd.x, cmd.y, cmd.width, cmd.height);
            break;

          case 'strokeRect':
            if (currentStrokeStyle !== cmd.strokeStyle) {
              ctx.strokeStyle = cmd.strokeStyle;
              currentStrokeStyle = cmd.strokeStyle;
            }
            if (currentLineWidth !== cmd.lineWidth) {
              ctx.lineWidth = cmd.lineWidth;
              currentLineWidth = cmd.lineWidth;
            }
            ctx.strokeRect(cmd.x, cmd.y, cmd.width, cmd.height);
            break;

          case 'fillText':
            if (currentFont !== cmd.font) {
              ctx.font = cmd.font;
              currentFont = cmd.font;
            }
            if (currentFillStyle !== cmd.fillStyle) {
              ctx.fillStyle = cmd.fillStyle;
              currentFillStyle = cmd.fillStyle;
            }
            if (currentTextBaseline !== cmd.textBaseline) {
              ctx.textBaseline = cmd.textBaseline;
              currentTextBaseline = cmd.textBaseline;
            }
            if (cmd.textAlign && currentTextAlign !== cmd.textAlign) {
              ctx.textAlign = cmd.textAlign;
              currentTextAlign = cmd.textAlign;
            }
            ctx.fillText(cmd.text, cmd.x, cmd.y);
            break;

          case 'fillTextClipped':
            if (currentFont !== cmd.font) {
              ctx.font = cmd.font;
              currentFont = cmd.font;
            }
            if (currentFillStyle !== cmd.fillStyle) {
              ctx.fillStyle = cmd.fillStyle;
              currentFillStyle = cmd.fillStyle;
            }
            if (currentTextBaseline !== cmd.textBaseline) {
              ctx.textBaseline = cmd.textBaseline;
              currentTextBaseline = cmd.textBaseline;
            }
            if (cmd.textAlign && currentTextAlign !== cmd.textAlign) {
              ctx.textAlign = cmd.textAlign;
              currentTextAlign = cmd.textAlign;
            }
            this.executeFillTextClipped(ctx, cmd);
            break;

          case 'drawImage':
            ctx.drawImage(cmd.image, cmd.x, cmd.y, cmd.width, cmd.height);
            break;

          case 'roundedRect':
            this.executeRoundedRect(ctx, cmd);
            if (cmd.fillStyle) currentFillStyle = cmd.fillStyle;
            if (cmd.strokeStyle) currentStrokeStyle = cmd.strokeStyle;
            if (cmd.lineWidth !== undefined) currentLineWidth = cmd.lineWidth;
            break;

          case 'linearGradientRect':
            this.executeLinearGradientRect(ctx, cmd);
            break;

          case 'custom':
            cmd.fn(ctx);
            currentFillStyle = '';
            currentStrokeStyle = '';
            currentLineWidth = -1;
            currentFont = '';
            currentTextBaseline = '';
            currentTextAlign = '';
            break;
        }
      }
    }

    this.clear();
  }

  /**
   * Выполняет отрисовку прямоугольника с линейным градиентом.
   *
   * Конвертирует CSS-подобный linear-gradient в Canvas API.
   * Основная сложность — правильно рассчитать координаты линии градиента
   * с учётом угла и размеров прямоугольника.
   *
   * @param ctx - Canvas 2D контекст для отрисовки
   * @param cmd - Команда с параметрами градиентного прямоугольника
   */
  private executeLinearGradientRect(
    ctx: CanvasRenderingContext2D,
    cmd: LinearGradientRectCommand
  ): void {
    const { x, y, width, height, radius, gradientStops, angle } = cmd;

    // Конвертация угла из CSS в Canvas:
    // CSS: 0deg = вверх, 90deg = вправо (по часовой от вертикали)
    // Canvas: 0rad = вправо (математическая система)
    // Смещаем на -90° и переводим в радианы
    const angleRad = ((angle - 90) * Math.PI) / 180;

    // Единичный вектор направления градиента
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);

    // Центр прямоугольника — через него проходит линия градиента
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const cx = x + halfWidth;
    const cy = y + halfHeight;

    // Длина линии градиента по формуле W3C:
    // Гарантирует покрытие всего прямоугольника от угла до угла
    const gradientLength = Math.abs(cos * width) + Math.abs(sin * height);
    const halfLength = gradientLength / 2;

    // Координаты начала (offset=0) и конца (offset=1) градиента
    const x0 = cx - cos * halfLength;
    const y0 = cy - sin * halfLength;
    const x1 = cx + cos * halfLength;
    const y1 = cy + sin * halfLength;

    // Создаём Canvas-градиент и добавляем цветовые остановки
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    for (const stop of gradientStops) {
      gradient.addColorStop(stop.offset, stop.color);
    }

    ctx.fillStyle = gradient;

    // Отрисовка: с скруглением или без
    if (radius > 0) {
      if (hasNativeRoundRect) {
        // Нативный roundRect (Chrome 99+, Firefox 112+, Safari 15.4+)
        ctx.beginPath();
        ctx.roundRect(x, y, width, height, radius);
        ctx.fill();
      } else {
        // Fallback: рисуем скруглённый прямоугольник через quadraticCurveTo
        const r = radius;
        const right = x + width;
        const bottom = y + height;

        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(right - r, y);
        ctx.quadraticCurveTo(right, y, right, y + r);
        ctx.lineTo(right, bottom - r);
        ctx.quadraticCurveTo(right, bottom, right - r, bottom);
        ctx.lineTo(x + r, bottom);
        ctx.quadraticCurveTo(x, bottom, x, bottom - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        ctx.fill();
      }
    } else {
      ctx.fillRect(x, y, width, height);
    }
  }

  private executeFillTextClipped(
    ctx: CanvasRenderingContext2D,
    cmd: FillTextClippedCommand
  ): void {
    if (cmd.clipWidth <= 0 || cmd.clipHeight <= 0 || cmd.text.length === 0) {
      return;
    }

    ctx.save();
    // save/restore изолируют clip: без restore все последующие команды
    // тоже оказались бы обрезаны этим прямоугольником.
    // Clip остается нужен даже после ellipsis: метрики шрифта
    // не всегда учитывают overhang и дробные пиксели.
    ctx.beginPath();
    ctx.rect(cmd.clipX, cmd.clipY, cmd.clipWidth, cmd.clipHeight);
    ctx.clip();
    ctx.fillText(cmd.text, cmd.x, cmd.y);
    ctx.restore();
  }

  private executeRoundedRect(
    ctx: CanvasRenderingContext2D,
    cmd: RoundedRectCommand
  ): void {
    const { x, y, width, height, radius, fillStyle, strokeStyle, lineWidth } =
      cmd;

    if (hasNativeRoundRect) {
      ctx.beginPath();
      ctx.roundRect(x, y, width, height, radius);
    } else {
      const r = radius;
      const right = x + width;
      const bottom = y + height;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(right - r, y);
      ctx.quadraticCurveTo(right, y, right, y + r);
      ctx.lineTo(right, bottom - r);
      ctx.quadraticCurveTo(right, bottom, right - r, bottom);
      ctx.lineTo(x + r, bottom);
      ctx.quadraticCurveTo(x, bottom, x, bottom - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }

    if (strokeStyle) {
      ctx.strokeStyle = strokeStyle;
      if (lineWidth !== undefined) {
        ctx.lineWidth = lineWidth;
      }
      ctx.stroke();
    }
  }
}

export const defaultBatcher = new DrawBatcher();
