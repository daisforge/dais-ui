import fs from 'node:fs';

import { expect, type Page, test, type TestInfo } from 'playwright/test';

import type { CompareResult, DrawnFrame, Rectangle } from './page-api';

export type Modifier = 'Shift' | 'Control' | 'Alt' | 'Meta';
export type Point = { x: number; y: number };
/** Ячейка в координатах данных: колонка без служебных, строка; -1 это шапка. */
export type Cell = readonly [col: number, row: number];

/** Что ждём от кадров одного шага. */
export interface FrameExpectation {
  /** Допустимые виды кадров; кадр другого вида значит откат на лишнюю работу. */
  kinds?: DrawnFrame['kind'][];
  /** Шапка перерисована хотя бы в одном кадре (true) или ни в одном (false). */
  header?: boolean;
  /** Доля площади тела у самого большого кадра шага, не больше (0..1). */
  maxShare?: number;
  /** Кадров не меньше одного; false, если шаг может ничего не рисовать. */
  some?: boolean;
}

/** Пауза без новых кадров, после которой считаем, что таблица успокоилась. */
const QUIET_MS = 200;
const SETTLE_TIMEOUT_MS = 5000;

const pngBody = (dataUrl: string) =>
  Buffer.from(dataUrl.slice(dataUrl.indexOf(',') + 1), 'base64');

/**
 * Таблица в открытой истории: действия настоящей мышью и клавиатурой и
 * сверка частичного кадра с полным через window.tableCanvasRedraw.
 */
export class GridPage {
  /** Служебных колонок слева (нумерация, чекбокс): сдвиг индексов колонок glide. */
  private serviceColumns = 0;

  constructor(
    readonly page: Page,
    private readonly info: TestInfo,
    readonly checkEachStep: boolean,
  ) {}

  /** Открыть историю по id и дождаться измеренного грида. */
  async open(storyId: string, options: { serviceColumns?: number } = {}) {
    this.serviceColumns = options.serviceColumns ?? 0;
    await this.page.goto(
      `/iframe.html?id=${encodeURIComponent(storyId)}&viewMode=story`,
    );
    await this.page.waitForFunction(
      () => {
        const rect = window.tableCanvasRedraw?.bounds(0, 0);
        return rect !== undefined && rect.width > 0;
      },
      undefined,
      { timeout: 20_000 },
    );
    await this.settle();
    await this.reset();
  }

  /**
   * Приводит таблицу в рабочее состояние перед сценарием: фокус на таблице,
   * выделения нет, курсор снаружи, журнал кадров пуст.
   */
  async prime() {
    await this.click([0, 0]);
    await this.settle();
    await this.press('Escape');
    await this.settle();
    await this.leave();
    await this.settle();
    await this.reset();
  }

  /** Прямоугольник ячейки в координатах окна. */
  async bounds([col, row]: Cell): Promise<Rectangle> {
    const glideCol = col + this.serviceColumns;
    const rect = await this.page.evaluate(
      ([c, r]) => window.tableCanvasRedraw?.bounds(c, r),
      [glideCol, row] as const,
    );
    if (!rect) {
      throw new Error(`Ячейка [${col}, ${row}] вне таблицы или не измерена`);
    }
    return rect;
  }

  /** Прямоугольник служебной колонки (нумерация) в строке. */
  async serviceBounds(index: number, row: number): Promise<Rectangle> {
    return this.bounds([index - this.serviceColumns, row]);
  }

  async center(cell: Cell): Promise<Point> {
    const rect = await this.bounds(cell);
    return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
  }

  async hover(cell: Cell) {
    const point = await this.center(cell);
    await this.page.mouse.move(point.x, point.y);
  }

  async hoverPoint(point: Point) {
    await this.page.mouse.move(point.x, point.y);
  }

  /** Увести мышь с таблицы. */
  async leave() {
    await this.page.mouse.move(0, 0);
  }

