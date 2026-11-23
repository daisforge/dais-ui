/**
 * Заглушка Charts UI: минимальные SVG-графики на чистой разметке.
 *
 * Специально без styled-components и без JS-обработчиков: тот же JSX
 * рендерится в предпросмотр и через renderToStaticMarkup в HTML-файл,
 * подсказки при наведении работают в файле через <title> и CSS :hover.
 * Когда приедет Charts UI, его компоненты подключаются в ChartRenderer
 * вместо этих — контракт ChartData остаётся тем же.
 */
import { textPrimary, textSecondary } from '@ui-kit/tokens';
import React from 'react';

import type { ChartData } from '../engine/aggregate';
import { formatCompact, formatNumber } from '../engine/aggregate';
import type { ChartKind } from '../engine/spec';
import { ChartTheme, seriesColor } from './palette';

const WIDTH = 520;
const HEIGHT = 240;
const PAD = { top: 12, right: 12, bottom: 28, left: 56 };
const PLOT_W = WIDTH - PAD.left - PAD.right;
const PLOT_H = HEIGHT - PAD.top - PAD.bottom;

type ChartProps = {
  data: ChartData;
  theme: ChartTheme;
  /** Цвет поверхности под графиком: им рисуются зазоры между заливками */
  surface: string;
  stacked?: boolean;
};

const lastTick = (ticks: number[]) => ticks[ticks.length - 1] ?? 1;

/** «Красивые» деления оси: 0, 20, 40… */
function niceTicks(max: number, count = 4): number[] {
  if (max <= 0) return [0, 1];
  const raw = max / count;
  const power = 10 ** Math.floor(Math.log10(raw));
  const step =
    [1, 2, 2.5, 5, 10].map((m) => m * power).find((s) => s >= raw) ?? raw;
  const ticks: number[] = [];
  for (let value = 0; value <= max + step * 0.001; value += step)
    ticks.push(value);
  if (lastTick(ticks) < max) ticks.push(lastTick(ticks) + step);
  return ticks;
}

const gridStroke = 'var(--outline-solid-secondary, rgba(128,128,128,.25))';

function Axes({
  ticks,
  categories,
  xFor,
}: {
  ticks: number[];
  categories: string[];
  xFor: (index: number) => number;
}) {
  const max = lastTick(ticks);
  // Подписи не должны наезжать друг на друга (~7px на символ): до 12
  // категорий укорачиваем с многоточием, больше — прореживаем
  const CHAR = 7;
  const slot = PLOT_W / Math.max(categories.length, 1);
  const longest = Math.max(...categories.map((c) => c.length), 1);
  const maxChars = Math.max(3, Math.floor((slot - 6) / CHAR));
  // Укорачивать имеет смысл, только если от подписи остаётся читаемая часть;
  // короткие подписи вроде «янв 25» лучше проредить
  const truncate =
    categories.length <= 12 && (longest <= maxChars || maxChars >= 6);
  const every = truncate
    ? 1
    : Math.max(
        1,
        Math.ceil((categories.length * (longest * CHAR + 8)) / PLOT_W),
      );
  const label = (text: string) =>
    truncate && text.length > maxChars
      ? `${text.slice(0, maxChars - 1)}…`
      : text;
  return (
    <g fontSize={12} fill={textSecondary}>
      {ticks.map((tick) => {
        const y = PAD.top + PLOT_H - (tick / max) * PLOT_H;
        return (
          <g key={tick}>
            <line
              x1={PAD.left}
              x2={WIDTH - PAD.right}
              y1={y}
              y2={y}
              stroke={gridStroke}
              strokeWidth={1}
            />
            <text x={PAD.left - 8} y={y + 4} textAnchor="end">
              {formatCompact(tick)}
            </text>
          </g>
        );
      })}
      {categories.map((category, index) =>
        index % every === 0 ? (
          <text
            key={category}
            x={xFor(index)}
            y={HEIGHT - 8}
            // Крайние подписи прижимаем к краю, чтобы они не обрезались
            textAnchor={(() => {
              const half = (label(category).length * CHAR) / 2;
              if (xFor(index) + half > WIDTH) return 'end';
              if (xFor(index) - half < 0) return 'start';
              return 'middle';
            })()}
          >
            {label(category)}
            <title>{category}</title>
          </text>
        ) : null,
      )}
    </g>
  );
}

