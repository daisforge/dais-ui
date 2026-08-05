/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { AtomicPropRecord, WorkingComponentRecord } from '../types.js';

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
 * Для каждого компонента с atomicBase (wrapper/form) подмешивает пропсы из
 * вендоренного снэпшота атомарной команды как inheritedProps[] — отдельно от
 * собственных props[]. Из собственных props[] убираем то, что и так есть в
 * inheritedProps (по имени) — иначе для "чистых" реэкспортов (Button,
 * Accordion) получили бы дублирование всего списка пропсов дважды.
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

  const inheritedProps = (atomicComponent.api?.props || []).map((p) => ({
    ...p,
    inheritedFrom: record.atomicBase as string,
    inheritedPackage: '@salutejs/sdds-finai',
  }));

  const inheritedNames = new Set(inheritedProps.map((p) => p.name));
  const ownProps = (record.props || []).filter(
    (p) => !inheritedNames.has(p.name),
  );

  return {
    ...record,
    props: ownProps,
    inheritedProps,
    atomicMcpVersion: getManifest()?.version,
  };
}
