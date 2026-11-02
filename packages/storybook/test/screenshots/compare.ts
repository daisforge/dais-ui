import fs from 'node:fs';
import path from 'node:path';

import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

// threshold задаёт чувствительность к цвету одного пикселя, а не долю допустимых отличий.
// Пиксели, распознанные pixelmatch как сглаживание краёв, исключаются из подсчёта.
// Среди остальных пикселей не допускаем ни одного различия.
const COMPARISON = { threshold: 0.02, includeAA: false } as const;
// Сохраняем смещение и длину: Uint8Array может занимать лишь часть общего буфера.
const bytes = (data: Uint8Array) =>
  new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
const decode = (data: Uint8Array): PNG =>
  PNG.sync.read(Buffer.from(bytes(data)) as unknown as Buffer);
const encode = (png: PNG): Uint8Array =>
  PNG.sync.write(png) as unknown as Uint8Array;

const equalBytes = (a: Uint8Array, b: Uint8Array) =>
  a.byteLength === b.byteLength && Buffer.compare(bytes(a), bytes(b)) === 0;

/** Для стабилизации кадров используем те же правила, что и для сравнения с эталоном. */
export function sameVisualPixels(a: Uint8Array, b: Uint8Array): boolean {
  if (equalBytes(a, b)) return true;
  const left = decode(a);
  const right = decode(b);
  return (
    left.width === right.width &&
    left.height === right.height &&
    (equalBytes(left.data, right.data) ||
      pixelmatch(
        bytes(left.data),
        bytes(right.data),
        null,
        left.width,
        left.height,
        COMPARISON,
      ) === 0)
  );
}

// Дополняем меньший снимок прозрачными пикселями, чтобы построить общий diff.
// Само несовпадение размеров всё равно считается ошибкой.
function pad(png: PNG, width: number, height: number): PNG {
  const result = new PNG({ width, height });
  for (let y = 0; y < png.height; y += 1) {
    result.data.set(
      bytes(png.data).subarray(y * png.width * 4, (y + 1) * png.width * 4),
      y * width * 4,
    );
  }
  return result;
}

/** Возвращаем результат сравнения и изображения для разбора различий. */
function compare(expectedBytes: Uint8Array, actualBytes: Uint8Array) {
  const expected = decode(expectedBytes);
  const actual = decode(actualBytes);
  if (
    expected.width === actual.width &&
    expected.height === actual.height &&
    equalBytes(expected.data, actual.data)
  ) {
    return {
      matches: true,
      sizeMismatch: false,
      mismatchedPixels: 0,
      diffPercent: 0,
      boundingBox: null,
      expectedSize: { width: expected.width, height: expected.height },
      actualSize: { width: actual.width, height: actual.height },
      diff: new Uint8Array(),
      composite: new Uint8Array(),
    };
  }
  const width = Math.max(expected.width, actual.width);
  const height = Math.max(expected.height, actual.height);
  const left = pad(expected, width, height);
  const right = pad(actual, width, height);
  const diff = new PNG({ width, height });
  // Отдельная прозрачная маска нужна для рамки области изменений в comparison.json.
  const mask = new PNG({ width, height });
  const mismatchedPixels = pixelmatch(
    bytes(left.data),
    bytes(right.data),
    bytes(diff.data),
    width,
    height,
    COMPARISON,
  );
  pixelmatch(
    bytes(left.data),
    bytes(right.data),
    bytes(mask.data),
    width,
    height,
    { ...COMPARISON, diffMask: true },
  );
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < height; y += 1)
    for (let x = 0; x < width; x += 1) {
      if (mask.data[(y * width + x) * 4 + 3]) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  const sizeMismatch =
    expected.width !== actual.width || expected.height !== actual.height;
  // Три панели для ревью: эталон | различия | текущий снимок.
  const composite = new PNG({ width: width * 3 + 4, height });
  composite.data.fill(128);
  [left, diff, right].forEach((png, panel) => {
    for (let y = 0; y < height; y += 1)
      composite.data.set(
        bytes(png.data).subarray(y * width * 4, (y + 1) * width * 4),
        (y * composite.width + panel * (width + 2)) * 4,
      );
  });
  return {
    matches: !sizeMismatch && mismatchedPixels === 0,
    sizeMismatch,
    mismatchedPixels,
    diffPercent: (mismatchedPixels / (width * height)) * 100,
    boundingBox:
      maxX < 0
        ? null
        : { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 },
    expectedSize: { width: expected.width, height: expected.height },
    actualSize: { width: actual.width, height: actual.height },
    diff: encode(diff),
    composite: encode(composite),
  };
}

/** Проверка только читает эталон; его создание и обновление выполняются отдельной командой. */
export function checkSnapshot(
  actual: Uint8Array,
  baselinePath: string,
  artifactDir: string,
) {
  fs.mkdirSync(artifactDir, { recursive: true });
  fs.writeFileSync(path.join(artifactDir, 'actual.png'), actual);
  if (!fs.existsSync(baselinePath))
    throw new Error(
      `Missing baseline: ${baselinePath}. Use screenshot:update explicitly.`,
    );
  const expected = new Uint8Array(fs.readFileSync(baselinePath));
  const { diff, composite, ...result } = compare(expected, actual);
  // При расхождении оставляем все материалы для ревью, не заменяя эталон.
  if (!result.matches) {
    fs.writeFileSync(path.join(artifactDir, 'expected.png'), expected);
    fs.writeFileSync(path.join(artifactDir, 'diff.png'), diff);
    fs.writeFileSync(path.join(artifactDir, 'composite.png'), composite);
  }
  fs.writeFileSync(
    path.join(artifactDir, 'comparison.json'),
    JSON.stringify({ ...result, ...COMPARISON }, null, 2),
  );
  if (!result.matches)
    throw new Error(
      `Screenshot differs: ${
        result.mismatchedPixels
      } pixels (${result.diffPercent.toFixed(5)}%), sizeMismatch=${
        result.sizeMismatch
      }, boundingBox=${JSON.stringify(
        result.boundingBox,
      )}. Artifacts: ${artifactDir}`,
    );
  return result;
}
