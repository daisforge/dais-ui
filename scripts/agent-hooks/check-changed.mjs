// Хуки агентов (Claude Code — .claude/settings.json, Codex — .codex/hooks.json).
//
// `start` (UserPromptSubmit) — запоминает HEAD, хэши незакоммиченных файлов и
// копии тех из них, что влияют на tsc, — состояние на начало хода.
//
// без аргумента (Stop) — проверяет изменённое за ход: файлы, отличающиеся от
// HEAD начала хода (в том числе удалённые и закоммиченные за ход), кроме
// незакоммиченных правок, которые были до хода и не менялись. По изменённым
// TS-файлам запускает ESLint, по затронутым пакетам — tsc. Блокируют только
// новые ошибки tsc: если они есть, хук один раз за ход восстанавливает во
// временном git worktree состояние начала хода и вычитает ошибки, которые были
// уже тогда. Если за ход изменились зависимости, вычитать нечем: node_modules
// начала хода не восстановить, и блокируют все ошибки. Файлы хук не исправляет: `--fix` выполняет только lint-staged.
// Ошибки — код 2 и текст в stderr: оба агента возвращают его модели.
//
// ESLint и tsc запускаются через `node` (process.execPath), а не через обёртки
// из node_modules/.bin, — так хук работает и на Windows. Пути из git читаются
// с `-z`: иначе git экранирует не-ASCII символы (кириллицу в именах файлов).
//
// Успешный результат кэшируется по HEAD, хэшам незакоммиченных файлов и
// конфигов; если для успеха пришлось вычесть старые ошибки — только в пределах
// хода. Чтобы агент не зациклился на ошибке, которую не может исправить,
// после MAX_BLOCKS блокировок подряд хук только предупреждает пользователя.
import { execFileSync, spawn } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readlinkSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

import { createWorktree } from './worktree.mjs';

const PACKAGES = ['ui-kit', 'storybook', 'mcp-server'];
const LINT_RE =
  /^(packages\/(ui-kit|storybook|mcp-server)\/.+\.(ts|tsx)|scripts\/.+\.mjs)$/;
