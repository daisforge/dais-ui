import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';

import ts from 'typescript';

import {
  pairedBootstrap,
  parseEvents,
  promptFor,
  schedule,
} from '../ab/lib/compare.mjs';
import { checkConsumer } from '../ab/lib/compare-score.mjs';

test('A/B содержит все пары повторов и чередует порядок версий', () => {
  const tasks = [
    { id: 'one', prompt: 'Окно', hint: 'secret', expect: ['Secret'] },
    { id: 'two', prompt: 'Форма' },
  ];
  const jobs = schedule(tasks, 3);
  assert.equal(jobs.length, 12);
  for (const task of tasks)
    for (const repeat of [1, 2, 3]) {
      assert.deepEqual(
        jobs
          .filter((j) => j.task.id === task.id && j.repeat === repeat)
          .map((j) => j.arm)
          .sort(),
        ['after', 'before'],
      );
    }
  assert.notEqual(jobs[0].arm, jobs[4].arm);
  assert.ok(!promptFor(tasks[0]).includes('secret'));
  assert.ok(!promptFor(tasks[0]).includes('Secret'));
});

test('ошибка разрешения MCP остаётся сбоем стенда, а не успехом агента', () => {
  const result = parseEvents(
    [
      { type: 'item.started', item: { type: 'mcp_tool_call' } },
      {
        type: 'item.completed',
        item: {
          type: 'mcp_tool_call',
          tool: 'get_component',
          status: 'failed',
          error: { message: 'MCP tool call requires approval' },
        },
      },
      { type: 'turn.completed', usage: { input_tokens: 12, output_tokens: 4 } },
    ]
      .map(JSON.stringify)
      .join('\n'),
  );
  assert.equal(result.mcpCalls, 1);
  assert.equal(result.mcpErrors, 1);
  assert.match(result.infrastructureError, /approval/);
  assert.equal(result.usage.input_tokens, 12);
  assert.throws(() => parseEvents('{unfinished'));
});

test('парный bootstrap учитывает задачи как кластеры, а не независимые повторы', () => {
  const rows = ['one', 'two'].flatMap((taskId) =>
    [1, 2, 3].flatMap((repeat) => [
      { taskId, repeat, arm: 'before', pass: false },
      { taskId, repeat, arm: 'after', pass: true },
    ]),
  );
  assert.deepEqual(pairedBootstrap(rows, 'pass'), {
    delta: 1,
    low: 1,
    high: 1,
    clusters: 2,
  });
  assert.throws(() => pairedBootstrap(rows.slice(1), 'pass'), /Unpaired/);
});

test('ошибки старого MCP без isError считаются так же, как ошибки исправленного', () => {
  for (const flagged of [false, true]) {
    const result = parseEvents(
      JSON.stringify({
        type: 'item.completed',
        item: {
          type: 'mcp_tool_call',
          status: 'completed',
          result: {
            ...(flagged ? { isError: true } : {}),
            content: [
              {
                type: 'text',
                text: JSON.stringify({ error: 'Unknown component' }),
              },
            ],
          },
        },
      }),
    );
    assert.equal(result.mcpErrors, 1);
    assert.equal(result.infrastructureError, null);
  }
});

test('A/B scorer отвергает неверный тип и не теряет ошибки зависимого файла', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mcp-ab-score-test-'));
  const file = path.join(dir, 'answer.tsx');
  const inspect = (code) => {
    fs.writeFileSync(file, code);
    return checkConsumer(ts, file, code);
  };
  try {
    assert.equal(inspect('export const answer: number = 1;').tscPass, true);
    const bad = inspect('export const answer: number = "wrong";');
    assert.equal(bad.tscPass, false);
    assert.ok(bad.diagnostics.some((d) => d.code === 2322));
    const suppressed = inspect(
      '// @ts-ignore\nexport const answer: number = "wrong";',
    );
    assert.equal(suppressed.tscPass, true);
    assert.equal(suppressed.suppressions, 1);
    assert.equal(inspect('export const answer: any = 1;').explicitAny, 1);
    fs.writeFileSync(
      path.join(dir, 'broken.ts'),
      'export const broken: number = "wrong";',
    );
    assert.throws(
      () => inspect('export { broken } from "./broken";'),
      /Scoring infrastructure diagnostics/,
    );
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
