/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

import type {
  ComponentIndex,
  ExampleRecord,
  IndexedComponent,
  WorkingComponentRecord,
} from '../types.js';
import {
  checkIndexCompleteness,
  formatCompletenessReport,
} from '../validate/checkCompleteness.js';
import {
  classify,
  linkFormVariants,
  promoteCompositionToWrapper,
} from './classify.js';
import { classifyRole } from './classifyRole.js';
import { buildUsageExamples } from './collectUsageExamples.js';
import { printDiagnostics } from './diagnostics.js';
import { discoverComponents } from './discoverComponents.js';
import { getDenylistMap } from './htmlAttributeDenylist.js';
import { buildFeatureIndex } from './indexFeatures.js';
import { buildTypeIndex } from './indexTypes.js';
import { assertMetaAvailable } from './loadMeta.js';
import { mergeAtomicCuratedMeta } from './mergeAtomicCuratedMeta.js';
import { mergeAtomicData } from './mergeAtomicData.js';
import { getInstallationGuide, mergeMeta } from './mergeMeta.js';
import { isParsedComponent, parseComponent } from './parseComponent.js';
import { resolveImportPath } from './resolveImportPath.js';
import { synthesizeMinimalUsage } from './synthesizeExample.js';
import { REPO_ROOT } from './tsProject.js';
import { finalizeVendorExamples } from './vendorExamples.js';
import { buildVendorUsageIndex } from './vendorUsageExamples.js';

const UI_KIT_PACKAGE_JSON = path.join(
  REPO_ROOT,
  'packages/ui-kit/package.json',
);
const DIST_MCP_DATA_DIR = path.join(REPO_ROOT, 'dist/packages/ui-kit/mcp-data');
const BUNDLED_MCP_DATA_DIR = path.join(REPO_ROOT, 'packages/mcp-server/data');

function getLibVersion(): string {
  const pkg = JSON.parse(fs.readFileSync(UI_KIT_PACKAGE_JSON, 'utf8')) as {
    version: string;
  };
  return pkg.version;
}

function mapCuratedStories(
  stories: ExampleRecord[] | undefined,
): ExampleRecord[] {
  return (stories || []).map((s) => ({
    exportName: s.exportName,
    displayName: s.displayName,
    type: s.type,
    code: s.code,
  }));
}

/** full-code (Storybook) → usage (реальное JSX-вхождение) → vendor (curated-снэпшот атома) → args-only — см. TASKS.md T3 п.3. */
const EXAMPLE_TYPE_ORDER: Record<ExampleRecord['type'], number> = {
  'full-code': 0,
  usage: 1,
  vendor: 2,
  'args-only': 3,
};

/** Три источника разом редко нужны — режем итог, чтобы карточка не раздувалась без пользы для агента. */
const MAX_TOTAL_EXAMPLES = 4;

function sortExamples(examples: ExampleRecord[]): ExampleRecord[] {
  return [...examples].sort(
    (a, b) => EXAMPLE_TYPE_ORDER[a.type] - EXAMPLE_TYPE_ORDER[b.type],
  );
}

/**
 * Настоящие примеры собираются из ВСЕХ доступных источников разом, не по
 * цепочке "первый найденный побеждает": curated-стори из Storybook (часть
 * каталога), реальное JSX-вхождение из collectUsageExamples (грep по
 * монорепо) и curated-примеры вендоренного снэпшота атома (finalizeVendorExamples,
 * см. TASKS.md T3). Каждый источник видит свою часть каталога — компонент с
 * только args-only Storybook-стори вполне может иметь хороший vendor-пример,
 * и наоборот. Результат сортируется по типу и режется до MAX_TOTAL_EXAMPLES.
 * Если ни один источник ничего не дал — пустой массив: exampleTitles: []
 * честно говорит "примеров нет", вместо синтетической заглушки под видом
 * примера (та всегда доступна отдельно в record.minimalUsage).
 */
function finalizeExamples(
  record: WorkingComponentRecord,
  usageExamples: ReadonlyMap<string, ExampleRecord[]>,
): ExampleRecord[] {
  const curated = mapCuratedStories(record.curatedStories);
  const usage = usageExamples.get(record.name) ?? [];
  const vendor = finalizeVendorExamples(
    record.vendorExampleSnippets,
    record.importPath ?? '@daisforge/ui',
  );
  return sortExamples([...curated, ...usage, ...vendor]).slice(
    0,
    MAX_TOTAL_EXAMPLES,
  );
}

