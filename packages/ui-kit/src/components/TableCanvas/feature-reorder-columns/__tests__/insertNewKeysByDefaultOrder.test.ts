import { describe, expect, it } from 'vitest';

import { insertNewKeysByDefaultOrder } from '../handlers';

// Синхронизация внутреннего порядка колонок с columnConfig при включённом reorder:
// колонка, добавленная в конфиг динамически, должна встать рядом со своим соседом
// слева из конфига, а не в конец таблицы.

describe('insertNewKeysByDefaultOrder', () => {
  it('новая колонка в середине конфига встаёт после соседа слева, а не в конец', () => {
    const result = insertNewKeysByDefaultOrder({
      prevOrder: ['id', 'task', 'priority', 'complete'],
      defaultOrder: ['id', 'task', 'developer', 'priority', 'complete'],
    });
    expect(result).toEqual(['id', 'task', 'developer', 'priority', 'complete']);
  });

  it('новая первая колонка конфига встаёт в начало', () => {
    const result = insertNewKeysByDefaultOrder({
      prevOrder: ['task', 'priority'],
      defaultOrder: ['id', 'task', 'priority'],
    });
    expect(result).toEqual(['id', 'task', 'priority']);
  });

  it('новая последняя колонка конфига встаёт в конец', () => {
    const result = insertNewKeysByDefaultOrder({
      prevOrder: ['id', 'task'],
      defaultOrder: ['id', 'task', 'complete'],
    });
    expect(result).toEqual(['id', 'task', 'complete']);
  });

  it('несколько новых колонок подряд сохраняют порядок конфига', () => {
    const result = insertNewKeysByDefaultOrder({
      prevOrder: ['id', 'complete'],
      defaultOrder: ['id', 'task', 'priority', 'complete'],
    });
    expect(result).toEqual(['id', 'task', 'priority', 'complete']);
  });

  it('переставленный пользователем порядок сохраняется, новая колонка встаёт за своим соседом', () => {
    // пользователь перетащил task в конец
    const result = insertNewKeysByDefaultOrder({
      prevOrder: ['id', 'priority', 'complete', 'task'],
      defaultOrder: ['id', 'task', 'developer', 'priority', 'complete'],
    });
    expect(result).toEqual(['id', 'priority', 'complete', 'task', 'developer']);
  });

  it('если новых колонок нет, порядок не меняется', () => {
    const prevOrder = ['priority', 'id', 'task'];
    const result = insertNewKeysByDefaultOrder({
      prevOrder,
      defaultOrder: ['id', 'task', 'priority'],
    });
    expect(result).toEqual(['priority', 'id', 'task']);
  });

  it('не мутирует переданный prevOrder', () => {
    const prevOrder = ['id', 'priority'];
    insertNewKeysByDefaultOrder({
      prevOrder,
      defaultOrder: ['id', 'task', 'priority'],
    });
    expect(prevOrder).toEqual(['id', 'priority']);
  });
});
