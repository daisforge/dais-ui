import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { afterEach, describe, expect, it } from 'vitest';

import { BrandError } from './brand.mjs';
import { renameArtifact } from './rename-artifact.mjs';

const SCRIPT = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'rename-artifact.mjs',
);
const names = { lib: '@acme/ds', mcp: '@acme/ds-mcp' };

const tmpDirs = [];
const makeTmp = (files) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'rename-artifact-test-'));
  tmpDirs.push(dir);
  for (const [rel, content] of Object.entries(files)) {
    const full = path.join(dir, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content);
  }
  return dir;
};
const read = (dir, rel) => fs.readFileSync(path.join(dir, rel), 'utf8');

afterEach(() => {
  while (tmpDirs.length) {
    fs.rmSync(tmpDirs.pop(), { recursive: true, force: true });
  }
});

describe('renameArtifact', () => {
  it('переименовывает tarball библиотеки: код, типы, mcp-data, package.json', () => {
    const dir = makeTmp({
      'package.json': JSON.stringify({
        name: '@daisforge/ui',
        version: '1.29.0',
        description: 'React UI component library for dais design system',
        publishConfig: { registry: 'https://registry.npmjs.org/' },
        repository: { url: 'git+https://github.com/daisforge/dais-ui.git' },
        homepage: 'https://github.com/daisforge/dais-ui#readme',
        bugs: { url: 'https://github.com/daisforge/dais-ui/issues' },
        gitHead: 'abc',
        peerDependencies: { react: '>=17' },
      }),
      'index.mjs':
        "export * from './chunks/a.mjs';\n//# sourceMappingURL=index.mjs.map\n",
      'index.mjs.map': '{"sources":["../src/dais.ts"]}',
      'chunks/a.mjs': "const p = 'dais-ui__';\n",
      'utils/getTokenValue.d.ts':
        "/** import { textAccent } from '@daisforge/ui/tokens/color'; */\n",
      'mcp-data/component-index.json': JSON.stringify({
        libVersion: '1.29.0',
        importExample: "import { Button } from '@daisforge/ui';",
        mcp: '@daisforge/ui-mcp',
      }),
      'assets/logo.png': 'binary dais',
    });

    const result = renameArtifact(dir, names);

    expect(result.leftovers).toEqual([]);
    expect(result.removedMaps).toBe(1);
    expect(fs.existsSync(path.join(dir, 'index.mjs.map'))).toBe(false);
    expect(read(dir, 'index.mjs')).toBe("export * from './chunks/a.mjs';\n");
    expect(read(dir, 'chunks/a.mjs')).toBe("const p = 'acme-ds__';\n");
    expect(read(dir, 'utils/getTokenValue.d.ts')).toContain(
      "from '@acme/ds/tokens/color'",
    );

    const index = JSON.parse(read(dir, 'mcp-data/component-index.json'));
    expect(index).toEqual({
      libVersion: '1.29.0',
      importExample: "import { Button } from '@acme/ds';",
      mcp: '@acme/ds-mcp',
    });

    expect(JSON.parse(read(dir, 'package.json'))).toEqual({
      name: '@acme/ds',
      version: '1.29.0',
      peerDependencies: { react: '>=17' },
    });

    // Бинарные файлы не читаются и не правятся.
    expect(read(dir, 'assets/logo.png')).toBe('binary dais');
  });

  it('переименовывает файлы по той же таблице, что и ссылки на них', () => {
    const dir = makeTmp({
      'index.json': '{"importPath":"./assets/daisforge-ui-icons-x1.js"}',
      'assets/daisforge-ui-icons-x1.js': 'export default 1;',
    });

    const result = renameArtifact(dir, names);

    expect(result.renamedFiles).toBe(1);
    expect(result.leftovers).toEqual([]);
    expect(read(dir, 'index.json')).toBe(
      '{"importPath":"./assets/acme-ds-icons-x1.js"}',
    );
    expect(fs.existsSync(path.join(dir, 'assets/acme-ds-icons-x1.js'))).toBe(
      true,
    );
  });

  it('страницу AI-чата не меняет: ни её чанк, ни ссылки на неё', () => {
    const chunk =
      'const t = "DAIS"; const c = "dais-chat-contentType"; import "@daisforge/ui";';
    const dir = makeTmp({
      'assets/AiChatDAIS-BQrARqWR.js': chunk,
      'assets/iframe-9Ykls_x0.js':
        '{"./packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.mdx":()=>import("./AiChatDAIS-BQrARqWR.js"),"x":"@daisforge/ui"}',
      'index.json':
        '{"dais--docs":{"id":"dais--docs","title":"DAIS","importPath":"./packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.mdx"}}',
      'index.html': '<style>#dais--docs svg { display: none; }</style>',
    });

    const result = renameArtifact(dir, names);

    expect(result.leftovers).toEqual([]);
    expect(result.renamedFiles).toBe(0);
    expect(read(dir, 'assets/AiChatDAIS-BQrARqWR.js')).toBe(chunk);
    expect(read(dir, 'assets/iframe-9Ykls_x0.js')).toBe(
      '{"./packages/storybook/src/stories/AiChatDAIS/AiChatDAIS.mdx":()=>import("./AiChatDAIS-BQrARqWR.js"),"x":"@acme/ds"}',
    );
    expect(read(dir, 'index.json')).toContain('"title":"DAIS"');
    expect(read(dir, 'index.html')).toContain('#dais--docs');
  });

  it('внешний glide-data-grid без зеркала оставляет как есть, бренд рядом — переименовывает', () => {
    const dir = makeTmp({
      'package.json': JSON.stringify({
        name: '@daisforge/ui',
        version: '1.30.0',
        dependencies: { '@daisforge/glide-data-grid': '6.14.0' },
      }),
      'index.mjs':
        "import { DataEditor } from '@daisforge/glide-data-grid';\nimport '@daisforge/glide-data-grid/dist/index.css';\nexport * from '@daisforge/ui/tokens';\n",
      'TableCanvas/type.d.ts':
        "export type { GridCell } from '@daisforge/glide-data-grid';\n",
      'mcp-data/component-index.json': JSON.stringify({
        sourceFile:
          'node_modules/@daisforge/glide-data-grid/dist/dts/internal/x.d.ts',
      }),
    });

    const result = renameArtifact(dir, names);

    expect(result.leftovers).toEqual([]);
    expect(JSON.parse(read(dir, 'package.json')).dependencies).toEqual({
      '@daisforge/glide-data-grid': '6.14.0',
    });
    expect(read(dir, 'index.mjs')).toBe(
      "import { DataEditor } from '@daisforge/glide-data-grid';\nimport '@daisforge/glide-data-grid/dist/index.css';\nexport * from '@acme/ds/tokens';\n",
    );
    expect(read(dir, 'TableCanvas/type.d.ts')).toContain(
      "from '@daisforge/glide-data-grid'",
    );
    expect(read(dir, 'mcp-data/component-index.json')).toContain(
      'node_modules/@daisforge/glide-data-grid/',
    );
  });

  it('случайный хеш Vite в имени чанка не считается брендом, бренд перед хешем — считается', () => {
    const dir = makeTmp({
      'assets/Table.stories-DaiSi7z1.js': 'export default 1;',
      'assets/iframe-x1234567.js': 'import("./Table.stories-DaiSi7z1.js");',
      'assets/dais-widget-Ab3dEf9h.js': 'export default 2;',
    });

    const { leftovers } = renameArtifact(dir, names);

    expect(leftovers).toEqual([
      `${path.join('assets', 'dais-widget-Ab3dEf9h.js')}: бренд в имени файла`,
    ]);
  });

  it('пропускает разрешённые строки, но сообщает о настоящих остатках', () => {
    const dir = makeTmp({
      'vendor.js': '{module:"DAISY"}',
      'changelog.js':
        '[a1b2](https://github.com/daisforge/dais-ui/commit/a1b2) @dais-ui/source',
      'story.js': 'title:"DAIS"',
      'assets/dais-logo.svg': '<svg/>',
    });

    const { leftovers } = renameArtifact(dir, names);

    expect(leftovers).toEqual([
      `${path.join('assets', 'dais-logo.svg')}: бренд в имени файла`,
      'story.js:1: title:"DAIS"',
    ]);
  });

  it('бросает BrandError, если каталога нет', () => {
    expect(() =>
      renameArtifact(path.join(os.tmpdir(), 'no-such-dir-rename'), names),
    ).toThrowError(BrandError);
  });
});

