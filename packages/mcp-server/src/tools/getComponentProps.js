import { findComponent } from './shared.js';

export function getComponentProps(index, { name, part } = {}) {
  const record = findComponent(index, name);
  if (!record) {
    return { error: `Компонент "${name}" не найден.` };
  }

  if (part) {
    const compoundPart = (record.compoundParts || []).find(
      (p) => p.name.toLowerCase() === part.toLowerCase(),
    );
    if (!compoundPart) {
      return {
        error: `Compound-часть "${part}" не найдена у "${record.name}". Доступные: ${
          (record.compoundParts || []).map((p) => p.name).join(', ') || '(нет)'
        }`,
      };
    }
    return {
      name: record.name,
      part: compoundPart.name,
      propsTypeName: compoundPart.typeName,
      rawType: compoundPart.rawType,
      isGeneric: compoundPart.isGeneric || undefined,
      props: compoundPart.props || [],
    };
  }

  return {
    name: record.name,
    propsTypeName: record.propsTypeName,
    rawType: record.rawType,
    isGeneric: record.isGeneric || undefined,
    props: record.props || [],
    inheritedProps: record.inheritedProps || [],
    atomicBase: record.atomicBase,
    atomicDataMissing: record.atomicDataMissing || undefined,
    formContract: record.formContract,
    dataVersionNotice: index.dataVersionNotice,
  };
}