  async click(
    cell: Cell,
    options: { modifiers?: Modifier[]; button?: 'left' | 'right' } = {},
  ) {
    const point = await this.center(cell);
    await this.clickPoint(point, options);
  }

  async clickPoint(
    point: Point,
    options: { modifiers?: Modifier[]; button?: 'left' | 'right' } = {},
  ) {
    const modifiers = options.modifiers ?? [];
    await Promise.all(modifiers.map((key) => this.page.keyboard.down(key)));
    await this.page.mouse.click(point.x, point.y, { button: options.button });
    await Promise.all(modifiers.map((key) => this.page.keyboard.up(key)));
  }

  /** Протяжка мышью с зажатой левой кнопкой. */
  async drag(from: Cell, to: Cell, options: { modifiers?: Modifier[] } = {}) {
    const start = await this.center(from);
    const end = await this.center(to);
    const modifiers = options.modifiers ?? [];
    await Promise.all(modifiers.map((key) => this.page.keyboard.down(key)));
    await this.page.mouse.move(start.x, start.y);
    await this.page.mouse.down();
    await this.page.mouse.move(end.x, end.y, { steps: 8 });
    await this.page.mouse.up();
    await Promise.all(modifiers.map((key) => this.page.keyboard.up(key)));
  }

  /** Протяжка между точками окна: маркер растяжения, граница колонки в шапке. */
  async dragPoints(from: Point, to: Point) {
    await this.page.mouse.move(from.x, from.y);
    await this.page.mouse.down();
    await this.page.mouse.move(to.x, to.y, { steps: 8 });
    await this.page.mouse.up();
  }

  async press(key: string) {
    await this.page.keyboard.press(key);
  }

