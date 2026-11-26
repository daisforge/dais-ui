import type { Rollup } from 'vite';
import { describe, expect, it } from 'vitest';

import {
  checkChunkPurity,
  checkRestrictedImports,
  RestrictedImport,
} from './vite-df-ui-chunks.checks';

const SRC = '/repo/packages/ui-kit/src/';

const MANUAL_CHUNKS = [
  {
    chunkName: 'Table',
    modulePaths: ['packages/ui-kit/src/components/Table/'],
  },
  {
    chunkName: 'Tooltip',
    modulePaths: ['packages/ui-kit/src/components/Tooltip/'],
  },
  {
    chunkName: 'Popup',
    modulePaths: ['packages/ui-kit/src/components/Popup/'],
  },
];

type FakeChunk = {
  fileName: string;
  name: string;
  isEntry?: boolean;
  facadeModuleId?: string;
  /** id модуля → renderedLength */
  modules?: Record<string, number>;
  imports?: string[];
  dynamicImports?: string[];
};

/**
 * Поля OutputChunk, которые читают проверки. Типы берутся из Rollup, поэтому
 * переименование или смена типа поля в Rollup сломает компиляцию тестов
 * (npm run plugins:typecheck), а не пройдёт молча.
 */
type CheckedChunkFields = Pick<
  Rollup.OutputChunk,
  | 'type'
  | 'fileName'
  | 'name'
  | 'isEntry'
  | 'facadeModuleId'
  | 'imports'
  | 'dynamicImports'
> & {
  modules: Record<string, Pick<Rollup.RenderedModule, 'renderedLength'>>;
};

const makeChunk = (c: FakeChunk): Rollup.OutputChunk => {
  const chunk: CheckedChunkFields = {
    type: 'chunk',
    fileName: c.fileName,
    name: c.name,
    isEntry: c.isEntry ?? false,
    facadeModuleId: c.facadeModuleId ?? null,
    imports: c.imports ?? [],
    dynamicImports: c.dynamicImports ?? [],
    modules: Object.fromEntries(
      Object.entries(c.modules ?? {}).map(([id, renderedLength]) => [
        id,
        { renderedLength },
      ]),
    ),
  };
  // Остальные поля OutputChunk проверкам не нужны
  return chunk as Rollup.OutputChunk;
};

const makeBundle = (chunks: FakeChunk[]): Rollup.OutputBundle =>
  Object.fromEntries(chunks.map((c) => [c.fileName, makeChunk(c)]));

/** importers: id модуля → список статических импортёров */
const makeGetModuleInfo =
  (
    importers: Record<string, string[]>,
    dynamic: Record<string, string[]> = {},
  ) =>
  (id: string): Rollup.ModuleInfo => {
    const info: Pick<Rollup.ModuleInfo, 'importers' | 'dynamicImporters'> = {
      importers: importers[id] ?? [],
      dynamicImporters: dynamic[id] ?? [],
    };
    return info as Rollup.ModuleInfo;
  };

const POPUP = `${SRC}components/Popup/Popup.tsx`;
const HELPER = `${SRC}components/Helper/Helper.tsx`;
const HELPER_INDEX = `${SRC}components/Helper/index.ts`;
const BUTTON = `${SRC}components/Button/Button.tsx`;

