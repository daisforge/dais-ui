import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import { SERVICE_ENTRY_ID } from './add-pages.mjs';
import {
  fromLibTarball,
  prepareDist,
  PrepareDistError,
} from './prepare-dist.mjs';

const names = { lib: '@acme/ds', mcp: '@acme/ds-mcp' };
const VERSION = '1.30.0';

const tmpDirs = [];
const makeTmp = (files = {}) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'prepare-dist-test-'));
  tmpDirs.push(dir);
  for (const [rel, content] of Object.entries(files)) {
    const full = path.join(dir, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content);
  }
  return dir;
};
const read = (...parts) => fs.readFileSync(path.join(...parts), 'utf8');

afterEach(() => {
  while (tmpDirs.length) {
    fs.rmSync(tmpDirs.pop(), { recursive: true, force: true });
  }
});

/** Подмена npm pack: «скачанный» @daisforge/ui нужной версии. */
const fakeFetchLib =
  (pkg = { name: '@daisforge/ui', version: VERSION }) =>
  (version, workDir) => {
    const dir = path.join(workDir, 'package');
    fs.mkdirSync(path.join(dir, 'mcp-data'), { recursive: true });
    fs.writeFileSync(
      path.join(dir, 'package.json'),
      JSON.stringify({
        ...pkg,
        publishConfig: { registry: 'https://registry.npmjs.org/' },
      }),
    );
    fs.writeFileSync(
      path.join(dir, 'index.d.ts'),
      "/** import { Button } from '@daisforge/ui'; */\n",
    );
    fs.writeFileSync(
      path.join(dir, 'mcp-data', 'component-index.json'),
      JSON.stringify({ libVersion: version, example: '@daisforge/ui' }),
    );
    return dir;
  };

/** Мини-статика Storybook со служебной записью для страниц. */
const makeStorybook = () =>
  makeTmp({
    'index.json': JSON.stringify({
      v: 4,
      entries: {
        'changelog--docs': { id: 'changelog--docs', title: 'Changelog' },
        [SERVICE_ENTRY_ID]: {
          id: SERVICE_ENTRY_ID,
          title: 'Service/ExternalPage',
          importPath: './ExternalPage.mdx',
        },
      },
    }),
    'assets/Docs-x1234567.js':
      "const code = `import { Button } from '@daisforge/ui'`;",
  });

const makePages = () =>
  makeTmp({
    'pages.json': JSON.stringify([
      { file: 'guide', title: 'Гайд', before: 'changelog--docs' },
    ]),
    'guide.tsx': `import { Button } from '@acme/ds'; export default () => <Button />;`,
  });

