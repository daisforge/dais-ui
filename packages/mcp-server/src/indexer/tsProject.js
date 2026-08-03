import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Project } from 'ts-morph';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const REPO_ROOT = path.resolve(__dirname, '../../../..');
export const UI_KIT_SRC = path.join(REPO_ROOT, 'packages/ui-kit/src');
export const UI_KIT_TSCONFIG = path.join(
  REPO_ROOT,
  'packages/ui-kit/tsconfig.lib.json',
);

let cachedProject;

/**
 * Один общий ts-morph Project на весь прогон индексера — пересоздание на
 * каждый компонент слишком дорого (десятки секунд на 100+ компонентов).
 */
export function getProject() {
  if (!cachedProject) {
    cachedProject = new Project({
      tsConfigFilePath: UI_KIT_TSCONFIG,
      skipAddingFilesFromTsConfig: false,
    });
  }
  return cachedProject;
}
