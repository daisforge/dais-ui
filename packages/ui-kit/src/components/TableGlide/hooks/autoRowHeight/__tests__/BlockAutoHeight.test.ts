import { describe, expect, it, vi } from 'vitest';

import type { CellHeightReporter } from '../../../cellRenderer';
import { BlockAutoHeight } from '../BlockAutoHeight';

const reporter = (): CellHeightReporter => ({
  needsHeight: vi.fn(() => true),
  report: vi.fn(),
  forget: vi.fn(),
});

describe('BlockAutoHeight', () => {
  it('обычная ячейка получает приёмник, её замер доходит до хранилища', () => {
    const blocks = new BlockAutoHeight();
    const source = reporter();
    const result = blocks.reporterFor(source, 'a', null, vi.fn());
    result?.report(100, 40);
    expect(source.report).toHaveBeenCalledWith(100, 40);
  });

  it('ячейка блока приёмника не получает, строки блока забываются один раз', () => {
    const blocks = new BlockAutoHeight();
    const forgetRow = vi.fn();
    expect(blocks.reporterFor(reporter(), 'a', [0, 99_999], forgetRow)).toBe(
      undefined,
    );
    expect(forgetRow).toHaveBeenCalledTimes(100_000);

    // Повторные отрисовки того же блока строки не обходят
    blocks.reporterFor(reporter(), 'a', [0, 99_999], forgetRow);
    blocks.reporterFor(reporter(), 'a', [0, 99_999], forgetRow);
    expect(forgetRow).toHaveBeenCalledTimes(100_000);
  });

  it('блок из одной строки это обычная ячейка', () => {
    const blocks = new BlockAutoHeight();
    const forgetRow = vi.fn();
    expect(
      blocks.reporterFor(reporter(), 'a', [5, 5], forgetRow),
    ).toBeDefined();
    expect(forgetRow).not.toHaveBeenCalled();
  });

  it('новые границы блока и другая колонка обходятся заново', () => {
    const blocks = new BlockAutoHeight();
    const forgetRow = vi.fn();
    blocks.reporterFor(reporter(), 'a', [0, 2], forgetRow);
    blocks.reporterFor(reporter(), 'a', [0, 3], forgetRow);
    blocks.reporterFor(reporter(), 'b', [0, 3], forgetRow);
    expect(forgetRow).toHaveBeenCalledTimes(3 + 4 + 4);
  });

  it('новый замер обычной ячейки колонки снова открывает обход её блоков', () => {
    const blocks = new BlockAutoHeight();
    const forgetRow = vi.fn();
    blocks.reporterFor(reporter(), 'a', [0, 2], forgetRow);

    // Ячейку разъединили: она замерилась как обычная
    blocks.reporterFor(reporter(), 'a', null, vi.fn())?.report(100, 80);
    // и объединили снова: прежний замер нужно забыть
    blocks.reporterFor(reporter(), 'a', [0, 2], forgetRow);
    expect(forgetRow).toHaveBeenCalledTimes(6);
  });
});
