import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const { invalidateTextCache, clearButtonCaches } = vi.hoisted(() => ({
  invalidateTextCache: vi.fn(),
  clearButtonCaches: vi.fn(),
}));
vi.mock('../../primitives/CanvasText', () => ({ invalidateTextCache }));
vi.mock('../../cells/buttons', () => ({ clearButtonCaches }));

class FakeFontFaceSet extends EventTarget {
  ready = Promise.resolve();
}

let fonts: FakeFontFaceSet;
/** Состояние подписки модульное — каждый тест берёт свежий модуль и свой document.fonts */
let subscribeFontsLoaded: typeof import('../fontsLoaded').subscribeFontsLoaded;

const loadingDone = (families?: string[]) => {
  const event = new Event('loadingdone');
  if (families) {
    Object.defineProperty(event, 'fontfaces', {
      value: families.map((family) => ({ family })),
    });
  }
  fonts.dispatchEvent(event);
};

/** Уведомления приходят раз в кадр */
const nextFrame = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });

vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);

beforeEach(async () => {
  fonts = new FakeFontFaceSet();
  Object.defineProperty(document, 'fonts', {
    value: fonts,
    configurable: true,
  });
  vi.resetModules();
  ({ subscribeFontsLoaded } = await import('../fontsLoaded'));
});

afterEach(() => {
  vi.clearAllMocks();
});

/** Подписка и ожидание первой загрузки шрифтов */
const subscribeLoaded = async (
  onLoaded = vi.fn(),
  options?: Parameters<typeof subscribeFontsLoaded>[1],
) => {
  const unsubscribe = subscribeFontsLoaded(onLoaded, options);
  await vi.waitFor(() => expect(onLoaded).toHaveBeenCalledTimes(1));
  onLoaded.mockClear();
  vi.clearAllMocks();
  return { onLoaded, unsubscribe };
};

describe('subscribeFontsLoaded', () => {
  it('после загрузки шрифтов сбрасывает кеши текста, затем уведомляет', async () => {
    const order: string[] = [];
    invalidateTextCache.mockImplementation(() => order.push('cache'));
    const onLoaded = vi.fn(() => order.push('notify'));

    const unsubscribe = subscribeFontsLoaded(onLoaded);
    await vi.waitFor(() => expect(onLoaded).toHaveBeenCalledTimes(1));

    expect(clearButtonCaches).toHaveBeenCalled();
    expect(order).toEqual(['cache', 'notify']);
    unsubscribe();
  });

  it('догрузка шрифта позже (loadingdone) снова уведомляет; после отписки — нет', async () => {
    const { onLoaded, unsubscribe } = await subscribeLoaded();

    loadingDone();
    await nextFrame();
    expect(onLoaded).toHaveBeenCalledTimes(1);

    unsubscribe();
    loadingDone();
    await nextFrame();
    expect(onLoaded).toHaveBeenCalledTimes(1);
  });

  it('пачка загрузок за кадр — одно уведомление и один сброс кешей на всех подписчиков', async () => {
    const { onLoaded: first } = await subscribeLoaded();
    const second = vi.fn();
    subscribeFontsLoaded(second);

    loadingDone();
    loadingDone();
    loadingDone();
    await nextFrame();

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
    expect(invalidateTextCache).toHaveBeenCalledTimes(1);
    expect(clearButtonCaches).toHaveBeenCalledTimes(1);
  });

  it('подписавшийся после загрузки шрифтов не уведомляется, пока не догрузится новый', async () => {
    await subscribeLoaded();
    const late = vi.fn();
    subscribeFontsLoaded(late);
    await nextFrame();
    await nextFrame();

    expect(late).not.toHaveBeenCalled();
    expect(invalidateTextCache).not.toHaveBeenCalled();
  });

  it('загрузка чужого семейства не уведомляет и не сбрасывает кеши', async () => {
    const { onLoaded } = await subscribeLoaded(vi.fn(), {
      fontFamily: () => '"SB Sans Text", sans-serif',
    });

    loadingDone(['Material Icons']);
    await nextFrame();
    expect(onLoaded).not.toHaveBeenCalled();
    expect(invalidateTextCache).not.toHaveBeenCalled();

    loadingDone(['"SB Sans Text"']);
    await nextFrame();
    expect(onLoaded).toHaveBeenCalledTimes(1);
    expect(invalidateTextCache).toHaveBeenCalledTimes(1);
  });

  it('подписчик без fontFamily уведомляется о любом семействе', async () => {
    const { onLoaded } = await subscribeLoaded();

    loadingDone(['Material Icons']);
    await nextFrame();

    expect(onLoaded).toHaveBeenCalledTimes(1);
  });

  it('событие без загруженных начертаний игнорируется', async () => {
    const { onLoaded } = await subscribeLoaded();

    loadingDone([]);
    await nextFrame();

    expect(onLoaded).not.toHaveBeenCalled();
  });
});
