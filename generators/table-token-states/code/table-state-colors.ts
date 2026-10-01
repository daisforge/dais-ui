/**
 * Цвета состояний таблицы (hover, active, выделение, тинты) — одна формула в OKLCH.
 *
 * Вход: hex семантических токенов темы. Выход: hex всех цветов состояний.
 * Никаких подборов и итераций — только прямое вычисление.
 *
 * Формула «шаг по лучу». При фиксированном тоне цвет — точка на плоскости (L, C).
 * Луч идёт из опорной точки через базовый цвет: из белого (L = 1, C = 0) в светлых темах,
 * из чёрного (L = 0, C = 0) в тёмных. Состояние — шаг длиной d по лучу от базы:
 *
 *   σ  = C / |L − L_опоры|        насыщенность тинта (постоянна вдоль луча)
 *   ΔL = d / √(1 + σ²)
 *   L′ = L − ΔL (светлые) | L + ΔL (тёмные)
 *   C′ = σ · |L′ − L_опоры|
 *   h′ = h
 *
 * Тон постоянен, поэтому d совпадает с ΔEok / 100 (расстояние в OKLab).
 *
 * База располагается на луче по своей светлоте — её собственная хрома не участвует.
 * Для токенов она и так лежит на луче; у фона ячейки в тёмных темах (C ≈ 0.01) она
 * отбрасывается — разница ≤ 1 единицы канала. Векторная запись той же формулы
 * (удобна для CSS с hypot()): ΔL = d·|L_B − L_опоры| / n, ΔC = d·C_B / n,
 * n = √((L_B − L_опоры)² + C_B²), где B — направляющий цвет (сам токен или slopeHex).
 *
 * Полное описание с выводом, картой ролей и примерами: ../table-states-formula.md.
 * Итог отдаётся непрозрачным hex: Glide не разбирает oklch() в теме.
 */

export type ColorMode = 'light' | 'dark';

type Oklch = { l: number; c: number; h: number };

/** Шаги в единицах светлоты OKLCH (= ΔEok / 100). Порог заметности ≈ 0.02. */
export const STATE_STEPS = { hover: 0.025, active: 0.05 } as const;

/** В тёмных темах шаг увеличен. */
export const DARK_STEP_FACTOR = 1.2;

/** Расстояние тинта от фона ячейки для фонов без собственного токена. */
export const TINT_DISTANCE = {
  editable: { light: 0.035, dark: 0.085 },
  saved: { light: 0.031, dark: 0.069 },
} as const;

/** Семантические токены темы, от которых считаются цвета таблицы. */
export type TableSemanticTokens = {
  surfaceSolidCard: string;
  surfaceSolidPrimary: string;
  backgroundPrimary: string;
  surfaceAccentMinor: string;
  surfaceAccent: string;
  outlineAccent: string;
  outlineSolidPrimary: string;
  textPrimary: string;
  surfaceNegative: string;
  dataYellow: string;
};

// ─── Преобразования цвета ───

const parseHex = (hex: string): [number, number, number, number] => {
  let h = hex.replace('#', '');
  if (h.length === 6) h += 'FF';
  return [0, 2, 4, 6].map((i) => parseInt(h.slice(i, i + 2), 16) / 255) as [
    number,
    number,
    number,
    number,
  ];
};

const toHex2 = (v: number) =>
  Math.round(Math.min(1, Math.max(0, v)) * 255)
    .toString(16)
    .padStart(2, '0');

const toLinear = (c: number) =>
  c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;

const toGamma = (c: number) =>
  c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;

/** Прозрачный цвет → непрозрачный, наложенный на фон (sRGB, 8 бит). */
export const flattenHex = (hex: string, backgroundHex = '#FFFFFF'): string => {
  const fg = parseHex(hex);
  const bg = parseHex(backgroundHex);
  const a = fg[3];
  return (
    '#' +
    [0, 1, 2]
      .map((i) => toHex2(Math.round((fg[i] * a + bg[i] * (1 - a)) * 255) / 255))
      .join('')
      .toUpperCase()
  );
};

const hexToOklch = (hex: string): Oklch => {
  const [r, g, b] = parseHex(hex).slice(0, 3).map(toLinear);
  const l_ = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m_ = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s_ = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const l = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const A = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
  return {
    l,
    c: Math.hypot(A, B),
    h: ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360,
  };
};

