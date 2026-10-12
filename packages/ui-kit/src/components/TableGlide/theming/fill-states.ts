/**
 * Считает, как выглядит цвет ячейки под курсором и в выделении, если этот
 * цвет задал потребитель (например, свой цвет статусной ячейки).
 *
 * Где используется: cell-fill-override.ts → resolveConsumerFillOverride,
 * вызывается из TableGlide.tsx для колонок с themeOverride.bgCell.
 *
 * Подробнее. Состояния: покой (rest), под курсором (hover), выбранная строка
 * под курсором (hover2), в выделении (active), в выделении под курсором
 * (hoverActive).
 *
 * Зачем. Все цвета палитры таблицы посчитаны заранее генератором
 * (table-colors.generated.ts). Но потребитель может задать ячейке свой цвет
 * (themeOverride.bgCell — например, цвет статуса), которого в палитре нет.
 * Его состояния считаются здесь, по той же формуле.
 *
 * Важно. Это копия формулы дизайнера из
 * generators/table-token-states/code/table-token-states.ts — только той её
 * части, что считает заливки. Править её можно только вместе с оригиналом:
 * тест fill-states.test.ts проверяет, что здесь получаются ровно те же
 * цвета, что в палитре. Даже «безобидная» правка округления сломает тест.
 *
 * Результат запоминается по паре «тема + цвет», поэтому расчёт идёт один раз
 * на каждый разный цвет, а не на каждую ячейку.
 */
import { TABLE_FILL_PARAMS, TableColorTheme } from './table-colors.generated';

export type CellFillStates = {
  rest: string;
  hover: string | null;
  /** На две ступени темнее покоя: цвет ячейки в выбранной строке под курсором (highlightActiveType='row'). */
  hover2: string | null;
  active: string | null;
  hoverActive: string | null;
};

type ColorMode = 'light' | 'dark';

/**
 * Размер одной ступени hover (в единицах цветового пространства OKLab).
 * 0.025 — разница, которую глаз уверенно замечает на любом цвете.
 */
const STEP = 0.025;
/**
 * Порог насыщенности, ниже которого цвет считается серым (белый, серый,
 * чёрный). У серого нет своего оттенка, поэтому направление, куда темнеть,
 * берётся у серого цвета темы (surface-solid-primary).
 */
const ACHROMATIC_CHROMA = 0.004;

// ─── Служебная математика цвета ───
// Перевод цвета между привычным #RRGGBB и пространством OKLCH. OKLCH
// описывает цвет тремя числами: светлота (L), насыщенность (C) и оттенок
// (h). В нём одинаковый сдвиг чисел выглядит для глаза одинаково заметным
// на любом цвете — поэтому формула состояний работает именно в нём.

type Rgba = [number, number, number, number];
type Oklch = { l: number; c: number; h: number };

const parseHex = (hex: string): Rgba => {
  let h = hex.trim().replace('#', '');
  if (h.length === 3)
    h = h
      .split('')
      .map((ch) => ch + ch)
      .join('');
  if (h.length === 6) h += 'FF';
  if (!/^[0-9a-fA-F]{8}$/.test(h)) throw new Error(`Не hex: ${hex}`);
  return [0, 2, 4, 6].map((i) => parseInt(h.slice(i, i + 2), 16) / 255) as Rgba;
};

const toHex2 = (v: number) =>
  Math.round(Math.min(1, Math.max(0, v)) * 255)
    .toString(16)
    .padStart(2, '0');

const toLinear = (c: number) =>
  c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;

const toGamma = (c: number) =>
  c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;

/** Полупрозрачный цвет → непрозрачный: каким он выглядит, положенный на фон. */
const flattenHex = (hex: string, backgroundHex = '#FFFFFF'): string => {
  const [fr, fg, fb, fa] = parseHex(hex);
  const [br, bg, bb] = parseHex(backgroundHex);
  const channel = (f: number, b: number) =>
    toHex2(Math.round((f * fa + b * (1 - fa)) * 255) / 255);
  return `#${channel(fr, br)}${channel(fg, bg)}${channel(fb, bb)}`.toUpperCase();
};

const hexToOklch = (hex: string): Oklch => {
  const [pr, pg, pb] = parseHex(hex);
  const [r, g, b] = [pr, pg, pb].map(toLinear) as [number, number, number];
  const l_ = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m_ = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s_ = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const l = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const bb = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
  return {
    l,
    c: Math.hypot(a, bb),
    h: ((Math.atan2(bb, a) * 180) / Math.PI + 360) % 360,
  };
};

const toLinearRgb = ({ l, c, h }: Oklch): [number, number, number] => {
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
};

const inGamut = (rgb: number[]) => rgb.every((v) => v >= -1e-6 && v <= 1 + 1e-6);

/**
 * Перевод цвета из OKLCH обратно в #RRGGBB.
 *
 * Подробнее. Если такой цвет экран показать не может (слишком насыщенный),
 * насыщенность уменьшается, а светлота и оттенок остаются прежними.
 */