/** Прямоугольник со скруглёнными верхними углами, низ на базовой линии */
function barPath(x: number, y: number, w: number, h: number, r = 4) {
  const radius = Math.min(r, w / 2, h);
  return `M${x},${y + h}V${y + radius}Q${x},${y} ${x + radius},${y}H${
    x + w - radius
  }Q${x + w},${y} ${x + w},${y + radius}V${y + h}Z`;
}

function BarChart({ data, theme, surface, stacked }: ChartProps) {
  const { categories, series } = data;
  const totals = categories.map((_, i) =>
    stacked
      ? series.reduce((sum, s) => sum + Math.max(0, s.values[i] ?? 0), 0)
      : Math.max(...series.map((s) => s.values[i] ?? 0)),
  );
  const ticks = niceTicks(Math.max(...totals, 0));
  const max = lastTick(ticks);
  const band = PLOT_W / categories.length;
  const groupW = band * 0.72;
  const barW = stacked ? groupW : Math.max(2, groupW / series.length - 2);
  const xFor = (i: number) => PAD.left + band * i + band / 2;
  const scale = (value: number) => (value / max) * PLOT_H;

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" role="img">
      <Axes ticks={ticks} categories={categories} xFor={xFor} />
      {categories.map((category, i) => {
        let offset = 0;
        return series.map((s, si) => {
          const h = scale(Math.max(0, s.values[i] ?? 0));
          const x = stacked
            ? xFor(i) - groupW / 2
            : xFor(i) - groupW / 2 + si * (barW + 2);
          const y = PAD.top + PLOT_H - h - offset;
          if (stacked) offset += h;
          const isTop = !stacked || si === series.length - 1;
          return (
            <path
              key={`${category}-${s.name}`}
              className="viz-mark"
              d={
                isTop
                  ? barPath(x, y, barW, h)
                  : `M${x},${y}h${barW}v${h}h${-barW}Z`
              }
              fill={seriesColor(theme, s.colorIndex)}
              stroke={stacked ? surface : 'none'}
              strokeWidth={stacked ? 1 : 0}
            >
              <title>{`${s.name} · ${category}: ${formatNumber(
                s.values[i] ?? 0,
              )}`}</title>
            </path>
          );
        });
      })}
    </svg>
  );
}

function LineChart({
  data,
  theme,
  area,
}: Pick<ChartProps, 'data' | 'theme'> & { area?: boolean }) {
  const { categories, series } = data;
  const ticks = niceTicks(Math.max(...series.flatMap((s) => s.values), 0));
  const max = lastTick(ticks);
  const step = categories.length > 1 ? PLOT_W / (categories.length - 1) : 0;
  const xFor = (i: number) =>
    categories.length > 1 ? PAD.left + step * i : PAD.left + PLOT_W / 2;
  const yFor = (value: number) => PAD.top + PLOT_H - (value / max) * PLOT_H;
  const showPoints = categories.length <= 24;

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" role="img">
      <Axes ticks={ticks} categories={categories} xFor={xFor} />
      {series.map((s) => {
        const color = seriesColor(theme, s.colorIndex);
        const points = s.values.map((v, i) => `${xFor(i)},${yFor(v)}`);
        return (
          <g key={s.name}>
            {area && (
              <path
                d={`M${xFor(0)},${PAD.top + PLOT_H}L${points.join('L')}L${xFor(
                  s.values.length - 1,
                )},${PAD.top + PLOT_H}Z`}
                fill={color}
                opacity={0.14}
              />
            )}
            <path
              d={`M${points.join('L')}`}
              fill="none"
              stroke={color}
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {showPoints &&
              s.values.map((v, i) => (
                // Точка видна, а область наведения шире самой точки
                // eslint-disable-next-line react/no-array-index-key
                <g key={i} className="viz-point">
                  <circle cx={xFor(i)} cy={yFor(v)} r={10} fill="transparent" />
                  <circle cx={xFor(i)} cy={yFor(v)} r={3} fill={color} />
                  <title>{`${s.name} · ${categories[i]}: ${formatNumber(
                    v,
                  )}`}</title>
                </g>
              ))}
          </g>
        );
      })}
    </svg>
  );
}

