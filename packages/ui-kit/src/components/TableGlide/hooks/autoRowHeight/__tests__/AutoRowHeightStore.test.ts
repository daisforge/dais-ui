import { describe, expect, it, vi } from 'vitest';

import { AutoRowHeightStore, MAX_AUTO_ROW_HEIGHT } from '../AutoRowHeightStore';

type Row = { id: number };

const BASE = 20;

const setup = (rowCount = 3, columnIds = ['a', 'b']) => {
  const onChange = vi.fn();
  const commits: (() => void)[] = [];
  const store = new AutoRowHeightStore<Row>(onChange, (commit) =>
    commits.push(commit),
  );
  /** Конец кадра: замеры применяются */
  const endFrame = () => commits.splice(0).forEach((commit) => commit());
  store.setBaseHeight(BASE);
  store.setColumns(columnIds);
  const rows: Row[] = Array.from({ length: rowCount }, (_, id) => ({ id }));
  /** Ячейка сообщает высоту, как при отрисовке, и кадр заканчивается */
  const report = (
    rowIndex: number,
    columnId: string,
    height: number,
    width = 100,
    isSpan = false,
  ) => {
    const reporter = store.reporter(
      rows[rowIndex]!,
      rowIndex,
      columnId,
      isSpan,
    );
    if (reporter.needsHeight(width)) reporter.report(width, height);
    endFrame();
  };
  return { store, rows, report, onChange, endFrame };
};

