import fs from 'node:fs';
import path from 'node:path';

import { REPO_ROOT } from './tsProject.js';
import { discoverComponents } from './discoverComponents.js';
import { parseComponent } from './parseComponent.js';
import { classify, promoteCompositionToWrapper, linkFormVariants } from './classify.js';
import { mergeMeta, getInstallationGuide } from './mergeMeta.js';
import { mergeAtomicData } from './mergeAtomicData.js';
import { resolveImportPath } from './resolveImportPath.js';
import { synthesizeExample } from './synthesizeExample.js';
import { buildFeatureIndex } from './indexFeatures.js';
import { printDiagnostics } from './diagnostics.js';

const UI_KIT_PACKAGE_JSON = path.join(REPO_ROOT, 'packages/ui-kit/package.json');
const DIST_MCP_DATA_DIR = path.join(REPO_ROOT, 'dist/packages/ui-kit/mcp-data');
const BUNDLED_MCP_DATA_DIR = path.join(REPO_ROOT, 'packages/mcp-server/data');

function getLibVersion() {
  const pkg = JSON.parse(fs.readFileSync(UI_KIT_PACKAGE_JSON, 'utf8'));
  return pkg.version;
}

function mapCuratedStories(stories) {
  return (stories || []).map((s) => ({
    exportName: s.exportName,
    displayName: s.displayName,
    type: s.type,
    code: s.code,
  }));
}

function finalizeExamples(record) {
  if (record.curatedStories?.length) {
    return mapCuratedStories(record.curatedStories);
  }
  return [synthesizeExample(record)];
}

function buildComponentRecords() {
  const entries = discoverComponents();

  let records = entries.map((entry) => {
    const parsed = parseComponent(entry);
    if (parsed.error) {
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
  });

  promoteCompositionToWrapper(records);
  linkFormVariants(records);

  records = records.map((r) => (r.error ? r : mergeMeta(r)));
  records = records.map((r) => (r.error ? r : mergeAtomicData(r)));

  records = records.map((r) => {
    if (r.error) return r;
    const { importPath, importStatement } = resolveImportPath(r);
    return { ...r, importPath, importStatement };
  });

  records = records.map((r) => (r.error ? r : { ...r, examples: finalizeExamples(r) }));

  return records;
}

function writeIndexFile(outputDir, index) {
  fs.mkdirSync(outputDir, { recursive: true });
  const outPath = path.join(outputDir, 'component-index.json');
  fs.writeFileSync(outPath, JSON.stringify(index, null, 2));
  return outPath;
}

function main() {
  console.log('Сборка индекса @daisforge/ui для MCP...');

  const records = buildComponentRecords();
  const features = buildFeatureIndex(records.filter((r) => !r.error));
  const installationGuide = getInstallationGuide();

  const index = {
    generatedAt: new Date().toISOString(),
    libVersion: getLibVersion(),
    components: Object.fromEntries(records.map((r) => [r.name, r])),
    features,
    guides: installationGuide ? { installation: installationGuide } : {},
  };

  const { errors } = printDiagnostics(records, features);

  const bundledPath = writeIndexFile(BUNDLED_MCP_DATA_DIR, index);
  console.log(`Записано (bundled fallback): ${bundledPath}`);

  if (fs.existsSync(path.join(REPO_ROOT, 'dist/packages/ui-kit'))) {
    const distPath = writeIndexFile(DIST_MCP_DATA_DIR, index);
    console.log(`Записано (package-режим, публикуется с @daisforge/ui): ${distPath}`);
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
