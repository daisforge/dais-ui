// Временный git worktree для проверок, которые не должны трогать рабочую копию
// разработчика: базовая линия ошибок tsc в хуке и тесты хука.
//
// Зависимости не ставятся заново: node_modules (корневой и пакетов) подключаются
// ссылками — на Windows это junction, он не требует прав администратора.
// Игнорируемые git сгенерированные файлы, без которых падает tsc Storybook,
// копируются из исходного каталога.
import { execFileSync } from 'node:child_process';
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdtempSync,
  readdirSync,
  realpathSync,
  rmSync,
  symlinkSync,
  unlinkSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const GENERATED = [
  'packages/storybook/src/types.string.json',
  'packages/storybook/src/functions.string.json',
];

const nodeModulesDirs = (root) => [
  'node_modules',
  ...readdirSync(path.join(root, 'packages'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `packages/${entry.name}/node_modules`)
    .filter((dir) => existsSync(path.join(root, dir))),
];

export const createWorktree = (root, rev = 'HEAD') => {
  // Реальный путь: на macOS tmpdir() — симлинк (/var → /private/var), и ESLint
  // с parserOptions.project не узнаёт файл, если пути записаны по-разному.
  const parent = realpathSync(
    mkdtempSync(path.join(tmpdir(), 'agent-checks-wt-')),
  );
  const dir = path.join(parent, 'repo');
  execFileSync('git', ['worktree', 'add', '--detach', '--quiet', dir, rev], {
    cwd: root,
    stdio: 'ignore',
  });

  const links = nodeModulesDirs(root).map((rel) => path.join(dir, rel));
  nodeModulesDirs(root).forEach((rel, i) => {
    symlinkSync(path.join(root, rel), links[i], 'junction');
  });
  GENERATED.filter((rel) => existsSync(path.join(root, rel))).forEach((rel) =>
    copyFileSync(path.join(root, rel), path.join(dir, rel)),
  );

  const remove = () => {
    // Сначала снимаем ссылки: удаление каталога не должно уйти в настоящий
    // node_modules.
    links.forEach((link) => {
      try {
        if (lstatSync(link).isSymbolicLink()) unlinkSync(link);
      } catch {
        // ссылки уже нет
      }
    });
    try {
      execFileSync('git', ['worktree', 'remove', '--force', dir], {
        cwd: root,
        stdio: 'ignore',
      });
    } catch {
      execFileSync('git', ['worktree', 'prune'], {
        cwd: root,
        stdio: 'ignore',
      });
    }
    rmSync(parent, { recursive: true, force: true });
  };

  return { dir, remove };
};
