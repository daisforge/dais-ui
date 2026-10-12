/**
 * Состояния цветов таблицы — hover, active, hover + active — из семантических токенов темы.
 * Версия 1: вход и выход в hex, все вычисления в OKLCH. Без зависимостей.
 *
 * Модель: каждый цвет таблицы = семантический токен темы в одном из состояний
 * rest, hover, hover2, active (= выделение), hoverActive. Все выходные цвета непрозрачные:
 * в канвасе ничего не накладывается в рантайме, наложение просчитано заранее.
 *
 * Шаг 1. Группа семантического токена по префиксу имени: surface | text | outline | data | background.
 * Шаг 2. Правило группы:
 *   surface, data (заливки)   — hover считается формулой «шаг по лучу» от опоры темы
 *                               (для произвольного hex из themeOverride потребителя — fillStates);
 *                               у фона ячейки (surface-solid-card) хромы нет, луч не определён —
 *                               направление берётся у surface-solid-primary той же темы;
 *   text, outline             — пока без формулы: собственные -hover/-active темы, иначе токен как есть
 *                               (правило для «чернил» будет отдельным, после цветов ячеек);
 *   background                — статичные цвета (затухание), состояний нет.
 * Шаг 3. Состояния заливки (макет «Выделение ячеек»):
 *   hover        = +1δ по лучу; δ = 0.025 × множитель темы
 *   active       = выделение: surface-transparent-accent, наложенный на цвет покоя (sRGB-композит,
 *                  как компонент Selection Area в макете) — работает поверх любой подложки
 *   hoverActive  = +1δ по лучу от цвета выделения: hover показывается и на выделенных ячейках
 *                  (макет «Выделение ячеек» говорит обратное — это ошибка макета, правится 18.09)
 *   hover2       = ещё +1δ по тому же лучу от hover (+2δ от покоя): выбранная строка
 *                  (highlightActiveType = 'row') под курсором — нажатый чекбокс в ней и цветные ячейки в ней
 *                  (решение 07.10). Выбранная строка в покое красится как отмеченная (× rest), нажатый
 *                  чекбокс в ней — × hover, цветные ячейки в ней — свой hover; наложение выделения
 *                  остаётся только у выделенной области.
 *
 * Формула «шаг по лучу» (вывод — table-states-formula.md). Опора A: белый (L = 1) в светлых темах,
 * чёрный (L = 0) в тёмных; направляющий B — токен. При постоянном тоне:
 *   σ = C_B / |L_B − L_A|,  ΔL = d / √(1 + σ²),  L′ = L_P ± ΔL (от опоры),  C′ = σ·|L′ − L_A|,  h′ = h_B
 * ΔEok(токен, состояние) = 100·d ровно. Выход за sRGB (только у насыщенных цветов) снимается
 * уменьшением хромы при тех же L′ и h′.
 */

// ─── Темы ───

export const THEMES = [
  'light',
  'dark',
  'betaCoreLight',
  'betaCoreDark',
  'highContrastLight',
  'highContrastDark',
] as const;

export type ThemeName = (typeof THEMES)[number];
export type ColorMode = 'light' | 'dark';

/** Настройки темы: режим (задаёт опору и направление шага) и множитель ступени. */
export type ThemeSetting = {
  mode: ColorMode;
  /** 1 — светлые, 1.2 — тёмные (умолчание по режиму); для контрастной темы подбирается отдельно. */
  stepFactor?: number;
  note?: string;
};
export type ThemeSettings = Record<ThemeName, ThemeSetting>;

// ─── Параметры правила ───

/** Ступень δ в единицах OKLab (= ΔEok / 100). Порог заметности ≈ 0.02. */
export const STEP = 0.025;

/** Множитель ступени по режиму темы. */
export const STEP_FACTOR: Record<ColorMode, number> = { light: 1, dark: 1.2 };

/** Ниже этой хромы луч не определён — направление берётся у surface-solid-primary. */
export const ACHROMATIC_CHROMA = 0.004;

// ─── Типы входа и выхода ───

export type TokenGroup =
  | 'surface'
  | 'text'
  | 'outline'
  | 'data'
  | 'background'
  | 'other';

/** Как таблица использует цвет: заливка считается формулой, остальное берётся из темы. */
export type TokenUsage = 'fill' | 'text' | 'outline' | 'static';

export type ThemeValues = Partial<Record<ThemeName, string | null>>;

/** Семантический токен темы: имя как в CSS темы и hex по темам. */
export type SourceToken = {
  name: string;
  values: ThemeValues;
  /** Собственные состояния темы — используются для text / outline (например text-primary-hover). */
  hover?: ThemeValues;
  active?: ThemeValues;
  hoverActive?: ThemeValues;
};

/**
 * Токены темы, нужные формуле у каждой темы (из той же таблицы токенов):
 * card — surface-solid-card (фон ячейки), primary — surface-solid-primary (луч для фона без хромы),
 * selection — surface-transparent-accent (полупрозрачная заливка выделения).
 */
