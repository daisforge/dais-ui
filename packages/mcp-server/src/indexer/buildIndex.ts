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
  classify,
  linkFormVariants,
  promoteCompositionToWrapper,
} from './classify.js';
import { printDiagnostics } from './diagnostics.js';
import { discoverComponents } from './discoverComponents.js';
import { getDenylistMap } from './htmlAttributeDenylist.js';
import { buildFeatureIndex } from './indexFeatures.js';
import { buildTypeIndex } from './indexTypes.js';
import { mergeAtomicData } from './mergeAtomicData.js';
import { getInstallationGuide, mergeMeta } from './mergeMeta.js';
import { isParsedComponent, parseComponent } from './parseComponent.js';
import { resolveImportPath } from './resolveImportPath.js';
import { synthesizeExample } from './synthesizeExample.js';
import { REPO_ROOT } from './tsProject.js';

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

function finalizeExamples(record: WorkingComponentRecord): ExampleRecord[] {
  if (record.curatedStories?.length) {
    return mapCuratedStories(record.curatedStories);
  }
  return [synthesizeExample(record)];
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
  records = records.map((r) => (r.error ? r : mergeAtomicData(r)));

  records = records.map((r) => {
    if (r.error) return r;
    const { importPath, importStatement } = resolveImportPath(
      r.name,
      r.sourceFile ?? '',
    );
    return { ...r, importPath, importStatement };
  });

  records = records.map((r) =>
    r.error ? r : { ...r, examples: finalizeExamples(r) },
  );

  return records;
}

function writeIndexFile(outputDir: string, index: ComponentIndex): string {
  fs.mkdirSync(outputDir, { recursive: true });
  const outPath = path.join(outputDir, 'component-index.json');
  fs.writeFileSync(outPath, JSON.stringify(index, null, 2));
  return outPath;
}

function main(): void {
  console.log('Сборка индекса @daisforge/ui для MCP...');

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
