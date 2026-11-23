/**
 * Дерево страницы — единственный формат, с которым работают агент,
 * холст, панель свойств, проверка правил и генерация кода.
 * Узел = компонент библиотеки (или композиция-пресет) + пропсы + дети.
 */

export type PropValue = string | number | boolean;

export type NodeType =
  | 'PageLayout'
  | 'PageTitle'
  | 'Stack'
  | 'Grid'
  | 'Widget'
  | 'ActionBar'
  | 'Typography'
  | 'KeyValue'
  | 'Metric'
  | 'Button'
  | 'ActionsMenu'
  | 'TextField'
  | 'TextArea'
  | 'Checkbox'
  | 'Switch'
  | 'Badge'
  | 'Note'
  | 'EmptyState'
  | 'TableCanvas'
  | 'Divider';

export type UINode = {
  id: string;
  type: NodeType;
  props: Record<string, PropValue>;
  children: UINode[];
};

let counter = 0;

export const newId = (type: NodeType) => {
  counter += 1;
  return `${type.toLowerCase()}-${counter}`;
};

export const node = (
  type: NodeType,
  props: Record<string, PropValue> = {},
  children: UINode[] = [],
): UINode => ({ id: newId(type), type, props, children });

export function walk(
  root: UINode,
  visit: (item: UINode, parent: UINode | null) => void,
) {
  const go = (item: UINode, parent: UINode | null) => {
    visit(item, parent);
    item.children.forEach((child) => go(child, item));
  };
  go(root, null);
}

export function findNode(root: UINode, id: string): UINode | null {
  let found: UINode | null = null;
  walk(root, (item) => {
    if (item.id === id) found = item;
  });
  return found;
}

export function findParent(root: UINode, id: string): UINode | null {
  let found: UINode | null = null;
  walk(root, (item, parent) => {
    if (item.id === id) found = parent;
  });
  return found;
}

export function findAll(
  root: UINode,
  test: (item: UINode) => boolean,
): UINode[] {
  const result: UINode[] = [];
  walk(root, (item) => {
    if (test(item)) result.push(item);
  });
  return result;
}

/** Иммутабельно заменяет узел по id */
export function updateNode(
  root: UINode,
  id: string,
  update: (item: UINode) => UINode,
): UINode {
  if (root.id === id) return update(root);
  return {
    ...root,
    children: root.children.map((child) => updateNode(child, id, update)),
  };
}

export function removeNode(root: UINode, id: string): UINode {
  return {
    ...root,
    children: root.children
      .filter((child) => child.id !== id)
      .map((child) => removeNode(child, id)),
  };
}

export function insertChild(
  root: UINode,
  parentId: string,
  child: UINode,
  index?: number,
): UINode {
  return updateNode(root, parentId, (parent) => {
    const children = [...parent.children];
    children.splice(index ?? children.length, 0, child);
    return { ...parent, children };
  });
}

/** Сдвигает узел среди соседей на delta позиций */
export function moveNode(root: UINode, id: string, delta: number): UINode {
  const parent = findParent(root, id);
  if (!parent) return root;
  return updateNode(root, parent.id, (item) => {
    const children = [...item.children];
    const from = children.findIndex((child) => child.id === id);
    const to = Math.min(Math.max(from + delta, 0), children.length - 1);
    const [moved] = children.splice(from, 1);
    if (moved) children.splice(to, 0, moved);
    return { ...item, children };
  });
}

export const setProps = (
  root: UINode,
  id: string,
  props: Record<string, PropValue | undefined>,
) =>
  updateNode(root, id, (item) => {
    const next = { ...item.props };
    Object.entries(props).forEach(([key, value]) => {
      if (value === undefined || value === '') delete next[key];
      else next[key] = value;
    });
    return { ...item, props: next };
  });

/** Узлы, в которые можно вкладывать другие */
export const CONTAINERS: NodeType[] = [
  'PageLayout',
  'PageTitle',
  'Stack',
  'Grid',
  'Widget',
  'ActionBar',
];

export const isContainer = (item: UINode) => CONTAINERS.includes(item.type);

/** Читаемая подпись узла для слоёв и сообщений агента */
export function nodeLabel(item: UINode): string {
  const text =
    item.props.text ??
    item.props.title ??
    item.props.label ??
    item.props.placeholder;
  return text ? `${item.type} «${String(text)}»` : item.type;
}

/**
 * Колонки таблицы и пункты меню хранятся строкой через «;» — так их удобно
 * править в панели свойств, а запятая остаётся внутри названий («Сумма, ₽»)
 */
export const splitList = (value: PropValue | undefined) =>
  String(value ?? '')
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean);
