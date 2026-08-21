/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

/*
 * resolveComponent.js — поиск файлов компонента на диске
 *
 * Простой компонент (строка): автодетект *.mdx и *.stories.tsx в папке
 * Сложный компонент (объект): rootDocs, api.dir, features[], exclude[]
 */

import { existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

/**
 * Обычный стори-файл компонента. Исключаем `*.visual.stories.tsx` — это
 * спец-стори для визуальных (скриншотных) тестов, в мету их не собираем.
 */
const isStoryFile = (name) =>
  name.endsWith('.stories.tsx') && !name.endsWith('.visual.stories.tsx');

export function resolveSimpleComponent(name, storiesBase) {
  const dir = join(storiesBase, name);
  if (!existsSync(dir)) {
    // Нет своей Storybook-папки — не роняем компонент, а отдаём минимальную
    // запись без docs/api/stories: category/description/hint/keywords всё
    // равно придут из конфига (см. TASKS.md T2). Раньше здесь возвращался
    // null, который тихо схлопывался в processSimpleComponent (см. resolveComponent).
    console.warn(
      `[WARN] Папка не найдена: ${dir} — минимальная запись без docs/api/stories.`,
    );
    return { name, dir, docsMdx: [], apiMdx: [], storyFiles: [] };
  }

  const files = readdirSync(dir);
  const mdxFiles = files.filter((f) => f.endsWith('.mdx'));
  const storyFiles = files.filter((f) => isStoryFile(f));

  const docsMdx = mdxFiles.filter((f) => !f.toLowerCase().includes('api'));
  const apiMdx = mdxFiles.filter((f) => f.toLowerCase().includes('api'));

  return {
    name,
    dir,
    docsMdx: docsMdx.map((f) => join(dir, f)),
    apiMdx: apiMdx.map((f) => join(dir, f)),
    storyFiles: storyFiles.map((f) => join(dir, f)),
  };
}

export function resolveComplexComponent(config, storiesBase) {
  const { name, rootDocs, api, features = [], exclude = [] } = config;
  const dir = join(storiesBase, name);

  if (!existsSync(dir)) {
    // См. комментарий в resolveSimpleComponent — та же логика: минимальная
    // запись вместо null. Если у компонента без своей папки всё же указаны
    // rootDocs/api.dir — они не резолвятся этой веткой (dir для них базовый
    // якорь), но это не текущий случай ни для одной из 36 куратированных
    // записей (T2, generators/meta-info/config/meta-config.json).
    console.warn(
      `[WARN] Папка не найдена: ${dir} — минимальная запись без docs/api/stories/features.`,
    );
    return { name, dir, docsMdx: [], apiMdx: [], storyFiles: [], features: [], config };
  }

  const result = {
    name,
    dir,
    docsMdx: [],
    apiMdx: [],
    storyFiles: [],
    features: [],
    config,
  };

  if (rootDocs) {
    const rootDocsPath = join(storiesBase, rootDocs);
    if (existsSync(rootDocsPath)) {
      result.docsMdx.push(rootDocsPath);
    } else {
      console.warn(`[WARN] rootDocs не найден: ${rootDocsPath}`);
    }
  }

  if (api?.dir) {
    const apiDir = join(storiesBase, api.dir);
    if (existsSync(apiDir)) {
      const apiFiles = readdirSync(apiDir);
      result.apiMdx = apiFiles
        .filter((f) => f.endsWith('.mdx'))
        .map((f) => join(apiDir, f));
      result.storyFiles = apiFiles
        .filter((f) => isStoryFile(f))
        .map((f) => join(apiDir, f));
    }
  }

  // если ничего не указано явно — ищем файлы автоматически
  if (!rootDocs && !api?.dir && features.length === 0) {
    const files = readdirSync(dir);
    const mdxFiles = files.filter((f) => f.endsWith('.mdx'));
    const storyFiles = files.filter((f) => isStoryFile(f));

    result.docsMdx = mdxFiles
      .filter((f) => !f.toLowerCase().includes('api'))
      .map((f) => join(dir, f));
    result.apiMdx = mdxFiles
      .filter((f) => f.toLowerCase().includes('api'))
      .map((f) => join(dir, f));
    result.storyFiles = storyFiles.map((f) => join(dir, f));
  }

  for (const featureName of features) {
    if (exclude.includes(featureName)) continue;

    const featureDir = join(dir, featureName);
    if (!existsSync(featureDir) || !statSync(featureDir).isDirectory())
      continue;

    const featureFiles = readdirSync(featureDir);
    result.features.push({
      name: featureName.replace(`${name}.`, ''),
      dir: featureDir,
      docsMdx: featureFiles
        .filter((f) => f.endsWith('.mdx') && !f.toLowerCase().includes('api'))
        .map((f) => join(featureDir, f)),
      apiMdx: featureFiles
        .filter((f) => f.endsWith('.mdx') && f.toLowerCase().includes('api'))
        .map((f) => join(featureDir, f)),
      storyFiles: featureFiles
        .filter((f) => isStoryFile(f))
        .map((f) => join(featureDir, f)),
    });

    // Вложенные подпапки фичи тоже подхватываем как отдельные под-фичи.
    // Резолвер читает файлы фичи только напрямую, поэтому без этого вложенные
    // стори не попадают в мету (например ControlBlock/APE, ControlBlock/
    // MassPanelAction). Имя под-фичи берём из последнего сегмента папки.
    // Подпапки без *.stories.tsx (служебные вроде _lib) пропускаем.
    for (const sub of featureFiles) {
      const subDir = join(featureDir, sub);
      if (!statSync(subDir).isDirectory()) continue;

      const subFiles = readdirSync(subDir);
      if (!subFiles.some((f) => isStoryFile(f))) continue;

      result.features.push({
        name: sub.replace(/^.*\./, ''),
        dir: subDir,
        docsMdx: subFiles
          .filter((f) => f.endsWith('.mdx') && !f.toLowerCase().includes('api'))
          .map((f) => join(subDir, f)),
        apiMdx: subFiles
          .filter((f) => f.endsWith('.mdx') && f.toLowerCase().includes('api'))
          .map((f) => join(subDir, f)),
        storyFiles: subFiles
          .filter((f) => isStoryFile(f))
          .map((f) => join(subDir, f)),
      });
    }
  }

  return result;
}

export function resolveComponent(entry, storiesBase) {
  if (typeof entry === 'string') {
    return { type: 'simple', ...resolveSimpleComponent(entry, storiesBase) };
  }
  return { type: 'complex', ...resolveComplexComponent(entry, storiesBase) };
}
