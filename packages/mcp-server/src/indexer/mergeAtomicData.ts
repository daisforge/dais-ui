/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type {
  AtomicPropRecord,
  InheritedPropRecord,
  PropRecord,
  WorkingComponentRecord,
} from '../types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VENDOR_COMPONENTS_DIR = path.resolve(
  __dirname,
  '../../vendor/atomic-mcp-data/components',
);
const VENDOR_BETA_DIR = path.resolve(
  __dirname,
  '../../vendor/atomic-mcp-data/beta',
);
const MANIFEST_PATH = path.resolve(
  __dirname,
  '../../vendor/atomic-mcp-data/manifest.json',
);

interface AtomicManifest {
  version?: string;
}

interface AtomicComponentJson {
  api?: { props?: AtomicPropRecord[] };
  /** Curated-примеры атомарной команды — источник ExampleKind 'vendor', см. vendorExamples.ts и TASKS.md T3. */
  examples?: { title?: string; snippet?: string }[];
}

let cachedManifest: AtomicManifest | null | undefined;
function getManifest(): AtomicManifest | null {
  if (cachedManifest === undefined) {
    cachedManifest = fs.existsSync(MANIFEST_PATH)
      ? (JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')) as AtomicManifest)
      : null;
  }
  return cachedManifest;
}

/**
 * Снэпшот — один файл на СТРАНИЦУ документации, не на атом (T15, см.
 * ARCHITECTURE.md §1.6b): файл называется по странице, а в `api.props` попадает
 * только ПЕРВАЯ таблица пропсов этой страницы. У двух страниц первая таблица
 * документирует атом с другим именем — файл, названный по странице, несёт
 * пропсы этого атома, а не одноимённого с файлом:
 *
 * - `Segment.json` — пропсы `SegmentGroup` (у страницы `Segment.mdx` вообще нет
 *   таблицы `Segment`: `<PropsTable name="SegmentGroup">`, затем `SegmentItem`);
 * - `Skeleton.json` — пропсы `LineSkeleton` (страница `Skeleton.mdx`:
 *   `LineSkeleton`, `RectSkeleton`, `TextSkeleton`).
 *
 * Сверено 1:1 с собственным резолвом ts-morph: 8 из 8 пропсов `Skeleton.json`
 * совпадают с own-пропсами `LineSkeleton`, 9 из 10 пропсов `Segment.json` — с
 * own-пропсами `SegmentGroup` (десятый, `disabled`, — реальная вариация
 * `SegmentGroup` в установленном `@salutejs/sdds-finai`, которую own-резолв не
 * находит).
 */
const ATOMIC_PAGE_FILE_BY_BASE: Record<string, string> = {
  SegmentGroup: 'Segment',
  LineSkeleton: 'Skeleton',
};

/**
 * Обратная сторона той же находки: имена файлов из ATOMIC_PAGE_FILE_BY_BASE
 * нельзя резолвить по совпадению с `atomicBase`. Сейчас ui-kit не экспортирует
 * ни `Segment`, ни `Skeleton` — но если начнёт, эти записи молча получили бы
 * пропсы чужого атома (`SegmentGroup`/`LineSkeleton`) как свои. Отдаём
 * `atomicDataMissing`: отсутствие вендорных данных честнее подмешанных чужих.
 */
const PAGE_FILES_OF_OTHER_ATOM = new Set(
  Object.values(ATOMIC_PAGE_FILE_BY_BASE),
);

/**
 * Атомы, чья таблица пропсов в доках атомарной команды ЕСТЬ, но не первая на
 * своей странице, — и потому в снэпшот не попадает вовсе (их `extractProps`
 * берёт только первый JSON-массив пропсов со страницы, см. ARCHITECTURE.md
 * §1.6b). Размечено по исходным `docs/components/*.mdx` в
 * `plasma/website/sdds-finai-docs`: 87 таблиц `<PropsTable name="…">` на 72
 * страницы `components/` + 2 `beta/` — 14 таблиц (этот список) снэпшот теряет.
 *
 * Единственный способ их получить — перегенерировать снэпшот у атомарной
 * команды с исправленным `extractProps` (T15, задача открыта); наш код
 * подмешать их не может — в вендоренном JSON этих данных физически нет.
 * Список нужен диагностике: отличает известную дыру снэпшота от новой,
 * появившейся после очередного перевендоринга.
 */
export const ATOMIC_TABLE_ON_PARENT_PAGE: Record<string, string> = {
  AccordionItem: 'Accordion',
  CalendarBase: 'Calendar',
  CalendarBaseRange: 'Calendar',
  CalendarDouble: 'Calendar',
  CalendarDoubleRange: 'Calendar',
  Col: 'Grid',
  DatePickerRange: 'DatePicker',
  ListItem: 'List',
  NotificationsProvider: 'Notification',
  RectSkeleton: 'Skeleton',
  SegmentItem: 'Segment',
  TabItem: 'Tabs',
  TabsController: 'Tabs',
  TextSkeleton: 'Skeleton',
};

function loadAtomicComponent(
  atomicBase: string,
  atomicSubpath: 'beta' | undefined,
): AtomicComponentJson | undefined {
  // beta и основной пакет — разные директории вендоренного снэпшота: у части
  // атомов есть тёзки в обеих категориях с разными пропсами (Popover,
  // Tooltip), поэтому важно не перепутать и не подмешать пропсы не того атома.
  const isBeta = atomicSubpath === 'beta';
  const dir = isBeta ? VENDOR_BETA_DIR : VENDOR_COMPONENTS_DIR;

  // Разметка страниц выше — про основной каталог: в beta первая таблица
  // страницы (`PopoverBeta`/`TooltipBeta` в docgen) документирует ровно тот
  // атом, что beta-пакет экспортирует под именем страницы, путаницы нет.
  if (!isBeta && PAGE_FILES_OF_OTHER_ATOM.has(atomicBase)) return undefined;
  const fileBase = isBeta
    ? atomicBase
    : ATOMIC_PAGE_FILE_BY_BASE[atomicBase] ?? atomicBase;

  const filePath = path.join(dir, `${fileBase}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as AtomicComponentJson;
}

/**
 * Вендорный снэпшот систематически кладёт "" в description/default (генератор
 * PropsTable у атомарной команды пишет только {name, type} — см.
 * ARCHITECTURE.md §1.6) — пустая строка не то же самое, что "поле
 * отсутствует", и агент читает "" как содержательный (пустой) дефолт.
 * Не сохраняем такие поля вовсе.
 */
function dropEmptyStrings(p: AtomicPropRecord): AtomicPropRecord {
  const cleaned = { ...p };
  if (cleaned.description === '') delete cleaned.description;
  if (cleaned.default === '') delete cleaned.default;
  return cleaned;
}

/**
 * Вендор беднее собственного резолва ts-morph: замер на 40 wrapper-компонентах
 * — 0 описаний, 0 default, 0 required:true во всём снэпшоте, при 454 реальных
 * русских описаниях и 8 required:true, потерянных прежним "own минус
 * inherited"-дедупом (см. TASKS.md T14). Поэтому там, где имя совпало,
 * описание и required берём из own (ts-morph — источник точнее), а текст типа
 * и сам факт наличия пропса — из вендора (он ближе к тому, как атом реально
 * типизирован публично, без внутренних деталей ui-kit-обёртки). `default`
 * (TASKS.md T6) вендор не несёт вовсе (см. dropEmptyStrings) — own всегда
 * побеждает, если он его резолвил (деструктуризация/`@default`).
 */
function mergeWithOwn(
  vendorProp: AtomicPropRecord,
  ownProp: PropRecord | undefined,
): AtomicPropRecord {
  if (!ownProp) return vendorProp;
  return {
    ...vendorProp,
    required: ownProp.required,
    description: ownProp.description || vendorProp.description,
    default: ownProp.default ?? vendorProp.default,
  };
}

/**
 * Тот же порядок, что и у own props[] (см. propTier/sortProps в
 * parseComponent.ts, TASKS.md T7, п.3) — required → с описанием → без
 * описания, по алфавиту внутри яруса. У AtomicPropRecord нет `deprecated`,
 * поэтому последнего яруса (deprecated в конец) здесь просто не существует.
 */
function sortInheritedProps(
  props: InheritedPropRecord[],
): InheritedPropRecord[] {
  const tier = (p: InheritedPropRecord) => {
    if (p.required) return 0;
    return p.description ? 1 : 2;
  };
  return [...props].sort((a, b) => {
    const tierDiff = tier(a) - tier(b);
    return tierDiff !== 0 ? tierDiff : a.name.localeCompare(b.name);
  });
}

/**
 * Для каждого компонента с atomicBase (wrapper/form) подмешивает пропсы из
 * вендоренного снэпшота атомарной команды как inheritedProps[] — отдельно от
 * собственных props[]. Пропсы, совпавшие по имени с собственными (own),
 * пополевым мёрджем объединяются в единственную inheritedProps-запись — own
 * при этом убирается из props[], иначе для "чистых" реэкспортов (Button,
 * Accordion) получили бы дублирование всего списка пропсов дважды. Own не
 * теряется бесследно — description/required из него побеждают, см.
 * mergeWithOwn.
 */
export function mergeAtomicData(
  record: WorkingComponentRecord,
): WorkingComponentRecord {
  if (!record.atomicBase) {
    return { ...record, atomicMcpVersion: getManifest()?.version };
  }

  const atomicComponent = loadAtomicComponent(
    record.atomicBase,
    record.atomicSubpath,
  );
  if (!atomicComponent) {
    return { ...record, atomicDataMissing: true };
  }

  const ownByName = new Map((record.props || []).map((p) => [p.name, p]));

  const inheritedProps = sortInheritedProps(
    (atomicComponent.api?.props || []).map((p) => ({
      ...mergeWithOwn(dropEmptyStrings(p), ownByName.get(p.name)),
      inheritedFrom: record.atomicBase as string,
      inheritedPackage: '@salutejs/sdds-finai',
    })),
  );

  const inheritedNames = new Set(inheritedProps.map((p) => p.name));
  const ownProps = (record.props || []).filter(
    (p) => !inheritedNames.has(p.name),
  );

  const vendorExampleSnippets = (atomicComponent.examples || [])
    .filter((e): e is { title?: string; snippet: string } => Boolean(e.snippet))
    .map((e) => ({ title: e.title, snippet: e.snippet }));

  return {
    ...record,
    props: ownProps,
    inheritedProps,
    atomicMcpVersion: getManifest()?.version,
    ...(vendorExampleSnippets.length ? { vendorExampleSnippets } : {}),
  };
}
