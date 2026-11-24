// Stop-хук агентов (Claude Code — .claude/settings.json, Codex — .codex/hooks.json).
//
// В конце хода находит изменённые и новые TS-файлы пакетов, запускает по ним
// `eslint --fix` и typecheck затронутых пакетов. Если есть ошибки — выходит с
// кодом 2 и пишет их в stderr: оба агента возвращают такой текст модели и
// продолжают работу. Формат входа (stdin JSON с `cwd`, `session_id`) и выхода
// у Claude Code и Codex совпадает.
//
// Чтобы не тратить время каждый ход, хэш успешно проверенных файлов хранится в
// node_modules/.cache/agent-checks. Чтобы агент не зациклился на ошибке, которую
// не может исправить, после MAX_BLOCKS подряд хук перестаёт блокировать и только
// показывает предупреждение пользователю.
import { execFileSync, spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const LINT_RE =
  /^(packages\/(ui-kit|storybook|mcp-server)\/.+\.(ts|tsx)|scripts\/.+\.mjs)$/;
const TYPECHECK = {
  'packages/ui-kit/': 'packages/ui-kit/tsconfig.lib.json',
  'packages/storybook/': 'packages/storybook/tsconfig.lib.json',
};
const MAX_BLOCKS = 3;
const MAX_OUTPUT = 5000;

const finish = (code = 0, stderr = '', json = {}) => {
  if (stderr) process.stderr.write(`${stderr}\n`);
  // Codex требует JSON в stdout при коде 0; Claude Code его тоже принимает.
  if (code === 0) process.stdout.write(JSON.stringify(json));
  process.exit(code);
};

const readStdin = async () => {
  if (process.stdin.isTTY) return {};
  let raw = '';
  for await (const chunk of process.stdin) raw += chunk;
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
};

const git = (cwd, args) =>
  execFileSync('git', args, { cwd, encoding: 'utf8' })
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const run = (cmd, args, cwd) =>
  new Promise((resolve) => {
    const child = spawn(cmd, args, { cwd, env: process.env });
    let out = '';
    child.stdout.on('data', (d) => {
      out += d;
    });
    child.stderr.on('data', (d) => {
      out += d;
    });
    child.on('close', (code) => resolve({ code, out: out.trim() }));
    child.on('error', (err) => resolve({ code: 1, out: String(err) }));
  });

const hashFiles = (root, files) => {
  const hash = createHash('sha256');
  files.forEach((file) => {
    hash.update(file);
    hash.update(readFileSync(path.join(root, file)));
  });
  return hash.digest('hex');
};

const input = await readStdin();

let root;
try {
  [root] = git(input.cwd || process.cwd(), ['rev-parse', '--show-toplevel']);
} catch {
  finish();
}

const files = [
  ...new Set([
    ...git(root, ['diff', '--name-only', '--diff-filter=ACMR', 'HEAD']),
    ...git(root, ['ls-files', '--others', '--exclude-standard']),
  ]),
]
  .filter((file) => LINT_RE.test(file) && existsSync(path.join(root, file)))
  .sort();

if (files.length === 0) finish();

const cacheDir = path.join(root, 'node_modules/.cache/agent-checks');
const passFile = path.join(cacheDir, 'last-pass');
const blocksFile = path.join(cacheDir, `blocks-${input.session_id || 'local'}`);
const readText = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');

if (readText(passFile) === hashFiles(root, files)) finish();

const bin = (name) => path.join(root, 'node_modules/.bin', name);
const tsconfigs = Object.entries(TYPECHECK)
  .filter(([prefix]) => files.some((file) => file.startsWith(prefix)))
  .map(([, tsconfig]) => tsconfig);

const checks = [
  {
    title: `ESLint (${files.length} файл.)`,
    run: () => run(bin('eslint'), ['--fix', '--quiet', ...files], root),
  },
  ...tsconfigs.map((tsconfig) => ({
    title: `tsc -p ${tsconfig}`,
    run: () =>
      run(bin('tsc'), ['-p', tsconfig, '--noEmit', '--pretty', 'false'], root),
  })),
];

const results = await Promise.all(
  checks.map(async (check) => ({ ...check, ...(await check.run()) })),
);
const failed = results.filter((result) => result.code !== 0);

mkdirSync(cacheDir, { recursive: true });

if (failed.length === 0) {
  // eslint --fix мог поправить файлы — хэшируем уже итоговое содержимое.
  writeFileSync(passFile, hashFiles(root, files));
  writeFileSync(blocksFile, '0');
  finish();
}

const report = failed
  .map(({ title, out }) => {
    const text =
      out.length > MAX_OUTPUT
        ? `${out.slice(0, MAX_OUTPUT)}\n… (вывод обрезан)`
        : out;
    return `### ${title}\n${text}`;
  })
  .join('\n\n');

const blocks = Number(readText(blocksFile) || 0) + 1;
writeFileSync(blocksFile, String(blocks));

if (blocks > MAX_BLOCKS) {
  finish(0, '', {
    systemMessage: `Проверки изменённых файлов не проходят после ${MAX_BLOCKS} попыток агента — нужна ручная проверка.\n\n${report}`,
  });
}

finish(
  2,
  `Проверки изменённых файлов не прошли (попытка ${blocks} из ${MAX_BLOCKS}). Исправь причину, не ослабляя правила и не добавляя eslint-disable/@ts-ignore без обоснования.\n\n${report}`,
);