export type CellTokens = {
  card: SourceToken;
  primary: SourceToken;
  selection: SourceToken;
};

/** rest есть всегда; hover и hover2 null без surface-solid-primary у фона, active и hoverActive null без surface-transparent-accent. */
export type States = {
  rest: string;
  hover: string | null;
  hover2: string | null;
  active: string | null;
  hoverActive: string | null;
};
export type StateName = keyof States;
export type ThemeStates = Record<ThemeName, States | null>;

/** Цвет таблицы = семантический токен в состоянии. `paints` — что красит, для документации. */
export type TableColorEntry<S extends string = string> = {
  source: S;
  state: StateName;
  /** Умолчание — по группе токена: surface, data → fill; text → text; outline → outline; background → static. */
  usage?: TokenUsage;
  paints?: string;
};
export type TableColorMap<S extends string = string> = Record<
  string,
  TableColorEntry<S>
>;

// ─── Группа и использование ───

const normalize = (name: string) =>
  name.replace(/^--/, '').replace(/[-_]/g, '').toLowerCase();

/** Группа семантического токена по префиксу имени. */
export const detectGroup = (tokenName: string): TokenGroup => {
  const n = normalize(tokenName);
  if (n.startsWith('surface')) return 'surface';
  if (
    n.startsWith('text') ||
    n.startsWith('inversetext') ||
    /^on(dark|light)text/.test(n)
  )
    return 'text';
  if (n.startsWith('outline')) return 'outline';
  if (n.startsWith('data')) return 'data';
  if (n.startsWith('background')) return 'background';
  return 'other';
};

/** Использование по умолчанию — из группы токена. */
export const defaultUsage = (group: TokenGroup): TokenUsage =>
  group === 'text'
    ? 'text'
    : group === 'outline'
    ? 'outline'
    : group === 'background'
    ? 'static'
    : 'fill';

/** Токен — фон ячейки? Для него луч задаёт surface-solid-primary. */
export const isCardToken = (tokenName: string) =>
  normalize(tokenName) === 'surfacesolidcard';

// ─── Преобразования цвета ───

type Oklch = { l: number; c: number; h: number };

