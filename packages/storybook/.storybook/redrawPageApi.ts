import type {
  DataEditorRef,
  DrawnFrame,
} from '@glideappsfinal/glide-data-grid';
import type { RefObject } from 'react';

import type {
  CanvasDiff,
  CanvasName,
  CanvasSize,
  CompareResult,
  RedrawPageApi,
} from '../test/redraw/page-api';

// API страницы для тестов перерисовки (packages/storybook/test/redraw).
// Живёт в странице: сравнение холстов идёт здесь, наружу уходит только итог,
// а картинки только при расхождении.

interface GridCanvas {
  name: CanvasName;
  canvas: HTMLCanvasElement;
}

/** Холсты glide: тело помечено data-testid, шапка это соседний canvas. */
function findCanvases(): GridCanvas[] {
  const bodies = document.querySelectorAll<HTMLCanvasElement>(
    'canvas[data-testid="data-grid-canvas"]',
  );
  if (bodies.length !== 1) {
    throw new Error(
      `Тесты перерисовки ждут одну таблицу в истории, найдено: ${bodies.length}`,
    );
  }
  const body = bodies[0];
  const header = Array.from(
    body.parentElement?.querySelectorAll<HTMLCanvasElement>('canvas') ?? [],
  ).find((canvas) => canvas !== body);
  if (!header) throw new Error('Холст шапки не найден');
  return [
    { name: 'body', canvas: body },
    { name: 'header', canvas: header },
  ];
}

function context(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Нет 2d-контекста холста');
  return ctx;
}

const snapshot = (canvas: HTMLCanvasElement) =>
  context(canvas).getImageData(0, 0, canvas.width, canvas.height);

const twoFrames = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

function toPng(image: ImageData) {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  context(canvas).putImageData(image, 0, 0);
  return canvas.toDataURL('image/png');
}

/**
 * Разница оттенка, до которой пиксель считается шумом растеризации: Chromium рисует
 * длинную линию кусками и на стыках пиксель чуть светлее, сглаживание скруглённых
 * углов зависит от порядка заливок. Такая разница глазу не видна. Но если таких
 * пикселей много, это уже сдвиг цвета целой области, и это ошибка.
 */
const NOISE_DELTA = 12;
const NOISE_LIMIT = 500;
/** Короткий штрих кромки (до NOISE_EDGE_RUN px в ряд на масштабе 1) с разницей до этой: сглаживание при другом порядке заливок или обрезке. */
const NOISE_DELTA_EDGE = 64;
const NOISE_EDGE_RUN = 4;

const channelDelta = (a: Uint8ClampedArray, b: Uint8ClampedArray, i: number) =>
  Math.max(
    Math.abs(a[i] - b[i]),
    Math.abs(a[i + 1] - b[i + 1]),
    Math.abs(a[i + 2] - b[i + 2]),
    Math.abs(a[i + 3] - b[i + 3]),
  );

/** Сравнение по 32-битным пикселям; при расхождении картинки и bbox. */
function diffImages(
  name: CanvasName,
  partial: ImageData,
  full: ImageData,
  /** Строки сверху, скрытые холстом шапки: их не сравниваем. */
  ignoreTop = 0,
  /** Масштаб холста: размеры штриха кромки считаются в его пикселях. */
  scale = 1,
): CanvasDiff {
  if (partial.width !== full.width || partial.height !== full.height) {
    throw new Error(
      `Холст ${name} сменил размер между кадрами: ${partial.width}x${partial.height} и ${full.width}x${full.height}`,
    );
  }
  const a = new Uint32Array(partial.data.buffer);
  const b = new Uint32Array(full.data.buffer);
  const { width } = partial;
  const diff = new ImageData(partial.width, partial.height);
  const marks = new Uint32Array(diff.data.buffer);
  marks.fill(0xffffffff);
  // 0 совпало, 1 шум по оттенку, 2 отличается заметно
  const kind = new Uint8Array(a.length);
  const deltas = new Uint8Array(a.length);
  for (let i = ignoreTop * width; i < a.length; i += 1) {
    if (a[i] === b[i]) continue;
    const delta = channelDelta(partial.data, full.data, i * 4);
    deltas[i] = Math.min(255, delta);
    kind[i] = delta <= NOISE_DELTA ? 1 : 2;
  }
  /** Длина штриха заметных пикселей через i: по горизонтали (step 1) или вертикали (step width). */
  const runLength = (i: number, step: number, limit: number) => {
    let length = 1;
    for (
      let j = i - step;
      j >= 0 && kind[j] === 2 && length <= limit;
      j -= step
    ) {
      length += 1;
    }
    for (
      let j = i + step;
      j < a.length && kind[j] === 2 && length <= limit;
      j += step
    ) {
      length += 1;
    }
    return length;
  };
  const edgeHeight = Math.ceil(scale);
  const edgeRun = NOISE_EDGE_RUN * edgeHeight;
  let pixels = 0;
  let noise = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -1;
  let maxY = -1;
  const extend = (i: number) => {
    const x = i % width;
    const y = (i - x) / width;
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  };
  for (let i = ignoreTop * width; i < a.length; i += 1) {
    if (kind[i] === 0) continue;
    // Сглаживание кромки при другом порядке заливок или обрезке: короткий штрих
    // высотой в пиксель с умеренной разницей оттенка. Пропавшая линия сетки это
    // длинный штрих, пропавший угол обводки отличается сильно: они сюда не попадают.
    const edge =
      kind[i] === 2 &&
      deltas[i] <= NOISE_DELTA_EDGE &&
      runLength(i, width, edgeHeight) <= edgeHeight &&
      runLength(i, 1, edgeRun) <= edgeRun;
    if (kind[i] === 1 || edge) {
      noise += 1;
      // жёлтый: шум, в итог не входит
      marks[i] = 0xff00ffff;
      continue;
    }
    pixels += 1;
    extend(i);
    // красный, непрозрачный (ABGR в памяти little-endian)
    marks[i] = 0xff0000ff;
  }
  if (pixels === 0 && noise <= NOISE_LIMIT) {
    return { name, pixels, noise, bbox: null };
  }
  if (pixels === 0) {
    // много мелких расхождений: не шум, а сдвиг цвета целой области
    pixels = noise;
    for (let i = ignoreTop * width; i < a.length; i += 1) {
      if (marks[i] === 0xff00ffff) extend(i);
    }
  }
  return {
    name,
    pixels,
    noise,
    bbox: { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 },
    partial: toPng(partial),
    full: toPng(full),
    diff: toPng(diff),
  };
}