/**
 * Проставляет parentComponent у part/internal-записей (имя владельца папки —
 * обычно primary-запись с name === folderName, но пять папок такого владельца
 * не имеют, см. TASKS.md T11 — тогда используется само имя папки) и
 * relatedExports у primary-записей той же папки, чтобы part/internal не
 * стали недостижимы после того, как list_components по умолчанию скрывает
 * их. Мутирует records на месте — тот же приём, что promoteCompositionToWrapper.
 */
function linkFolderRoles(records: WorkingComponentRecord[]): void {
  const byFolder = new Map<string, WorkingComponentRecord[]>();
  records.forEach((r) => {
    if (r.error || !r.folderName) return;
    const group = byFolder.get(r.folderName) ?? [];
    group.push(r);
    byFolder.set(r.folderName, group);
  });

  [...byFolder.values()]
    .filter((group) => group.some((r) => r.role !== 'primary'))
    .forEach((group) => {
      const nonPrimary = group.filter((r) => r.role !== 'primary');
      const owner = group.find((r) => r.name === r.folderName);
      nonPrimary.forEach((r) => {
        r.parentComponent = owner?.name ?? r.folderName;
      });

      const nonPrimaryNames = nonPrimary.map((r) => r.name);
      group
        .filter((r) => r.role === 'primary')
        .forEach((r) => {
          r.relatedExports = nonPrimaryNames;
        });
    });
}

/**
 * 10 записей в индексе присутствуют одновременно и как top-level компонент,
 * и как элемент compoundParts родителя (DrawerDF/{Content,Header,Footer},
 * MassActions/Counter, Stories/Preview, FiltersActions/{FiltersButton,
 * DotsIconButton,ListOfFilters,Tabs,TabItem}, см. TASKS.md T12) — два
 * независимых пути резолва одного и того же типа (parseComponent для
 * top-level записи, resolveCompoundPart для части родителя), дающих РАЗНЫЙ
 * результат и вдвое расходующих бюджет ответа. Проставляет top-level записи
 * compoundPartOf и синхронизирует props в обе стороны — источником истины
 * становится тот путь резолва, что дал больше пропсов (полнее прошёл цепочку
 * фолбэков), а не оба сразу.
 */
function linkCompoundPartDuplicates(records: WorkingComponentRecord[]): void {
  const byName = new Map(records.map((r) => [r.name, r]));

  records.forEach((parent) => {
    if (parent.error || !parent.compoundParts) return;

    parent.compoundParts.forEach((part) => {
      const dup = byName.get(`${parent.name}${part.name}`);
      if (!dup || dup === parent || dup.error) return;

      dup.compoundPartOf = { component: parent.name, part: part.name };

      const dupProps = dup.props || [];
      const partProps = part.props || [];
      if (dupProps.length >= partProps.length) {
        part.props = dupProps;
        part.typeName = part.typeName ?? dup.propsTypeName;
        part.rawType = part.rawType ?? dup.rawType;
        part.isGeneric = part.isGeneric ?? dup.isGeneric;
      } else {
        dup.props = partProps;
        dup.propsTypeName = dup.propsTypeName ?? part.typeName;
        dup.rawType = dup.rawType ?? part.rawType;
        dup.isGeneric = dup.isGeneric ?? part.isGeneric;
      }
    });
  });
}

