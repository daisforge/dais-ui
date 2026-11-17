import path from 'node:path';

import type { Type, TypeAliasDeclaration } from 'ts-morph';

import type { ComponentEntry } from './discoverComponents.js';
import { getProject, UI_KIT_SRC } from './tsProject.js';

/**
 * styled-components v5: последняя перегрузка с `as` теряет основной контракт.
 * Берём первую из двух перегрузок, сохраняя отдельные полиморфные атрибуты.
 * Остальные компоненты проверяем стандартным ComponentProps.
 */
export const PUBLIC_PROPS_HELPERS = `
import type { ComponentProps, ElementType } from 'react';
type McpStyledProps<P> = P extends unknown ? Omit<P, 'as' | 'forwardedAs'> & { as?: ElementType; forwardedAs?: ElementType } : never;
type McpProps<C> = C extends { withComponent: unknown }
  ? C extends { (props: infer P): unknown; (props: never): unknown }
    ? McpStyledProps<P>
    : never
  : C extends ElementType ? ComponentProps<C> : never;
type McpKeys<T> = T extends unknown ? keyof T : never;
type McpValue<T, K extends PropertyKey> = T extends unknown ? K extends keyof T ? T[K] : never : never;
type McpOptional<T, K extends PropertyKey> = T extends unknown ? K extends keyof T ? {} extends Pick<T, K> ? true : false : true : never;
`;

const aliases = new Map<string, TypeAliasDeclaration>();
const namespaces = new Set<string>();
const keyOf = (barrel: string, name: string, part?: string) =>
  `${barrel}#${name}${part ? `.${part}` : ''}`;

/** Один виртуальный модуль на пакет: без записи пробников в исходники. */
export function preparePublicContracts(entries: ComponentEntry[]): void {
  const project = getProject();
  const pending = entries.filter(
    (e) => !aliases.has(keyOf(e.barrelPath, e.name)),
  );
  if (!pending.length) return;
  const lines = [PUBLIC_PROPS_HELPERS];
  const keys: string[] = [];
  const add = (key: string, expression: string) => {
    lines.push(`type P${keys.length} = McpProps<${expression}>;`);
    keys.push(key);
  };
  pending.forEach((entry, i) => {
    const barrel = project.getSourceFileOrThrow(entry.barrelPath);
    const decl = barrel.getExportedDeclarations().get(entry.name)?.[0];
    if (!decl) throw new Error(`Нет декларации ${entry.name}`);
    const key = keyOf(entry.barrelPath, entry.name);
    const type = decl.getType();
    if (
      !type.getCallSignatures().length &&
      !type.getConstructSignatures().length
    )
      namespaces.add(key);
    lines.push(
      `import { ${entry.name} as C${i} } from ${JSON.stringify(
        entry.barrelPath.replace(/\.tsx?$/, ''),
      )};`,
    );
    add(key, `typeof C${i}`);
    type.getProperties().forEach((symbol) => {
      if (
        /^[A-Z]/.test(symbol.getName()) &&
        symbol.getTypeAtLocation(decl).getCallSignatures().length
      ) {
        add(
          keyOf(entry.barrelPath, entry.name, symbol.getName()),
          `typeof C${i}[${JSON.stringify(symbol.getName())}]`,
        );
      }
    });
  });
  const file = project.createSourceFile(
    path.join(UI_KIT_SRC, `__mcp_contract_${aliases.size}.ts`),
    lines.join('\n'),
    { overwrite: true },
  );
  keys.forEach((key, i) => aliases.set(key, file.getTypeAliasOrThrow(`P${i}`)));
}

export function getPublicContract(
  entry: ComponentEntry,
  part?: string,
): Type | undefined {
  preparePublicContracts([entry]);
  return aliases.get(keyOf(entry.barrelPath, entry.name, part))?.getType();
}

export function isNamespace(entry: ComponentEntry): boolean {
  preparePublicContracts([entry]);
  return namespaces.has(keyOf(entry.barrelPath, entry.name));
}

export function isOpenContract(type: Type): boolean {
  return (
    type.isAny() ||
    type.isUnknown() ||
    Boolean(type.getStringIndexType()) ||
    (type.isUnion() && type.getUnionTypes().some(isOpenContract))
  );
}
