// Скиллы живут в .agents/skills (их читает Codex). Claude Code читает только
// .claude/skills, поэтому там лежат копии. Симлинк не подходит: при
// core.symlinks=false (частая настройка на Windows) git создаёт вместо него
// текстовый файл.
//
//   node scripts/agent-hooks/sync-skills.mjs          — обновить копии
//   node scripts/agent-hooks/sync-skills.mjs --check  — проверить, что копии совпадают
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);
const source = path.join(root, '.agents/skills');
const target = path.join(root, '.claude/skills');
const check = process.argv.includes('--check');

const listFiles = (dir) => {
  if (!existsSync(dir) || !lstatSync(dir).isDirectory()) return [];
  return readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) =>
      path.relative(dir, path.join(entry.parentPath ?? entry.path, entry.name)),
    )
    .map((file) => file.split(path.sep).join('/'))
    .sort();
};

const sourceFiles = listFiles(source);
const targetFiles = listFiles(target);
const read = (dir, file) => readFileSync(path.join(dir, file));

const missing = sourceFiles.filter(
  (file) =>
    !targetFiles.includes(file) ||
    !read(source, file).equals(read(target, file)),
);
const extra = targetFiles.filter((file) => !sourceFiles.includes(file));
const targetIsDir = existsSync(target) && lstatSync(target).isDirectory();

if (check) {
  if (targetIsDir && missing.length === 0 && extra.length === 0)
    process.exit(0);
  console.error(
    [
      '.claude/skills не совпадает с .agents/skills.',
      ...missing.map((file) => `  отличается или отсутствует: ${file}`),
      ...extra.map((file) => `  лишний: ${file}`),
      'Правь скиллы в .agents/skills и запусти `npm run skills:sync`.',
    ].join('\n'),
  );
  process.exit(1);
}

if (existsSync(target) && !targetIsDir) rmSync(target);
extra.forEach((file) => rmSync(path.join(target, file)));
missing.forEach((file) => {
  mkdirSync(path.dirname(path.join(target, file)), { recursive: true });
  writeFileSync(path.join(target, file), read(source, file));
});
console.log(
  `.claude/skills: обновлено ${missing.length}, удалено ${extra.length}`,
);
