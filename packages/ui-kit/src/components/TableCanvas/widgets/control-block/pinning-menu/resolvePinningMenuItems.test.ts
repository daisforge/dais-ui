import { describe, expect, it } from 'vitest';

import { PinningMenuItem } from '../types';
import { resolvePinningMenuItems } from './resolvePinningMenuItems';

/** Нативные пункты как в buildPinningFeature: reset(100)+divider, pinColumns(200). */
const nativeItems = (): PinningMenuItem[] => [
  {
    value: 'reset-pinning',
    label: 'Открепить всё',
    order: 100,
    dividerAfter: true
  },
  { value: 'pin-columns', label: 'Закрепить столбцы', order: 200 }
];

const values = (items: PinningMenuItem[]) => items.map((i) => i.value);

describe('resolvePinningMenuItems', () => {
  it('без продуктовых пунктов → нативные, отсортированные по order', () => {
    expect(values(resolvePinningMenuItems(nativeItems()))).toEqual([
      'reset-pinning',
      'pin-columns'
    ]);
  });

  it('override по совпадающему value: продуктовые поля перекрывают нативные', () => {
    const productOnClick = () => undefined;
    const result = resolvePinningMenuItems(nativeItems(), [
      {
        value: 'reset-pinning',
        label: 'Сбросить всё',
        onClick: productOnClick
      }
    ]);
    const reset = result.find((i) => i.value === 'reset-pinning');
    expect(reset?.label).toBe('Сбросить всё');
    expect(reset?.onClick).toBe(productOnClick);
    // длина не изменилась — это override, а не добавление
    expect(result).toHaveLength(2);
  });

  it('отсутствующие у продукта поля не затирают нативные', () => {
    const result = resolvePinningMenuItems(nativeItems(), [
      { value: 'reset-pinning', label: 'Сбросить всё' }
    ]);
    const reset = result.find((i) => i.value === 'reset-pinning');
    // order/dividerAfter продукт не передал → остаются нативные
    expect(reset?.order).toBe(100);
    expect(reset?.dividerAfter).toBe(true);
  });

  it('новые продуктовые пункты добавляются и встают по order', () => {
    const result = resolvePinningMenuItems(nativeItems(), [
      { value: 'pin-range', label: 'Закрепить область', order: 150 }
    ]);
    expect(values(result)).toEqual([
      'reset-pinning', // 100
      'pin-range', // 150
      'pin-columns' // 200
    ]);
  });

  it('пункты без order уходят в конец, сохраняя исходный порядок (стабильность)', () => {
    const result = resolvePinningMenuItems(nativeItems(), [
      { value: 'extra-a', label: 'A' },
      { value: 'extra-b', label: 'B' }
    ]);
    expect(values(result)).toEqual([
      'reset-pinning',
      'pin-columns',
      'extra-a',
      'extra-b'
    ]);
  });

  it('не мутирует входные массивы/объекты', () => {
    const native = nativeItems();
    const nativeSnapshot = JSON.stringify(native);
    const product: PinningMenuItem[] = [
      { value: 'reset-pinning', label: 'Сбросить всё' }
    ];
    resolvePinningMenuItems(native, product);
    expect(JSON.stringify(native)).toBe(nativeSnapshot);
  });
});
