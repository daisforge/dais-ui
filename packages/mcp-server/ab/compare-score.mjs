#!/usr/bin/env node
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

import { mean, pairedBootstrap, parseEvents } from './lib/compare.mjs';
import { checkConsumer } from './lib/compare-score.mjs';
import { parseArgs } from './lib/paths.mjs';

const args = parseArgs(process.argv.slice(2));
const out = path.resolve(args.out);
const manifest = JSON.parse(
  fs.readFileSync(path.join(out, 'manifest.json'), 'utf8'),
);
const { consumer } = manifest.after;
const require = createRequire(path.join(consumer, 'package.json'));
const ts = require('typescript');
// Type-library resolution also starts at cwd; score against one common consumer.
process.chdir(consumer);
const scoreDir = path.join(consumer, 'score');
fs.mkdirSync(scoreDir, { recursive: true });
const probe = path.join(scoreDir, 'environment.tsx');
const probeCode =
  "import { Button } from '@daisforge/ui'; export const Probe=()=> <Button>OK</Button>;";
fs.writeFileSync(probe, probeCode);
const probeResult = checkConsumer(ts, probe, probeCode);
if (!probeResult.tscPass)
  throw new Error(
    `Consumer probe failed: ${JSON.stringify(probeResult.diagnostics)}`,
  );
const rows = [];
for (const job of manifest.jobs) {
  const stem = `${job.taskId}--${job.repeat}--${job.arm}`;
  const meta = path.join(out, `${stem}.json`);
  if (!fs.existsSync(meta)) throw new Error(`Missing planned attempt: ${stem}`);
  const row = {
    ...JSON.parse(fs.readFileSync(meta, 'utf8')),
    ...parseEvents(fs.readFileSync(path.join(out, `${stem}.jsonl`), 'utf8')),
  };
  const stderr = fs.readFileSync(path.join(out, `${stem}.stderr`), 'utf8');
  const providerRetryDelays = [
    ...stderr.matchAll(/responses_retry:.*?in ([\d.]+)s/g),
  ].map((match) => Number(match[1]));
  row.providerRetries = providerRetryDelays.length;
  row.scheduledProviderRetrySeconds = providerRetryDelays.reduce(
    (sum, seconds) => sum + seconds,
    0,
  );
  if (row.infrastructureError)
    throw new Error(`Invalid attempt ${stem}: ${row.infrastructureError}`);
  const src = path.join(out, `${stem}.tsx`);
  let checked = {
    tscPass: false,
    diagnostics: [],
    imported: [],
    explicitAny: 0,
    assertions: 0,
    suppressions: 0,
    libraryJsx: 0,
    namedExport: false,
  };
  if (fs.existsSync(src)) {
    const file = path.join(scoreDir, `${stem}.tsx`);
    const code = fs.readFileSync(src, 'utf8');
    fs.writeFileSync(file, code);
    checked = checkConsumer(ts, file, code);
    checked.diagnostics.forEach((d) => {
      d.file = `${stem}.tsx`;
    });
  }
  const task = manifest.tasks.find((t) => t.id === row.taskId);
  rows.push({
    ...row,
    ...checked,
    cleanPass:
      checked.tscPass &&
      !checked.explicitAny &&
      !checked.suppressions &&
      !checked.assertions &&
      checked.libraryJsx > 0 &&
      checked.namedExport &&
      row.completed &&
      !row.timedOut &&
      !row.parseError &&
      row.exitCode === 0 &&
      row.mcpCalls > 0 &&
      !row.nonMcpTools.length,
    pickedExpected: task.expect.some((name) => checked.imported.includes(name)),
    inputTokens: row.usage?.input_tokens ?? null,
    cachedInputTokens: row.usage?.cached_input_tokens ?? null,
    uncachedInputTokens: row.usage
      ? row.usage.input_tokens - row.usage.cached_input_tokens
      : null,
    outputTokens: row.usage?.output_tokens ?? null,
  });
  console.log(
    `${stem}: tsc ${checked.tscPass ? 'OK' : 'FAIL'} (${
      checked.diagnostics.length
    })`,
  );
}
const median = (input) => {
  const values = input
    .filter((value) => typeof value === 'number')
    .sort((a, b) => a - b);
  const middle = Math.floor(values.length / 2);
  return values.length
    ? values.length % 2
      ? values[middle]
      : (values[middle - 1] + values[middle]) / 2
    : null;
};
const summary = ['before', 'after'].map((arm) => {
  const group = rows.filter((r) => r.arm === arm);
  const avg = (key) =>
    mean(group.map((r) => r[key]).filter((value) => typeof value === 'number'));
  return {
    arm,
    attempts: group.length,
    tscPasses: group.filter((r) => r.tscPass).length,
    cleanPasses: group.filter((r) => r.cleanPass).length,
    pickedExpected: group.filter((r) => r.pickedExpected).length,
    meanMcpCalls: avg('mcpCalls'),
    medianMcpCalls: median(group.map((row) => row.mcpCalls)),
    maxMcpCalls: Math.max(...group.map((row) => row.mcpCalls)),
    meanMcpErrors: avg('mcpErrors'),
    meanSeconds: avg('wallSeconds'),
    medianSeconds: median(group.map((row) => row.wallSeconds)),
    meanInputTokens: avg('inputTokens'),
    meanCachedInputTokens: avg('cachedInputTokens'),
    meanUncachedInputTokens: avg('uncachedInputTokens'),
    attemptsWithUsage: group.filter((r) => r.usage).length,
    attemptsWithProviderRetries: group.filter((r) => r.providerRetries > 0)
      .length,
    scheduledProviderRetrySeconds: group.reduce(
      (sum, r) => sum + r.scheduledProviderRetrySeconds,
      0,
    ),
    meanOutputTokens: avg('outputTokens'),
    diagnostics: group.reduce((n, r) => n + r.diagnostics.length, 0),
  };
});
const intervals = Object.fromEntries(
  [
    'tscPass',
    'cleanPass',
    'wallSeconds',
    'mcpCalls',
    'inputTokens',
    'outputTokens',
  ].map((key) => [
    key,
    rows.every((row) => row[key] !== null && row[key] !== undefined)
      ? pairedBootstrap(rows, key)
      : { unavailable: 'Some attempts have no usage data' },
  ]),
);
fs.writeFileSync(
  path.join(out, 'results.json'),
  `${JSON.stringify({ summary, intervals, rows }, null, 2)}\n`,
);
console.log(JSON.stringify({ summary, intervals }, null, 2));
