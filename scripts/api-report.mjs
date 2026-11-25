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

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const configPath = path.join(root, 'packages/ui-kit/api-extractor.json');
const packageJsonPath = path.join(root, 'packages/ui-kit/package.json');
const dist = path.join(root, 'dist/packages/ui-kit');
const localBuild = process.argv.includes('--local');

const base = ExtractorConfig.loadFile(configPath);
const changed = [];
let failed = false;

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
  if (result.apiReportChanged) changed.push(config.reportFilePath);
  if (!result.succeeded) failed = true;
});

if (changed.length > 0) {
  const files = changed.map((file) => path.relative(root, file)).join(', ');
  process.stdout.write(
    localBuild
      ? `Обновлены отчёты: ${files}\n`
      : `Публичное API изменилось, отчёты устарели: ${files}\n`,
  );
}
process.exit(failed ? 1 : 0);
