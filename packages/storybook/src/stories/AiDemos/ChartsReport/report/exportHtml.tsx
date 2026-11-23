/**
 * Экспорт отчёта в один HTML-файл без внешних зависимостей.
 *
 * В продукте это делает бэкенд (render_report): тот же компонент отчёта
 * плюс runtime-бандл Charts UI. В демо — браузер: renderToStaticMarkup
 * и значения токенов текущей темы, снятые с предпросмотра.
 */
import { backgroundPrimary } from '@ui-kit/tokens';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { CHART_HOVER_CSS } from '../charts-stub/Charts';
import { REPORT_TOKENS, ReportView, ReportViewProps } from './ReportView';

const varName = (token: string) => token.match(/var\((--[\w-]+)/)?.[1];
const fallback = (token: string) =>
  token.match(/var\(--[\w-]+,\s*([^)]+)\)/)?.[1];

/** Значения CSS-переменных токенов на элементе предпросмотра */
function resolveTokens(element: HTMLElement | null): string {
  const styles = element ? getComputedStyle(element) : null;
  return [...REPORT_TOKENS, backgroundPrimary]
    .map((token) => {
      const name = varName(token);
      if (!name) return '';
      const value = styles?.getPropertyValue(name).trim() || fallback(token);
      return value ? `${name}: ${value};` : '';
    })
    .join(' ');
}

/** JSON внутри <script> не должен закрывать тег */
const safeJson = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c');

const escapeHtml = (text: string) =>
  text.replace(/[&<>"]/g, (char) => `&#${char.charCodeAt(0)};`);

export function buildReportHtml(
  props: ReportViewProps,
  tokensSource: HTMLElement | null,
): string {
  const body = renderToStaticMarkup(<ReportView {...props} />);
  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(props.spec.title)}</title>
<style>
:root { ${resolveTokens(tokensSource)} color-scheme: ${props.theme}; }
body { margin: 0; padding: 32px 16px; background: var(--background-primary); }
main { max-width: 1200px; margin: 0 auto; }
${CHART_HOVER_CSS}
</style>
</head>
<body>
<main>${body}</main>
<!-- Спецификация и данные лежат в файле: из них отчёт можно пересобрать
     или открыть в интерактивном runtime Charts UI -->
<script type="application/json" id="report-spec">${safeJson(
    props.spec,
  )}</script>
<script type="application/json" id="report-data">${safeJson(
    props.rows,
  )}</script>
</body>
</html>`;
}

export function downloadHtml(html: string, fileName: string) {
  const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function openHtml(html: string) {
  const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
  window.open(url, '_blank', 'noopener');
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
