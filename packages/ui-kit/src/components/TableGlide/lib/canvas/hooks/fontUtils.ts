const TEST_FONT =
  '400 normal 1rem/1.25rem "SB Sans Text", sans-serif, Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif';
const TEST_TEXT =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const MAX_CHECKS = 30;
const CHECK_INTERVAL = 50;
const STABLE_THRESHOLD = 3;

export async function waitForDocumentFonts(): Promise<void> {
  if (typeof document === 'undefined' || !document.fonts) {
    return Promise.resolve();
  }

  return document.fonts.ready.then(() => undefined);
}

interface PollOptions {
  testFont?: string;
  testText?: string;
  maxChecks?: number;
  checkInterval?: number;
  stableThreshold?: number;
}

export function waitForCanvasFonts(options: PollOptions = {}): Promise<void> {
  const {
    testFont = TEST_FONT,
    testText = TEST_TEXT,
    maxChecks = MAX_CHECKS,
    checkInterval = CHECK_INTERVAL,
    stableThreshold = STABLE_THRESHOLD,
  } = options;

  return new Promise((resolve) => {
    if (typeof document === 'undefined') {
      resolve();
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      resolve();
      return;
    }

    let lastWidth = -1;
    let stableCount = 0;
    let checkCount = 0;

    const checkFont = (): void => {
      ctx.font = testFont;
      const { width } = ctx.measureText(testText);

      if (width !== lastWidth) {
        lastWidth = width;
        stableCount = 0;
      } else {
        stableCount += 1;
      }

      checkCount += 1;

      if (stableCount >= stableThreshold || checkCount >= maxChecks) {
        resolve();
      } else {
        setTimeout(checkFont, checkInterval);
      }
    };

    checkFont();
  });
}

export function waitForFonts(options?: PollOptions): Promise<void> {
  return waitForDocumentFonts().then(() => waitForCanvasFonts(options));
}
