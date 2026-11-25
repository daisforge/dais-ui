// Тест хука проверок агентов. Каждый сценарий — во временном git worktree
// текущего HEAD: рабочую копию разработчика тест не трогает.
// Запуск: npm run agent-hooks:test
//
// Логику проверяем на mcp-server (tsc ~1 с), путь ui-kit — одним сценарием.
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import {
  mkdtempSync,
  readFileSync,
  rmSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

import { createWorktree } from './worktree.mjs';

const hook = fileURLToPath(new URL('./check-changed.mjs', import.meta.url));
const root = execFileSync('git', ['rev-parse', '--show-toplevel'], {
  encoding: 'utf8',
}).trim();
const MCP = 'packages/mcp-server/src';
const TIMEOUT = { timeout: 600_000 };

// Ходы агента в одном worktree с общим кэшем хука: `before` — правки
// пользователя до хода, `change` — правки агента за ход. Возвращает результаты
// Stop-хука по ходам.
const turns = (steps) => {
  const worktree = createWorktree(root);
  const cacheDir = mkdtempSync(path.join(tmpdir(), 'agent-checks-cache-'));
  const runHook = (mode) =>
    spawnSync(process.execPath, mode ? [hook, mode] : [hook], {
      cwd: worktree.dir,
      input: JSON.stringify({ cwd: worktree.dir, session_id: 'test' }),
      encoding: 'utf8',
      env: { ...process.env, AGENT_CHECKS_CACHE_DIR: cacheDir },
    });
  const file = (rel) => path.join(worktree.dir, rel);
  try {
    return steps.map(({ before = () => {}, change }) => {
      before(file);
      runHook('start');
      change(file);
      return runHook();
    });
  } finally {
    worktree.remove();
    rmSync(cacheDir, { recursive: true, force: true });
  }
};
const turn = (step) => turns([step])[0];

test('корректный файл в ui-kit проходит', TIMEOUT, () => {
  const result = turn({
    change: (file) =>
      writeFileSync(
        file('packages/ui-kit/src/agentHookProbe.ts'),
        'export const agentHookProbe = 1;\n',
      ),
  });
  assert.equal(result.status, 0, result.stderr);
});

test('ошибка типов блокирует завершение хода', TIMEOUT, () => {
  const result = turn({
    change: (file) =>
      writeFileSync(
        file(`${MCP}/agentHookProbe.ts`),
        "export const agentHookProbe: number = 'x';\n",
      ),
  });
  assert.equal(result.status, 2);
  assert.match(result.stderr, /agentHookProbe\.ts/);
});

test('удалённый импортируемый файл блокирует завершение хода', TIMEOUT, () => {
  const result = turn({
    change: (file) => unlinkSync(file(`${MCP}/toolResponse.ts`)),
  });
  assert.equal(result.status, 2);
  assert.match(result.stderr, /toolResponse/);
});

test('ошибки, которые были до хода, не блокируют', TIMEOUT, () => {
  const result = turn({
    before: (file) =>
      writeFileSync(
        file(`${MCP}/agentHookUser.ts`),
        "export const agentHookUser: number = 'x';\n",
      ),
    change: (file) =>
      writeFileSync(
        file(`${MCP}/agentHookOther.ts`),
        'export const agentHookOther = 1;\n',
      ),
  });
  assert.equal(result.status, 0, result.stderr);
});

test('новая ошибка в файле с правками пользователя блокирует', TIMEOUT, () => {
  const result = turn({
    before: (file) => {
      writeFileSync(
        file(`${MCP}/agentHookLib.ts`),
        'export const getAgentHookValue = (): number => 1;\n',
      );
      writeFileSync(
        file(`${MCP}/agentHookUser.ts`),
        "import { getAgentHookValue } from './agentHookLib.js';\n\nexport const doubled = getAgentHookValue() * 2;\n",
      );
    },
    // Агент меняет только импортируемый модуль — ошибка появляется в файле
    // пользователя, который за ход не менялся.
    change: (file) =>
      writeFileSync(
        file(`${MCP}/agentHookLib.ts`),
        "export const getAgentHookValue = (): string => 'x';\n",
      ),
  });
  assert.equal(result.status, 2, result.stderr);
  assert.match(result.stderr, /agentHookUser\.ts/);
});

test(
  'успех со старыми ошибками не переносится в следующий ход',
  TIMEOUT,
  () => {
    const broken = "export const agentHookCached: number = 'x';\n";
    const withComment = `// комментарий агента\n${broken}`;
    const [first, second] = turns([
      // Ошибка была до хода, агент только добавил комментарий — успех.
      {
        before: (file) =>
          writeFileSync(file(`${MCP}/agentHookCached.ts`), broken),
        change: (file) =>
          writeFileSync(file(`${MCP}/agentHookCached.ts`), withComment),
      },
      // Ход начат с исправного файла, а закончен тем же содержимым, что и первый.
      {
        before: (file) =>
          writeFileSync(
            file(`${MCP}/agentHookCached.ts`),
            'export const agentHookCached = 1;\n',
          ),
        change: (file) =>
          writeFileSync(file(`${MCP}/agentHookCached.ts`), withComment),
      },
    ]);
    assert.equal(first.status, 0, first.stderr);
    assert.equal(second.status, 2, second.stderr);
    assert.match(second.stderr, /agentHookCached\.ts/);
  },
);

test(
  'удаление неотслеживаемого файла, созданного до хода, блокирует',
  TIMEOUT,
  () => {
    const result = turn({
      before: (file) => {
        writeFileSync(
          file(`${MCP}/agentHookHelper.ts`),
          'export const agentHookHelper = 1;\n',
        );
        writeFileSync(
          file(`${MCP}/agentHookImporter.ts`),
          "export { agentHookHelper } from './agentHookHelper.js';\n",
        );
      },
      change: (file) => unlinkSync(file(`${MCP}/agentHookHelper.ts`)),
    });
    assert.equal(result.status, 2, result.stderr);
    assert.match(result.stderr, /agentHookImporter\.ts/);
  },
);

test('файл с кириллицей в имени проверяется', TIMEOUT, () => {
  const result = turn({
    change: (file) =>
      writeFileSync(
        file(`${MCP}/агентПроба.ts`),
        "export const agentHookProbe: number = 'x';\n",
      ),
  });
  assert.equal(result.status, 2);
  assert.match(result.stderr, /агентПроба\.ts/);
});

test('изменение одного tsconfig.base.json запускает tsc', TIMEOUT, () => {
  // `paths` пакеты не переопределяют: без алиаса @ui-kit/* ui-kit не собирается.
  const result = turn({
    change: (file) => {
      const config = JSON.parse(
        readFileSync(file('tsconfig.base.json'), 'utf8'),
      );
      delete config.compilerOptions.paths;
      writeFileSync(
        file('tsconfig.base.json'),
        JSON.stringify(config, null, 2),
      );
    },
  });
  assert.equal(result.status, 2);
  assert.match(result.stderr, /tsc -p packages\/ui-kit\/tsconfig\.lib\.json/);
  assert.match(result.stderr, /@ui-kit\//);
});
