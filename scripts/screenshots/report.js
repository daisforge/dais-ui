import fs from 'node:fs';
import path from 'node:path';

// Тексты ошибок и названия stories выводим как текст, а не как HTML-разметку.
const escaped = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[
        c
      ]),
  );
export function writeHtmlReport(artifacts, summary) {
  // Автономный HTML-отчёт можно скачать из CI и открыть вместе с PNG без сервера.
  // Эти стили оформляют только отчёт: они не попадают в Storybook и не меняют снимки.
  fs.writeFileSync(
    path.join(artifacts, 'index.html'),
    `<!doctype html>
<meta charset="utf-8">
<title>Screenshot report</title>
<style>
  body { font: 16px system-ui; margin: 32px; }
  img { max-width: 100%; }
  h2, p { overflow-wrap: anywhere; }
  article { border-top: 1px solid #ccc; padding: 16px 0; }
  pre { white-space: pre-wrap; }
</style>
<h1>Screenshot report</h1>
<p>${escaped(
      JSON.stringify({
        ...summary,
        records: undefined,
        skipped: summary.skipped.length,
      }),
    )}</p>
${summary.records
  .map((r) => {
    const actual = [
      'actual.png',
      'failure-page.png',
      'unstable-2.png',
      'unstable-0.png',
    ].find((name) => fs.existsSync(path.join(artifacts, r.id, name)));
    const preview = fs.existsSync(path.join(artifacts, r.id, 'composite.png'))
      ? 'composite.png'
      : actual;
    const url = (name) => `${encodeURIComponent(r.id)}/${name}`;
    return `<article>
<h2>${escaped(r.id)} — ${escaped(r.status)}</h2>
<pre>${escaped(r.error ?? r.skipReason ?? '')}</pre>
${
  preview
    ? `<a href="${url(preview)}"><img loading="lazy" alt="${escaped(
        r.id,
      )} — ${escaped(preview)}" src="${url(preview)}"></a>`
    : ''
}
${actual ? `<a href="${url(actual)}">${actual}</a>` : ''}
</article>`;
  })
  .join('')}`,
  );
}