const parseHex = (hex: string): [number, number, number, number] => {
  let h = hex.trim().replace('#', '');
  if (h.length === 3)
    h = h
      .split('')
      .map((ch) => ch + ch)
      .join('');
  if (h.length === 6) h += 'FF';
  if (!/^[0-9a-fA-F]{8}$/.test(h)) throw new Error(`Не hex: ${hex}`);
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

/** Цвет с альфой → непрозрачный, наложенный на фон (sRGB, 8 бит). */
export const flattenHex = (hex: string, backgroundHex = '#FFFFFF'): string => {
  const fg = parseHex(hex);
  const bg = parseHex(backgroundHex);
  const a = fg[3];
  return `#${[0, 1, 2]
    .map((i) => toHex2(Math.round((fg[i] * a + bg[i] * (1 - a)) * 255) / 255))
    .join('')
    .toUpperCase()}`;
};

export const hexToOklch = (hex: string): Oklch => {
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

const toLinearRgb = ({ l, c, h }: Oklch): [number, number, number] => {
  const A = c * Math.cos((h * Math.PI) / 180);
  const B = c * Math.sin((h * Math.PI) / 180);
  const l_ = (l + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m_ = (l - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s_ = (l - 0.0894841775 * A - 1.291485548 * B) ** 3;
  return [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
};

const inGamut = (rgb: number[]) =>
  rgb.every((v) => v >= -1e-6 && v <= 1 + 1e-6);

/** OKLCH → hex. Вне sRGB хрома уменьшается при тех же L и h (как gamut mapping в CSS). */
export const oklchToHex = (color: Oklch): string => {
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
    .join('')
    .toUpperCase()}`;
};

// ─── Формула ───

/**
 * Шаг d по лучу «опора → токен». Опора: белый в светлых темах, чёрный в тёмных.
 * slopeHex — направляющий цвет вместо базы (для фона без хромы). База располагается на луче
 * по своей светлоте; её собственная хрома не участвует.
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

/** ΔEok × 100 между двумя hex — для проверок. */
export const deltaE = (hexA: string, hexB: string): number => {
  const toLab = (hex: string) => {
    const { l, c, h } = hexToOklch(hex);
    return [
      l,
      c * Math.cos((h * Math.PI) / 180),
      c * Math.sin((h * Math.PI) / 180),
    ];
  };
  const [a, b] = [toLab(hexA), toLab(hexB)];
  return 100 * Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
};

// ─── Состояния токена ───

const pick = (values: ThemeValues | undefined, theme: ThemeName) =>
  values?.[theme] ?? null;

/**
 * Пять состояний семантического токена в одной теме.
 * null — нет токена или фона ячейки в теме; если у фона нет surface-solid-primary, null только у производных состояний.
 */
export const deriveThemeStates = (
  source: SourceToken,
  usage: TokenUsage,
  theme: ThemeName,
  settings: ThemeSettings,
  cell: CellTokens,
): States | null => {
  const raw = pick(source.values, theme);
  const cardRaw = pick(cell.card.values, theme);
  const setting = settings[theme];
  if (!raw || !cardRaw || !setting) return null;
  const card = flattenHex(cardRaw);

  // text / outline / static: формула не применяется, состояния — из темы, иначе токен
  if (usage !== 'fill') {
    const own = (v: ThemeValues | undefined, fallback: string) => {
      const value = pick(v, theme);
      return value
        ? usage === 'text'
          ? value.toUpperCase()
          : flattenHex(value, card)
        : fallback;
    };
    const rest = usage === 'text' ? raw.toUpperCase() : flattenHex(raw, card);
    const hover = own(source.hover, rest);
    const active = own(source.active, rest);
    return {
      rest,
      hover,
      hover2: hover,
      active,
      hoverActive: own(source.hoverActive, active),
    };
  }

  return fillStates(raw, setting.mode, {
    stepFactor: setting.stepFactor,
    cardHex: card,
    primaryHex: pick(cell.primary.values, theme),
    selectionHex: pick(cell.selection.values, theme),
    achromatic: isCardToken(source.name),
  });
};

/**
 * Hover на выделенной ячейке: +1δ по лучу от цвета выделения. В цвете выделения обычно есть акцентная хрома,
 * и луч у него свой. Если наложение на тёплую подложку погасило хрому (warning под выделением), направление
 * берётся у surface-solid-primary, как для белого фона; без него шаг идёт по нейтральной оси.
 */
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

/**
 * Состояния произвольной заливки — для цветов, которые приходят в таблицу из themeOverride
 * потребителя (ячейка со статусом и т. п.). То же правило, что для токенов. Считать можно
 * в рантайме, функция без зависимостей; результат стоит кэшировать по hex.
 * hover2 — второй шаг по тому же лучу (+2δ от покоя): цвет ячейки в выбранной строке под курсором.
 *   cardHex      — фон ячейки темы: на него накладывается альфа входного цвета
 *   primaryHex   — surface-solid-primary: направление луча для цвета без хромы (белый фон)
 *   selectionHex — surface-transparent-accent темы (с альфой): без него active = null
 *   achromatic   — считать цвет фоном без хромы, даже если хрома чуть больше нуля (тёмный фон ячейки)
 */
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
): States => {
  const card = flattenHex(
    options.cardHex ?? (mode === 'light' ? '#FFFFFF' : '#000000'),
  );
  const token = flattenHex(hex, card);
  const delta = STEP * (options.stepFactor ?? STEP_FACTOR[mode]);
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

/** Выделение поверх произвольного цвета: sRGB-композит surface-transparent-accent на подложку. */
export const selectedHex = (cellHex: string, selectionHex: string): string =>
  flattenHex(selectionHex, cellHex);

/** Состояния токена по всем шести темам. */
export const deriveStates = (
  source: SourceToken,
  settings: ThemeSettings,
  cell: CellTokens,
  usage: TokenUsage = defaultUsage(detectGroup(source.name)),
): ThemeStates => {
  const out = {} as ThemeStates;
  for (const theme of THEMES)
    out[theme] = deriveThemeStates(source, usage, theme, settings, cell);
  return out;
};

/** Состояния всех семантических токенов: { токен: { тема: { rest, hover, hover2, active, hoverActive } } }. */
export const deriveAllStates = (
  sources: Record<string, SourceToken>,
  settings: ThemeSettings,
  cell: CellTokens,
): Record<string, ThemeStates> =>
  Object.fromEntries(
    Object.entries(sources).map(([key, source]) => [
      key,
      deriveStates(source, settings, cell),
    ]),
  );

// ─── Цвета таблицы ───

/**
 * Цвета таблицы по карте «ключ в коде → токен + состояние»:
 * { bgHeaderHovered: { light: '#DEF0FA', dark: '#0A212F', … } } — форма GLIDE_COLORS / CUSTOM_COLORS.
 */
export const buildTableColors = <S extends string>(
  map: TableColorMap<S>,
  sources: Record<S, SourceToken>,
  settings: ThemeSettings,
  cell: CellTokens,
): Record<string, Record<ThemeName, string | null>> => {
  const cache = new Map<string, ThemeStates>();
  const out: Record<string, Record<ThemeName, string | null>> = {};
  for (const [key, entry] of Object.entries(map) as [
    string,
    TableColorEntry<S>,
  ][]) {
    const source = sources[entry.source];
    if (!source)
      throw new Error(`Нет семантического токена ${entry.source} для ${key}`);
    const usage = entry.usage ?? defaultUsage(detectGroup(source.name));
    const cacheKey = `${entry.source}/${usage}`;
    let states = cache.get(cacheKey);
    if (!states) {
      states = deriveStates(source, settings, cell, usage);
      cache.set(cacheKey, states);
    }
    const s = states;
    out[key] = Object.fromEntries(
      THEMES.map((t) => [t, s[t]?.[entry.state] ?? null]),
    ) as Record<ThemeName, string | null>;
  }
  return out;
};
