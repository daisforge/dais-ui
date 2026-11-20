#!/usr/bin/env node
/**
 * Добавляет в уже собранный Storybook страницы, которых нет в его исходниках.
 *
 * Сайдбар собранного Storybook строится из static/index.json. Скрипт вставляет
 * туда docs-записи, которые указывают на служебную docs-страницу
 * (src/stories/_external/ExternalPage.mdx), и помечает их полем
 * `internalPage: <file>`. Служебная страница по этому полю загружает
 * `static/internal/<file>.js` — ES-модуль, default export которого —
 * React-компонент страницы. Поэтому страница стоит в общем дереве сайдбара
 * ровно там, куда её вставили, и открывается как обычная docs-страница.
 *
 * id записи строится по правилу Storybook из title и name
 * ('Changelog' + 'Docs' → 'changelog--docs'): по нему менеджер собирает узлы
 * дерева, и с другим id запись рисуется с неправильным отступом.
 *
 * Список страниц — JSON-массив (или объект { "pages": [...] }):
 *   [
 *     { "file": "ai-chat", "title": "AI-чат", "before": "changelog--docs" },
 *     { "file": "guide", "title": "Раздел/Гайд", "after": "<id записи>" },
 *     { "file": "box-notes", "title": "Локальные компоненты/Box",
 *       "name": "Заметки", "after": "локальные-компоненты-box--docs" }
 *   ]
 *   file   — имя модуля в static/internal/ без .js: [a-z0-9-]
 *   title  — путь в дереве, как title в Storybook ('Раздел/Страница'). Если он
 *            совпадает с title существующего компонента, страница встаёт
 *            внутрь его узла рядом с Docs и stories.
 *   name   — подпись пункта внутри узла (по умолчанию 'Docs'); нужна, когда
 *            title совпадает с существующим компонентом.
 *   before / after — id записи index.json, рядом с которой встать
 *            (без них — в конец). Порядок в дереве — порядок index.json:
 *            якорь берите из того же узла, куда встаёт страница. Записи
 *            верхнего уровня (без '/') сайдбар показывает в начале дерева.
 *
 * Повторный запуск заменяет ранее добавленные страницы, а не дублирует их.
 *
 * Запуск: node add-pages.mjs <static> <pages.json>
 *
 * Файл публикуется в npm-пакете Storybook (bin/), поэтому зависимости —
 * только встроенные модули Node.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SERVICE_ENTRY_ID = 'service-externalpage--docs';
/** Поле записи index.json с именем модуля страницы в static/internal/. */
export const PAGE_FIELD = 'internalPage';
const FILE_RE = /^[a-z0-9-]+$/;

export class AddPagesError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AddPagesError';
  }
}

/** Как sanitize из @storybook/csf: кириллица сохраняется. */
const sanitize = (value) =>
  value
    .toLowerCase()
    .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

/** Как toId из @storybook/csf: 'Changelog', 'Docs' → 'changelog--docs'. */
export const entryId = (title, name) => {
  const kind = sanitize(title);
  const story = sanitize(name);
  if (!kind || !story) {
    throw new AddPagesError(
      `Из title «${title}» и name «${name}» не получается id записи`,
    );
  }
  return `${kind}--${story}`;
};

function normalizePages(config) {
  const pages = Array.isArray(config) ? config : config?.pages;
  if (!Array.isArray(pages) || pages.length === 0) {
    throw new AddPagesError(
      'Список страниц пуст: ожидается массив или { "pages": [...] }',
    );
  }
  const seen = new Set();
  return pages.map((page, i) => {
    const where = `pages[${i}]`;
    if (typeof page?.file !== 'string' || !FILE_RE.test(page.file)) {
      throw new AddPagesError(
        `${where}.file должно состоять из [a-z0-9-], получено: ${JSON.stringify(
          page?.file,
        )}`,
      );
    }
    if (typeof page.title !== 'string' || !page.title.trim()) {
      throw new AddPagesError(`${where}.title не задан`);
    }
    if (
      page.name !== undefined &&
      (typeof page.name !== 'string' || !page.name.trim())
    ) {
      throw new AddPagesError(`${where}.name должно быть непустой строкой`);
    }
    if (page.before && page.after) {
      throw new AddPagesError(`${where}: укажите либо before, либо after`);
    }
    if (seen.has(page.file)) {
      throw new AddPagesError(
        `${where}: страница «${page.file}» указана дважды`,
      );
    }
    seen.add(page.file);
    return {
      file: page.file,
      title: page.title.trim(),
      name: page.name?.trim() ?? 'Docs',
      before: page.before,
      after: page.after,
    };
  });
}

