import { test } from '../fixtures';
import type { Cell, GridPage } from '../grid';

// Случайные серии действий с фиксированным зерном: повтор падения один в один
// через REDRAW_SEED=<зерно>. Виды кадров не ограничиваем, проверяется только
// совпадение с полным кадром (после каждого шага или в конце серии).
const STANDS = {
  basic: 'локальные-компоненты-tablecanvas-redraw--basic',
  sticky: 'локальные-компоненты-tablecanvas-redraw--sticky',
  merged: 'локальные-компоненты-tablecanvas-redraw--merged',
};
const STEPS = Number(process.env.REDRAW_RANDOM_STEPS ?? 50);
const SEED = Number(process.env.REDRAW_SEED ?? 20261116);
const COLS = 14;
const ROWS = 60;

const seeded = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
};

type Action = { name: string; run: (grid: GridPage) => Promise<void> };

function plan(seed: number): Action[] {
  const random = seeded(seed);
  const pick = <T>(items: readonly T[]): T =>
    items[Math.floor(random() * items.length)] as T;
  const cell = (): Cell => [
    Math.floor(random() * COLS),
    Math.floor(random() * ROWS),
  ];
  const near = (): Cell => [
    Math.floor(random() * 8),
    Math.floor(random() * 14),
  ];
  const keys = [
    'ArrowDown',
    'ArrowUp',
    'ArrowLeft',
    'ArrowRight',
    'Shift+ArrowDown',
    'Shift+ArrowRight',
    'Shift+ArrowUp',
    'PageDown',
    'PageUp',
    'Home',
    'End',
    'Escape',
  ];
  const makers: Array<() => Action> = [
    () => {
      const at = near();
      return { name: `наведение [${at}]`, run: (g) => g.hover(at) };
    },
    () => {
      const at = near();
      return { name: `клик [${at}]`, run: (g) => g.click(at) };
    },
    () => {
      const at = near();
      return {
        name: `Shift+клик [${at}]`,
        run: (g) => g.click(at, { modifiers: ['Shift'] }),
      };
    },
    () => {
      const at = near();
      return {
        name: `Ctrl+клик [${at}]`,
        run: (g) => g.click(at, { modifiers: ['Control'] }),
      };
    },
    () => {
      const key = pick(keys);
      return { name: key, run: (g) => g.press(key) };
    },
    () => {
      const from = near();
      const to = near();
      return {
        name: `протяжка [${from}] в [${to}]`,
        run: (g) => g.drag(from, to),
      };
    },
    () => {
      const dy = Math.round((random() - 0.5) * 600);
      return { name: `колесо ${dy}`, run: (g) => g.wheel(dy) };
    },
    () => {
      const dx = Math.round((random() - 0.5) * 600);
      return { name: `колесо вбок ${dx}`, run: (g) => g.wheel(0, dx) };
    },
    () => ({ name: 'мышь ушла', run: (g) => g.leave() }),
    () => {
      const col = Math.floor(random() * 8);
      return { name: `шапка ${col}`, run: (g) => g.click([col, -1]) };
    },
    () => {
      const at = cell();
      return {
        name: `наведение далеко [${at}]`,
        run: (g) => g.hover(at).catch(() => undefined),
      };
    },
  ];
  return Array.from({ length: STEPS }, () => pick(makers)());
}

for (const [name, stand] of Object.entries(STANDS)) {
  test(`случайная серия на стенде ${name}, зерно ${SEED}`, async ({ grid }) => {
    test.info().annotations.push({ type: 'seed', description: String(SEED) });
    await grid.open(stand, { serviceColumns: 1 });
    const actions = plan(SEED + name.length);
    for (const [index, action] of actions.entries()) {
      await grid.step(`${index + 1}. ${action.name}`, () => action.run(grid));
    }
    await grid.finish();
  });
}
