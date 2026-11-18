import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { afterEach, describe, expect, it } from 'vitest';

import {
  buildPages,
  BuildPagesError,
  detectLib,
  readSharedModules,
  sharedKey,
} from './build-pages.mjs';

const LIB = '@acme/ds';
const shared = readSharedModules();

const tmpDirs = [];
const makeTmp = (files = {}) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'build-pages-test-'));
  tmpDirs.push(dir);
  for (const [rel, content] of Object.entries(files)) {
    const full = path.join(dir, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content);
  }
  return dir;
};

afterEach(() => {
  delete globalThis.__SB_SHARED__;
  while (tmpDirs.length) {
    fs.rmSync(tmpDirs.pop(), { recursive: true, force: true });
  }
});

/** Подставной набор модулей Storybook: namespace-объекты без __esModule. */
const fakeShared = () => {
  const jsx = (type, props) => ({ type, props });
  return {
    react: { useState: (v) => [v, () => {}] },
    'react/jsx-runtime': { jsx, jsxs: jsx, Fragment: 'Fragment' },
    'react-dom': {},
    // Как настоящий: default — функция styled со своими свойствами (styled.div),
    // плюс именованные экспорты модуля (css).
    'styled-components': {
      default: Object.assign((tag) => `styled(${tag})`, { div: 'StyledDiv' }),
      css: 'cssHelper',
    },
    lib: { Button: 'LibButton', TableCanvas: 'LibTableCanvas' },
    'lib/icons': { IconPlus: 'LibIconPlus' },
    'lib/constants': {},
    'lib/mixins': {},
    'lib/styles': {},
    'lib/tokens': { textAccent: 'var(--text-accent)' },
    'lib/utils': {},
  };
};

describe('sharedKey', () => {
  const options = { lib: LIB, ...shared };

  it.each([
    ['react', 'react'],
    ['react/jsx-runtime', 'react/jsx-runtime'],
    ['styled-components', 'styled-components'],
    [LIB, 'lib'],
    [`${LIB}/icons`, 'lib/icons'],
    [`${LIB}/tokens/color`, 'lib/tokens'],
    [`${LIB}/components/TableCanvas`, 'lib'],
  ])('%s → %s', (id, key) => {
    expect(sharedKey(id, options)).toBe(key);
  });

  it.each(['./helper', 'lodash', '@acme/ds-mcp', 'react-is'])(
    '%s бандлится как обычно',
    (id) => {
      expect(sharedKey(id, options)).toBeUndefined();
    },
  );
});

