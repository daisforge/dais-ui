import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VENDOR_DIR = path.resolve(__dirname, '../../vendor/atomic-mcp-data');

function getSourceArg() {
  const flagIndex = process.argv.indexOf('--source');
  if (flagIndex === -1 || !process.argv[flagIndex + 1]) {
    throw new Error(
      'Использование: node vendorAtomicData.js --source <путь-к-их-mcpData>\n' +
        'Например: --source /path/to/plasma/website/sdds-finai-docs/mcpData ' +
        '(предварительно там нужно прогнать `npm run generate-mcp-data`).',
    );
  }
  return path.resolve(process.argv[flagIndex + 1]);
}

/**
 * Копирует статический JSON-бандл атомарной команды (тот же, на основе
 * которого работает их @salutejs/sdds-mcp) в закоммиченный снэпшот внутри
 * нашего репозитория — вручную, по требованию мейнтейнера, а не на каждую
 * сборку. См. README.md за инструкцией по обновлению.
 */
function main() {
  const sourceDir = getSourceArg();

  const manifestPath = path.join(sourceDir, 'manifest.json');
  const componentsDir = path.join(sourceDir, 'components');

  if (!fs.existsSync(manifestPath) || !fs.existsSync(componentsDir)) {
    throw new Error(
      `Не найдены manifest.json/components/ в ${sourceDir}. ` +
        'Убедитесь, что там уже прогнан `npm run generate-mcp-data`.',
    );
  }

  fs.rmSync(VENDOR_DIR, { recursive: true, force: true });
  fs.mkdirSync(path.join(VENDOR_DIR, 'components'), { recursive: true });

  fs.copyFileSync(manifestPath, path.join(VENDOR_DIR, 'manifest.json'));

  const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.json'));
  files.forEach((file) => {
    fs.copyFileSync(
      path.join(componentsDir, file),
      path.join(VENDOR_DIR, 'components', file),
    );
  });

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log(
    `Вендоринг готов: ${files.length} компонентов из @salutejs/sdds-finai@${manifest.version} → ${VENDOR_DIR}`,
  );
}

main();