describe('checkChunkPurity', () => {
  it('приватный хелпер в чужом чанке — не ошибка', () => {
    const bundle = makeBundle([
      {
        fileName: 'chunks/Popup.mjs',
        name: 'Popup',
        modules: { [POPUP]: 100, [HELPER]: 50 },
      },
    ]);
    const errors = checkChunkPurity({
      bundle,
      manualChunks: MANUAL_CHUNKS,
      getModuleInfo: makeGetModuleInfo({ [HELPER]: [POPUP] }),
    });
    expect(errors).toEqual([]);
  });

  it('модуль в чужом чанке с импортом снаружи — ошибка', () => {
    const bundle = makeBundle([
      {
        fileName: 'chunks/Popup.mjs',
        name: 'Popup',
        modules: { [POPUP]: 100, [HELPER]: 50 },
      },
      {
        fileName: 'components/Button/index.mjs',
        name: 'components/Button/index',
        isEntry: true,
        modules: { [BUTTON]: 30 },
        imports: ['chunks/Popup.mjs'],
      },
    ]);
    const errors = checkChunkPurity({
      bundle,
      manualChunks: MANUAL_CHUNKS,
      getModuleInfo: makeGetModuleInfo({ [HELPER]: [POPUP, BUTTON] }),
    });
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('components/Helper');
    expect(errors[0]).toContain('"Popup"');
    expect(errors[0]).toContain('components/Button/index');
  });

  it('импорт через пустой index.ts и фасад точки входа — ошибка', () => {
    const bundle = makeBundle([
      {
        fileName: 'chunks/Popup.mjs',
        name: 'Popup',
        modules: { [POPUP]: 100, [HELPER]: 50, [HELPER_INDEX]: 0 },
      },
      {
        fileName: 'components/Helper/index.mjs',
        name: 'components/Helper/index',
        isEntry: true,
        facadeModuleId: HELPER_INDEX,
        imports: ['chunks/Popup.mjs'],
      },
    ]);
    const errors = checkChunkPurity({
      bundle,
      manualChunks: MANUAL_CHUNKS,
      // Хелпер импортируют только через index.ts, который лежит в том же чанке
      getModuleInfo: makeGetModuleInfo({ [HELPER]: [HELPER_INDEX] }),
    });
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('components/Helper/index');
  });

  it('автоматический чанк с именем ручного не считается ручным', () => {
    const foreignTooltip = `${SRC}layouts/FiltersActions/components/Tooltip.tsx`;
    const bundle = makeBundle([
      {
        fileName: 'chunks/Tooltip-auto.mjs',
        name: 'Tooltip',
        modules: { [foreignTooltip]: 80 },
      },
      {
        fileName: 'components/Button/index.mjs',
        name: 'components/Button/index',
        isEntry: true,
        modules: { [BUTTON]: 30 },
        imports: ['chunks/Tooltip-auto.mjs'],
      },
    ]);
    const errors = checkChunkPurity({
      bundle,
      manualChunks: MANUAL_CHUNKS,
      getModuleInfo: makeGetModuleInfo({ [foreignTooltip]: [BUTTON] }),
    });
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('layouts/FiltersActions');
  });

  it('модули без кода не проверяются', () => {
    const bundle = makeBundle([
      {
        fileName: 'chunks/Popup.mjs',
        name: 'Popup',
        modules: { [POPUP]: 100, [HELPER]: 0 },
      },
    ]);
    const errors = checkChunkPurity({
      bundle,
      manualChunks: MANUAL_CHUNKS,
      getModuleInfo: makeGetModuleInfo({ [HELPER]: [BUTTON] }),
    });
    expect(errors).toEqual([]);
  });
});

