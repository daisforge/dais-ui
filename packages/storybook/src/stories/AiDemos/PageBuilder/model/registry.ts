/**
 * Реестр узлов конструктора. Для компонентов библиотеки пропсы внешнего
 * вида берутся из среза MCP-индекса (catalog.generated.ts), здесь — только
 * структурные пропсы (тексты, колонки, отступы) и привязка к компоненту.
 *
 * Пресеты Stack / Grid / ActionBar / KeyValue / Metric — это композиции
 * из Box, Typography и Badge. В продукте они станут шаблонами блоков
 * в MCP (get_template), а ActionBar — кандидат в отдельный компонент
 * (Action Bot Panel из гайда action-buttons-placement).
 */
import { MCP_CATALOG } from '../catalog/catalog.generated';
import type { NodeType, PropValue } from './tree';

export type PropKind = 'string' | 'boolean' | 'number' | 'enum';

export type PropSpec = {
  name: string;
  kind: PropKind;
  options?: readonly string[];
  description?: string;
  /** Откуда проп: структура демо или MCP-индекс */
  source: 'structure' | 'mcp';
};

export type Category =
  | 'Лэйаут'
  | 'Действия'
  | 'Ввод'
  | 'Отображение'
  | 'Данные';

type Entry = {
  title: string;
  category: Category;
  /** Компонент библиотеки, на котором построен узел */
  component: keyof typeof MCP_CATALOG;
  /** Пресет — композиция, а не компонент один в один */
  preset?: boolean;
  structure: Omit<PropSpec, 'source'>[];
  /** Пропсы по умолчанию при добавлении из палитры */
  defaults: Record<string, PropValue>;
};

const GAP = ['s', 'm', 'l'] as const;