describe('CLI', () => {
  const run = (args, env) =>
    execFileSync(process.execPath, [SCRIPT, ...args], {
      env: { PATH: process.env.PATH, ...env },
      encoding: 'utf8',
      stdio: 'pipe',
    });
  const env = {
    ALT_LIB_PACKAGE_NAME: '@acme/ds',
    ALT_MCP_PACKAGE_NAME: '@acme/ds-mcp',
  };

  it('успешно переименовывает каталог', () => {
    const dir = makeTmp({ 'a.js': "import '@daisforge/ui';" });
    expect(run([dir], env)).toContain('изменено файлов  1');
    expect(read(dir, 'a.js')).toBe("import '@acme/ds';");
  });

  it('падает с кодом 1, если остался бренд', () => {
    const dir = makeTmp({ 'a.js': 'title:"DAIS"' });
    expect(() => run([dir], env)).toThrowError(/остался исходный бренд/);
  });

  it('падает с кодом 1 без имён в окружении', () => {
    const dir = makeTmp({ 'a.js': '' });
    expect(() => run([dir], {})).toThrowError(/ALT_LIB_PACKAGE_NAME/);
  });

  it('работает при запуске через симлинк (как bin из node_modules/.bin)', () => {
    const dir = makeTmp({ 'a.js': "import '@daisforge/ui';" });
    const binDir = makeTmp({});
    const link = path.join(binDir, 'white-label-rename');
    fs.symlinkSync(SCRIPT, link);
    execFileSync(process.execPath, [link, dir], {
      env: { PATH: process.env.PATH, ...env },
      stdio: 'pipe',
    });
    expect(read(dir, 'a.js')).toBe("import '@acme/ds';");
  });
});
