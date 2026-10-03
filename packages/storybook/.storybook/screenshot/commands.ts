/**
 * Node-часть скриншотных тестов: команды Vitest browser mode, которые вызываются
 * из браузера (см. ./afterEach.ts) и выполняются в процессе Vitest.
 */
import fs from 'fs';
import path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import type { BrowserCommand } from 'vitest/node';

const customSnapshotsDir = path.resolve(
  import.meta.dirname,
  '../../__snapshots__',
);
const diffOutputDir = path.resolve(customSnapshotsDir, '__diff_output__');

const isCI = process.env.CI === 'true';
const failureThreshold = isCI ? 0.01 : 0.04;

// Хелперы для обхода несовместимости Buffer/Uint8Array в типах Node
const writeFile = (filePath: string, data: Buffer | Uint8Array) =>
  fs.writeFileSync(filePath, data as unknown as Uint8Array);
const readPng = (filePath: string) =>
  PNG.sync.read(fs.readFileSync(filePath) as unknown as Buffer);
const writePng = (png: PNG) => PNG.sync.write(png) as unknown as Uint8Array;

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function createCompositeDiff(
  baselinePng: PNG,
  currentPng: PNG,
  diffPng: PNG,
): Uint8Array {
  const { width, height } = baselinePng;
  const gap = 2;
  const compositeWidth = width * 3 + gap * 2;
  const composite = new PNG({ width: compositeWidth, height });

  // Заливаем серым (разделители)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < compositeWidth; x++) {
      const idx = (y * compositeWidth + x) << 2;
      composite.data[idx] = 128;
      composite.data[idx + 1] = 128;
      composite.data[idx + 2] = 128;
      composite.data[idx + 3] = 255;
    }
  }

  // Копируем три панели: baseline | diff | received
  const panels = [
    { png: baselinePng, offsetX: 0 },
    { png: diffPng, offsetX: width + gap },
    { png: currentPng, offsetX: (width + gap) * 2 },
  ];

  for (const { png, offsetX } of panels) {
    for (let y = 0; y < height; y++) {
      const srcStart = y * width * 4;
      const dstStart = (y * compositeWidth + offsetX) * 4;
      composite.data.set(
        png.data.subarray(srcStart, srcStart + width * 4),
        dstStart,
      );
    }
  }

  return writePng(composite);
}

function compareSnapshots(
  received: Uint8Array,
  snapshotPath: string,
  snapshotId: string,
  update: boolean,
) {
  ensureDir(customSnapshotsDir);

  if (!fs.existsSync(snapshotPath) || update) {
    writeFile(snapshotPath, received);
    return;
  }

  const baseline = readPng(snapshotPath);
  const current = PNG.sync.read(Buffer.from(received) as unknown as Buffer);

  const { width, height } = baseline;

  if (current.width !== width || current.height !== height) {
    throw new Error(
      `Screenshot size mismatch for "${snapshotId}": ` +
        `expected ${width}x${height}, got ${current.width}x${current.height}. ` +
        `Run with -u to update.`,
    );
  }

  const diff = new PNG({ width, height });
  const mismatchedPixels = pixelmatch(
    new Uint8Array(baseline.data.buffer),
    new Uint8Array(current.data.buffer),
    new Uint8Array(diff.data.buffer),
    width,
    height,
    { threshold: 0.1 }, // 0.1 игнорирует различия в антиалиасинге текста между запусками
  );

  const totalPixels = width * height;
  const diffPercent = mismatchedPixels / totalPixels;

  if (diffPercent > failureThreshold) {
    ensureDir(diffOutputDir);

    // Композитное изображение: baseline | diff (красные пиксели) | received
    writeFile(
      path.join(diffOutputDir, `${snapshotId}-composite.png`),
      createCompositeDiff(baseline, current, diff),
    );

    throw new Error(
      `Screenshot "${snapshotId}" differs by ${(diffPercent * 100).toFixed(
        2,
      )}% ` +
        `(threshold: ${(failureThreshold * 100).toFixed(0)}%). ` +
        `Diff: ${diffOutputDir}/${snapshotId}-composite.png`,
    );
  }
}

/** Сравнивает скриншот истории (base64 PNG) со снапшотом `__snapshots__/<storyId>.png` */
const compareStoryScreenshot: BrowserCommand<[string, string]> = (
  context,
  storyId,
  base64,
) => {
  // `vitest -u` (npm run screenshot:update) перезаписывает снапшоты
  const update =
    context.project.config.snapshotOptions.updateSnapshot === 'all';
  compareSnapshots(
    new Uint8Array(Buffer.from(base64, 'base64')),
    path.join(customSnapshotsDir, `${storyId}.png`),
    storyId,
    update,
  );
};

/** Уводит курсор в левый верхний угол, чтобы на скриншот не попали hover-состояния */
const moveMouseToOrigin: BrowserCommand<[]> = async (context) => {
  if (context.provider.name === 'playwright') {
    await context.page.mouse.move(0, 0);
  }
};

export const screenshotCommands = { compareStoryScreenshot, moveMouseToOrigin };

declare module 'vitest/browser' {
  interface BrowserCommands {
    compareStoryScreenshot: (storyId: string, base64: string) => Promise<void>;
    moveMouseToOrigin: () => Promise<void>;
  }
}
