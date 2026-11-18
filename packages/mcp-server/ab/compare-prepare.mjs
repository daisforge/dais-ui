#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { sha256 } from './lib/compare.mjs';
import { parseArgs } from './lib/paths.mjs';

const args = parseArgs(process.argv.slice(2));
const before = path.resolve(args.before);
const after = path.resolve(args.after);
const root = path.resolve(args.root);
if (fs.existsSync(root))
  throw new Error('Use a new --root; existing results must not be overwritten');
fs.mkdirSync(root, { recursive: true });
const run = (cmd, argv, cwd) =>
  execFileSync(cmd, argv, {
    cwd,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
  }).trim();
const uiDist = path.join(after, 'dist/packages/ui-kit');
const uiVersion = JSON.parse(
  fs.readFileSync(path.join(uiDist, 'package.json')),
).version;
if (uiVersion !== '1.29.1')
  throw new Error('This frozen task prompt expects UI 1.29.1');
const pack = (dir) => {
  const result = JSON.parse(
    run(
      'npm',
      ['pack', '--ignore-scripts', '--json', '--pack-destination', root],
      dir,
    ),
  );
  return path.join(root, result[0].filename);
};
const uiTar = pack(uiDist);
const uiHash = sha256(fs.readFileSync(uiTar));
const arms = {};
for (const [arm, repo] of Object.entries({ before, after })) {
  const consumer = path.join(root, arm);
  const nm = path.join(consumer, 'node_modules');
  fs.mkdirSync(path.join(nm, '@daisforge'), { recursive: true });
  for (const entry of fs.readdirSync(path.join(after, 'node_modules'))) {
    if (entry !== '@daisforge')
      fs.symlinkSync(
        path.join(after, 'node_modules', entry),
        path.join(nm, entry),
      );
  }
  const unpack = (tar, name) => {
    const target = path.join(nm, '@daisforge', name);
    fs.mkdirSync(target);
    run('tar', ['-xzf', tar, '--strip-components=1', '-C', target], root);
    return target;
  };
  const ui = unpack(uiTar, 'ui');
  const mcpPackage = path.join(repo, 'packages/mcp-server');
  const tar = pack(mcpPackage);
  const archivedTar = path.join(root, `${arm}-mcp.tgz`);
  fs.renameSync(tar, archivedTar);
  const mcp = unpack(archivedTar, 'ui-mcp');
  fs.symlinkSync(
    path.join(after, 'packages/mcp-server/node_modules'),
    path.join(mcp, 'node_modules'),
  );
  const index = fs.readFileSync(
    path.join(mcpPackage, 'data/component-index.json'),
  );
  fs.mkdirSync(path.join(ui, 'mcp-data'), { recursive: true });
  // Installed resolution takes precedence over bundled. Only this data file differs in UI.
  fs.writeFileSync(path.join(ui, 'mcp-data/component-index.json'), index);
  fs.writeFileSync(
    path.join(consumer, 'package.json'),
    JSON.stringify({ private: true, type: 'module' }),
  );
  const resolved = JSON.parse(
    run(
      'node',
      [
        '--input-type=module',
        '-e',
        "import {resolveIndex} from './node_modules/@daisforge/ui-mcp/dist/resolveIndex.js'; import crypto from 'node:crypto'; const r=resolveIndex(); console.log(JSON.stringify({source:r.source,libVersion:r.index.libVersion,installed:r.installedLibVersion,indexHash:crypto.createHash('sha256').update(JSON.stringify(r.index)).digest('hex')}));",
      ],
      consumer,
    ),
  );
  if (
    resolved.source !== 'installed' ||
    resolved.libVersion !== uiVersion ||
    resolved.installed !== uiVersion ||
    resolved.indexHash !== sha256(JSON.stringify(JSON.parse(index)))
  ) {
    throw new Error(
      `Wrong index loaded for ${arm}: ${JSON.stringify(resolved)}`,
    );
  }
  arms[arm] = {
    consumer,
    commit: run('git', ['rev-parse', 'HEAD'], repo),
    indexHash: resolved.indexHash,
    serverPackageHash: sha256(fs.readFileSync(archivedTar)),
    resolved,
  };
}
if (arms.before.indexHash === arms.after.indexHash)
  throw new Error('Identical indexes: invalid experiment');
const config = {
  model: 'gpt-6.2-sol',
  effort: 'medium',
  repeats: 3,
  concurrency: 3,
  timeoutSeconds: 420,
  out: path.join(root, 'results'),
  uiVersion,
  uiPackageHash: uiHash,
  typescript: JSON.parse(
    fs.readFileSync(path.join(after, 'node_modules/typescript/package.json')),
  ).version,
  ...arms,
};
fs.writeFileSync(
  path.join(root, 'config.json'),
  `${JSON.stringify(config, null, 2)}\n`,
);
console.log(JSON.stringify(config, null, 2));
