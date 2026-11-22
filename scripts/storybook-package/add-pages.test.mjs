import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import { addPages, AddPagesError, SERVICE_ENTRY_ID } from './add-pages.mjs';

const SERVICE_IMPORT =
  './packages/storybook/src/stories/_external/ExternalPage.mdx';

const tmpDirs = [];
/** Мини-сборка Storybook: index.json и модули страниц в internal/. */
const makeStatic = ({ withService = true, modules = ['ai-chat'] } = {}) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'add-pages-test-'));
  tmpDirs.push(dir);
  const entries = {
    'components-button--docs': {
      id: 'components-button--docs',
      title: 'Components/Button',
    },
    'changelog--docs': { id: 'changelog--docs', title: 'Changelog' },
    'guide--docs': { id: 'guide--docs', title: 'Guide' },
  };
  if (withService) {
    entries[SERVICE_ENTRY_ID] = {
      id: SERVICE_ENTRY_ID,
      title: 'Service/ExternalPage',
      importPath: SERVICE_IMPORT,
      tags: ['hideInSidebar'],
    };
  }
  fs.writeFileSync(
    path.join(dir, 'index.json'),
    JSON.stringify({ v: 4, entries }),
  );
  fs.mkdirSync(path.join(dir, 'internal'));
  for (const file of modules) {
    fs.writeFileSync(
      path.join(dir, 'internal', `${file}.js`),
      'export default () => null;',
    );
  }
  return dir;
};
const readIndex = (dir) =>
  JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8'));

afterEach(() => {
  while (tmpDirs.length) {
    fs.rmSync(tmpDirs.pop(), { recursive: true, force: true });
  }
});

describe('addPages', () => {
  it('вставляет docs-запись перед указанной и ссылается на служебный модуль', () => {
    const dir = makeStatic();

    const ids = addPages(dir, [
      { file: 'ai-chat', title: 'AI-чат', before: 'changelog--docs' },
    ]);

    expect(ids).toEqual(['ai-чат--docs']);
    const index = readIndex(dir);
    expect(Object.keys(index.entries)).toEqual([
      'components-button--docs',
      'ai-чат--docs',
      'changelog--docs',
      'guide--docs',
      SERVICE_ENTRY_ID,
    ]);
    expect(index.entries['ai-чат--docs']).toEqual({
      id: 'ai-чат--docs',
      title: 'AI-чат',
      name: 'Docs',
      importPath: SERVICE_IMPORT,
      storiesImports: [],
      type: 'docs',
      tags: ['dev', 'unattached-mdx'],
      internalPage: 'ai-chat',
    });
    expect(index.v).toBe(4);
  });

  it('after ставит запись следом, без before/after — в конец', () => {
    const dir = makeStatic({ modules: ['a', 'b'] });

    addPages(dir, {
      pages: [
        { file: 'a', title: 'Раздел/A', after: 'changelog--docs' },
        { file: 'b', title: 'B' },
      ],
    });

    expect(Object.keys(readIndex(dir).entries)).toEqual([
      'components-button--docs',
      'changelog--docs',
      'раздел-a--docs',
      'guide--docs',
      SERVICE_ENTRY_ID,
      'b--docs',
    ]);
  });

  it('name кладёт страницу внутрь узла существующего компонента', () => {
    const dir = makeStatic();

    addPages(dir, [
      {
        file: 'ai-chat',
        title: 'Components/Button',
        name: 'Заметки',
        after: 'components-button--docs',
      },
    ]);

    const index = readIndex(dir);
    expect(Object.keys(index.entries).slice(0, 2)).toEqual([
      'components-button--docs',
      'components-button--заметки',
    ]);
    expect(index.entries['components-button--заметки']).toMatchObject({
      title: 'Components/Button',
      name: 'Заметки',
    });
  });

  it('повторный запуск заменяет страницы, а не дублирует', () => {
    const dir = makeStatic({ modules: ['a', 'b'] });
    addPages(dir, [
      { file: 'a', title: 'A' },
      { file: 'b', title: 'B' },
    ]);

    addPages(dir, [{ file: 'b', title: 'B2', before: 'changelog--docs' }]);

    const index = readIndex(dir);
    const added = Object.values(index.entries).filter((e) => e.internalPage);
    expect(added).toHaveLength(1);
    expect(added[0]).toMatchObject({ id: 'b2--docs', internalPage: 'b' });
  });

  it('не перезаписывает существующую запись с тем же id', () => {
    const dir = makeStatic();
    expect(() =>
      addPages(dir, [{ file: 'ai-chat', title: 'Changelog' }]),
    ).toThrowError(/id «changelog--docs» уже занят/);
  });

  it.each([
    ['пустой список', [], /Список страниц пуст/],
    ['имя файла с путём', [{ file: '../evil', title: 'X' }], /\[a-z0-9-\]/],
    [
      'имя файла в верхнем регистре',
      [{ file: 'Page', title: 'X' }],
      /\[a-z0-9-\]/,
    ],
    ['нет title', [{ file: 'ai-chat' }], /title не задан/],
    [
      'пустой name',
      [{ file: 'ai-chat', title: 'X', name: ' ' }],
      /name должно быть/,
    ],
    [
      'before и after сразу',
      [
        {
          file: 'ai-chat',
          title: 'X',
          before: 'guide--docs',
          after: 'guide--docs',
        },
      ],
      /либо before, либо after/,
    ],
    [
      'страница дважды',
      [
        { file: 'ai-chat', title: 'X' },
        { file: 'ai-chat', title: 'Y' },
      ],
      /указана дважды/,
    ],
    [
      'нет модуля',
      [{ file: 'missing', title: 'X' }],
      /Не найден модуль страницы/,
    ],
    [
      'нет якоря',
      [{ file: 'ai-chat', title: 'X', before: 'nope--docs' }],
      /нет записи «nope--docs»/,
    ],
  ])('бросает AddPagesError: %s', (_, config, message) => {
    const dir = makeStatic();
    const before = fs.readFileSync(path.join(dir, 'index.json'), 'utf8');

    expect(() => addPages(dir, config)).toThrowError(AddPagesError);
    expect(() => addPages(dir, config)).toThrowError(message);
    // При ошибке index.json не меняется.
    expect(fs.readFileSync(path.join(dir, 'index.json'), 'utf8')).toBe(before);
  });

  it('отказывается работать со сборкой без служебной записи', () => {
    const dir = makeStatic({ withService: false });
    expect(() => addPages(dir, [{ file: 'ai-chat', title: 'X' }])).toThrowError(
      /не поддерживает внутренние страницы/,
    );
  });
});