const TS_RELEVANT_RE = /\.(ts|tsx)$|(^|\/)tsconfig[^/]*\.json$/;
// Изменение этих файлов влияет на типы во всех пакетах.
const ROOT_TS_INPUTS = [
  'tsconfig.base.json',
  'package.json',
  'package-lock.json',
];
// Что копировать в снимок начала хода для восстановления состояния tsc.
const SNAPSHOT_INPUT_RE = /\.(ts|tsx|mts|cts|js|mjs|cjs|json)$/;
const SNAPSHOT_MAX_BYTES = 2 * 1024 * 1024;
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
// Служебные lock-файлы npm перезаписываются при каждой установке: по ним видно,
// что node_modules изменились, даже если package-lock.json в git прежний.
// Кроме корневого — свои у пакетов: у mcp-server зависимости ставятся отдельно.
const INSTALLED_DEPS = [
  'node_modules',
  ...PACKAGES.map((pkg) => `packages/${pkg}/node_modules`),
].map((dir) => `${dir}/.package-lock.json`);
const DEPS_INPUT_RE = /(^|\/)package(-lock)?\.json$/;
const CONFIG_FILES = [
  ...ROOT_TS_INPUTS,
  ...INSTALLED_DEPS,
  '.eslintrc.json',
  '.eslintignore',
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
const STORYBOOK_TSCONFIG = 'packages/storybook/tsconfig.lib.json';
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

const tryGit = (cwd, args) => {
  try {
    return execFileSync('git', args, {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return undefined;
  }
};
const gitLine = (cwd, args) => tryGit(cwd, args)?.trim() || undefined;
// Списки путей — только с `-z`: без него git экранирует не-ASCII символы.
const gitPaths = (cwd, args) =>
  (tryGit(cwd, [...args, '-z']) ?? '').split('\0').filter(Boolean);

const mode = process.argv[2] === 'start' ? 'start' : 'stop';
const input = await readStdin();
const root = gitLine(input.cwd || process.cwd(), [
  'rev-parse',
  '--show-toplevel',
]);
if (!root) finish({ json: mode === 'stop' ? {} : undefined });

const cacheDir =
  process.env.AGENT_CHECKS_CACHE_DIR ||
  path.join(root, 'node_modules/.cache/agent-checks');
const session = String(input.session_id || 'local').replace(/[^\w-]/g, '_');
const snapshotFile = path.join(cacheDir, `snapshot-${session}.json`);
const snapshotFilesDir = path.join(cacheDir, `snapshot-${session}-files`);
const blocksFile = path.join(cacheDir, `blocks-${session}`);
const passFile = path.join(cacheDir, 'last-pass');

const readText = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');
const readJson = (file) => {
  try {
    return JSON.parse(readText(file));
  } catch {
    return undefined;
  }
};
const write = (file, text) => {
  mkdirSync(path.dirname(file), { recursive: true });
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
    ...gitPaths(root, ['diff', '--name-only', '--no-renames', base]),
    ...gitPaths(root, ['ls-files', '--others', '--exclude-standard']),
  ]),
];

if (mode === 'start') {
  const head = gitLine(root, ['rev-parse', 'HEAD']);
  rmSync(snapshotFilesDir, { recursive: true, force: true });
  const dirty = {};
  dirtyFiles('HEAD').forEach((file) => {
    const hash = fileHash(file);
    const full = path.join(root, file);
    let copied = false;
    try {
      const stat = statSync(full);
      copied =
        hash !== DELETED &&
        SNAPSHOT_INPUT_RE.test(file) &&
        stat.isFile() &&
        stat.size <= SNAPSHOT_MAX_BYTES;
    } catch {
      // битый симлинк и т. п. — не копируем
    }
    if (copied) {
      mkdirSync(path.dirname(path.join(snapshotFilesDir, file)), {
        recursive: true,
      });
      copyFileSync(full, path.join(snapshotFilesDir, file));
    }
    dirty[file] = { hash, copied };
  });
  write(
    snapshotFile,
    JSON.stringify({
      id: randomUUID(),
      head,
      dirty,
      deps: Object.fromEntries(
        INSTALLED_DEPS.map((file) => [file, fileHash(file)]),
      ),
    }),
  );
  finish();
}

// ---------------------------------------------------------------- Stop
const snapshot = readJson(snapshotFile);
const baseIsValid =
  Boolean(snapshot?.head) &&
  tryGit(root, ['cat-file', '-e', `${snapshot.head}^{commit}`]) !== undefined;
const base = baseIsValid ? snapshot.head : 'HEAD';
const before = (baseIsValid && snapshot.dirty) || {};

// Незакоммиченные правки, которые были до хода и не менялись, — не наши.
// Пути из снимка нужны, чтобы увидеть файлы, которые за ход исчезли из вывода
// git: удалённый неотслеживаемый файл или правку, откаченную до HEAD.
const turnFiles = [...new Set([...dirtyFiles(base), ...Object.keys(before)])]
  .sort()
  .filter((file) => before[file]?.hash !== fileHash(file));

const resetBlocks = () => write(blocksFile, '0');

const tsFiles = turnFiles.filter(
  (file) =>
    TS_RELEVANT_RE.test(file) ||
    LINT_RE.test(file) ||
    ROOT_TS_INPUTS.includes(file),
);
// node_modules начала хода во временном worktree не восстановить: там те же
// ссылки на текущие зависимости. Если они за ход поменялись, базовая линия
// содержала бы и вызванные ими ошибки, поэтому старые ошибки не вычитаются,
// а tsc проверяет все пакеты.
const depsChanged =
  turnFiles.some((file) => DEPS_INPUT_RE.test(file)) ||
  (typeof snapshot?.deps === 'object' &&
    INSTALLED_DEPS.some((file) => snapshot.deps[file] !== fileHash(file)));

if (tsFiles.length === 0 && !depsChanged) {
  resetBlocks();
  pass();
}

// Кэш: HEAD, все незакоммиченные файлы (в том числе зависимости, изменённые
// вне хода), конфиги и набор файлов хода, от которого зависят проверки.
const stateHash = createHash('sha256');
[
  `head:${gitLine(root, ['rev-parse', 'HEAD'])}`,
  ...dirtyFiles('HEAD').map((file) => `dirty:${file}:${fileHash(file)}`),
  ...CONFIG_FILES.map((file) => `config:${file}:${fileHash(file)}`),
  ...tsFiles.map((file) => `turn:${file}`),
].forEach((line) => stateHash.update(`${line}\n`));
const state = stateHash.digest('hex');
// Успех, при котором ошибки tsc были, но все вычтены как старые, зависит от
// состояния начала хода. Его ключ — с id снимка, и в другом ходе он не годится.
const snapshotState = `${state}|${snapshot?.id}`;
if ([state, snapshotState].includes(readText(passFile))) {
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

const run = (args, cwd = root) =>
  new Promise((resolve) => {
    const child = spawn(process.execPath, args, {
      cwd,
      // Пресет @nx/eslint-plugin берёт tsconfigRootDir из корня Nx: в worktree
      // со ссылкой на node_modules он иначе указал бы на основной репозиторий.
      env: { ...process.env, NX_DAEMON: 'false', NX_WORKSPACE_ROOT_PATH: cwd },
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

const tscArgs = (tsconfig) => [
  binPath('typescript', 'tsc'),
  '-p',
  tsconfig,
  '--noEmit',
  '--pretty',
  'false',
];

// Разбивает вывод tsc на ошибки. Ключ — файл, код и текст без позиции: если
// агент сдвинул строки, старая ошибка не должна считаться новой.
const parseTsc = (out) => {
  const errors = [];
  out.split('\n').forEach((line) => {
    const normalized = line.replace(/\\/g, '/');
    const match = normalized.match(/^(.+?)\(\d+,\d+\): error (TS\d+): (.*)$/);
    if (match) {
      errors.push({
        key: `${match[1]}|${match[2]}|${match[3]}`,
        lines: [normalized],
      });
    } else if (errors.length > 0 && /^\s/.test(line)) {
      errors[errors.length - 1].lines.push(normalized);
    }
  });
  return errors;
};
const countKeys = (errors) =>
  errors.reduce(
    (acc, { key }) => acc.set(key, (acc.get(key) ?? 0) + 1),
    new Map(),
  );

// Ошибки tsc на начало хода: HEAD начала хода плюс незакоммиченные файлы из
// снимка. Считается один раз за ход и кэшируется по id снимка.
const baselineFile = path.join(cacheDir, `baseline-${session}.json`);
const baselineErrors = async (tsconfigs) => {
  const cached = readJson(baselineFile);
  const known = cached?.snapshotId === snapshot.id ? cached.results : {};
  const missing = tsconfigs.filter((tsconfig) => !(tsconfig in known));
  if (missing.length > 0) {
    const worktree = createWorktree(root, base);
    try {
      Object.entries(before).forEach(([file, { hash, copied }]) => {
        const target = path.join(worktree.dir, file);
        if (hash === DELETED) rmSync(target, { force: true });
        else if (copied) {
          mkdirSync(path.dirname(target), { recursive: true });
          copyFileSync(path.join(snapshotFilesDir, file), target);
        }
      });
      const outputs = await Promise.all(
        missing.map((tsconfig) => run(tscArgs(tsconfig), worktree.dir)),
      );
      missing.forEach((tsconfig, i) => {
        known[tsconfig] = parseTsc(outputs[i].out).map(({ key }) => key);
      });
    } finally {
      worktree.remove();
    }
    write(
      baselineFile,
      JSON.stringify({ snapshotId: snapshot.id, results: known }),
    );
  }
  return known;
};

const lintFiles = tsFiles.filter(
  (file) => LINT_RE.test(file) && existsSync(path.join(root, file)),
);
const touchedPackages =
  depsChanged || tsFiles.some((file) => ROOT_TS_INPUTS.includes(file))
    ? PACKAGES
    : PACKAGES.filter((pkg) =>
        tsFiles.some((file) => file.startsWith(`packages/${pkg}/`)),
      );
const notices = [];
// Stories импортируют сгенерированные (и игнорируемые git) *.string.json: без
// них tsc Storybook падает по причине, не связанной с изменениями агента.
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

const [lintResult, ...tscResults] = await Promise.all([
  lintFiles.length > 0
    ? run([binPath('eslint', 'eslint'), '--quiet', ...lintFiles])
    : { code: 0, out: '' },
  ...tsconfigs.map((tsconfig) => run(tscArgs(tsconfig))),
]);

const failed = [];
if (lintResult.code !== 0) {
  failed.push({
    title: `ESLint (${lintFiles.length} файл.)`,
    text: lintResult.out,
  });
}

const tscFailures = tsconfigs
  .map((tsconfig, i) => ({
    tsconfig,
    ...tscResults[i],
    errors: parseTsc(tscResults[i].out),
  }))
  .filter(({ code }) => code !== 0);
const baseline =
  baseIsValid &&
  !depsChanged &&
  tscFailures.some(({ errors }) => errors.length > 0)
    ? await baselineErrors(tscFailures.map(({ tsconfig }) => tsconfig))
    : {};
tscFailures.forEach(({ tsconfig, out, errors }) => {
  const title = `tsc -p ${tsconfig}`;
  // tsc упал, но ошибок в разбираемом формате нет — ошибка конфигурации и т. п.
  if (errors.length === 0) {
    failed.push({ title, text: out });
    return;
  }
  const was = countKeys((baseline[tsconfig] ?? []).map((key) => ({ key })));
  const now = countKeys(errors);
  const fresh = errors.filter(({ key }) => now.get(key) > (was.get(key) ?? 0));
  if (fresh.length > 0) {
    failed.push({
      title,
      text: fresh.map(({ lines }) => lines.join('\n')).join('\n'),
    });
  }
});

if (failed.length === 0) {
  write(passFile, tscFailures.length === 0 ? state : snapshotState);
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

const depsNote = depsChanged
  ? '\nЗависимости за ход изменились, поэтому показаны и ошибки tsc, которые были до хода: окружение начала хода не восстановить.'
  : '';

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
  stderr: `Новые ошибки в проверках после хода (попытка ${blocks} из ${MAX_BLOCKS}). Исправь причину, не ослабляя правила и не добавляя eslint-disable/@ts-ignore без обоснования.${depsNote}\n\n${report}`,
});