function PieChart({ data, theme, surface }: Omit<ChartProps, 'stacked'>) {
  const values = data.series[0]?.values ?? [];
  const total = values.reduce((a, b) => a + b, 0) || 1;
  const size = 220;
  const r = 96;
  const inner = 60;
  const c = size / 2;
  let angle = -Math.PI / 2;

  const arc = (from: number, to: number) => {
    const large = to - from > Math.PI ? 1 : 0;
    const p = (a: number, radius: number) =>
      `${c + radius * Math.cos(a)},${c + radius * Math.sin(a)}`;
    return `M${p(from, r)}A${r},${r} 0 ${large} 1 ${p(to, r)}L${p(
      to,
      inner,
    )}A${inner},${inner} 0 ${large} 0 ${p(from, inner)}Z`;
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} role="img">
        {values.map((value, i) => {
          const from = angle;
          const to = angle + (value / total) * Math.PI * 2;
          angle = to;
          return (
            <path
              key={data.categories[i]}
              className="viz-mark"
              d={arc(from, Math.max(from + 0.001, to - 0.0001))}
              fill={seriesColor(theme, i)}
              stroke={surface}
              strokeWidth={2}
            >
              <title>{`${data.categories[i]}: ${formatNumber(
                value,
              )} (${formatNumber((value / total) * 100)}%)`}</title>
            </path>
          );
        })}
        <text
          x={c}
          y={c - 2}
          textAnchor="middle"
          fontSize={18}
          fontWeight={600}
          fill={textPrimary}
        >
          {formatCompact(total)}
        </text>
        <text
          x={c}
          y={c + 16}
          textAnchor="middle"
          fontSize={11}
          fill={textSecondary}
        >
          всего
        </text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {values.map((value, i) => (
          <div
            key={data.categories[i]}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: seriesColor(theme, i),
              }}
            />
            <span style={{ color: textPrimary }}>{data.categories[i]}</span>
            <span style={{ color: textSecondary }}>
              {formatNumber(value)} · {formatNumber((value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Legend({ data, theme }: { data: ChartData; theme: ChartTheme }) {
  if (data.series.length < 2) return null;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px 16px',
        marginBottom: 8,
      }}
    >
      {data.series.map((s) => (
        <span
          key={s.name}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            color: textSecondary,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: seriesColor(theme, s.colorIndex),
            }}
          />
          {s.name}
        </span>
      ))}
    </div>
  );
}

/**
 * Точка подключения Charts UI: по типу из спецификации выбирает компонент.
 */
export function ChartRenderer({
  kind,
  ...props
}: ChartProps & { kind: ChartKind }) {
  if (kind === 'pie') return <PieChart {...props} />;
  return (
    <>
      <Legend data={props.data} theme={props.theme} />
      {kind === 'bar' ? (
        <BarChart {...props} />
      ) : (
        <LineChart {...props} area={kind === 'area'} />
      )}
    </>
  );
}

/** Стили наведения: нужны и в предпросмотре, и в скачанном файле */
export const CHART_HOVER_CSS = `
.viz-mark { transition: opacity .15s; }
.viz-mark:hover { opacity: .75; }
.viz-point:hover circle:last-of-type { r: 5; }
`;
