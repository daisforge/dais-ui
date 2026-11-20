import path from 'node:path';

import type { Node, Type } from 'ts-morph';

import {
  getDenylistMap,
  isNoiseProp,
} from '../indexer/htmlAttributeDenylist.js';
import { loadAtomicComponent } from '../indexer/mergeAtomicData.js';
import { getProject, UI_KIT_SRC } from '../indexer/tsProject.js';
import { comparableType, formatPropType } from '../indexer/typeDisplay.js';
import type { AtomicPropRecord, ComponentIndex, PropRecord } from '../types.js';
import { isOkComponent } from '../types.js';
import {
  DECLARED_PROPS_FALLBACKS,
  OPEN_CONTRACT_AUDIT,
} from './openContractAudit.js';

export interface ContractIssue {
  component: string;
  part?: string;
  prop?: string;
  kind: 'missing-prop' | 'unexpected-prop' | 'type' | 'required' | 'contract';
  expected?: string;
  actual?: string;
}
export interface ContractCoverage {
  component: string;
  part?: string;
  open: boolean;
  reason?: string;
  source?: string;
  declaredProps: string[];
  checkedProps: string[];
  unverifiedProps: string[];
  truncatedProps: string[];
}

function readFields(
  type: Type,
  location: Node,
  documented: ReadonlySet<string> = new Set(),
): Map<string, PropRecord> {
  const branches = type.isUnion() ? type.getUnionTypes() : [type];
  const variants = branches.map((branch) => {
    const fields = new Map<string, { type: string; required: boolean }>();
    branch.getProperties().forEach((symbol) => {
      const declaration =
        symbol.getValueDeclaration() ?? symbol.getDeclarations()[0] ?? location;
      const text = symbol.getTypeAtLocation(declaration).getText();
      const name = symbol.getName();
      const required = !symbol.isOptional();
      if (documented.has(name) || !isNoiseProp(name, text, required))
        fields.set(name, {
          type: text,
          required,
        });
    });
    return fields;
  });
  const names = new Set(variants.flatMap((fields) => [...fields.keys()]));
  const fields = new Map<string, PropRecord>();
  names.forEach((name) => {
    const values = variants.map((variant) => variant.get(name));
    const types = [
      ...new Set(values.flatMap((value) => (value ? [value.type] : []))),
    ];
    fields.set(name, {
      name,
      type: formatPropType(
        types.length === 1
          ? types[0] ?? 'never'
          : types.map((text) => `(${text})`).join(' | '),
      ),
      required: values.every((value) => value?.required),
      description: '',
    });
  });
  return fields;
}

/**
 * Независимый обход публичных деклараций: не использует discoverComponents,
 * parseComponent, PUBLIC_PROPS_HELPERS или данные props как источник ожиданий.
 * Для styled читается первая сигнатура напрямую, для остальных — React ComponentProps.
 * Политика исключения DOM-шумов общая, поведение её границ защищено JSX-тестами.
 */
