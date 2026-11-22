import type { DrawnFrame, Rectangle } from '@daisforge/glide-data-grid';

export type { DrawnFrame, Rectangle };

/** Холст glide: тело с ячейками или шапка. */
export type CanvasName = 'body' | 'header';

/** Размер холста: CSS px и масштаб устройства. */
export interface CanvasSize {
  name: CanvasName;
  width: number;
  height: number;
  dpr: number;
}

/** Расхождение одного холста между частичным кадром и кадром целиком. */
export interface CanvasDiff {
  name: CanvasName;
  /** Пикселей, отличающихся заметно: не шум растеризации. */
  pixels: number;
  /**
   * Шум растеризации: пиксели с малой разницей оттенка (стыки кусков длинной
   * линии, сглаживание углов при другом порядке заливок). В итог не входит,
   * пока его мало; много таких пикселей считается расхождением.
   */
  noise: number;
  /** Описывающий прямоугольник расхождения в px холста, null при совпадении. */
  bbox: Rectangle | null;
  /** PNG как data URL, только при расхождении. */
  partial?: string;
  full?: string;
  diff?: string;
}

export interface CompareResult {
  /** Заметных расхождений нет (шум растеризации не считается). */
  equal: boolean;
  canvases: CanvasDiff[];
  /** Кадр, который дала полная перерисовка: должен быть full. */
  repaintFrame: DrawnFrame | undefined;
}

/**
 * API страницы для тестов перерисовки (window.tableCanvasRedraw). Ставит декоратор
 * тестовой сборки Storybook, см. .storybook/redrawPageApi.ts.
 */
export interface RedrawPageApi {
  /** Кадры, накопленные с последнего reset. */
  frames(): DrawnFrame[];
  reset(): void;
  /** performance.now() последнего кадра, 0 если кадров не было. */
  lastFrameAt(): number;
  /**
   * Экранный прямоугольник ячейки в координатах окна (строка -1 шапка).
   * undefined, пока грид не измерен или ячейка вне таблицы.
   */
  bounds(col: number, row: number): Rectangle | undefined;
  /** Полная перерисовка всех таблиц истории; возвращает их число. */
  repaint(): number;
  /** Снять холсты, перерисовать целиком, снять снова и сравнить попиксельно. */
  compare(): Promise<CompareResult>;
  /** Испортить один пиксель холста (CSS px): проверка чувствительности сравнения. */
  corrupt(name: CanvasName, x: number, y: number): void;
  canvasSizes(): CanvasSize[];
}

declare global {
  interface Window {
    tableCanvasRedraw?: RedrawPageApi;
  }
}