/**
 * @param {string} staticDir каталог собранного Storybook (с index.json)
 * @param {unknown} config список страниц (см. описание файла)
 * @returns {string[]} id добавленных записей
 */
export function addPages(staticDir, config) {
  const indexPath = path.join(staticDir, 'index.json');
  if (!fs.existsSync(indexPath)) {
    throw new AddPagesError(
      `Не найден ${indexPath} — это не собранный Storybook`,
    );
  }
  const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  const service = index.entries?.[SERVICE_ENTRY_ID];
  if (!service) {
    throw new AddPagesError(
      `В index.json нет служебной записи ${SERVICE_ENTRY_ID}: ` +
        'эта сборка Storybook не поддерживает внутренние страницы',
    );
  }

  const pages = normalizePages(config);
  for (const { file } of pages) {
    const module = path.join(staticDir, 'internal', `${file}.js`);
    if (!fs.existsSync(module)) {
      throw new AddPagesError(`Не найден модуль страницы ${module}`);
    }
  }

  // Ранее добавленные страницы убираем: повторный запуск их заменяет.
  const order = Object.keys(index.entries).filter(
    (id) => !index.entries[id][PAGE_FIELD],
  );
  const entries = Object.fromEntries(
    order.map((id) => [id, index.entries[id]]),
  );

  const ids = [];
  for (const page of pages) {
    const id = entryId(page.title, page.name);
    if (entries[id]) {
      throw new AddPagesError(
        `Страница «${page.file}»: id «${id}» уже занят — измените title или name`,
      );
    }
    ids.push(id);
    const anchor = page.before ?? page.after;
    let position = order.length;
    if (anchor) {
      const anchorIndex = order.indexOf(anchor);
      if (anchorIndex === -1) {
        throw new AddPagesError(
          `Страница «${page.file}»: в index.json нет записи «${anchor}»`,
        );
      }
      position = page.before ? anchorIndex : anchorIndex + 1;
    }
    order.splice(position, 0, id);
    entries[id] = {
      id,
      title: page.title,
      name: page.name,
      importPath: service.importPath,
      storiesImports: [],
      type: 'docs',
      tags: ['dev', 'unattached-mdx'],
      [PAGE_FIELD]: page.file,
    };
  }

  index.entries = Object.fromEntries(order.map((id) => [id, entries[id]]));
  fs.writeFileSync(indexPath, JSON.stringify(index));
  return ids;
}

function main([staticDir, pagesFile]) {
  if (!staticDir || !pagesFile) {
    throw new AddPagesError(
      'Использование: node add-pages.mjs <static> <pages.json>',
    );
  }
  const config = JSON.parse(fs.readFileSync(pagesFile, 'utf8'));
  const ids = addPages(path.resolve(staticDir), config);
  console.log(`✔ Добавлены страницы в ${path.resolve(staticDir)}/index.json:`);
  for (const id of ids) console.log(`   ${id}`);
}

// realpath: через `bin` npm запускает скрипт по симлинку из node_modules/.bin.
const isCli =
  Boolean(process.argv[1]) &&
  fs.realpathSync(process.argv[1]) ===
    fs.realpathSync(fileURLToPath(import.meta.url));

if (isCli) {
  try {
    main(process.argv.slice(2));
  } catch (e) {
    if (!(e instanceof AddPagesError) && !(e instanceof SyntaxError)) throw e;
    console.error(`\n✖ ${e.message}\n`);
    process.exit(1);
  }
}