export const REGISTRY: Record<NodeType, Entry> = {
  PageLayout: {
    title: 'Страница',
    category: 'Лэйаут',
    component: 'PageLayout',
    structure: [],
    defaults: {},
  },
  PageTitle: {
    title: 'Заголовок страницы',
    category: 'Лэйаут',
    component: 'PageTitle',
    structure: [
      { name: 'title', kind: 'string', description: 'Заголовок H2' },
      {
        name: 'breadcrumbs',
        kind: 'string',
        description: 'Хлебные крошки через «/»',
      },
    ],
    defaults: { title: 'Заголовок страницы' },
  },
  Stack: {
    title: 'Ряд / колонка',
    category: 'Лэйаут',
    component: 'Box',
    preset: true,
    structure: [
      { name: 'direction', kind: 'enum', options: ['row', 'column'] },
      {
        name: 'gap',
        kind: 'enum',
        options: GAP,
        description: 'Отступ токеном',
      },
      {
        name: 'justify',
        kind: 'enum',
        options: ['start', 'end', 'space-between'],
      },
      { name: 'wrap', kind: 'boolean' },
    ],
    defaults: { direction: 'row', gap: 's' },
  },
  Grid: {
    title: 'Сетка',
    category: 'Лэйаут',
    component: 'Box',
    preset: true,
    structure: [
      { name: 'columns', kind: 'enum', options: ['1', '2', '3', '4'] },
      { name: 'gap', kind: 'enum', options: GAP },
    ],
    defaults: { columns: '2', gap: 'm' },
  },
  Widget: {
    title: 'Блок с заголовком',
    category: 'Лэйаут',
    component: 'Widget',
    structure: [{ name: 'title', kind: 'string' }],
    defaults: { title: 'Новый блок' },
  },
  ActionBar: {
    title: 'Нижняя панель действий',
    category: 'Действия',
    component: 'Box',
    preset: true,
    structure: [],
    defaults: {},
  },
  Typography: {
    title: 'Текст',
    category: 'Отображение',
    component: 'Typography',
    structure: [{ name: 'text', kind: 'string' }],
    defaults: { text: 'Текст', variant: 'BodyM' },
  },
  KeyValue: {
    title: 'Поле карточки',
    category: 'Отображение',
    component: 'Typography',
    preset: true,
    structure: [
      { name: 'label', kind: 'string' },
      { name: 'value', kind: 'string' },
    ],
    defaults: { label: 'Название', value: 'Значение' },
  },
  Metric: {
    title: 'Показатель',
    category: 'Данные',
    component: 'Typography',
    preset: true,
    structure: [
      { name: 'label', kind: 'string' },
      { name: 'value', kind: 'string' },
      {
        name: 'delta',
        kind: 'string',
        description: 'Изменение, например +12%',
      },
    ],
    defaults: { label: 'Показатель', value: '1 248', delta: '+12%' },
  },
  Button: {
    title: 'Кнопка',
    category: 'Действия',
    component: 'Button',
    structure: [],
    defaults: { text: 'Кнопка', view: 'secondary', size: 's' },
  },
  ActionsMenu: {
    title: 'Меню действий (кебаб)',
    category: 'Действия',
    component: 'IconButton',
    preset: true,
    structure: [
      { name: 'items', kind: 'string', description: 'Пункты меню через «;»' },
    ],
    defaults: { items: 'Действие' },
  },
  TextField: {
    title: 'Поле ввода',
    category: 'Ввод',
    component: 'TextField',
    structure: [],
    defaults: { label: 'Поле', placeholder: 'Введите значение', size: 's' },
  },
  TextArea: {
    title: 'Многострочное поле',
    category: 'Ввод',
    component: 'TextArea',
    structure: [
      { name: 'label', kind: 'string' },
      { name: 'placeholder', kind: 'string' },
    ],
    defaults: { label: 'Комментарий', placeholder: 'Текст', size: 's' },
  },
  Checkbox: {
    title: 'Чекбокс',
    category: 'Ввод',
    component: 'Checkbox',
    structure: [{ name: 'label', kind: 'string' }],
    defaults: { label: 'Чекбокс', size: 's' },
  },
  Switch: {
    title: 'Переключатель',
    category: 'Ввод',
    component: 'Switch',
    structure: [{ name: 'label', kind: 'string' }],
    defaults: { label: 'Переключатель', size: 's' },
  },
  Badge: {
    title: 'Бейдж',
    category: 'Отображение',
    component: 'Badge',
    structure: [],
    defaults: { text: 'Статус', view: 'default', size: 's', pilled: true },
  },
  Note: {
    title: 'Уведомление в блоке',
    category: 'Отображение',
    component: 'Note',
    structure: [
      { name: 'title', kind: 'string' },
      { name: 'text', kind: 'string' },
    ],
    defaults: {
      title: 'Заголовок',
      text: 'Текст уведомления',
      view: 'info',
      size: 's',
    },
  },
  EmptyState: {
    title: 'Пустое состояние',
    category: 'Отображение',
    component: 'EmptyState',
    structure: [
      { name: 'title', kind: 'string' },
      { name: 'subtitle', kind: 'string' },
    ],
    defaults: {
      title: 'Здесь пока пусто',
      subtitle: 'Создайте первую запись',
      size: 'm',
    },
  },
  TableCanvas: {
    title: 'Таблица',
    category: 'Данные',
    component: 'TableCanvas',
    structure: [
      { name: 'columns', kind: 'string', description: 'Колонки через «;»' },
      { name: 'rows', kind: 'number', description: 'Строк мок-данных' },
    ],
    defaults: { columns: 'Название; Дата; Статус', rows: 8 },
  },
  Divider: {
    title: 'Разделитель',
    category: 'Лэйаут',
    component: 'Divider',
    structure: [],
    defaults: {},
  },
};

/** Пресеты, которые принимают произвольный проп из MCP-каталога своего компонента, не получают их */
const presetUsesCatalog = (type: NodeType) => !REGISTRY[type].preset;

/** Полный список пропсов узла: структура демо + пропсы из MCP-индекса */
export function propSpecs(type: NodeType): PropSpec[] {
  const entry = REGISTRY[type];
  const structure: PropSpec[] = entry.structure.map((spec) => ({
    ...spec,
    source: 'structure',
  }));
  if (!presetUsesCatalog(type)) return structure;
  const known = new Set(structure.map((spec) => spec.name));
  const fromIndex: PropSpec[] = MCP_CATALOG[entry.component].props
    .filter((prop) => !known.has(prop.name))
    .map((prop) => ({
      name: prop.name,
      kind: prop.kind,
      options: 'options' in prop ? prop.options : undefined,
      description: prop.description,
      source: 'mcp',
    }));
  return [...structure, ...fromIndex];
}

export const libraryComponent = (type: NodeType) =>
  MCP_CATALOG[REGISTRY[type].component];

/** Категории палитры в фиксированном порядке */
export const CATEGORIES: Category[] = [
  'Лэйаут',
  'Действия',
  'Ввод',
  'Отображение',
  'Данные',
];

/** Токены отступов: в макете нельзя задать произвольные px */
export const GAP_PX: Record<string, number> = { s: 8, m: 16, l: 24 };
