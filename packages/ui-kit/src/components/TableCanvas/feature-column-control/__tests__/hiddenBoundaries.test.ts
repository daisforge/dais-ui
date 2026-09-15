import { describe, expect, it } from 'vitest';

import { computeHiddenBoundaries } from '../hiddenBoundaries';

// Контракт индикатора скрытых столбцов: перевод ключей скрытых столбцов в номера
// границ грида. На вход идёт полный порядок ОТРИСОВКИ (видимые и скрытые,
// закреплённые в начале). Граница N это щель слева от видимой колонки N, где N,
// равное числу видимых колонок, это правый край таблицы.

describe('computeHiddenBoundaries', () => {
  it('скрытый столбец между двумя видимыми даёт границу у правого соседа', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['a', 'b', 'c'],
      hiddenCols: ['b'],
    });
    expect(result).toEqual(new Map([[1, ['b']]]));
  });

  it('несколько скрытых подряд копятся в одну границу', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['a', 'b', 'c', 'd', 'e'],
      hiddenCols: ['b', 'c', 'd'],
    });
    expect(result).toEqual(new Map([[1, ['b', 'c', 'd']]]));
  });

  it('несвязанные промежутки дают отдельные границы', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['a', 'b', 'c', 'd', 'e'],
      hiddenCols: ['b', 'd'],
    });
    expect(result).toEqual(
      new Map([
        [1, ['b']],
        [2, ['d']],
      ]),
    );
  });

  it('скрыт первый столбец: граница у левого края (индекс 0)', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['a', 'b', 'c'],
      hiddenCols: ['a'],
    });
    expect(result).toEqual(new Map([[0, ['a']]]));
  });

  it('скрыт последний столбец: граница у правого края (число видимых)', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['a', 'b', 'c'],
      hiddenCols: ['c'],
    });
    expect(result).toEqual(new Map([[2, ['c']]]));
  });

  it('скрыты все столбцы: один промежуток на правом краю', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['a', 'b'],
      hiddenCols: ['a', 'b'],
    });
    expect(result).toEqual(new Map([[0, ['a', 'b']]]));
  });

  it('сервисные колонки в начале сдвигают индексы границ', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['__rowMarker__', 'a', 'b', 'c'],
      hiddenCols: ['b'],
    });
    expect(result).toEqual(new Map([[2, ['b']]]));
  });

  it('закреплённый сосед не рвёт промежуток: полоса встаёт на месте раскрытия', () => {
    // 'c' закреплён и уехал в начало порядка отрисовки, скрытый 'b' по-прежнему
    // между 'a' и 'd' в прокручиваемой зоне. Раскрытие вернёт 'b' между 'a' и 'd',
    // поэтому и граница там (индекс 2, слева от 'd'), а не у левого края.
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['c', 'a', 'b', 'd'],
      hiddenCols: ['b'],
    });
    expect(result).toEqual(new Map([[2, ['b']]]));
  });

  it('скрытый промежуток на шве заморозки не разрывается — одна граница', () => {
    // 'hf' закреплён и скрыт, 'hr' не закреплён и скрыт; в порядке отрисовки они
    // соседи на шве frozen|rest. Промежуток остаётся единым (одна полоса), а не
    // распадается на две.
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['f1', 'hf', 'hr', 'r1'],
      hiddenCols: ['hf', 'hr'],
    });
    expect(result).toEqual(new Map([[1, ['hf', 'hr']]]));
  });

  it('пары key/text: оба ключа пары копятся в один промежуток', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['a', 'b__key', 'b__text', 'c'],
      hiddenCols: ['b__key', 'b__text'],
    });
    expect(result).toEqual(new Map([[1, ['b__key', 'b__text']]]));
  });

  it('нет скрытых — пустая карта', () => {
    const result = computeHiddenBoundaries({
      fullRenderOrder: ['a', 'b'],
      hiddenCols: [],
    });
    expect(result.size).toBe(0);
  });
});