describe('checkRestrictedImports', () => {
  const TABLE = `${SRC}components/Table/Table.tsx`;
  const CSS = 'react-data-grid/lib/styles.css';
  const RESTRICTED: RestrictedImport[] = [
    {
      target: 'Table',
      allowedEntries: ['components/Table/'],
      reason: 'старая таблица',
    },
    {
      target: CSS,
      allowedEntries: ['components/Table/'],
      reason: 'CSS старой таблицы',
    },
  ];

  const tableChunk: FakeChunk = {
    fileName: 'chunks/Table.mjs',
    name: 'Table',
    modules: { [TABLE]: 500 },
    imports: [CSS],
  };
  const entry = (name: string, extra: Partial<FakeChunk> = {}): FakeChunk => ({
    fileName: `${name}.mjs`,
    name,
    isEntry: true,
    ...extra,
  });

  const run = (chunks: FakeChunk[], restricted = RESTRICTED) =>
    checkRestrictedImports(
      { bundle: makeBundle(chunks), manualChunks: MANUAL_CHUNKS },
      restricted,
    );

  it('разрешённая точка входа и корневой index — не ошибка', () => {
    const errors = run([
      tableChunk,
      entry('components/Table/index', { imports: ['chunks/Table.mjs'] }),
      entry('components/Table/styles/index', { imports: ['chunks/Table.mjs'] }),
      entry('index', { imports: ['chunks/Table.mjs'] }),
    ]);
    expect(errors).toEqual([]);
  });

  it('запрещённая точка входа — ошибка с путём до чанка и до CSS', () => {
    const errors = run([
      tableChunk,
      {
        fileName: 'chunks/Filters.mjs',
        name: 'Filters',
        imports: ['chunks/Table.mjs'],
      },
      entry('components/Combobox/index', { imports: ['chunks/Filters.mjs'] }),
    ]);
    expect(errors).toHaveLength(2);
    expect(errors[0]).toContain('components/Combobox/index → Filters → Table');
    expect(errors[1]).toContain(
      `components/Combobox/index → Filters → Table → ${CSS}`,
    );
  });

  it('динамический import() считается загрузкой', () => {
    const errors = run([
      tableChunk,
      entry('components/Combobox/index', {
        dynamicImports: ['chunks/Table.mjs'],
      }),
    ]);
    expect(errors).toHaveLength(2);
  });

  it('автоматический чанк с именем Table без кода Table — не ошибка', () => {
    const fake = `${SRC}layouts/Some/Table.tsx`;
    const errors = run([
      tableChunk,
      entry('components/Table/index', { imports: ['chunks/Table.mjs'] }),
      {
        fileName: 'chunks/Table-auto.mjs',
        name: 'Table',
        modules: { [fake]: 10 },
      },
      entry('components/Combobox/index', {
        imports: ['chunks/Table-auto.mjs'],
      }),
    ]);
    expect(errors).toEqual([]);
  });

  it('ручной чанк, слитый с точкой входа, опознаётся по коду', () => {
    const errors = run([
      entry('components/Table/index', {
        modules: { [TABLE]: 500 },
        imports: [CSS],
      }),
      entry('components/Combobox/index', {
        imports: ['components/Table/index.mjs'],
      }),
    ]);
    expect(errors).toHaveLength(2);
    expect(errors[0]).toContain('components/Combobox');
  });

  it('код запрещённого чанка прямо внутри чужой точки входа — ошибка', () => {
    const errors = run([
      tableChunk,
      entry('components/Table/index', { imports: ['chunks/Table.mjs'] }),
      entry('components/Combobox/index', { modules: { [TABLE]: 500 } }),
    ]);
    expect(errors).toEqual([
      expect.stringContaining(
        'components/Combobox загружает "Table" (старая таблица). ' +
          'Точки входа: components/Combobox/index. ' +
          'Путь: components/Combobox/index.',
      ),
    ]);
  });

  it('цель, которой нет в сборке, — ошибка про устаревший список', () => {
    const errors = run(
      [
        tableChunk,
        entry('components/Table/index', { imports: ['chunks/Table.mjs'] }),
      ],
      [
        ...RESTRICTED,
        { target: 'GridDND', allowedEntries: [], reason: 'сетка' },
      ],
    );
    expect(errors).toEqual([expect.stringContaining('"GridDND"')]);
  });

  it('цель, которая загружается только динамически, найдена в сборке', () => {
    const lazyCss = 'lazy/styles.css';
    const errors = run(
      [entry('components/Lazy/index', { dynamicImports: [lazyCss] })],
      [
        {
          target: lazyCss,
          allowedEntries: ['components/Lazy/'],
          reason: 'ленивый CSS',
        },
      ],
    );
    expect(errors).toEqual([]);
  });
});
