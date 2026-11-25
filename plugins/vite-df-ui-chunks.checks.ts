import type { Rollup } from 'vite';

/**
 * Проверки графа чанков ui-kit. Запускаются в generateBundle плагина
 * vite-df-ui-chunks для ESM и CJS и роняют сборку при нарушении.
 *
 * Зачем: потребитель, импортирующий один компонент, должен загружать только его
 * код и код того, что этот компонент действительно использует. См. PR #199:
 * TableCanvas загружал CSS старой Table, потому что Combobox и Switch лежали
 * в чанке Table, а фильтры брали константы из @ui-kit/components/Table.
 */

const UI_KIT_SRC = 'packages/ui-kit/src/';
const ROOT_ENTRY = 'index';

type ManualChunk = {
  readonly chunkName: string;
  readonly modulePaths: readonly string[];
};

export type RestrictedImport = {
  /** Имя чанка (chunkName) или внешний модуль, например CSS из node_modules */
  readonly target: string;
  /** Префиксы имён точек входа, которым разрешено загружать target */
  readonly allowedEntries: readonly string[];
  readonly reason: string;
};

type CheckContext = {
  bundle: Rollup.OutputBundle;
  manualChunks: readonly ManualChunk[];
  getModuleInfo: (id: string) => Rollup.ModuleInfo | null;
};

const getChunks = (bundle: Rollup.OutputBundle) =>
  Object.values(bundle).filter(
    (item): item is Rollup.OutputChunk => item.type === 'chunk',
  );

const toSrcPath = (id: string) =>
  id.slice(id.indexOf(UI_KIT_SRC) + UI_KIT_SRC.length).replace(/\?.*$/, '');

/** components/TableCanvas/styles/index → components/TableCanvas */
const toComponentRoot = (path: string) =>
  path
    .replace(/\/index$/, '')
    .split('/')
    .slice(0, 2)
    .join('/');

const LIST_LIMIT = 5;
const limitList = (items: string[]) => {
  const sorted = [...items].sort();
  const rest = sorted.length - LIST_LIMIT;
  return rest > 0
    ? `${sorted.slice(0, LIST_LIMIT).join(', ')} и ещё ${rest}`
    : sorted.join(', ');
};

/**
 * Папки исходников, которые «принадлежат» чанку:
 * - ручной чанк: его modulePaths;
 * - точка входа components/Button/index: папка components/Button/;
 * - чанк, созданный Rollup автоматически: ничего.
 */
const getHomePaths = (
  chunk: Rollup.OutputChunk,
  manualChunks: readonly ManualChunk[],
): readonly string[] => {
  if (chunk.isEntry) {
    if (chunk.name === ROOT_ENTRY) return [UI_KIT_SRC];
    return [`${UI_KIT_SRC}${chunk.name.replace(/\/?index$/, '')}/`];
  }
  return (
    manualChunks.find((m) => m.chunkName === chunk.name)?.modulePaths ?? []
  );
};

/**
 * Чистота чанков.
 *
 * Модуль с кодом может лежать в чужом чанке, только если его импортируют
 * исключительно из этого же чанка (приватный хелпер). Если его импортируют
 * из других чанков, каждый такой импорт загружает весь чужой чанк целиком.
 * Rollup делает так с модулями, у которых нет своего ручного чанка: кладёт их
 * в чанк первого импортёра (так Typography оказался в AiAgentPopup).
 */