describe('buildPages', () => {
  const page = `
    import { useState } from 'react';
    import styled, { css } from 'styled-components';
    import { Button } from '${LIB}';
    import { TableCanvas } from '${LIB}/components/TableCanvas';
    import { IconPlus } from '${LIB}/icons';
    import { textAccent } from '${LIB}/tokens';
    import { greet } from './helper';

    const Title = styled.div;
    const Wrapped = styled('section');

    export default function Page() {
      const [count] = useState(7);
      return (
        <>
          <Title>{greet(count)}</Title>
          <Button contentLeft={<IconPlus />} color={textAccent} />
          <TableCanvas />
          <Wrapped data-css={css} />
        </>
      );
    }
  `;

  // "type": "module" в package.json страниц включает у esbuild node-режим
  // подключения CommonJS: default = весь module.exports. Во внутреннем
  // репозитории корень такой, и import styled ломался именно там.
  it.each([
    ['без "type"', {}],
    ['в пакете с "type": "module"', { type: 'module' }],
  ])(
    'подменяет импорты на модули Storybook и бандлит остальное (%s)',
    async (_, pkg) => {
      const pagesDir = makeTmp({
        'package.json': JSON.stringify(pkg),
        'pages.json': JSON.stringify([{ file: 'demo', title: 'Демо' }]),
        'demo.tsx': page,
        'helper.ts': 'export const greet = (n: number) => `привет ${n}`;',
      });
      const outDir = path.join(makeTmp(), 'internal');

      const { files } = await buildPages({ pagesDir, outDir, lib: LIB });

      expect(files).toEqual([path.join(outDir, 'demo.js')]);
      const code = fs.readFileSync(files[0], 'utf8');
      // Ни React, ни библиотека в бандл не попали — только код страницы и
      // shim'ы модулей (несколько КБ; один React весил бы больше 100 КБ).
      expect(code.length).toBeLessThan(20_000);
      expect(code).not.toContain('react.production');
      expect(code).not.toContain(LIB);

      globalThis.__SB_SHARED__ = fakeShared();
      const { default: Page } = await import(pathToFileURL(files[0]).href);
      const tree = Page();
      const [title, button, table, wrapped] = tree.props.children;

      expect(title.type).toBe('StyledDiv'); // styled.div из default
      expect(wrapped.type).toBe('styled(section)'); // styled(...) вызывается
      expect(wrapped.props['data-css']).toBe('cssHelper'); // именованный экспорт
      expect(title.props.children).toBe('привет 7'); // хелпер забандлен
      expect(button.type).toBe('LibButton');
      expect(button.props.contentLeft.type).toBe('LibIconPlus');
      expect(button.props.color).toBe('var(--text-accent)');
      expect(table.type).toBe('LibTableCanvas'); // глубокий путь → корень
    },
  );

  it('страница падает с понятной ошибкой, если Storybook не дал модуль', async () => {
    const pagesDir = makeTmp({
      'pages.json': JSON.stringify([{ file: 'demo', title: 'Демо' }]),
      'demo.tsx': `import { Button } from '${LIB}'; export default () => Button;`,
    });
    const outDir = path.join(makeTmp(), 'internal');
    const { files } = await buildPages({ pagesDir, outDir, lib: LIB });

    globalThis.__SB_SHARED__ = { react: {} };
    await expect(import(pathToFileURL(files[0]).href)).rejects.toThrowError(
      /Storybook не предоставил модуль lib/,
    );
  });

  it.each([
    ['нет pages.json', {}, /Не найден .*pages\.json/],
    ['пустой список', { 'pages.json': '[]' }, /список страниц пуст/],
    [
      'имя страницы с путём',
      { 'pages.json': JSON.stringify([{ file: '../evil' }]) },
      /\[a-z0-9-\]/,
    ],
    [
      'нет исходника',
      { 'pages.json': JSON.stringify([{ file: 'missing' }]) },
      /Не найден исходник страницы «missing»/,
    ],
    [
      'ошибка компиляции',
      {
        'pages.json': JSON.stringify([{ file: 'broken' }]),
        'broken.tsx': 'export default () => <div>;',
      },
      /Сборка страниц упала/,
    ],
  ])('бросает BuildPagesError: %s', async (_, files, message) => {
    const pagesDir = makeTmp(files);
    const outDir = path.join(makeTmp(), 'internal');
    await expect(
      buildPages({ pagesDir, outDir, lib: LIB }),
    ).rejects.toThrowError(message);
    await expect(
      buildPages({ pagesDir, outDir, lib: LIB }),
    ).rejects.toBeInstanceOf(BuildPagesError);
  });

  it('без имени библиотеки объясняет, как его задать', async () => {
    await expect(
      buildPages({ pagesDir: makeTmp(), outDir: makeTmp(), lib: undefined }),
    ).rejects.toThrowError(/укажите --lib или ALT_LIB_PACKAGE_NAME/);
  });
});

describe('detectLib', () => {
  const project = (deps, installed) =>
    makeTmp({
      'package.json': JSON.stringify({ devDependencies: deps }),
      ...Object.fromEntries(
        installed.map((name) => [
          `node_modules/${name}/mcp-data/component-index.json`,
          '{}',
        ]),
      ),
    });

  it('находит библиотеку по mcp-data среди зависимостей', () => {
    const cwd = project({ react: '18', '@acme/ds': '1.0.0' }, ['@acme/ds']);
    expect(detectLib(cwd)).toBe('@acme/ds');
  });

  it('ничего не находит без такой зависимости', () => {
    expect(detectLib(project({ react: '18' }, []))).toBeUndefined();
  });

  it('просит --lib, если кандидатов несколько', () => {
    const cwd = project({ '@a/ds': '1', '@b/ds': '1' }, ['@a/ds', '@b/ds']);
    expect(() => detectLib(cwd)).toThrowError(/укажите --lib/);
  });
});
