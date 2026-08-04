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
  warning?: string;
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
  warning?: string;
}

/**
 * Пустой props[] у generic-типа — не факт "у компонента нет пропсов", а
 * иногда деградация индексера (структурный резолв генерика не прошёл
 * эвристики безопасности, см. tryExtractGenericProps в parseComponent.ts,
 * и откатился на сырой текст типа). Без явного сигнала агент, полагающийся
 * только на MCP, не может отличить одно от другого и рискует придумать
 * пропсы по общему паттерну (реальный кейс — FormMask до фикса индексера).
 */
function genericEmptyPropsWarning(
  isGeneric: boolean | undefined,
  propsLength: number,
): string | undefined {
  if (!isGeneric || propsLength > 0) return undefined;
  return (
    'Пропсы не резолвлены (сложный generic-тип) — пустой props[] не значит, ' +
    'что у компонента их нет. Проверь rawType в этом же ответе, попробуй ' +
    'get_component_examples, а для компонентов с wrappedBy/atomicBase — ' +
    'get_component_props по этому имени.'
  );
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
    const compoundPartProps = compoundPart.props || [];
    return {
      name: record.name,
      part: compoundPart.name,
      propsTypeName: compoundPart.typeName,
      rawType: compoundPart.rawType,
      isGeneric: compoundPart.isGeneric || undefined,
      props: compoundPartProps,
      warning: genericEmptyPropsWarning(
        compoundPart.isGeneric,
        compoundPartProps.length,
      ),
    };
  }

  const props = record.props || [];
  return {
    name: record.name,
    propsTypeName: record.propsTypeName,
    rawType: record.rawType,
    isGeneric: record.isGeneric || undefined,
    props,
    inheritedProps: record.inheritedProps || [],
    atomicBase: record.atomicBase,
    atomicDataMissing: record.atomicDataMissing || undefined,
    dataVersionNotice: index.dataVersionNotice,
    warning: genericEmptyPropsWarning(record.isGeneric, props.length),
  };
}
