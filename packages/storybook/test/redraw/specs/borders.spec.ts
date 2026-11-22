import { test } from '../fixtures';
import type { FrameExpectation } from '../grid';

// Свои рамки ячеек (у чётных колонок нет правой линии, у каждой третьей строки нижней),
// колонки с ресайзом, кнопка над таблицей скрывает и показывает колонку «Роль».
const STAND = 'локальные-компоненты-tablecanvas-redraw--borders';

const rowsOnly: FrameExpectation = {
  kinds: ['damage'],
  header: false,
  maxShare: 0.25,
};
const partial = (header: boolean): FrameExpectation => ({
  kinds: ['selection', 'damage'],
  header,
  maxShare: 0.5,
});
// Смена ширины или набора колонок меняет колонки, кадр целиком.
const columnsChanged: FrameExpectation = {
  kinds: ['full', 'blit', 'selection', 'damage'],
};

test.describe('рамки, ресайз и скрытие колонки', () => {
  test.beforeEach(async ({ grid }) => {
    await grid.open(STAND, { serviceColumns: 1 });
    await grid.prime();
  });

  test('наведение и выделение со своими рамками', async ({ grid }) => {
    for (let row = 0; row < 7; row += 1) {
      await grid.step(`строка ${row}`, () => grid.hover([2, row]), rowsOnly);
    }
    await grid.step('клик', () => grid.click([1, 2]), partial(true));
    await grid.step(
      'вниз через строку без нижней линии',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.step(
      'вправо через колонку без правой линии',
      () => grid.press('ArrowRight'),
      partial(true),
    );
    await grid.step(
      'протяжка по рамкам',
      () => grid.drag([0, 1], [5, 5]),
      partial(true),
    );
    await grid.step('прокрутка', () => grid.wheel(200), {
      kinds: ['blit', 'damage'],
    });
    await grid.step(
      'наведение после прокрутки',
      () => grid.hover([3, 9]),
      rowsOnly,
    );
    await grid.finish();
  });

  test('ресайз колонки мышью', async ({ grid }) => {
    await grid.step('клик', () => grid.click([2, 2]), partial(true));
    const header = await grid.bounds([1, -1]);
    const edge = {
      x: header.x + header.width - 1,
      y: header.y + header.height / 2,
    };
    await grid.step(
      'наведение на границу колонки',
      () => grid.hoverPoint(edge),
      {
        kinds: ['damage'],
        some: false,
      },
    );
    await grid.step(
      'расширить колонку',
      () => grid.dragPoints(edge, { x: edge.x + 60, y: edge.y }),
      columnsChanged,
    );
    // курсор уходит с шапки: снимается её подсветка, шапка перерисовывается
    await grid.step('наведение после ресайза', () => grid.hover([2, 4]), {
      kinds: ['damage'],
      maxShare: 0.25,
    });
    await grid.step(
      'клик после ресайза',
      () => grid.click([3, 3]),
      partial(true),
    );
    const wider = await grid.bounds([1, -1]);
    const edge2 = {
      x: wider.x + wider.width - 1,
      y: wider.y + wider.height / 2,
    };
    await grid.step(
      'сузить колонку',
      () => grid.dragPoints(edge2, { x: edge2.x - 80, y: edge2.y }),
      columnsChanged,
    );
    await grid.step(
      'стрелка после ресайза',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.finish();
  });

  test('скрыть и показать колонку извне', async ({ grid, page }) => {
    await grid.step('клик', () => grid.click([4, 2]), partial(true));
    await grid.step(
      'скрыть роль',
      () => page.getByRole('button', { name: 'Скрыть роль' }).click(),
      columnsChanged,
    );
    await grid.step(
      'наведение после скрытия',
      () => grid.hover([2, 3]),
      rowsOnly,
    );
    await grid.step(
      'клик после скрытия',
      () => grid.click([3, 3]),
      partial(true),
    );
    await grid.step(
      'показать роль',
      () => page.getByRole('button', { name: 'Показать роль' }).click(),
      columnsChanged,
    );
    await grid.step(
      'наведение после показа',
      () => grid.hover([3, 4]),
      rowsOnly,
    );
    // кнопка забрала фокус: возвращаем его таблице кликом
    await grid.step(
      'клик после показа',
      () => grid.click([4, 4]),
      partial(true),
    );
    await grid.step(
      'стрелка после показа',
      () => grid.press('ArrowDown'),
      partial(false),
    );
    await grid.finish();
  });
});
