// Тест хука проверок агентов на настоящем репозитории: временные файлы в
// ui-kit, отдельный каталог кэша. Запуск: node --test scripts/agent-hooks/
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, test } from 'node:test';
import { fileURLToPath } from 'node:url';

const hook = fileURLToPath(new URL('./check-changed.mjs', import.meta.url));
const root = execFileSync('git', ['rev-parse', '--show-toplevel'], {
  encoding: 'utf8',
}).trim();
const probe = path.join(root, 'packages/ui-kit/src/agentHookProbe.ts');
// Лист без собственных импортов, который импортируют другие модули ui-kit.
const imported = 'packages/ui-kit/src/utils/mergeRefs.ts';
const cacheDir = mkdtempSync(path.join(tmpdir(), 'agent-checks-'));
let session = 0;

const runHook = (mode, sessionId) =>
  spawnSync(process.execPath, mode ? [hook, mode] : [hook], {
    cwd: root,
    input: JSON.stringify({ cwd: root, session_id: sessionId }),
    encoding: 'utf8',
    env: { ...process.env, AGENT_CHECKS_CACHE_DIR: cacheDir },
  });

const turn = (change) => {
  session += 1;
  const id = `test-${process.pid}-${session}`;
  runHook('start', id);
  change();
  return runHook(undefined, id);
};

afterEach(() => {
  rmSync(probe, { force: true });
  execFileSync('git', ['checkout', '--', imported], { cwd: root });
  rmSync(path.join(cacheDir, 'last-pass'), { force: true });
});

test('корректный файл проходит', { timeout: 300_000 }, () => {
  const result = turn(() =>
    writeFileSync(probe, 'export const agentHookProbe = 1;\n'),
  );
  assert.equal(result.status, 0, result.stderr);
});

test('ошибка типов блокирует завершение хода', { timeout: 300_000 }, () => {
  const result = turn(() =>
    writeFileSync(probe, "export const agentHookProbe: number = 'x';\n"),
  );
  assert.equal(result.status, 2);
  assert.match(result.stderr, /agentHookProbe\.ts/);
});

test(
  'удалённый импортируемый файл блокирует завершение хода',
  { timeout: 300_000 },
  () => {
    const result = turn(() => unlinkSync(path.join(root, imported)));
    assert.equal(result.status, 2);
    assert.match(result.stderr, /mergeRefs/);
  },
);

test(
  'чужие правки, сделанные до хода, не блокируют',
  { timeout: 300_000 },
  () => {
    writeFileSync(probe, "export const agentHookProbe: number = 'x';\n");
    const result = turn(() => {});
    assert.equal(result.status, 0, result.stderr);
  },
);
