import path from 'node:path';

// rollup — зависимость vite, версия закреплена в overrides корневого
// package.json. Тест намеренно берёт тот же Rollup, которым собирается ui-kit,
// а не добавляет отдельную зависимость
// eslint-disable-next-line import/no-extraneous-dependencies
import { type Plugin, rollup } from 'rollup';
import { describe, expect, it } from 'vitest';

import { checkChunkPurity } from './vite-df-ui-chunks.checks';

/**
 * Проверка чистоты на настоящей сборке Rollup: chunk.modules и
 * getModuleInfo().importers расходятся с итоговыми импортами чанков
 * (реэкспорты выпадают из chunk.modules, вырезанные импорты остаются в
 * importers), и поддельный бандл этого не воспроизводит.
 */

const SRC = '/repo/packages/ui-kit/src/';
const MANUAL_CHUNKS = [
  {
    chunkName: 'Popup',
    modulePaths: ['packages/ui-kit/src/components/Popup/'],
  },
];

const HELPER = `${SRC}components/Helper/helper.js`;
const POPUP = `${SRC}components/Popup/index.js`;
const BUTTON = `${SRC}components/Button/index.js`;

const virtualFiles = (files: Record<string, string>): Plugin => ({
  name: 'virtual-files',
  resolveId(source, importer) {
    if (files[source] !== undefined) return source;
    if (importer && source.startsWith('.')) {
      return path.posix.resolve(path.posix.dirname(importer), source);
    }
    return null;
  },
  load(id) {
    return files[id] ?? null;
  },
});

/** Собирает модули в памяти и возвращает ошибки чистоты и сами чанки */
const build = async (files: Record<string, string>) => {
  let errors: string[] = [];
  const imports: Record<string, string[]> = {};
  const bundle = await rollup({
    input: {
      'components/Button/index': BUTTON,
      'components/Popup/index': POPUP,
    },
    plugins: [
      virtualFiles(files),
      {
        name: 'check',
        generateBundle(_, output) {
          errors = checkChunkPurity({
            bundle: output,
            manualChunks: MANUAL_CHUNKS,
            getModuleInfo: (id) => this.getModuleInfo(id),
          });
          Object.values(output).forEach((item) => {
            if (item.type === 'chunk') imports[item.name] = item.imports;
          });
        },
      },
    ],
  });
  await bundle.generate({
    format: 'es',
    manualChunks: (id) =>
      MANUAL_CHUNKS.find((m) => m.modulePaths.some((p) => id.includes(p)))
        ?.chunkName,
  });
  await bundle.close();
  return { errors, imports };
};

// Popup использует Helper, поэтому Rollup кладёт Helper в ручной чанк Popup
const POPUP_USES_HELPER = {
  [POPUP]: `import { helper } from '../Helper/helper.js';
export const popup = () => helper('popup');`,
  [HELPER]: `export const helper = (name) => 'help ' + name;`,
};

describe('checkChunkPurity на сборке Rollup', () => {
  it('находит чужой модуль, который импортируют из другого чанка', async () => {
    const { errors } = await build({
      ...POPUP_USES_HELPER,
      [BUTTON]: `import { helper } from '../Helper/helper.js';
export const button = () => helper('button');`,
    });

    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('components/Helper');
    expect(errors[0]).toContain('"Popup"');
    expect(errors[0]).toContain('components/Button/index');
  });

  it('находит импорт через реэкспорт, выпавший из chunk.modules', async () => {
    const { errors, imports } = await build({
      ...POPUP_USES_HELPER,
      [BUTTON]: `import { helper } from './reexports.js';
export const button = () => helper('button');`,
      [`${SRC}components/Button/reexports.js`]: `export { helper } from '../Helper/helper.js';`,
    });

    // Готовый Button действительно загружает Popup
    expect(imports['components/Button/index']).toEqual([
      expect.stringContaining('Popup'),
    ]);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('components/Button/index');
  });

  it('не сообщает о связи, которую Rollup вырезал при tree shaking', async () => {
    const { errors, imports } = await build({
      ...POPUP_USES_HELPER,
      [BUTTON]: `import { helper } from '../Helper/helper.js';
function unused() {
  return helper('unused');
}
export const button = () => 'button';`,
    });

    // Импорт Helper остался в importers, но готовый Button ничего не грузит
    expect(imports['components/Button/index']).toEqual([]);
    expect(errors).toEqual([]);
  });

  // Проверка намеренно строгая: Rollup не сообщает, ради какого модуля чанк
  // загружается, поэтому неиспользуемый импорт чужого модуля считается
  // связью, если чанк загружается по другой, живой причине. Исправление в
  // таком случае полезно само по себе — удалить неиспользуемый импорт
  it('строго сообщает о неиспользуемом импорте, даже если чанк загружается по живой связи', async () => {
    const CARRIER = `${SRC}components/Popup/carrier.js`;
    const { errors, imports } = await build({
      [POPUP]: `export { run } from './carrier.js';`,
      [CARRIER]: `import { privateValue } from '../Helper/helper.js';
export const run = () => privateValue;`,
      [HELPER]: `export const privateValue = 'private';`,
      [BUTTON]: `import { run } from '../Popup/carrier.js';
import { privateValue } from '../Helper/helper.js';
export const button = () => (false ? privateValue : run());`,
    });

    // Button загружает Popup ради run; privateValue в его коде нет
    expect(imports['components/Button/index']).toEqual([
      expect.stringContaining('Popup'),
    ]);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('components/Button/index');
    expect(errors[0]).toContain('Если импорт не используется — удалите его');
  });

  it('пропускает приватный хелпер, которого используют только внутри чанка', async () => {
    const { errors } = await build({
      ...POPUP_USES_HELPER,
      [BUTTON]: `export const button = () => 'button';`,
    });

    expect(errors).toEqual([]);
  });
});