const oklchToHex = (color: Oklch): string => {
  const base = { ...color, l: Math.min(1, Math.max(0, color.l)) };
  let rgb = toLinearRgb(base);
  if (!inGamut(rgb)) {
    let lo = 0;
    let hi = base.c;
    for (let i = 0; i < 24; i += 1) {
      const mid = (lo + hi) / 2;
      if (inGamut(toLinearRgb({ ...base, c: mid }))) lo = mid;
      else hi = mid;
    }
    rgb = toLinearRgb({ ...base, c: lo });
  }
  return `#${rgb
    .map((v) => toHex2(toGamma(Math.min(1, Math.max(0, v)))))
    .join('')}`.toUpperCase();
};

// ─── Формула состояний ───

/**
 * Делает цвет на ступень темнее (в светлой теме) или светлее (в тёмной).
 *
 * Подробнее. Цвет сдвигается на d «прочь от фона темы»: от белого в светлой
 * теме, от чёрного в тёмной. Оттенок не меняется, насыщенность растёт вместе
 * с удалением от фона — поэтому шаг одинаково заметен на любом цвете.
 * slopeHex — цвет, у которого брать направление вместо самого цвета (нужен
 * для серых цветов, у которых своего оттенка нет).
 */
const stepHex = (
  baseHex: string,
  d: number,
  mode: ColorMode,
  slopeHex?: string,
): string => {
  const base = hexToOklch(baseHex);
  const anchor = mode === 'light' ? 1 : 0;
  const slope = slopeHex ? hexToOklch(slopeHex) : base;
  const span = Math.abs(slope.l - anchor);
  const sigma = span > 1e-6 ? slope.c / span : 0;
  const dl = d / Math.sqrt(1 + sigma * sigma);
  const l = mode === 'light' ? base.l - dl : base.l + dl;
  return oklchToHex({ l, c: sigma * Math.abs(l - anchor), h: slope.h });
};

/** Цвет выделенной ячейки под курсором: цвет выделения, сдвинутый на одну ступень. */
const hoverOnSelection = (
  active: string | null,
  delta: number,
  mode: ColorMode,
  primary?: string,
): string | null => {
  if (!active) return null;
  const achromatic = hexToOklch(active).c < ACHROMATIC_CHROMA;
  return stepHex(active, delta, mode, achromatic ? primary : undefined);
};

/** Все пять состояний цвета ячейки — формула генератора, без запоминания результата. */
export const fillStates = (
  hex: string,
  mode: ColorMode,
  options: {
    stepFactor?: number;
    cardHex?: string;
    primaryHex?: string | null;
    selectionHex?: string | null;
    achromatic?: boolean;
  } = {},
): CellFillStates => {
  const card = flattenHex(
    options.cardHex ?? (mode === 'light' ? '#FFFFFF' : '#000000'),
  );
  const token = flattenHex(hex, card);
  const delta = STEP * (options.stepFactor ?? (mode === 'dark' ? 1.2 : 1));
  const active = options.selectionHex
    ? flattenHex(options.selectionHex, token)
    : null;
  const primary = options.primaryHex
    ? flattenHex(options.primaryHex, card)
    : undefined;
  const hoverActive = hoverOnSelection(active, delta, mode, primary);
  if (options.achromatic || hexToOklch(token).c < ACHROMATIC_CHROMA) {
    if (!primary)
      return { rest: token, hover: null, hover2: null, active, hoverActive };
    const hover = stepHex(token, delta, mode, primary);
    return {
      rest: token,
      hover,
      hover2: stepHex(hover, delta, mode, primary),
      active,
      hoverActive,
    };
  }
  const hover = stepHex(token, delta, mode);
  return {
    rest: token,
    hover,
    hover2: stepHex(hover, delta, mode),
    active,
    hoverActive,
  };
};

// ─── Запоминание результата ───

const cache = new Map<string, CellFillStates>();
/**
 * Предел запомненных цветов. Потребитель может брать цвета из данных, и их
 * может оказаться очень много. Когда предел достигнут, запомненное просто
 * очищается — пересчитать редкий цвет дёшево.
 */
const CACHE_LIMIT = 1024;

/**
 * Состояния цвета ячейки в текущей теме. Результат запоминается: для одного
 * и того же цвета расчёт выполняется один раз.
 */
export const getCellFillStates = (
  hex: string,
  theme: TableColorTheme,
): CellFillStates => {
  const key = `${theme}/${hex}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const params = TABLE_FILL_PARAMS[theme];
  const states = fillStates(hex, params.mode, {
    stepFactor: params.stepFactor,
    cardHex: params.cardHex,
    primaryHex: params.primaryHex,
    selectionHex: params.selectionHex,
  });
  if (cache.size >= CACHE_LIMIT) cache.clear();
  cache.set(key, states);
  return states;
};
