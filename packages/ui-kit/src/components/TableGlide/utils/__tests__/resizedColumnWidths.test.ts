import type { GridColumn } from '@glideappsfinal/glide-data-grid';
import { describe, expect, it } from 'vitest';

import {
  EMPTY_RESIZED_WIDTHS,
  reconcileResizedWidths,
  recordResizedWidth,
} from '../resizedColumnWidths';

const column = (id: string, width?: number): GridColumn =>
  width === undefined ? { id, title: id } : { id, title: id, width };

const widthsOf = (columns: readonly GridColumn[]) =>
  columns.map((item) => ('width' in item ? item.width : undefined));

describe('resizedColumnWidths — локальное состояние ширины', () => {
  it('возвращает исходные колонки, если локальных изменений ширины нет', () => {
    const columns = [column('a', 100)];

    expect(reconcileResizedWidths(columns, EMPTY_RESIZED_WIDTHS).columns).toBe(
      columns,
    );
  });

  it('сохраняет локальную ширину, пока потребитель не передал новую', () => {
    const columns = [column('a', 100), column('b', 100)];
    const resized = recordResizedWidth(
      EMPTY_RESIZED_WIDTHS,
      columns,
      0,
      'a',
      150,
    );

    expect(widthsOf(reconcileResizedWidths(columns, resized).columns)).toEqual([
      150,
      100,
    ]);
  });

  it('сохраняет локальную ширину колонки без ширины в props', () => {
    const columns = [column('a')];
    const resized = recordResizedWidth(
      EMPTY_RESIZED_WIDTHS,
      columns,
      0,
      'a',
      150,
    );

    expect(widthsOf(reconcileResizedWidths(columns, resized).columns)).toEqual([
      150,
    ]);
  });

  it('использует ширины из props после управляемого или массового изменения', () => {
    const before = [column('a', 100), column('b', 100)];
    const resized = recordResizedWidth(
      EMPTY_RESIZED_WIDTHS,
      before,
      0,
      'a',
      150,
    );
    const after = [column('a', 200), column('b', 200)];

    expect(widthsOf(reconcileResizedWidths(after, resized).columns)).toEqual([
      200,
      200,
    ]);
  });

  it('сохраняет последнюю ширину при последовательном изменении столбцов', () => {
    let props = [column('q1', 125), column('q2', 125), column('q3', 125)];
    let resized = EMPTY_RESIZED_WIDTHS;

    const resizeMetricColumn = (id: string, width: number) => {
      // Glide сообщает об изменении одного столбца, а потребитель обновляет
      // ширину всего набора в ответ на этот callback.
      const columnIndex = props.findIndex((item) => item.id === id);
      resized = recordResizedWidth(resized, props, columnIndex, id, width);
      props = props.map((item) => ({ ...item, width }));

      // Новые ширины из props применяются сразу, а принятые значения
      // одновременно удаляются из локального кеша.
      const reconciled = reconcileResizedWidths(props, resized);
      expect(widthsOf(reconciled.columns)).toEqual([
        width,
        width,
        width,
      ]);
      resized = reconciled.resizedWidths;
    };

    resizeMetricColumn('q1', 150);
    resizeMetricColumn('q2', 220);
    resizeMetricColumn('q3', 180);
    resizeMetricColumn('q1', 245);

    expect(widthsOf(reconcileResizedWidths(props, resized).columns)).toEqual([
      245, 245, 245,
    ]);
    expect(resized.size).toBe(0);
  });

  it('берёт исходную ширину из props, а не из локального переопределения', () => {
    const columns = [column('a', 100)];
    const first = recordResizedWidth(
      EMPTY_RESIZED_WIDTHS,
      columns,
      0,
      'a',
      150,
    );
    const second = recordResizedWidth(first, columns, 0, 'a', 170);

    expect(second.get('a')).toEqual({ width: 170, base: 100 });
  });

  it('очищает локальную ширину после обновления колонки потребителем', () => {
    const resized = recordResizedWidth(
      EMPTY_RESIZED_WIDTHS,
      [column('a', 100)],
      0,
      'a',
      150,
    );
    const pruned = reconcileResizedWidths([column('a', 150)], resized)
      .resizedWidths;

    expect(pruned.has('a')).toBe(false);
  });

  it('после принятия новой ширины позволяет вернуть колонку к исходной', () => {
    const resized = recordResizedWidth(
      EMPTY_RESIZED_WIDTHS,
      [column('a', 100)],
      0,
      'a',
      150,
    );
    const pruned = reconcileResizedWidths([column('a', 150)], resized)
      .resizedWidths;

    expect(
      widthsOf(reconcileResizedWidths([column('a', 100)], pruned).columns),
    ).toEqual([100]);
  });

  it('удаляет записи о ширине удалённых колонок', () => {
    const resized = recordResizedWidth(
      EMPTY_RESIZED_WIDTHS,
      [column('a', 100)],
      0,
      'a',
      150,
    );

    expect(reconcileResizedWidths([], resized).resizedWidths.has('a')).toBe(
      false,
    );
  });

  it('возвращает исходную карту, если очищать нечего', () => {
    const resized = recordResizedWidth(
      EMPTY_RESIZED_WIDTHS,
      [column('a', 100)],
      0,
      'a',
      150,
    );

    expect(
      reconcileResizedWidths([column('a', 100)], resized).resizedWidths,
    ).toBe(resized);
    expect(
      reconcileResizedWidths([column('a', 100)], EMPTY_RESIZED_WIDTHS)
        .resizedWidths,
    ).toBe(
      EMPTY_RESIZED_WIDTHS,
    );
  });
});