describe('AutoRowHeightStore', () => {
  it('строка, которую не рисовали, — 0; индекса нет — undefined', () => {
    const { store, rows } = setup();

    expect(store.heightAt(rows, 0, true)).toBe(0);
    expect(store.heightAt(rows, 10, true)).toBeUndefined();
  });

  it('высота строки — максимум по ячейкам, не выше потолка', () => {
    const { store, rows, report } = setup();

    report(0, 'a', 40);
    report(0, 'b', 70);
    report(1, 'a', 10_000);

    expect(store.heightAt(rows, 0, true)).toBe(70);
    expect(store.heightAt(rows, 1, true)).toBe(MAX_AUTO_ROW_HEIGHT);
  });

  it('дробная высота округляется вверх до целого пикселя', () => {
    const { store, rows, report } = setup();

    report(0, 'a', 40.2);

    expect(store.heightAt(rows, 0, true)).toBe(41);
    expect(store.heightAt(rows, 0, false)).toBe(41);
  });

  it('новый потолок: видимая строка пересчитывается сразу, невидимая — когда снова на экране', () => {
    const { store, rows, report } = setup();
    report(0, 'a', 1000);
    report(1, 'a', 1000);

    store.setMaxHeight(600);

    expect(store.heightAt(rows, 0, true)).toBe(600);
    expect(store.heightAt(rows, 1, false)).toBe(MAX_AUTO_ROW_HEIGHT);
    expect(store.heightAt(rows, 1, true)).toBe(600);

    store.setMaxHeight(100);

    expect(store.heightAt(rows, 0, true)).toBe(100);
  });

  it('потолок не выше 0xFFFE, NaN — потолок по умолчанию', () => {
    const { store, rows, report } = setup();
    store.setMaxHeight(Infinity);
    report(0, 'a', 100_000);

    expect(store.heightAt(rows, 0, true)).toBe(0xfffe);

    store.setMaxHeight(NaN);

    expect(store.heightAt(rows, 0, true)).toBe(MAX_AUTO_ROW_HEIGHT);
  });

  it('внутри кадра высоты не меняются: все колонки кадра рисуются с одними высотами', () => {
    const { store, rows, onChange, endFrame } = setup();
    store.reporter(rows[0]!, 0, 'a', false).report(100, 70);

    expect(store.heightAt(rows, 0, true)).toBe(0);
    expect(onChange).not.toHaveBeenCalled();

    endFrame();

    expect(store.heightAt(rows, 0, true)).toBe(70);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('замеры кадра — один коммит и одно уведомление', () => {
    const { store, rows, onChange, endFrame } = setup();
    store.reporter(rows[0]!, 0, 'a', false).report(100, 70);
    store.reporter(rows[1]!, 1, 'a', false).report(100, 80);
    store.reporter(rows[1]!, 1, 'b', false).report(100, 90);

    endFrame();

    expect(store.heightAt(rows, 0, true)).toBe(70);
    expect(store.heightAt(rows, 1, true)).toBe(90);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('уведомляет, только когда высота строки для glide изменилась', () => {
    const { report, onChange } = setup();

    report(0, 'a', 15);
    expect(onChange).not.toHaveBeenCalled();

    report(0, 'b', 50);
    expect(onChange).toHaveBeenCalledTimes(1);

    report(1, 'a', 50);
    report(1, 'b', 30);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('ячейку при той же ширине второй раз не меряют, при новой — меряют', () => {
    const { store, rows, report } = setup();
    report(0, 'a', 40);
    const reporter = store.reporter(rows[0]!, 0, 'a', false);

    expect(reporter.needsHeight(100)).toBe(false);
    expect(reporter.needsHeight(150)).toBe(true);
  });

  it('ресайз колонки: высота строки пересчитывается из ячеек', () => {
    const { store, rows, report } = setup();
    report(0, 'a', 100);
    report(0, 'b', 60);

    report(0, 'a', 40, 300);

    expect(store.heightAt(rows, 0, true)).toBe(60);
  });

  it('ресайз сбрасывает замеры только этой колонки', () => {
    const { store, rows, report } = setup();
    report(0, 'a', 40);
    report(0, 'b', 60);

    report(0, 'a', 30, 300);

    expect(store.reporter(rows[0]!, 0, 'b', false).needsHeight(100)).toBe(
      false,
    );
  });

  it('убрали колонку: видимая строка пересчитывается, строка за экраном — до показа прежняя', () => {
    const { store, rows, report } = setup();
    report(0, 'a', 40);
    report(0, 'b', 90);
    report(1, 'a', 40);
    report(1, 'b', 90);
    store.heightAt(rows, 1, false);

    store.setColumns(['a']);

    expect(store.heightAt(rows, 0, true)).toBe(40);
    expect(store.heightAt(rows, 1, false)).toBe(90);
    expect(store.heightAt(rows, 1, true)).toBe(40);
  });

  it('блок на несколько колонок хранится со своей шириной', () => {
    const { store, rows, report } = setup();
    report(0, 'a', 40, 100);
    report(1, 'a', 80, 250, true);

    expect(store.heightAt(rows, 1, true)).toBe(80);
    expect(store.reporter(rows[1]!, 1, 'a', true).needsHeight(250)).toBe(false);
    expect(store.reporter(rows[1]!, 1, 'a', true).needsHeight(300)).toBe(true);
    expect(store.reporter(rows[0]!, 0, 'a', false).needsHeight(100)).toBe(
      false,
    );
  });

  it('ячейку разъединили или объединили: высота строки — по свежему замеру, не по прежнему', () => {
    const { store, rows, report } = setup();

    report(0, 'a', 100, 200, true);
    report(0, 'a', 40, 100);
    expect(store.heightAt(rows, 0, true)).toBe(40);

    report(0, 'a', 30, 200, true);
    expect(store.heightAt(rows, 0, true)).toBe(30);
  });

  it('новый массив строк (сортировка, подгрузка): высоты по объекту строки сохраняются', () => {
    const { store, rows, report } = setup();
    report(0, 'a', 40);
    report(2, 'a', 70);

    const sorted = [rows[2]!, rows[1]!, rows[0]!];

    expect(store.heightAt(sorted, 0, false)).toBe(70);
    expect(store.heightAt(sorted, 2, false)).toBe(40);
  });

  it('invalidate: до перемера строка держит прежнюю высоту, после — свежую', () => {
    const { store, rows, report, onChange } = setup();
    report(0, 'a', 120);
    onChange.mockClear();

    store.invalidate();

    expect(store.heightAt(rows, 0, true)).toBe(120);
    expect(onChange).not.toHaveBeenCalled();
    expect(store.reporter(rows[0]!, 0, 'a', false).needsHeight(100)).toBe(true);

    report(0, 'a', 40);

    expect(store.heightAt(rows, 0, true)).toBe(40);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('invalidate колонки перемеряет только её ячейки', () => {
    const { store, rows, report } = setup();
    report(0, 'a', 40);
    report(0, 'b', 60);

    store.invalidate(['a']);

    expect(store.reporter(rows[0]!, 0, 'a', false).needsHeight(100)).toBe(true);
    expect(store.reporter(rows[0]!, 0, 'b', false).needsHeight(100)).toBe(
      false,
    );
  });
});
