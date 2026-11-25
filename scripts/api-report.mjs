// Отчёты о публичном API ui-kit — по одному на каждую документированную точку
// входа пакета. Общие настройки — в packages/ui-kit/api-extractor.json, здесь
// меняются только входной d.ts и имя отчёта.
//
//   node scripts/api-report.mjs          — проверка (CI): падает, если отчёт устарел
//   node scripts/api-report.mjs --local  — обновить отчёты (npm run api:update)
//
// Точки входа: корень и подпути из документации и MCP, у которых есть экспорты,
// которых нет в корне. Остальные подпути (constants, utils, tokens,
// components/Button…) реэкспортируют подмножество корня, и его отчёт их уже
// покрывает. Новый документированный подпуть со своими экспортами добавляй сюда.
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor');

const ENTRY_POINTS = [
  { report: 'index', dts: 'index.d.ts' },
  {
    report: 'components-TableCanvas',
    dts: 'components/TableCanvas/index.d.ts',
  },
  { report: 'icons', dts: 'icons/index.d.ts' },
];
// Сколько строк diff печатать на отчёт: обновление sdds-finai может поменять
// тысячи строк, а для понимания причины хватает начала.
const DIFF_LINES = 300;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const configPath = path.join(root, 'packages/ui-kit/api-extractor.json');
const packageJsonPath = path.join(root, 'packages/ui-kit/package.json');
const dist = path.join(root, 'dist/packages/ui-kit');
const localBuild = process.argv.includes('--local');

const base = ExtractorConfig.loadFile(configPath);
const changed = [];
let problems = 0;

// Diff закоммиченного отчёта с только что построенным: в CI без него видно
// лишь имя файла, а не что именно поменялось.
const printDiff = (config) => {
  const { stdout } = spawnSync(
    'git',
    [
      'diff',
      '--no-index',
      '--no-color',
      '--',
      path.relative(root, config.reportFilePath),
      path.relative(root, config.reportTempFilePath),
    ],
    { cwd: root, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 },
  );
  const lines = stdout.trimEnd().split('\n');
  process.stdout.write(`${lines.slice(0, DIFF_LINES).join('\n')}\n`);
  if (lines.length > DIFF_LINES) {
    process.stdout.write(
      `… ещё ${
        lines.length - DIFF_LINES
      } строк diff. Полностью — после npm run api:update.\n`,
    );
  }
};

ENTRY_POINTS.forEach(({ report, dts }) => {
  const entry = path.join(dist, dts);
  const config = ExtractorConfig.prepare({
    configObject: {
      ...base,
      mainEntryPointFilePath: entry,
      compiler: {
        ...base.compiler,
        overrideTsconfig: { ...base.compiler.overrideTsconfig, files: [entry] },
      },
      apiReport: { ...base.apiReport, reportFileName: `${report}.api.md` },
    },
    configObjectFullPath: configPath,
    packageJsonFullPath: packageJsonPath,
  });
  const result = Extractor.invoke(config, { localBuild });
  if (result.apiReportChanged) {
    changed.push(config.reportFilePath);
    if (!localBuild) printDiff(config);
  }
  // Без --local изменившийся отчёт api-extractor считает предупреждением.
  // Остальные ошибки и предупреждения (например, ошибки типов в .d.ts) к
  // изменению API не относятся, и в --local они тоже должны ронять запуск,
  // иначе api:update пройдёт, а CI продолжит падать.
  const reportWarning = result.apiReportChanged && !localBuild ? 1 : 0;
  problems += result.errorCount + result.warningCount - reportWarning;
});

if (changed.length > 0) {
  const files = changed.map((file) => path.relative(root, file)).join(', ');
  process.stdout.write(
    localBuild
      ? `Обновлены отчёты: ${files}\n`
      : [
          `Публичное API изменилось, отчёты устарели: ${files}`,
          '- Изменение намеренное — выполни npm run api:update и закоммить отчёты.',
          '- Твой PR API не трогал — отчёт в develop мог устареть после параллельных',
          '  PR. Обнови отчёты в своём PR (npm run api:update) и напиши об этом в',
          '  описании PR.',
          '',
        ].join('\n'),
  );
}
if (problems > 0) {
  process.stdout.write(
    `api-extractor: ошибок и предупреждений — ${problems}, подробности выше. ` +
      'Это не изменение API: npm run api:update их не исправит.\n',
  );
}
process.exit(problems > 0 || (changed.length > 0 && !localBuild) ? 1 : 0);
