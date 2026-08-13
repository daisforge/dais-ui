/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type {
  AtomicPropRecord,
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

function loadAtomicComponent(
  atomicBase: string,
  atomicSubpath: 'beta' | undefined,
): AtomicComponentJson | undefined {
  // beta и основной пакет — разные директории вендоренного снэпшота: у части
  // атомов есть тёзки в обеих категориях с разными пропсами (Popover,
  // Tooltip), поэтому важно не перепутать и не подмешать пропсы не того атома.
  const dir =
    atomicSubpath === 'beta' ? VENDOR_BETA_DIR : VENDOR_COMPONENTS_DIR;
  const filePath = path.join(dir, `${atomicBase}.json`);
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
 * типизирован публично, без внутренних деталей ui-kit-обёртки).
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
  };
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

  const inheritedProps = (atomicComponent.api?.props || []).map((p) => ({
    ...mergeWithOwn(dropEmptyStrings(p), ownByName.get(p.name)),
    inheritedFrom: record.atomicBase as string,
    inheritedPackage: '@salutejs/sdds-finai',
  }));

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
