import { getProject } from './tsProject.js';

/**
 * Ищет импорты из '@salutejs/sdds-finai' в исходном файле локального
 * wrapper-компонента (TextField, Switch, ModalDF...) — в отличие от чистого
 * реэкспорта (`pureAtomicReExport`), здесь компонент объявлен в ui-kit, но
 * оборачивает конкретный атом, импортированный по имени (иногда с алиасом:
 * `import { TextField as BaseTextField }`).
 */
function findAtomicImportNames(sourceFile) {
  return sourceFile
    .getImportDeclarations()
    .filter((imp) => imp.getModuleSpecifierValue() === '@salutejs/sdds-finai')
    .flatMap((imp) => imp.getNamedImports().map((named) => named.getName()));
}

function pickAtomicBase(names, componentName) {
  if (names.length === 0) return undefined;
  if (names.length === 1) return names[0];

  const lower = componentName.toLowerCase();
  const bestMatch = names.find((n) => lower.includes(n.toLowerCase()));
  return bestMatch ?? names[0];
}

/** Имена, реально импортированные (как значения) из соседних ui-kit компонентов. */
function findInternalComponentImportNames(sourceFile) {
  return sourceFile
    .getImportDeclarations()
    .filter((imp) => {
      const spec = imp.getModuleSpecifierValue();
      return (
        spec.startsWith('@ui-kit/components/') || spec.includes('/components/')
      );
    })
    .flatMap((imp) => imp.getNamedImports().map((named) => named.getName()));
}

/**
 * Классифицирует компонент: wrapper / composition / standalone / form,
 * плюс atomicBase (имя атома @salutejs/sdds-finai, если это обёртка).
 */
export function classify(entry, parsed) {
  if (entry.group === 'formComponents') {
    return { type: 'form', atomicBase: undefined };
  }

  if (parsed.pureAtomicReExport) {
    return { type: 'wrapper', atomicBase: entry.name };
  }

  if (parsed.declaredInUiKit) {
    const project = getProject();
    const sourceFile = project.getSourceFileOrThrow(parsed.declarationFile);
    const atomicNames = findAtomicImportNames(sourceFile);

    if (atomicNames.length > 0) {
      return { type: 'wrapper', atomicBase: pickAtomicBase(atomicNames, entry.name) };
    }

    const internalComponentImports = findInternalComponentImportNames(sourceFile);
    if (internalComponentImports.length > 0) {
      return {
        type: 'composition',
        atomicBase: undefined,
        internalComponentImports,
      };
    }
  }

  return { type: 'standalone', atomicBase: undefined };
}

/** Ищет среди внутренних импортов composition-компонента подходящего wrapper-кандидата на "повышение". */
function findPromotionCandidate(record, byName) {
  const lower = record.name.toLowerCase();
  return record.internalComponentImports.find((importedName) => {
    const imported = byName.get(importedName);
    return (
      imported &&
      imported.type === 'wrapper' &&
      imported.atomicBase &&
      lower.includes(importedName.toLowerCase())
    );
  });
}

/**
 * Некоторые компоненты (ModalDF → внутренний Modal → sdds-finai Modal)
 * оборачивают атом не напрямую, а через ДРУГОЙ ui-kit компонент — первый
 * проход classify() видит только прямые импорты и метит их "composition".
 * Здесь пропускаем список ещё раз: если среди внутренних импортов composition
 * есть уже классифицированный wrapper с совпадающим (по имени) atomicBase —
 * повышаем текущую запись до wrapper. Совпадение имени — чтобы не хватать
 * первый попавшийся импорт (ModalDF импортирует и Modal, и PopupProvider).
 */
export function promoteCompositionToWrapper(records) {
  const byName = new Map(records.map((r) => [r.name, r]));

  records
    .filter((r) => r.type === 'composition' && r.internalComponentImports)
    .forEach((record) => {
      const candidateName = findPromotionCandidate(record, byName);
      if (candidateName) {
        const candidate = byName.get(candidateName);
        record.type = 'wrapper';
        record.atomicBase = candidate.atomicBase;
        record.wrapsInternal = candidateName;
      }
      delete record.internalComponentImports;
    });
}

/**
 * Второй проход по уже классифицированному списку: связь wrapper ↔
 * form-аналог по соглашению именования библиотеки (TextField → FormTextField).
 * Мутирует записи на месте — простая и понятная схема для однопроходного
 * построения индекса.
 */
export function linkFormVariants(records) {
  const byName = new Map(records.map((r) => [r.name, r]));

  records
    .filter((r) => r.type !== 'form')
    .forEach((record) => {
      const formName = `Form${record.name}`;
      const formRecord = byName.get(formName);
      if (formRecord && formRecord.type === 'form') {
        record.formVariant = formName;
        formRecord.wrappedBy = record.name;
      }
    });
}
