/**
 * Отчёт по спецификации. Один и тот же компонент рисует предпросмотр
 * и HTML-файл, поэтому только инлайн-стили на токенах: при экспорте
 * значения CSS-переменных токенов подставляются в файл.
 */
import {
  outlineSolidSecondary,
  surfaceSolidCard,
  surfaceTransparentSecondary,
  textPrimary,
  textSecondary,
} from '@ui-kit/tokens';
import React, { CSSProperties } from 'react';

import { ChartRenderer } from '../charts-stub/Charts';
import type { ChartTheme } from '../charts-stub/palette';
import {
  applyFilters,
  computeChart,
  computeMeasure,
  computeTable,
  formatNumber,
} from '../engine/aggregate';
import type { DataRow, DatasetProfile } from '../engine/dataset';
import type {
  ChartBlock,
  KpiBlock,
  ReportSpec,
  TableBlock,
} from '../engine/spec';

/** Токены, которые использует отчёт: их значения экспорт кладёт в :root файла */
export const REPORT_TOKENS = [
  outlineSolidSecondary,
  surfaceSolidCard,
  surfaceTransparentSecondary,
  textPrimary,
  textSecondary,
];

export type ReportViewProps = {
  spec: ReportSpec;
  profile: DatasetProfile;
  rows: DataRow[];
  theme: ChartTheme;
};

const FONT =
  "'SB Sans Text', 'SB Sans Display', system-ui, -apple-system, 'Segoe UI', sans-serif";

const card: CSSProperties = {
  background: surfaceSolidCard,
  borderRadius: 16,
  padding: 20,
  border: `1px solid ${outlineSolidSecondary}`,
  minWidth: 0,
};

const cardTitle: CSSProperties = {
  margin: '0 0 12px',
  fontSize: 15,
  fontWeight: 600,
  color: textPrimary,
};

function Kpi({ block, rows }: { block: KpiBlock; rows: DataRow[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 12,
      }}
    >
      {block.items.map((item) => (
        <div key={item.label} style={card}>
          <div style={{ fontSize: 12, color: textSecondary, marginBottom: 6 }}>
            {item.label}
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: textPrimary,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {formatNumber(computeMeasure(rows, item.measure))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Chart({
  block,
  rows,
  theme,
  profile,
}: {
  block: ChartBlock;
  rows: DataRow[];
  theme: ChartTheme;
  profile: DatasetProfile;
}) {
  const seriesOrder = block.series
    ? profile.columns.find((column) => column.name === block.series)?.values
    : undefined;
  const data = computeChart(block, rows, seriesOrder);
  return (
    <section style={card}>
      <h3 style={cardTitle}>{block.title}</h3>
      <ChartRenderer
        kind={block.chart}
        data={data}
        theme={theme}
        surface={surfaceSolidCard}
        stacked={block.stacked}
      />
    </section>
  );
}

function Table({ block, rows }: { block: TableBlock; rows: DataRow[] }) {
  const data = computeTable(block, rows);
  const cell: CSSProperties = {
    padding: '8px 12px',
    borderBottom: `1px solid ${outlineSolidSecondary}`,
    textAlign: 'right',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
  };
  return (
    <section style={{ ...card, gridColumn: '1 / -1' }}>
      <h3 style={cardTitle}>{block.title}</h3>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 13,
            color: textPrimary,
          }}
        >
          <thead>
            <tr>
              {data.header.map((name, i) => (
                <th
                  key={name}
                  style={{
                    ...cell,
                    textAlign: i === 0 ? 'left' : 'right',
                    color: textSecondary,
                    fontWeight: 500,
                  }}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, ri) => {
              const isTotal = ri === data.rows.length - 1;
              return (
                <tr key={String(row[0])}>
                  {row.map((value, ci) => (
                    <td
                      // eslint-disable-next-line react/no-array-index-key
                      key={ci}
                      style={{
                        ...cell,
                        textAlign: ci === 0 ? 'left' : 'right',
                        fontWeight: isTotal ? 600 : 400,
                        background: isTotal
                          ? surfaceTransparentSecondary
                          : undefined,
                      }}
                    >
                      {typeof value === 'number' ? formatNumber(value) : value}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ReportView({ spec, profile, rows, theme }: ReportViewProps) {
  const filtered = applyFilters(rows, spec.filters);
  const filters = spec.filters
    .map((f) => `${f.column}: ${f.values.join(', ')}`)
    .join(' · ');

  return (
    <article
      style={{
        fontFamily: FONT,
        color: textPrimary,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <header>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>
          {spec.title}
        </h1>
        <div style={{ marginTop: 6, fontSize: 13, color: textSecondary }}>
          Источник: {profile.fileName} · строк в отчёте: {filtered.length} из{' '}
          {profile.rows}
          {filters && ` · фильтр — ${filters}`}
        </div>
      </header>

      {spec.blocks
        .filter((block): block is KpiBlock => block.kind === 'kpi')
        .map((block) => (
          <Kpi key={block.id} block={block} rows={filtered} />
        ))}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(min(460px, 100%), 1fr))',
          gap: 16,
        }}
      >
        {spec.blocks.map((block) => {
          if (block.kind === 'chart') {
            return (
              <Chart
                key={block.id}
                block={block}
                rows={filtered}
                theme={theme}
                profile={profile}
              />
            );
          }
          if (block.kind === 'table') {
            return <Table key={block.id} block={block} rows={filtered} />;
          }
          return null;
        })}
      </div>

      <footer style={{ fontSize: 12, color: textSecondary }}>
        Отчёт собран AI-агентом по спецификации, цифры посчитаны по исходным
        данным.
      </footer>
    </article>
  );
}