function buildComponentRecords(): WorkingComponentRecord[] {
  const entries = discoverComponents();

  // Денылист строится лениво при первом обращении (см. getDenylistMap) и
  // внутри создаёт/забывает служебный source file в общем ts-morph
  // проекте. Если это происходит НЕ здесь, а лениво посреди
  // extractPropsFromType первого же компонента, forget() успевает
  // выполниться в разгар чужой итерации type.getProperties() и портит уже
  // резолвнутые дженерики для СЛЕДУЮЩИХ пропсов этого же компонента —
  // тайпчекер начинает печатать неподставленный параметр типа (`T`) вместо
  // конкретного `HTMLDivElement` и т.п. Живой пример до фикса: Accordion
  // (первый в discoverComponents()) терял все свои пропсы. Прогреваем кэш
  // до начала разбора, чтобы забывание source file никогда не пересекалось
  // с обращением к чужим типам.
  getDenylistMap();

  let records: WorkingComponentRecord[] = entries.map(
    (entry): WorkingComponentRecord => {
      const parsed = parseComponent(entry);
      if (!isParsedComponent(parsed)) {
        return { name: entry.name, group: entry.group, error: parsed.error };
      }
      const cls = classify(entry, parsed);
      return {
        name: entry.name,
        group: entry.group,
        folderName: entry.folderName,
        role: classifyRole(entry.name, entry.folderName),
        description: parsed.description,
        deprecated: parsed.deprecated || undefined,
        deprecationReason: parsed.deprecationReason,
        props: parsed.props,
        propsTypeName: parsed.propsTypeName,
        rawType: parsed.rawType,
        isGeneric: parsed.isGeneric || undefined,
        compoundParts: parsed.compoundParts,
        sourceFile: parsed.declarationFile,
        ...cls,
      };
    },
  );

  promoteCompositionToWrapper(records);
  linkFormVariants(records);

  records = records.map((r) => (r.error ? r : mergeMeta(r)));
  // mergeAtomicCuratedMeta — второй, независимый curated-источник: покрывает
  // компоненты без собственного кода в ui-kit (чистые реэкспорты атомов),
  // которых mergeMeta (_docs/meta/components-meta.json) не видит вообще —
  // см. TASKS.md T2 и комментарий в mergeAtomicCuratedMeta.ts.
  records = records.map((r) => (r.error ? r : mergeAtomicCuratedMeta(r)));
  // После mergeMeta — курированный role-оверрайд (curated wins over
  // heuristic) уже применён, parentComponent/relatedExports должны считаться
  // от финальной роли, а не от эвристики classifyRole в исходном виде.
  linkFolderRoles(records);
  records = records.map((r) => (r.error ? r : mergeAtomicData(r)));
  // После mergeAtomicData — top-level путь резолва уже обогащён атомарными
  // описаниями/required (T14) и расщеплён на own/inherited, поэтому именно
  // в этот момент справедливо сравнивать полноту с compoundParts-путём.
  linkCompoundPartDuplicates(records);

  records = records.map((r) => {
    if (r.error) return r;
    const { importPath, importStatement } = resolveImportPath(
      r.name,
      r.sourceFile ?? '',
    );
    return {
      ...r,
      importPath,
      importStatement,
      minimalUsage: synthesizeMinimalUsage(r),
    };
  });

  // Однопроходный грep по монорепо — считается один раз для ВСЕХ имён разом
  // (не по разу на компонент), поэтому вынесен из finalizeExamples наружу.
  const usageExamples = buildUsageExamples(
    records.filter((r) => !r.error).map((r) => r.name),
  );
  // Кросс-файловый скан вендорного снэпшота: у compound-частей вроде
  // AccordionItem нет своего файла в vendor/atomic-mcp-data (mergeAtomicData
  // никогда не резолвит для них atomicBase), но их реальное использование
  // почти всегда показано ВНУТРИ примеров родителя (<AccordionItem> внутри
  // examples[] Accordion.json). Домешиваем такие "чужие" сниппеты в
  // vendorExampleSnippets ДО finalizeExamples — дальше их обрабатывает тот
  // же finalizeVendorExamples, что и "свои", без отдельной ветки.
  const vendorUsageIndex = buildVendorUsageIndex(
    records.filter((r) => !r.error).map((r) => r.name),
  );
  records = records.map((r) => {
    if (r.error) return r;
    const crossVendor = vendorUsageIndex.get(r.name);
    return crossVendor?.length
      ? {
          ...r,
          vendorExampleSnippets: [
            ...(r.vendorExampleSnippets || []),
            ...crossVendor,
          ],
        }
      : r;
  });
  records = records.map((r) => {
    if (r.error) return r;
    const examples = finalizeExamples(r, usageExamples);
    // vendorExampleSnippets — промежуточное поле (см. types.ts), уже
    // потрачено в finalizeExamples выше; сырой вендорный формат не должен
    // уйти наружу в публикуемый индекс.
    const { vendorExampleSnippets, ...rest } = r;
    return { ...rest, examples };
  });

  return records;
}

/**
 * Абсолютные пути в индексе — это путь машины сборщика: они шумят в диффе
 * закоммиченного `data/component-index.json` и ничего не значат ни у другого
 * разработчика, ни у потребителя, куда индекс уезжает внутри пакета.
 *
 * Резать их можно только на выходе: по ходу сборки `sourceFile` разбирают
 * `resolveImportPath` и `deriveGroupAndFolder`, и им нужен настоящий
 * абсолютный путь. Поэтому нормализация — один проход перед сериализацией, по
 * всем строкам сразу (а не по известным полям): так новое поле с путём не
 * протащит абсолютный путь мимо нас.
 */