describe('prepareDist', () => {
  it('кладёт переименованные библиотеку и Storybook со страницами в dist', async () => {
    const outDir = makeTmp({ 'other/keep.txt': 'не трогать' });

    const result = await prepareDist({
      version: VERSION,
      storybookStatic: makeStorybook(),
      outDir,
      names,
      pagesDir: makePages(),
      fetchLib: fakeFetchLib(),
    });

    // Библиотека: имя заменено, версия та же, publishConfig убран.
    const lib = path.join(outDir, 'packages', 'ui-kit');
    expect(result.libOut).toBe(lib);
    expect(JSON.parse(read(lib, 'package.json'))).toEqual({
      name: '@acme/ds',
      version: VERSION,
    });
    expect(read(lib, 'index.d.ts')).toContain("from '@acme/ds'");
    expect(JSON.parse(read(lib, 'mcp-data', 'component-index.json'))).toEqual({
      libVersion: VERSION,
      example: '@acme/ds',
    });

    // Storybook: переименован, страница собрана и стоит в дереве.
    const storybook = path.join(outDir, 'storybook');
    expect(read(storybook, 'assets', 'Docs-x1234567.js')).toContain('@acme/ds');
    expect(fs.existsSync(path.join(storybook, 'internal', 'guide.js'))).toBe(
      true,
    );
    expect(result.pages).toEqual(['гайд--docs']);
    expect(
      Object.keys(JSON.parse(read(storybook, 'index.json')).entries)[0],
    ).toBe('гайд--docs');

    // Остальной dist не тронут.
    expect(read(outDir, 'other', 'keep.txt')).toBe('не трогать');
  });

  it('пересоздаёт свои каталоги: старые файлы из прошлого запуска не остаются', async () => {
    const outDir = makeTmp({
      'packages/ui-kit/stale.js': 'old',
      'storybook/stale.js': 'old',
    });

    await prepareDist({
      version: VERSION,
      storybookStatic: makeStorybook(),
      outDir,
      names,
      fetchLib: fakeFetchLib(),
    });

    expect(fs.existsSync(path.join(outDir, 'packages/ui-kit/stale.js'))).toBe(
      false,
    );
    expect(fs.existsSync(path.join(outDir, 'storybook/stale.js'))).toBe(false);
  });

  it('--lib-tarball: библиотека берётся из локального архива', async () => {
    // Архив в формате npm pack: содержимое в каталоге package/.
    const src = makeTmp();
    fakeFetchLib()(VERSION, src);
    const tarball = path.join(makeTmp(), 'daisforge-ui-1.30.0.tgz');
    execFileSync('tar', ['-czf', tarball, '-C', src, 'package']);
    const outDir = makeTmp();

    await prepareDist({
      version: VERSION,
      storybookStatic: makeStorybook(),
      outDir,
      names,
      fetchLib: fromLibTarball(tarball),
    });

    expect(
      JSON.parse(read(outDir, 'packages', 'ui-kit', 'package.json')).name,
    ).toBe('@acme/ds');
  });

  it('--lib-tarball: понятная ошибка, если архива нет', async () => {
    await expect(
      prepareDist({
        version: VERSION,
        storybookStatic: makeStorybook(),
        outDir: makeTmp(),
        names,
        fetchLib: fromLibTarball('/no/such/file.tgz'),
      }),
    ).rejects.toThrowError(/Не найден архив библиотеки/);
  });

  it('без --pages готовит dist без внутренних страниц', async () => {
    const outDir = makeTmp();
    const result = await prepareDist({
      version: VERSION,
      storybookStatic: makeStorybook(),
      outDir,
      names,
      fetchLib: fakeFetchLib(),
    });
    expect(result.pages).toEqual([]);
    expect(fs.existsSync(path.join(outDir, 'storybook', 'internal'))).toBe(
      false,
    );
  });

  it('падает, если скачалась не та версия библиотеки', async () => {
    await expect(
      prepareDist({
        version: VERSION,
        storybookStatic: makeStorybook(),
        outDir: makeTmp(),
        names,
        fetchLib: fakeFetchLib({ name: '@daisforge/ui', version: '1.29.0' }),
      }),
    ).rejects.toThrowError(/ожидался @daisforge\/ui@1\.30\.0/);
  });

  it('падает, если после замены остался бренд', async () => {
    const storybookStatic = makeStorybook();
    fs.writeFileSync(path.join(storybookStatic, 'story.js'), 'title:"DAISX"');

    await expect(
      prepareDist({
        version: VERSION,
        storybookStatic,
        outDir: makeTmp(),
        names,
        fetchLib: fakeFetchLib(),
      }),
    ).rejects.toThrowError(/Storybook: после замены остался исходный бренд/);
  });

  it.each([
    [
      'нет статики Storybook',
      { storybookStatic: '/no/such/dir' },
      /Не найдена статика/,
    ],
    [
      'нет pages.json',
      { pagesDir: '/no/such/pages' },
      /Не найден .*pages\.json/,
    ],
  ])('проверяет входные данные: %s', async (_, override, message) => {
    await expect(
      prepareDist({
        version: VERSION,
        storybookStatic: makeStorybook(),
        outDir: makeTmp(),
        names,
        fetchLib: fakeFetchLib(),
        ...override,
      }),
    ).rejects.toThrowError(message);
  });

  it('ошибки — PrepareDistError', async () => {
    await expect(
      prepareDist({
        version: VERSION,
        storybookStatic: '/no/such/dir',
        outDir: makeTmp(),
        names,
      }),
    ).rejects.toBeInstanceOf(PrepareDistError);
  });
});
