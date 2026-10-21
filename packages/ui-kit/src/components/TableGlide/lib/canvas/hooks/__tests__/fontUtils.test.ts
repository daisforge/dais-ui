import { afterEach, describe, expect, it, vi } from 'vitest';

import { subscribeFontsLoaded } from '../fontUtils';

const { invalidateTextCache, clearButtonCaches } = vi.hoisted(() => ({
  invalidateTextCache: vi.fn(),
  clearButtonCaches: vi.fn(),
}));
vi.mock('../../primitives/CanvasText', () => ({ invalidateTextCache }));
vi.mock('../../cells/buttons', () => ({ clearButtonCaches }));

class FakeFontFaceSet extends EventTarget {
  ready = Promise.resolve();
}

const fonts = new FakeFontFaceSet();
Object.defineProperty(document, 'fonts', { value: fonts, configurable: true });

vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);

afterEach(() => {
  vi.clearAllMocks();
});

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
    const onLoaded = vi.fn();
    const unsubscribe = subscribeFontsLoaded(onLoaded);
    await vi.waitFor(() => expect(onLoaded).toHaveBeenCalledTimes(1));

    fonts.dispatchEvent(new Event('loadingdone'));
    expect(onLoaded).toHaveBeenCalledTimes(2);

    unsubscribe();
    fonts.dispatchEvent(new Event('loadingdone'));
    expect(onLoaded).toHaveBeenCalledTimes(2);
  });
});
