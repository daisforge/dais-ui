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
  /** Имя ручного чанка (chunkName) или внешний модуль, например CSS из node_modules */
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
 * Ручной чанк, которому manualChunks отдаёт модуль. Как и в manualChunks,
 * выигрывает первое совпадение (TableStateColors стоит раньше TableGlide).
 */
const getOwner = (id: string, manualChunks: readonly ManualChunk[]) =>
  manualChunks.find((m) => m.modulePaths.some((path) => id.includes(path)));

const getCodeModuleIds = (chunk: Rollup.OutputChunk) =>
  Object.entries(chunk.modules)
    .filter(([, { renderedLength }]) => renderedLength > 0)
    .map(([id]) => id);

/**
 * Ручные чанки, чей код лежит в этом выходном чанке. Чанк опознаётся по
 * содержимому, а не по chunk.name: Rollup называет автоматический чанк по
 * первому модулю, и имя может совпасть с ручным (Tooltip.tsx → "Tooltip").
 * Ручной чанк, слитый с точкой входа, тоже опознаётся.
 */
const getManualChunkNames = (
  chunk: Rollup.OutputChunk,
  manualChunks: readonly ManualChunk[],
) =>
  new Set(
    getCodeModuleIds(chunk)
      .map((id) => getOwner(id, manualChunks)?.chunkName)
      .filter((name): name is string => !!name),
  );

/**
 * Модуль «дома» в чанке:
 * - в корневой точке входа index — любой;
 * - в точке входа components/Button/index — из папки components/Button/;
 * - в остальных чанках — если manualChunks отдаёт его чанку с этим именем.
 */
const isAtHome = (
  id: string,
  chunk: Rollup.OutputChunk,
  manualChunks: readonly ManualChunk[],
) => {
  if (chunk.isEntry) {
    if (chunk.name === ROOT_ENTRY) return true;
    return id.includes(`${UI_KIT_SRC}${chunk.name.replace(/\/?index$/, '')}/`);
  }
  return getOwner(id, manualChunks)?.chunkName === chunk.name;
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

  // getModuleInfo().importers хранит исходные связи, в том числе импорты,
  // которые Rollup вырезал при tree shaking. Засчитываем связь, только если
  // выходной чанк действительно загружает проверяемый.
  //
  // Сверка идёт на уровне чанка: Rollup не сообщает, ради какого модуля чанк
  // загружается (имена экспортов чанка минифицированы). Поэтому вырезанный
  // импорт чужого модуля всё равно считается связью, если чанк импортёра
  // загружает проверяемый чанк по другой, живой причине. Это намеренно
  // строго, и в обоих возможных случаях ошибка ведёт к правильному действию:
  // - код мёртвый (функцию никто не вызывает, ветка не выполняется) — его
  //   удаляют вместе с импортом; большую часть такого кода ESLint ловит
  //   раньше (no-constant-condition, no-unused-vars, no-unused-imports);
  // - код вырезается только в production-сборке (отладка под NODE_ENV,
  //   флаги) — в dev-сборке и тестах зависимость настоящая, и модулю нужен
  //   свой чанк или import() внутри этой ветки
  const loads = (from: Rollup.OutputChunk, target: Rollup.OutputChunk) =>
    from.imports.includes(target.fileName) ||
    from.dynamicImports.includes(target.fileName);

  /**
   * Чанки, из которых модуль загружают снаружи. Прозрачны для обхода:
   * - реэкспорты без кода внутри того же чанка (например index.ts);
   * - модули, которых нет ни в одном чанке: Rollup убирает из chunk.modules
   *   промежуточные реэкспорты, хотя импорт через них остаётся.
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
    if (facade && facade !== chunk && loads(facade, chunk)) {
      result.add(facade.name);
    }

    const info = getModuleInfo(id);
    [...(info?.importers ?? []), ...(info?.dynamicImporters ?? [])].forEach(
      (importer) => {
        const importerChunk = chunkOfModule.get(importer);
        if (!importerChunk) {
          collectOutsideChunks(importer, chunk, result, seen);
        } else if (importerChunk !== chunk) {
          if (loads(importerChunk, chunk)) result.add(importerChunk.name);
        } else if (isEmptyIn(importer, chunk)) {
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
    getCodeModuleIds(chunk).forEach((id) => {
      if (!id.includes(UI_KIT_SRC)) return;
      if (isAtHome(id, chunk, manualChunks)) return;

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
      `(plugins/vite-df-ui-chunks.ts). Если модуль используется только в ` +
      `мёртвом коде — удалите этот код вместе с импортом; если только в ` +
      `отладочной ветке — подключайте его через import() внутри неё.`,
  );
};

/**
 * Тяжёлые чанки и внешний CSS могут загружать только перечисленные точки входа.
 * Корневая точка входа index разрешена всегда: она загружает всю библиотеку.
 *
 * Динамический import() учитывается так же, как статический, и намеренно:
 * ленивая загрузка чужого CSS всё равно добавит его на страницу и продублирует.
 */
export const checkRestrictedImports = (
  { bundle, manualChunks }: Pick<CheckContext, 'bundle' | 'manualChunks'>,
  restricted: readonly RestrictedImport[],
): string[] => {
  const chunks = getChunks(bundle);
  const byFileName = new Map(chunks.map((c) => [c.fileName, c]));
  /** Что содержит чанк: имена ручных чанков по его коду */
  const contentOf = new Map(
    chunks.map((c) => [c, getManualChunkNames(c, manualChunks)]),
  );
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
    contentOf.get(chunk)?.forEach((name) => knownTargets.add(name));
    [...chunk.imports, ...chunk.dynamicImports].forEach((id) =>
      knownTargets.add(id),
    );
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

      const markReached = (target: string, path: string[]) => {
        if (!reached.has(target)) reached.set(target, path);
      };
      // Код ручного чанка может оказаться прямо в самой точке входа
      contentOf.get(entry)?.forEach((name) => markReached(name, [entry.name]));

      // Очередь растёт во время обхода, поэтому цикл по индексу
      for (let index = 0; index < queue.length; index += 1) {
        const item = queue[index];
        if (!item) break;
        const { chunk, path } = item;
        [...chunk.imports, ...chunk.dynamicImports].forEach((id) => {
          const next = byFileName.get(id);
          if (!next) {
            markReached(id, [...path, id]);
            return;
          }
          if (visited.has(id)) return;
          visited.add(id);
          const nextPath = [...path, next.name];
          contentOf.get(next)?.forEach((name) => markReached(name, nextPath));
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