export function createRedrawPageApi(deps: {
  repaint: () => number;
  grids: ReadonlySet<RefObject<DataEditorRef | null>>;
}): RedrawPageApi & { record: (frame: DrawnFrame) => void } {
  let frames: DrawnFrame[] = [];
  let lastFrameAt = 0;
  // Пока таблица не смонтирована, грида нет (ожидание в тестах); две и больше это ошибка стенда.
  const grid = () => {
    const refs = Array.from(deps.grids);
    if (refs.length > 1) {
      throw new Error(
        `Тесты перерисовки ждут одну таблицу в истории, зарегистрировано: ${refs.length}`,
      );
    }
    return refs[0]?.current ?? null;
  };
  return {
    record: (frame) => {
      frames.push(frame);
      lastFrameAt = performance.now();
    },
    frames: () => frames.slice(),
    reset: () => {
      frames = [];
    },
    lastFrameAt: () => lastFrameAt,
    bounds: (col, row) => {
      const rect = grid()?.getBounds(col, row);
      if (
        !rect ||
        !Number.isFinite(rect.x) ||
        !Number.isFinite(rect.y) ||
        rect.width <= 0 ||
        rect.height <= 0
      ) {
        return undefined;
      }
      return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
    },
    repaint: deps.repaint,
    compare: async () => {
      const canvases = findCanvases();
      const before = canvases.map((item) => ({
        ...item,
        image: snapshot(item.canvas),
      }));
      const mark = frames.length;
      if (deps.repaint() === 0) {
        throw new Error(
          'Полная перерисовка недоступна: таблица не зарегистрирована',
        );
      }
      await twoFrames();
      const repaintFrame = frames
        .slice(mark)
        .find((frame) => frame.kind === 'full');
      const headerHeight =
        canvases.find((item) => item.name === 'header')?.canvas.height ?? 0;
      const result = before.map((item) =>
        diffImages(
          item.name,
          item.image,
          snapshot(item.canvas),
          // Верх тела скрыт холстом шапки: там прошлый кадр после сдвига не чистится.
          // Ряд сразу под шапкой это кромка обрезки: кадр целиком рисует обрезанную
          // шапкой ячейку с обрезкой, сдвинутый кадр нёс её нарисованной без обрезки,
          // и сглаживание скруглённых углов на этой кромке расходится на ряд пикселей.
          item.name === 'body'
            ? headerHeight +
                Math.ceil(item.canvas.width / item.canvas.clientWidth)
            : 0,
          item.canvas.width / item.canvas.clientWidth,
        ),
      );
      return {
        equal: result.every((item) => item.pixels === 0),
        canvases: result,
        repaintFrame,
      };
    },
    corrupt: (name, x, y) => {
      const item = findCanvases().find((canvas) => canvas.name === name);
      if (!item) throw new Error(`Холст ${name} не найден`);
      const ctx = context(item.canvas);
      const dpr = item.canvas.width / item.canvas.clientWidth;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = '#ff00ff';
      ctx.fillRect(
        Math.round(x * dpr),
        Math.round(y * dpr),
        Math.ceil(dpr),
        Math.ceil(dpr),
      );
      ctx.restore();
    },
    canvasSizes: (): CanvasSize[] =>
      findCanvases().map(({ name, canvas }) => ({
        name,
        width: canvas.clientWidth,
        height: canvas.clientHeight,
        dpr: canvas.width / canvas.clientWidth,
      })),
  };
}