  async wheel(deltaY: number, deltaX = 0) {
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  /**
   * Дождаться, пока таблица перестанет рисовать (анимации наведения, прокрутка).
   * Тишина считается и от начала ожидания: первый кадр после действия приходит
   * не сразу, и без этого таблица казалась бы спокойной до него.
   */
  async settle() {
    const startedAt = await this.page.evaluate(() => performance.now());
    await this.page.waitForFunction(
      ([quiet, since]) => {
        const api = window.tableCanvasRedraw;
        if (api === undefined) return false;
        // Плавная прокрутка (Ctrl+End, PageDown) идёт кадрами браузера с паузами:
        // пока положение прокрутки меняется, таблица не спокойна.
        const scroller = document.querySelector('.dvn-scroller');
        const position = scroller
          ? `${scroller.scrollTop},${scroller.scrollLeft}`
          : '';
        const state = window as Window & {
          redrawScrollPosition?: string;
          redrawScrollAt?: number;
        };
        const now = performance.now();
        if (state.redrawScrollPosition !== position) {
          state.redrawScrollPosition = position;
          state.redrawScrollAt = now;
        }
        return (
          now - Math.max(api.lastFrameAt(), since, state.redrawScrollAt ?? 0) >
          quiet
        );
      },
      [QUIET_MS, startedAt] as const,
      { timeout: SETTLE_TIMEOUT_MS, polling: 50 },
    );
  }

  async reset() {
    await this.page.evaluate(() => window.tableCanvasRedraw?.reset());
  }

  /** Забрать накопленные кадры и очистить журнал. */
  async takeFrames(): Promise<DrawnFrame[]> {
    return this.page.evaluate(() => {
      const api = window.tableCanvasRedraw;
      if (!api) return [];
      const frames = api.frames();
      api.reset();
      return frames;
    });
  }

  /** Площадь тела таблицы в CSS px. */
  private async bodyArea() {
    const sizes = await this.page.evaluate(() =>
      window.tableCanvasRedraw?.canvasSizes(),
    );
    const body = sizes?.find((size) => size.name === 'body');
    if (!body) throw new Error('Холст тела не найден');
    return body.width * body.height;
  }

  /** Проверить кадры шага: виды, шапка, доля перерисованной площади. */
  async expectFrames(
    frames: DrawnFrame[],
    expectation: FrameExpectation,
    label: string,
  ) {
    const summary = frames
      .map(
        (frame) =>
          `${frame.kind}${frame.header ? '+шапка' : ''}(${
            frame.regions.length
          })`,
      )
      .join(', ');
    const where = `${label}: кадры [${summary}]`;
    if (expectation.some !== false) {
      expect(
        frames.length,
        `${where}: ожидался хотя бы один кадр`,
      ).toBeGreaterThan(0);
    }
    if (expectation.kinds) {
      const wrong = frames.filter(
        (frame) => !expectation.kinds?.includes(frame.kind),
      );
      expect(
        wrong.map((frame) => frame.kind),
        `${where}: допустимы только ${expectation.kinds.join(', ')}`,
      ).toEqual([]);
    }
    if (expectation.header !== undefined) {
      expect(
        frames.some((frame) => frame.header),
        `${where}: шапка ${
          expectation.header ? 'должна' : 'не должна'
        } перерисовываться`,
      ).toBe(expectation.header);
    }
    if (expectation.maxShare !== undefined) {
      const area = await this.bodyArea();
      const largest = Math.max(
        0,
        ...frames.map((frame) =>
          frame.regions.reduce(
            (sum, region) => sum + region.width * region.height,
            0,
          ),
        ),
      );
      expect(
        largest / area,
        `${where}: кадр перерисовал больше ${Math.round(
          expectation.maxShare * 100,
        )}% тела`,
      ).toBeLessThanOrEqual(expectation.maxShare);
    }
  }

  /** Сверить то, что на холстах, с кадром целиком. При расхождении картинки в отчёте. */
  async check(label = 'сверка с полным кадром') {
    const result: CompareResult = await this.page.evaluate(() =>
      window.tableCanvasRedraw!.compare(),
    );
    await this.reset();
    expect(
      result.repaintFrame,
      `${label}: полная перерисовка должна дать кадр full`,
    ).toBeDefined();
    const failed = result.canvases.filter((canvas) => canvas.pixels > 0);
    // Картинки кладём файлами в каталог теста: их видно и без HTML-отчёта.
    const safe = label.replace(/[^\p{L}\p{N}]+/gu, '-');
    await Promise.all(
      failed.flatMap((canvas) =>
        (['partial', 'full', 'diff'] as const).map(async (kind) => {
          const file = this.info.outputPath(
            `${safe}-${canvas.name}-${kind}.png`,
          );
          await fs.promises.writeFile(file, pngBody(canvas[kind] ?? ''));
          await this.info.attach(`${label}: ${canvas.name} ${kind}`, {
            path: file,
            contentType: 'image/png',
          });
        }),
      ),
    );
    const report = failed
      .map(
        (canvas) =>
          `${canvas.name}: ${canvas.pixels} px, область ${JSON.stringify(
            canvas.bbox,
          )}, шум ${canvas.noise} px`,
      )
      .join('; ');
    expect(
      result.equal,
      `${label}: частичный кадр отличается от полного (${report})`,
    ).toBe(true);
  }

  /**
   * Шаг сценария: действие, успокоение, проверка кадров и, если включено,
   * сверка с полным кадром. Возвращает кадры шага.
   */
  async step(
    name: string,
    run: () => Promise<void>,
    expectation?: FrameExpectation,
  ): Promise<DrawnFrame[]> {
    return test.step(name, async () => {
      await this.reset();
      await run();
      await this.settle();
      const frames = await this.takeFrames();
      if (expectation) await this.expectFrames(frames, expectation, name);
      if (this.checkEachStep) await this.check(name);
      return frames;
    });
  }

  /** Сверка в конце серии для проекта накопления; в остальных она уже была. */
  async finish() {
    if (!this.checkEachStep) await this.check('итог серии');
  }
}
