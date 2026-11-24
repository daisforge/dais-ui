// Хуки агентов (Claude Code — .claude/settings.json, Codex — .codex/hooks.json).
//
// `start` (UserPromptSubmit) — запоминает HEAD и содержимое незакоммиченных
// файлов на начало хода.
//
// без аргумента (Stop) — проверяет только то, что изменилось за ход: файлы,
// отличающиеся от HEAD начала хода (в том числе удалённые и закоммиченные за
// ход), кроме незакоммиченных правок, которые были до хода и не менялись.
// По изменённым TS-файлам запускает ESLint, по затронутым пакетам — tsc.
// Файлы не исправляет: `--fix` выполняет только lint-staged при коммите.
// Ошибки — код 2 и текст в stderr: оба агента возвращают его модели.
//
// ESLint и tsc запускаются через `node` (process.execPath), а не через обёртки
// из node_modules/.bin, — так хук работает и на Windows.
//
// Успешный результат кэшируется по хэшу проверенных файлов и конфигов. Чтобы
// агент не зациклился на ошибке, которую не может исправить, после MAX_BLOCKS
// блокировок подряд хук только показывает предупреждение пользователю.
import { execFileSync, spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readlinkSync,
  writeFileSync,
} from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const PACKAGES = ['ui-kit', 'storybook', 'mcp-server'];
const LINT_RE =
  /^(packages\/(ui-kit|storybook|mcp-server)\/.+\.(ts|tsx)|scripts\/.+\.mjs)$/;
const TS_RELEVANT_RE = /\.(ts|tsx)$|(^|\/)tsconfig[^/]*\.json$/;
// Какие проекты tsc проверять при изменениях в пакете. Storybook — главный
// потребитель ui-kit: переименованный проп ломает stories.
const TYPECHECK = {
  'ui-kit': [
    'packages/ui-kit/tsconfig.lib.json',
    'packages/ui-kit/tsconfig.spec.json',
    'packages/storybook/tsconfig.lib.json',
  ],
  storybook: ['packages/storybook/tsconfig.lib.json'],
  'mcp-server': ['packages/mcp-server/tsconfig.lib.json'],
};
const CONFIG_FILES = [
  'tsconfig.base.json',
  '.eslintrc.json',
  '.eslintignore',
  'package-lock.json',
  // Есть ли они, решает, запускается ли typecheck Storybook.
  'packages/storybook/src/types.string.json',
  'packages/storybook/src/functions.string.json',
  ...PACKAGES.flatMap((pkg) => [
    `packages/${pkg}/.eslintrc.json`,
    `packages/${pkg}/tsconfig.json`,
    `packages/${pkg}/tsconfig.lib.json`,
    `packages/${pkg}/tsconfig.spec.json`,
  ]),
];
const MAX_BLOCKS = 3;
const MAX_OUTPUT = 5000;
const DELETED = 'deleted';

const finish = ({ code = 0, stderr = '', json = undefined } = {}) => {
  if (stderr) process.stderr.write(`${stderr}\n`);
  // Stop у Codex требует JSON в stdout при коде 0; Claude Code его принимает.
  if (code === 0 && json) process.stdout.write(JSON.stringify(json));
  process.exit(code);
};
// Успешное завершение Stop: пустой JSON.
const pass = () => finish({ json: {} });

const readStdin = async () => {
  if (process.stdin.isTTY) return {};
  let raw = '';
  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of process.stdin) raw += chunk;
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
};

const git = (cwd, args) =>
  execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  })
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const tryGit = (cwd, args) => {
  try {
    return git(cwd, args);
  } catch {
    return undefined;
  }
};

const mode = process.argv[2] === 'start' ? 'start' : 'stop';
const input = await readStdin();
const root = tryGit(input.cwd || process.cwd(), [
  'rev-parse',
  '--show-toplevel',
])?.[0];
if (!root) finish({ json: mode === 'stop' ? {} : undefined });

const cacheDir =
  process.env.AGENT_CHECKS_CACHE_DIR ||
  path.join(root, 'node_modules/.cache/agent-checks');
const session = String(input.session_id || 'local').replace(/[^\w-]/g, '_');
const snapshotFile = path.join(cacheDir, `snapshot-${session}.json`);
const blocksFile = path.join(cacheDir, `blocks-${session}`);
const passFile = path.join(cacheDir, 'last-pass');

const readText = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');
const write = (file, text) => {
  mkdirSync(cacheDir, { recursive: true });
  writeFileSync(file, text);
};
const fileHash = (file) => {
  const full = path.join(root, file);
  let stat;
  try {
    stat = lstatSync(full);
  } catch {
    return DELETED;
  }
  // Путь из git может оказаться симлинком или каталогом (симлинк заменили папкой).
  if (stat.isSymbolicLink()) return `link:${readlinkSync(full)}`;
  if (!stat.isFile()) return 'not-a-file';
  return createHash('sha256').update(readFileSync(full)).digest('hex');
};

const dirtyFiles = (base) => [
  ...new Set([
    ...(tryGit(root, ['diff', '--name-only', '--no-renames', base]) ?? []),
    ...(tryGit(root, ['ls-files', '--others', '--exclude-standard']) ?? []),
  ]),
];

if (mode === 'start') {
  const head = tryGit(root, ['rev-parse', 'HEAD'])?.[0];
  const dirty = Object.fromEntries(
    dirtyFiles('HEAD').map((file) => [file, fileHash(file)]),
  );
  write(snapshotFile, JSON.stringify({ head, dirty }));
  finish();
}