function toPortablePath(value: string): string {
  if (value.startsWith(`${REPO_ROOT}/`))
    return value.slice(REPO_ROOT.length + 1);
  // Зависимости могут лежать и вне корня (симлинки, общий store) — тогда
  // устойчивая часть пути начинается с node_modules.
  const nm = value.lastIndexOf('/node_modules/');
  if (nm !== -1) return value.slice(nm + 1);
  return value;
}

function relativizePaths<T>(value: T): T {
  if (typeof value === 'string') {
    return (value.startsWith('/')
      ? toPortablePath(value)
      : value) as unknown as T;
  }
  if (Array.isArray(value)) return value.map(relativizePaths) as unknown as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [
        k,
        relativizePaths(v),
      ]),
    ) as unknown as T;
  }
  return value;
}

function writeIndexFile(outputDir: string, index: ComponentIndex): string {
  fs.mkdirSync(outputDir, { recursive: true });
  const outPath = path.join(outputDir, 'component-index.json');
  fs.writeFileSync(outPath, JSON.stringify(relativizePaths(index), null, 2));
  return outPath;
}

function main(): void {
  console.log('Сборка индекса @daisforge/ui для MCP...');

  // До разбора компонентов (он занимает минуты) — падать на отсутствующей мете
  // сразу, а не через долгий проход с молча пустыми features/guides. Сообщение
  // печатаем сами: инструкция «выполните npm run meta» должна быть видна, а не
  // теряться в стектрейсе необработанного исключения.
  try {
    assertMetaAvailable();
  } catch (e) {
    console.error(`\n${(e as Error).message}`);
    process.exitCode = 1;
    return;
  }

  const records = buildComponentRecords();
  const features = buildFeatureIndex(records.filter((r) => !r.error));
  const installationGuide = getInstallationGuide();
  // Читает module-level Map, которую parseComponent наполнял по ходу разбора
  // каждого компонента в buildComponentRecords() выше — обязательно после неё.
  const types = buildTypeIndex();

  const index: ComponentIndex = {
    generatedAt: new Date().toISOString(),
    libVersion: getLibVersion(),
    // Записи здесь прошли полный пайплайн (mergeMeta → mergeAtomicData →
    // resolveImportPath → finalizeExamples) и структурно являются либо полным
    // ComponentRecord, либо ComponentErrorRecord — WorkingComponentRecord же
    // остаётся "частичным" по типу на всём протяжении сборки, поэтому это
    // единственная явная граница, где мы утверждаем итоговую форму.
    components: Object.fromEntries(
      records.map((r) => [r.name, r]),
    ) as unknown as Record<string, IndexedComponent>,
    features,
    types,
    guides: installationGuide ? { installation: installationGuide } : {},
  };

  // Диагностика считает по сырому records (до схлопывания одноимённых записей
  // в components-словаре) — иначе 3 внутренних sub-компонента с совпадающими
  // именами (TableFilterSelectListItem, ContainerStyled, Canvas) молча
  // пропадут из счётчика, хотя реально были распарсены.
  const { errors } = printDiagnostics(
    records as unknown as IndexedComponent[],
    features,
  );

  const completeness = checkIndexCompleteness(index);
  console.log(`\n${formatCompletenessReport(completeness)}`);
  if (completeness.failures.length > 0) {
    // Именно не записываем: закоммиченный data/component-index.json — то, что
    // публикуется в npm, и перезапись его неполной версией и есть та поломка,
    // ради которой существует эта проверка.
    console.error(
      '\nИндекс НЕ записан — сборка неполная. Исправьте причину и повторите.',
    );
    process.exitCode = 1;
    return;
  }

  const bundledPath = writeIndexFile(BUNDLED_MCP_DATA_DIR, index);
  console.log(`Записано (bundled fallback): ${bundledPath}`);

  if (fs.existsSync(path.join(REPO_ROOT, 'dist/packages/ui-kit'))) {
    const distPath = writeIndexFile(DIST_MCP_DATA_DIR, index);
    console.log(
      `Записано (package-режим, публикуется с @daisforge/ui): ${distPath}`,
    );
  } else {
    console.log(
      'dist/packages/ui-kit не найден — пропускаю package-режим (соберётся при следующем `npm run build` в ui-kit).',
    );
  }

  if (errors.length > 0) {
    process.exitCode = 1;
  }
}

main();