export function auditContracts(index: ComponentIndex) {
  const project = getProject();
  getDenylistMap();
  const targets: {
    component: string;
    part?: string;
    type: Type;
    decl: Node;
    props: AtomicPropRecord[];
    alias: string;
    documented?: ReadonlySet<string>;
  }[] = [];
  const issues: ContractIssue[] = [];
  const lines = ["import type { ComponentProps } from 'react';"];
  Object.values(index.components)
    .filter(isOkComponent)
    .forEach((record, i) => {
      const relative =
        record.importPath === '@daisforge/ui'
          ? 'index.ts'
          : `${record.importPath.replace('@daisforge/ui/', '')}/index.ts`;
      const barrel = project.getSourceFile(path.join(UI_KIT_SRC, relative));
      const decl = barrel?.getExportedDeclarations().get(record.name)?.[0];
      if (!barrel || !decl) {
        issues.push({
          component: record.name,
          kind: 'contract',
          actual: 'Нет публичного экспорта',
        });
        return;
      }
      lines.push(
        `import { ${record.name} as C${i} } from ${JSON.stringify(
          barrel.getFilePath().replace(/\.ts$/, ''),
        )};`,
      );
      const add = (type: Type, props: AtomicPropRecord[], part?: string) => {
        const alias = `P${targets.length}`;
        const expression = `typeof C${i}${
          part ? `[${JSON.stringify(part)}]` : ''
        }`;
        lines.push(`type ${alias} = ComponentProps<${expression}>;`);
        const atom =
          !part && record.atomicBase
            ? loadAtomicComponent(record.atomicBase, record.atomicSubpath)
            : undefined;
        targets.push({
          component: record.name,
          part,
          type,
          decl,
          props,
          alias,
          documented:
            atom && new Set(atom.api?.props?.map((prop) => prop.name)),
        });
      };
      if (
        record.apiKind === 'namespace' &&
        decl.getType().getCallSignatures().length
      )
        issues.push({
          component: record.name,
          kind: 'contract',
          actual: 'Вызываемый компонент ошибочно помечен namespace',
        });
      if (record.apiKind !== 'namespace')
        add(decl.getType(), [
          ...record.props,
          ...(record.inheritedProps || []),
        ]);
      (record.compoundParts || []).forEach((part) => {
        const type = decl
          .getType()
          .getProperty(part.name)
          ?.getTypeAtLocation(decl);
        if (type) add(type, part.props, part.name);
        else
          issues.push({
            component: record.name,
            part: part.name,
            kind: 'contract',
            actual: 'Нет compound-части',
          });
      });
    });
  const file = project.createSourceFile(
    path.join(UI_KIT_SRC, '__mcp_independent_audit.ts'),
    lines.join('\n'),
    { overwrite: true },
  );
  const coverage: ContractCoverage[] = [];
  targets.forEach(({ component, part, decl, props, alias, documented }) => {
    const type = part
      ? decl.getType().getPropertyOrThrow(part).getTypeAtLocation(decl)
      : decl.getType();
    const styled = Boolean(type.getProperty('withComponent'));
    const parameter = type.getCallSignatures()[0]?.getParameters()[0];
    const contract =
      styled && parameter
        ? parameter.getTypeAtLocation(decl)
        : file.getTypeAliasOrThrow(alias).getType();
    if (contract.isAny() || contract.isUnknown() || contract.isNever()) {
      issues.push({
        component,
        part,
        kind: 'contract',
        actual: contract.getText(),
      });
      return;
    }
    const branches = contract.isUnion() ? contract.getUnionTypes() : [contract];
    const open = branches.some((branch) =>
      Boolean(branch.getStringIndexType()),
    );
    const expected = readFields(contract, decl, documented);
    if (styled)
      expected.set('as', {
        name: 'as',
        type: formatPropType('React.ElementType | undefined'),
        required: false,
        description: '',
      });
    const key = `${component}${part ? `.${part}` : ''}`;
    const reason = OPEN_CONTRACT_AUDIT.get(key);
    if (open !== Boolean(reason))
      issues.push({
        component,
        part,
        kind: 'contract',
        actual: open
          ? 'Новый открытый контракт'
          : 'Устаревшее исключение: контракт закрыт',
      });
    const declaredProps: string[] = [];
    const fallback = DECLARED_PROPS_FALLBACKS[key];
    if (fallback) {
      const aliasDecl = project
        .getSourceFileOrThrow(path.join(UI_KIT_SRC, fallback.file))
        .getTypeAliasOrThrow(fallback.type);
      readFields(aliasDecl.getType(), aliasDecl).forEach((field, name) => {
        if (!expected.has(name)) {
          expected.set(name, field);
          declaredProps.push(name);
        }
      });
    }
    const actual = new Map(props.map((prop) => [prop.name, prop]));
    expected.forEach((field, name) => {
      const value = actual.get(name);
      if (!value)
        issues.push({
          component,
          part,
          prop: name,
          kind: 'missing-prop',
          expected: field.type,
        });
      else {
        if (
          comparableType(value.type, field.required) !==
          comparableType(field.type, field.required)
        )
          issues.push({
            component,
            part,
            prop: name,
            kind: 'type',
            expected: field.type,
            actual: value.type,
          });
        if (value.required !== field.required)
          issues.push({
            component,
            part,
            prop: name,
            kind: 'required',
            expected: String(field.required),
            actual: String(value.required),
          });
      }
    });
    const unverifiedProps: string[] = [];
    actual.forEach((field, name) => {
      if (!expected.has(name)) {
        unverifiedProps.push(name);
        issues.push({
          component,
          part,
          prop: name,
          kind: 'unexpected-prop',
          actual: field.type,
        });
      }
    });
    coverage.push({
      component,
      part,
      open,
      ...reason,
      declaredProps,
      checkedProps: [...expected.keys()],
      unverifiedProps,
      truncatedProps: [...expected.values()]
        .filter((field) => field.type.endsWith('…'))
        .map((field) => field.name),
    });
  });
  const observed = new Set(
    coverage.map((c) => `${c.component}${c.part ? `.${c.part}` : ''}`),
  );
  OPEN_CONTRACT_AUDIT.forEach((_, name) => {
    if (!observed.has(name))
      issues.push({
        component: name,
        kind: 'contract',
        actual: 'Исключение не соответствует записи индекса',
      });
  });
  return { issues, coverage };
}