// ---------------------------------------------------------------- Stop
let snapshot;
try {
  snapshot = JSON.parse(readText(snapshotFile));
} catch {
  snapshot = undefined;
}
const baseIsValid =
  snapshot?.head &&
  tryGit(root, ['cat-file', '-e', `${snapshot.head}^{commit}`]) !== undefined;
const base = baseIsValid ? snapshot.head : 'HEAD';
const before = (baseIsValid && snapshot.dirty) || {};

// Незакоммиченные правки, которые были до хода и не менялись, — не наши.
const foreign = new Set();
const turnFiles = [];
dirtyFiles(base)
  .sort()
  .forEach((file) => {
    const hash = fileHash(file);
    if (before[file] === hash) foreign.add(file);
    else turnFiles.push({ file, hash });
  });

const resetBlocks = () => write(blocksFile, '0');

const tsFiles = turnFiles.filter(
  ({ file }) => TS_RELEVANT_RE.test(file) || LINT_RE.test(file),
);
if (tsFiles.length === 0) {
  resetBlocks();
  pass();
}

const stateHash = createHash('sha256');
[
  ...tsFiles.map(({ file, hash }) => `${file}:${hash}`),
  ...CONFIG_FILES.map((f) => `${f}:${fileHash(f)}`),
].forEach((line) => stateHash.update(`${line}\n`));
const state = stateHash.digest('hex');
if (readText(passFile) === state) {
  resetBlocks();
  pass();
}

const requireFromRoot = createRequire(path.join(root, 'package.json'));
const binPath = (pkg, bin) => {
  const manifest = requireFromRoot.resolve(`${pkg}/package.json`);
  const { bin: bins } = JSON.parse(readFileSync(manifest, 'utf8'));
  return path.join(
    path.dirname(manifest),
    typeof bins === 'string' ? bins : bins[bin],
  );
};

const run = (args) =>
  new Promise((resolve) => {
    const child = spawn(process.execPath, args, {
      cwd: root,
      env: process.env,
    });
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

// Ошибки tsc в чужих незавершённых файлах не блокируют агента.
const filterTscOutput = (out) => {
  const groups = [];
  out.split('\n').forEach((line) => {
    const normalized = line.replace(/\\/g, '/');
    const match = normalized.match(/^(.+?)\(\d+,\d+\): error /);
    if (match) groups.push({ file: match[1], lines: [normalized] });
    else if (groups.length > 0 && /^\s/.test(line))
      groups[groups.length - 1].lines.push(normalized);
    else groups.push({ file: undefined, lines: [normalized] });
  });
  return groups
    .filter(({ file }) => !file || !foreign.has(file))
    .map(({ lines }) => lines.join('\n'))
    .join('\n')
    .trim();
};

const lintFiles = tsFiles
  .map(({ file }) => file)
  .filter((file) => LINT_RE.test(file) && existsSync(path.join(root, file)));
const touchedPackages = PACKAGES.filter((pkg) =>
  tsFiles.some(({ file }) => file.startsWith(`packages/${pkg}/`)),
);
const notices = [];
// Stories импортируют сгенерированные (и игнорируемые git) *.string.json: без
// них tsc Storybook падает по причине, не связанной с изменениями агента.
const STORYBOOK_TSCONFIG = 'packages/storybook/tsconfig.lib.json';
const storybookGenerated = ['types.string.json', 'functions.string.json'].every(
  (name) => existsSync(path.join(root, 'packages/storybook/src', name)),
);
const tsconfigs = [
  ...new Set(touchedPackages.flatMap((pkg) => TYPECHECK[pkg])),
].filter((tsconfig) => {
  if (tsconfig !== STORYBOOK_TSCONFIG || storybookGenerated) return true;
  notices.push(
    'Typecheck Storybook пропущен: нет сгенерированных packages/storybook/src/*.string.json. Запусти `npm run generate-storybook-docs-utils`.',
  );
  return false;
});

const checks = [
  ...(lintFiles.length > 0
    ? [
        {
          title: `ESLint (${lintFiles.length} файл.)`,
          args: [binPath('eslint', 'eslint'), '--quiet', ...lintFiles],
        },
      ]
    : []),
  ...tsconfigs.map((tsconfig) => ({
    title: `tsc -p ${tsconfig}`,
    args: [
      binPath('typescript', 'tsc'),
      '-p',
      tsconfig,
      '--noEmit',
      '--pretty',
      'false',
    ],
    filter: filterTscOutput,
  })),
];

const results = await Promise.all(
  checks.map(async (check) => {
    const { code, out } = await run(check.args);
    const text = check.filter && code !== 0 ? check.filter(out) : out;
    return { ...check, failed: code !== 0 && text !== '', text };
  }),
);
const failed = results.filter((result) => result.failed);

if (failed.length === 0) {
  write(passFile, state);
  resetBlocks();
  finish({
    json: notices.length > 0 ? { systemMessage: notices.join('\n') } : {},
  });
}

const report = failed
  .map(({ title, text }) => {
    const body =
      text.length > MAX_OUTPUT
        ? `${text.slice(0, MAX_OUTPUT)}\n… (вывод обрезан)`
        : text;
    return `### ${title}\n${body}`;
  })
  .join('\n\n');

const blocks = Number(readText(blocksFile) || 0) + 1;
write(blocksFile, String(blocks));

if (blocks > MAX_BLOCKS) {
  finish({
    json: {
      systemMessage: `Проверки изменённых файлов не проходят после ${MAX_BLOCKS} попыток агента — нужна ручная проверка.\n\n${report}`,
    },
  });
}

finish({
  code: 2,
  stderr: `Проверки файлов, изменённых за ход, не прошли (попытка ${blocks} из ${MAX_BLOCKS}). Исправь причину, не ослабляя правила и не добавляя eslint-disable/@ts-ignore без обоснования.\n\n${report}`,
});
