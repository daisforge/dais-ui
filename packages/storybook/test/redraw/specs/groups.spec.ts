import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Группы колонок: уровень 1 (Основное, Подразделение, Деньги, Месяцы), внутри Месяцев
// ещё два полугодия. Строка -2 это нижний ряд групп, -3 верхний.
const STAND = 'локальные-компоненты-tablecanvas-redraw--groups';

const rowsOnly: FrameExpectation = {
  kinds: ['damage'],
  header: false,
  maxShare: 0.25,
};
const headerOnly: FrameExpectation = { kinds: ['damage'], header: true };
// Шапку не проверяем: в шапке групп выделение отмечается и на уровне группы.
const partial = (_header: boolean): FrameExpectation => ({
  kinds: ['selection', 'damage'],
  maxShare: 0.5,
});
const full: FrameExpectation = { kinds: ['full', 'selection', 'damage'] };

test.describe('группы колонок', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.prime();
  });

  test('наведение на шапки колонок и групп', async ({ grid }) => {
    await grid.step('шапка колонки 1', () => grid.hover([1, -1]), headerOnly);
    await grid.step('шапка колонки 2', () => grid.hover([2, -1]), headerOnly);
    await grid.step(
      'группа над колонкой 2',
      () => grid.hover([2, -2]),
      headerOnly,
    );
    await grid.step(
      'группа над колонкой 6',
      () => grid.hover([6, -2]),
      headerOnly,
    );
    await grid.step(
      'верхняя группа Месяцы',
      () => grid.hover([6, -3]),
      headerOnly,
    );
    await grid.step('в тело', () => grid.hover([6, 2]), { kinds: ['damage'] });
    await grid.step('снова в шапку', () => grid.hover([7, -1]), headerOnly);
    await grid.finish();
  });

  test('выделение под группами', async ({ grid }) => {
    await grid.step('клик', () => grid.click([2, 2]), partial(true));
    await grid.step(
      'вправо в другую группу',
      () => grid.press('ArrowRight'),
      partial(true),
    );
    await grid.step(
      'вправо ещё',
      () => grid.press('ArrowRight'),
      partial(true),
    );
    await grid.step(
      'Shift+вправо через группу',
      () => grid.press('Shift+ArrowRight'),
      partial(true),
    );
    await grid.step('вниз', () => grid.press('ArrowDown'), partial(false));
    await grid.step('клик по шапке колонки', () => grid.click([3, -1]), full);
    await grid.step('клик по группе', () => grid.click([3, -2]), full);
    await grid.step('клик в тело после групп', () => grid.click([1, 1]), full);
    await grid.step('наведение на строку', () => grid.hover([4, 3]), rowsOnly);
    await grid.finish();
  });
});
