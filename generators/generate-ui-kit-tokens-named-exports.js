/* eslint-disable no-console */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import * as tokens from '@salutejs/sdds-themes/tokens/sdds_finai/index.js';
import fs from 'fs';
import { join } from 'path';
import util from 'util';

// -------------------------- LOGGING SETUP --------------------------
const log = (message, data = null) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
  if (data) {
    console.dir(data, { depth: null, colors: true });
  }
};

// -------------------------- UTILS --------------------------
const mkdir = util.promisify(fs.mkdir);
const readdir = util.promisify(fs.readdir);
const unlink = util.promisify(fs.unlink);
const writeFile = util.promisify(fs.writeFile);
const tokensPath = ['../', 'packages', 'ui-kit', 'src', 'tokens'];

const { dirname } = import.meta;

log('Script started', {
  dirname,
  tokensPath: join(dirname, ...tokensPath),
});

// Логируем импортированные токены
log('Imported tokens keys', Object.keys(tokens));
log(
  'Tokens default export keys',
  tokens.default ? Object.keys(tokens.default) : 'No default export'
);

const exportTokensPath = '@salutejs/sdds-themes/tokens/sdds_finai';

const heading = `/* eslint-disable simple-import-sort/exports */

/**
 * Это автоматический сгенерированый файл
 * Не изменяйте этот файл
 */`;

const writeInExportTemplate = (names, path) => `
export {
  ${names},
} from '${path}';`;

// Все токены, может пригодится
// const themeTokenNames = Object.entries(tokens.default)
//     .filter(([_, value]) => typeof value === 'string')
//     .map((el) => el[0]).join(`,
//     `);

const getTokensExportsData = (tokens) => `${heading}
${writeInExportTemplate(`${tokens}`, exportTokensPath)}
`;

const tokensIndexFilePath = join(dirname, ...tokensPath, 'index.ts');

// -------------------------- TOKENS --------------------------
const JOIN_STR = ',\n  ';
const TOKENS = [
  {
    dirName: 'color',
    dir: join(dirname, ...tokensPath, 'color'),
    tokenNames: Object.entries(tokens.default)
      .filter(
        ([_, value]) =>
          typeof value === 'string' &&
          !value.includes('-gradient') &&
          !value.includes('--border') &&
          !value.includes('--shadow') &&
          !value.includes('--spacing')
      )
      .map((el) => el[0])
      .join(JOIN_STR),
  },
  {
    dirName: 'typography',
    dir: join(dirname, ...tokensPath, 'typography'),
    tokenNames: Object.entries(tokens.default)
      .filter(([key, value]) => typeof value === 'object' && key !== 'default')
      .map((el) => el[0])
      .join(JOIN_STR),
  },
  {
    dirName: 'gradient',
    dir: join(dirname, ...tokensPath, 'gradient'),
    tokenNames: Object.entries(tokens.default)
      // Исключаем shadow/border/spacing: их значения тоже могут содержать
      // подстроку `-gradient` (напр. тень `--shadow-gradient-*`), из-за чего
      // токен попадал бы сразу в две корзины и давал дубль ре-экспорта.
      .filter(
        ([_, value]) =>
          typeof value === 'string' &&
          value.includes('-gradient') &&
          !value.includes('--shadow') &&
          !value.includes('--border') &&
          !value.includes('--spacing')
      )
      .map((el) => el[0])
      .join(JOIN_STR),
  },
  {
    dirName: 'border',
    dir: join(dirname, ...tokensPath, 'border'),
    tokenNames: Object.entries(tokens.default)
      .filter(
        ([_, value]) => typeof value === 'string' && value.includes('--border')
      )
      .map((el) => el[0])
      .join(JOIN_STR),
  },
  {
    dirName: 'shadow',
    dir: join(dirname, ...tokensPath, 'shadow'),
    tokenNames: Object.entries(tokens.default)
      .filter(
        ([_, value]) => typeof value === 'string' && value.includes('--shadow')
      )
      .map((el) => el[0])
      .join(JOIN_STR),
  },
  {
    dirName: 'spacing',
    dir: join(dirname, ...tokensPath, 'spacing'),
    tokenNames: Object.entries(tokens.default)
      .filter(
        ([_, value]) => typeof value === 'string' && value.includes('--spacing')
      )
      .map((el) => el[0])
      .join(JOIN_STR),
  },
];

// -------------------------- GENERATORS --------------------------
async function generate(tokensDir, tokens) {
  await mkdir(tokensDir, { recursive: true });
  const files = await readdir(tokensDir);

  await Promise.all(files.map((cPath) => unlink(join(tokensDir, cPath))));

  await writeFile(join(tokensDir, 'index.ts'), getTokensExportsData(tokens));
}

async function generateTokensIndexFile() {
  await Promise.resolve(async () => unlink(join(tokensIndexFilePath)));

  const indexFileInner = `${heading}\n\n${TOKENS.map(
    (t) => `export * from './${t.dirName}';\n`
  ).join('')}`;

  await writeFile(tokensIndexFilePath, indexFileInner);
}

// --------------------------  GENERATING --------------------------
async function generateAll() {
  TOKENS.forEach(async (t) => {
    await generate(t.dir, t.tokenNames);
  });

  generateTokensIndexFile();
}
generateAll();