/** OKLCH → hex. Вне sRGB каналы обрезаются (для токенов таблицы не случается). */
const oklchToHex = ({ l, c, h }: Oklch): string => {
  const A = c * Math.cos((h * Math.PI) / 180);
  const B = c * Math.sin((h * Math.PI) / 180);
  const l_ = (l + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m_ = (l - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s_ = (l - 0.0894841775 * A - 1.291485548 * B) ** 3;
  const rgb = [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
  return (
    '#' +
    rgb
      .map((v) => toHex2(toGamma(Math.min(1, Math.max(0, v)))))
      .join('')
      .toUpperCase()
  );
};

// ─── Формула ───

/**
 * Шаг длиной d по лучу «опора → база». Опора: белый в светлых темах, чёрный в тёмных.
 * slopeHex — взять насыщенность и тон у другого цвета (нужно для белого/чёрного фона,
 * у которого хромы нет и луч не определён).
 */
export const stepHex = (
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

/**
 * Тинт: шаг длиной d по лучу от фона ячейки (без хромы) к токену семейства.
 * Тон — у токена, поэтому смесь не проходит через серую зону.
 */
export const tintHex = (
  cellHex: string,
  familyHex: string,
  d: number,
): string => {
  const cell = hexToOklch(cellHex);
  const family = hexToOklch(familyHex);
  const span = Math.abs(family.l - cell.l);
  const sigma = span > 1e-6 ? family.c / span : 0;
  const dl = d / Math.sqrt(1 + sigma * sigma);
  const l = cell.l + Math.sign(family.l - cell.l) * dl;
  return oklchToHex({ l, c: sigma * dl, h: family.h });
};

// ─── Цвета таблицы ───

/**
 * Все цвета состояний таблицы для темы.
 *
 * Голубая лесенка от surface-accent-minor:
 *   ступень 1 — токен; 2 — +hover; 3 — +active; 4 — +active +hover.
 * Активный слой = +2 ступени к подложке; hover = +1 ступень к текущему состоянию.
 */
export const getTableStateColors = (
  tokens: TableSemanticTokens,
  mode: ColorMode,
) => {
  const k = mode === 'dark' ? DARK_STEP_FACTOR : 1;
  const hover = STATE_STEPS.hover * k;
  const active = STATE_STEPS.active * k;

  const card = flattenHex(tokens.surfaceSolidCard);
  const onCard = (hex: string) => flattenHex(hex, card);

  const level1 = onCard(tokens.surfaceAccentMinor);
  const level2 = stepHex(level1, hover, mode);
  const level3 = stepHex(level1, active, mode);
  const level4 = stepHex(level1, active + hover, mode);

  const editable = tintHex(
    card,
    onCard(tokens.dataYellow),
    TINT_DISTANCE.editable[mode],
  );
  const saved = tintHex(
    card,
    onCard(tokens.surfaceAccent),
    TINT_DISTANCE.saved[mode],
  );

  return {
    // каркас — токены как есть
    bgCell: card,
    textDark: tokens.textPrimary,
    borderColor: onCard(tokens.outlineSolidPrimary),
    accentColor: onCard(tokens.outlineAccent),
    errorOutlineColor: onCard(tokens.surfaceNegative),
    bgHeader: level1,
    bgHeaderHasFocus: level1,
    bgGroupHeader: level1,
    selectionCheckboxBg: level1,
    selectionServiceBg: level1,

    // наведение
    bgRowHovered: stepHex(
      card,
      hover,
      mode,
      onCard(tokens.surfaceSolidPrimary),
    ),
    bgServiceRowHovered: level2,
    bgSelectedRowHovered: level2,
    bgHeaderHovered: level2,
    bgGroupHeaderHovered: level2,
    bgHeaderSelectedHovered: level4,
    selectionActiveHoveredBg: level3,
    selectionActiveCheckboxHoveredBg: level4,
    selectionServiceActiveHoveredBg: level4,

    // выделение
    accentLight: level2,
    selectionActiveBg: level2,
    selectionActiveCheckboxBg: level3,
    selectionServiceActiveBg: level3,

    // редактирование
    bgEditableCell: editable,
    bgEditableCellHovered: stepHex(editable, hover, mode),
    editedSuccessfullyCellColor: saved,
    editedSuccessfullyCellHoverColor: stepHex(saved, hover, mode),

    // затухание при скролле
    fadeWhite: card,
    fadeGray: onCard(tokens.backgroundPrimary),
  };
};

export type TableStateColors = ReturnType<typeof getTableStateColors>;
