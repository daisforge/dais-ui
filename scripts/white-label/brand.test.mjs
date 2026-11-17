import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import {
  applyReplacements,
  BrandError,
  createReplacements,
  findBrandLeftovers,
  formatHits,
  readEnvName,
  toFlatName,
} from './brand.mjs';

const names = { lib: '@acme/ds', mcp: '@acme/ds-mcp' };
const replace = (text) => applyReplacements(text, createReplacements(names));

const tmpDirs = [];
const makeTmp = () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'brand-test-'));
  tmpDirs.push(dir);
  return dir;
};

afterEach(() => {
  while (tmpDirs.length) {
    fs.rmSync(tmpDirs.pop(), { recursive: true, force: true });
  }
});

describe('createReplacements / applyReplacements', () => {
  it.each([
    [
      "import { Button } from '@daisforge/ui';",
      "import { Button } from '@acme/ds';",
    ],
    ["from '@daisforge/ui/icons'", "from '@acme/ds/icons'"],
    [
      "from '@daisforge/ui/components/TableCanvas'",
      "from '@acme/ds/components/TableCanvas'",
    ],
    ['npx @daisforge/ui-mcp', 'npx @acme/ds-mcp'],
    ['/@daisforge\\/ui-mcp/', '/@acme\\/ds-mcp/'],
    ['/@daisforge\\/ui\\//', '/@acme\\/ds\\//'],
    ['bin: daisforge-ui-mcp', 'bin: acme-ds-mcp'],
    ['daisforge-ui://catalog/Button', 'acme-ds://catalog/Button'],
    ['cache-daisforge-ui', 'cache-acme-ds'],
    ['монорепо dais/ui', 'монорепо acme-ds'],
    [
      'stories/AiChatDAIS/AiChatDAIS.tsx',
      'stories/AiChatAssistant/AiChatAssistant.tsx',
    ],
    ["const PREFIX = 'dais-ui__';", "const PREFIX = 'acme-ds__';"],
    ["Symbol('daisDropdownOriginalItem')", "Symbol('dropdownOriginalItem')"],
    ['window.daisScreenshotRepaint()', 'window.screenshotRepaint()'],
  ])('%s → %s', (from, to) => {
    expect(replace(from)).toBe(to);
  });

  it('заменяет ui-mcp раньше ui: имя MCP не склеивается из имени библиотеки', () => {
    const result = replace('@daisforge/ui-mcp и @daisforge/ui');
    expect(result).toBe('@acme/ds-mcp и @acme/ds');
    expect(result).not.toContain('@acme/ds-mcp-mcp');
  });

  it('работает с именем без scope', () => {
    const result = applyReplacements(
      "'@daisforge/ui' daisforge-ui:// @daisforge/ui-mcp",
      createReplacements({ lib: 'acme-ds', mcp: 'acme-ds-mcp' }),
    );
    expect(result).toBe("'acme-ds' acme-ds:// acme-ds-mcp");
  });

  it('не трогает текст без бренда', () => {
    const text = 'import { Button } from "@salutejs/sdds-finai";';
    expect(replace(text)).toBe(text);
  });
});

describe('toFlatName', () => {
  it('убирает @ и заменяет / на -', () => {
    expect(toFlatName('@acme/ds-mcp')).toBe('acme-ds-mcp');
    expect(toFlatName('acme-ds')).toBe('acme-ds');
  });
});

describe('readEnvName', () => {
  it('возвращает обрезанное валидное имя', () => {
    expect(readEnvName('X', { X: '  @acme/ds  ' })).toBe('@acme/ds');
  });

  it.each([
    ['пустое значение', undefined, /Не задана переменная окружения X/],
    ['только пробелы', '   ', /Не задана переменная окружения X/],
    ['невалидное имя npm', 'Acme DS', /не похоже на имя npm-пакета/],
    ['имя с исходным брендом', '@acme/dais', /содержит "dais"/],
  ])('бросает BrandError: %s', (_, value, message) => {
    expect(() => readEnvName('X', { X: value })).toThrowError(BrandError);
    expect(() => readEnvName('X', { X: value })).toThrowError(message);
  });
});

describe('findBrandLeftovers', () => {
  it('находит бренд с путём и номером строки, в любом регистре', () => {
    const dir = makeTmp();
    fs.mkdirSync(path.join(dir, 'sub'));
    fs.writeFileSync(path.join(dir, 'sub', 'a.js'), 'ok\nconst x = "DAIS";\n');
    fs.writeFileSync(path.join(dir, 'b.js'), 'clean');

    expect(findBrandLeftovers(dir)).toEqual([
      `${path.join('sub', 'a.js')}:2: const x = "DAIS";`,
    ]);
  });

  it('учитывает filter', () => {
    const dir = makeTmp();
    fs.writeFileSync(path.join(dir, 'a.png'), 'dais');
    expect(
      findBrandLeftovers(dir, { filter: (f) => f.endsWith('.js') }),
    ).toEqual([]);
  });

  it('ignore вырезает разрешённую строку, но не скрывает бренд рядом с ней', () => {
    const dir = makeTmp();
    fs.writeFileSync(
      path.join(dir, 'a.js'),
      '{module:"DAISY"}\n{module:"DAISY", x:"dais-ui"}\n',
    );
    expect(findBrandLeftovers(dir, { ignore: ['DAISY'] })).toEqual([
      'a.js:2: {module:"DAISY", x:"dais-ui"}',
    ]);
  });
});

describe('formatHits', () => {
  it('обрезает список и добавляет хвост', () => {
    const hits = Array.from({ length: 25 }, (_, i) => `hit ${i}`);
    const text = formatHits(hits);
    expect(text.split('\n')).toHaveLength(21);
    expect(text).toContain('… и ещё 5');
  });
});