export const checkChunkPurity = ({
  bundle,
  manualChunks,
  getModuleInfo,
}: CheckContext): string[] => {
  const chunks = getChunks(bundle);
  const chunkOfModule = new Map<string, Rollup.OutputChunk>();
  chunks.forEach((chunk) =>
    Object.keys(chunk.modules).forEach((id) => chunkOfModule.set(id, chunk)),
  );

  // Точка входа, чей модуль index.ts лежит в другом чанке, становится фасадом:
  // её файл без своего кода только импортирует этот чанк
  const facadeOf = new Map<string, Rollup.OutputChunk>();
  chunks.forEach((chunk) => {
    if (chunk.isEntry && chunk.facadeModuleId) {
      facadeOf.set(chunk.facadeModuleId, chunk);
    }
  });
  const isEmptyIn = (id: string, chunk: Rollup.OutputChunk) =>
    chunk.modules[id]?.renderedLength === 0;

  /**
   * Чанки, из которых модуль загружают снаружи. Реэкспорты без кода внутри
   * того же чанка (например index.ts) прозрачны: их импортёры тоже считаются.
   */
  const collectOutsideChunks = (
    id: string,
    chunk: Rollup.OutputChunk,
    result: Set<string>,
    seen = new Set<string>(),
  ) => {
    if (seen.has(id)) return;
    seen.add(id);

    const facade = facadeOf.get(id);
    if (facade && facade !== chunk) result.add(facade.name);

    const info = getModuleInfo(id);
    [...(info?.importers ?? []), ...(info?.dynamicImporters ?? [])].forEach(
      (importer) => {
        const importerChunk = chunkOfModule.get(importer);
        if (!importerChunk) return;
        if (importerChunk !== chunk) result.add(importerChunk.name);
        else if (isEmptyIn(importer, chunk)) {
          collectOutsideChunks(importer, chunk, result, seen);
        }
      },
    );
  };

  // Группируем по паре «чанк + папка модуля», чтобы не плодить строки
  const violations = new Map<
    string,
    { chunk: string; dir: string; modules: Set<string>; from: Set<string> }
  >();
  chunks.forEach((chunk) => {
    const homePaths = getHomePaths(chunk, manualChunks);

    Object.entries(chunk.modules).forEach(([id, { renderedLength }]) => {
      if (!id.includes(UI_KIT_SRC) || renderedLength === 0) return;
      if (homePaths.some((path) => id.includes(path))) return;

      const outsideChunks = new Set<string>();
      collectOutsideChunks(id, chunk, outsideChunks);
      if (outsideChunks.size === 0) return;

      const dir = toComponentRoot(toSrcPath(id));
      const key = `${chunk.name}\0${dir}`;
      const violation = violations.get(key) ?? {
        chunk: chunk.name,
        dir,
        modules: new Set<string>(),
        from: new Set<string>(),
      };
      violations.set(key, violation);
      violation.modules.add(toSrcPath(id));
      outsideChunks.forEach((name) => violation.from.add(name));
    });
  });

  return [...violations.values()].map(
    ({ chunk, dir, modules, from }) =>
      `Код ${dir} (${[...modules].join(', ')}) ` +
      `лежит в чужом чанке "${chunk}" ` +
      `и импортируется снаружи: ${limitList([...from])}. ` +
      `Каждый такой импорт загружает весь "${chunk}". ` +
      `Добавьте для ${dir}/ свой чанк в MANUAL_UIKIT_COMP_CHUNKS ` +
      `(plugins/vite-df-ui-chunks.ts).`,
  );
};

/**
 * Тяжёлые чанки и внешний CSS могут загружать только перечисленные точки входа.
 * Корневая точка входа index разрешена всегда: она загружает всю библиотеку.
 */
export const checkRestrictedImports = (
  { bundle }: Pick<CheckContext, 'bundle'>,
  restricted: readonly RestrictedImport[],
): string[] => {
  const chunks = getChunks(bundle);
  const byFileName = new Map(chunks.map((c) => [c.fileName, c]));
  const errors: string[] = [];
  // Группируем по паре «цель + компонент»: у компонента бывают десятки
  // вложенных точек входа (components/TableCanvas/styles/index и т.п.)
  const violations = new Map<
    string,
    {
      target: string;
      reason: string;
      root: string;
      entries: string[];
      path: string[];
    }
  >();

  // Защита от устаревшего списка: цель должна существовать в сборке
  const knownTargets = new Set<string>();
  chunks.forEach((chunk) => {
    knownTargets.add(chunk.name);
    chunk.imports.forEach((id) => knownTargets.add(id));
  });
  restricted.forEach(({ target }) => {
    if (!knownTargets.has(target)) {
      errors.push(
        `Цель "${target}" из RESTRICTED_IMPORTS не найдена в сборке. ` +
          `Обновите список в plugins/vite-df-ui-chunks.ts.`,
      );
    }
  });

  chunks
    .filter((chunk) => chunk.isEntry && chunk.name !== ROOT_ENTRY)
    .forEach((entry) => {
      // Обход в ширину: для каждого достигнутого чанка или внешнего модуля
      // запоминаем первый найденный путь от точки входа
      const visited = new Set([entry.fileName]);
      const queue = [{ chunk: entry, path: [entry.name] }];
      const reached = new Map<string, string[]>();

      let index = 0;
      while (index < queue.length) {
        const { chunk, path } = queue[index];
        index += 1;
        [...chunk.imports, ...chunk.dynamicImports].forEach((id) => {
          const next = byFileName.get(id);
          if (!next) {
            if (!reached.has(id)) reached.set(id, [...path, id]);
            return;
          }
          if (visited.has(id)) return;
          visited.add(id);
          const nextPath = [...path, next.name];
          if (!reached.has(next.name)) reached.set(next.name, nextPath);
          queue.push({ chunk: next, path: nextPath });
        });
      }

      restricted.forEach(({ target, allowedEntries, reason }) => {
        const path = reached.get(target);
        if (!path) return;
        if (allowedEntries.some((prefix) => entry.name.startsWith(prefix))) {
          return;
        }
        const root = toComponentRoot(entry.name);
        const key = `${target}\0${root}`;
        const violation = violations.get(key) ?? {
          target,
          reason,
          root,
          entries: [],
          path,
        };
        violations.set(key, violation);
        violation.entries.push(entry.name);
      });
    });

  violations.forEach(({ target, reason, root, entries, path }) => {
    errors.push(
      `${root} загружает "${target}" (${reason}). ` +
        `Точки входа: ${limitList(entries)}. Путь: ${path.join(' → ')}.`,
    );
  });
  return errors;
};
