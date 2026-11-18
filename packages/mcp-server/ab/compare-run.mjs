#!/usr/bin/env node
import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseEvents, promptFor, schedule, sha256 } from './lib/compare.mjs';
import { parseArgs } from './lib/paths.mjs';

const args = parseArgs(process.argv.slice(2));
const config = JSON.parse(fs.readFileSync(path.resolve(args.config), 'utf8'));
const out = path.resolve(config.out);
const { tasks } = JSON.parse(
  fs.readFileSync(new URL('./tasks.json', import.meta.url), 'utf8'),
);
const selected = args.tasks
  ? tasks.filter((t) => String(args.tasks).split(',').includes(t.id))
  : tasks;
const jobs = schedule(selected, config.repeats);
fs.mkdirSync(out, { recursive: true });
const schema = path.join(out, 'answer.schema.json');
fs.writeFileSync(
  schema,
  JSON.stringify({
    type: 'object',
    properties: { code: { type: 'string' } },
    required: ['code'],
    additionalProperties: false,
  }),
);
const manifest = {
  ...config,
  cli: execFileSync('codex', ['--version'], { encoding: 'utf8' }).trim(),
  node: process.version,
  taskHash: sha256(JSON.stringify(selected)),
  runnerHash: sha256(fs.readFileSync(fileURLToPath(import.meta.url))),
  promptHash: sha256(selected.map(promptFor).join('\n')),
  tasks: selected,
  jobs: jobs.map(({ arm, repeat, task }) => ({ arm, repeat, taskId: task.id })),
};
const manifestFile = path.join(out, 'manifest.json');
if (
  fs.existsSync(manifestFile) &&
  JSON.stringify(JSON.parse(fs.readFileSync(manifestFile, 'utf8'))) !==
    JSON.stringify(manifest)
) {
  throw new Error(
    'Manifest changed: use a new output directory; do not mix experiments',
  );
}
fs.writeFileSync(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);

async function run(job, slot) {
  const { arm, repeat, task } = job;
  const stem = `${task.id}--${repeat}--${arm}`;
  const metaFile = path.join(out, `${stem}.json`);
  if (fs.existsSync(metaFile)) return;
  const cwd = path.join(out, `slot-${slot}`);
  fs.mkdirSync(cwd, { recursive: true });
  const server = path.join(
    config[arm].consumer,
    'node_modules/@daisforge/ui-mcp/dist/server.js',
  );
  const resultFile = path.join(out, `${stem}.answer.json`);
  const argv = [
    '-a',
    'never',
    'exec',
    '--ignore-user-config',
    '--strict-config',
    '--ephemeral',
    '--skip-git-repo-check',
    '-s',
    'read-only',
    '-C',
    cwd,
    '-m',
    config.model,
    '-c',
    `model_reasoning_effort=${JSON.stringify(config.effort)}`,
    '-c',
    'web_search="disabled"',
    '-c',
    'features.shell_tool=false',
    '-c',
    'features.multi_agent=false',
    '-c',
    'mcp_servers.ui.command="node"',
    '-c',
    `mcp_servers.ui.args=${JSON.stringify([server])}`,
    '-c',
    `mcp_servers.ui.cwd=${JSON.stringify(config[arm].consumer)}`,
    '-c',
    'mcp_servers.ui.required=true',
    '-c',
    'mcp_servers.ui.default_tools_approval_mode="approve"',
    '--output-schema',
    schema,
    '--output-last-message',
    resultFile,
    '--json',
    '-',
  ];
  const started = Date.now();
  const env = { ...process.env };
  // Do not inherit an outer agent's thread/session identity or nonblocking MCP startup.
  delete env.MCP_CONNECTION_NONBLOCKING;
  delete env.CODEX_THREAD_ID;
  const child = spawn('codex', argv, {
    cwd,
    env,
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  child.stdin.end(promptFor(task));
  let stdout = '';
  let stderr = '';
  let timedOut = false;
  child.stdout.on('data', (chunk) => {
    stdout += chunk;
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk;
  });
  const timer = setTimeout(() => {
    timedOut = true;
    child.kill('SIGTERM');
  }, config.timeoutSeconds * 1000);
  const exitCode = await new Promise((resolve, reject) => {
    child.on('error', reject);
    child.on('close', resolve);
  });
  clearTimeout(timer);
  fs.writeFileSync(path.join(out, `${stem}.jsonl`), stdout);
  fs.writeFileSync(path.join(out, `${stem}.stderr`), stderr);
  let parsed = {};
  let code = '';
  let parseError;
  try {
    parsed = parseEvents(stdout);
  } catch (error) {
    parseError = error.message;
  }
  try {
    const answer = JSON.parse(fs.readFileSync(resultFile, 'utf8'));
    if (typeof answer.code !== 'string') throw new Error('Missing code');
    code = answer.code;
  } catch (error) {
    parseError = [parseError, error.message].filter(Boolean).join('; ');
  }
  if (code) fs.writeFileSync(path.join(out, `${stem}.tsx`), code);
  const row = {
    arm,
    taskId: task.id,
    level: task.level,
    repeat,
    exitCode,
    timedOut,
    wallSeconds: (Date.now() - started) / 1000,
    ...parsed,
    parseError: parseError || null,
    wroteCode: Boolean(code),
    codeHash: code ? sha256(code) : null,
  };
  fs.writeFileSync(metaFile, `${JSON.stringify(row, null, 2)}\n`);
  console.log(
    `${stem}: ${row.wroteCode ? 'code' : 'NO CODE'}, ${
      row.mcpCalls ?? 0
    } MCP calls, ${row.wallSeconds.toFixed(1)}s${
      row.infrastructureError ? ` INFRA: ${row.infrastructureError}` : ''
    }`,
  );
  if (row.infrastructureError) throw new Error(row.infrastructureError);
}

let cursor = 0;
let halted;
await Promise.all(
  Array.from({ length: config.concurrency }, async (_, slot) => {
    while (cursor < jobs.length && !halted) {
      const job = jobs[cursor];
      cursor += 1;
      try {
        await run(job, slot);
      } catch (error) {
        halted = error;
      }
    }
  }),
);
if (halted)
  throw new Error('A/B stopped by infrastructure failure', { cause: halted });
console.log(
  `Complete: ${jobs.length} planned attempts. Score with compare-score.mjs.`,
);
