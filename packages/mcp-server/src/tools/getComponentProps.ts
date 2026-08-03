import type {
  InheritedPropRecord,
  PropRecord,
  RuntimeIndex,
  ToolError,
} from '../types.js';
import { isOkComponent } from '../types.js';
import { findComponent } from './shared.js';

export interface GetComponentPropsArgs {
  name?: string;
  part?: string;
}

interface CompoundPartPropsPayload {
  name: string;
  part: string;
  propsTypeName?: string;
  rawType?: string;
  isGeneric?: true;
  props: PropRecord[];
}

interface ComponentPropsPayload {
  name: string;
  propsTypeName?: string;
  rawType?: string;
  isGeneric?: true;
  props: PropRecord[];
  inheritedProps: InheritedPropRecord[];
  atomicBase?: string;
  atomicDataMissing?: true;
  dataVersionNotice?: string;
}

export function getComponentProps(
  index: RuntimeIndex,
  { name, part }: GetComponentPropsArgs = {},
): CompoundPartPropsPayload | ComponentPropsPayload | ToolError {
  const record = findComponent(index, name);
  if (!record) {
    return { error: `Компонент "${name}" не найден.` };
  }
  if (!isOkComponent(record)) {
    return { error: record.error };
  }

  if (part) {
    const compoundPart = (record.compoundParts || []).find(
      (p) => p.name.toLowerCase() === part.toLowerCase(),
    );
    if (!compoundPart) {
      return {
        error: `Compound-часть "${part}" не найдена у "${
          record.name
        }". Доступные: ${
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
    dataVersionNotice: index.dataVersionNotice,
  };
}
