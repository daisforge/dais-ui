/**
 * Шаблоны экранов — слой «как компоновать» поверх каталога компонентов.
 *
 * Агент не расставляет каждый элемент сам: он выбирает шаблон и заполняет
 * слоты (сущность, колонки, фильтры, поля). Раскладка и зоны действий
 * зашиты в шаблон по гайдам: registry.design.mdx,
 * action-buttons-placement.design.mdx, creating-entities.design.mdx.
 * В продукте шаблоны — это TSX-stories, а MCP отдаёт их через get_template.
 */
import type { Entity } from './entities';
import { node, UINode } from './tree';

export type TemplateId = 'registry' | 'card' | 'form' | 'dashboard' | 'empty';

export type TemplateParams = {
  entity: Entity;
  columns?: string[];
  filters?: string[];
  title?: string;
};

export type Template = {
  id: TemplateId;
  title: string;
  /** Когда выбирать: это описание видит модель */
  when: string;
  slots: string[];
  guides: string[];
  build: (params: TemplateParams) => UINode;
};

/** Значение поля карточки без привязки к колонкам таблицы */
function mockPlaceholder(field: string, index: number): string {
  const name = field.toLowerCase();
  if (/сумма/.test(name)) return '1 250 000,00 ₽';
  if (/дата|срок/.test(name)) return `1${index}.11.2025`;
  if (/контрагент|покупатель|наименован/.test(name)) return 'ООО «Альфа-Трейд»';
  if (/инн/.test(name)) return '7701234567';
  if (/счёт|счет/.test(name)) return '40702810900000012345';
  if (/подразделен/.test(name)) return 'Казначейство';
  return '—';
}

const page = (children: UINode[]) => node('PageLayout', {}, children);

const filtersRow = (filters: string[]) =>
  node('Stack', { direction: 'row', gap: 's', wrap: true }, [
    node('TextField', { placeholder: 'Поиск в реестре', size: 's' }),
    ...filters.map((filter) =>
      node('TextField', { placeholder: filter, size: 's' }),
    ),
    node('Button', { text: 'Все фильтры', view: 'secondary', size: 's' }),
  ]);

export const TEMPLATES: Record<TemplateId, Template> = {
  registry: {
    id: 'registry',
    title: 'Реестр',
    when: 'список объектов одного типа: поиск, фильтры, таблица, создание',
    slots: ['title', 'pageActions', 'filters', 'columns'],
    guides: ['registry', 'action-buttons-placement'],
    build: ({ entity, columns, filters, title }) =>
      page([
        node(
          'PageTitle',
          {
            title: title ?? entity.many,
            subtitle: `Все ${entity.many.toLowerCase()} подразделения`,
            breadcrumbs: `Главная / ${entity.many}`,
          },
          [
            node('Button', { text: 'Экспорт', view: 'secondary', size: 's' }),
            node('Button', { text: entity.create, view: 'accent', size: 's' }),
          ],
        ),
        filtersRow(filters ?? ['Период', 'Статус']),
        node('TableCanvas', {
          columns: (columns ?? entity.columns).join('; '),
          rows: 12,
        }),
      ]),
  },
  card: {
    id: 'card',
    title: 'Карточка сущности',
    when: 'просмотр одного объекта: сведения, статус, история, действия над ним',
    slots: ['title', 'fields', 'status', 'finalActions'],
    guides: ['action-buttons-placement', 'status-model'],
    build: ({ entity, title }) =>
      page([
        node(
          'PageTitle',
          {
            title: title ?? `${entity.one} ${entity.number}`,
            breadcrumbs: `Главная / ${entity.many} / ${entity.one}`,
            showBackButton: true,
          },
          [
            node('Button', {
              text: 'Скачать PDF',
              view: 'secondary',
              size: 's',
            }),
            node('Button', {
              text: 'Редактировать',
              view: 'secondary',
              size: 's',
            }),
          ],
        ),
        node('Grid', { columns: '2', gap: 'm' }, [
          node(
            'Widget',
            { title: 'Основные сведения' },
            entity.fields.slice(0, 5).map((field, index) =>
              node('KeyValue', {
                label: field,
                value: String(mockPlaceholder(field, index)),
              }),
            ),
          ),
          node('Widget', { title: 'Статус и согласование' }, [
            node('Badge', {
              text: 'На согласовании',
              view: 'warning',
              size: 's',
              pilled: true,
            }),
            node('Note', {
              title: 'Ожидает решения',
              text: 'Согласующий: Петров С. А. Срок — до конца дня.',
              view: 'info',
              size: 's',
            }),
          ]),
        ]),
        node('ActionBar', {}, [
          node('Button', {
            text: 'Вернуть на доработку',
            view: 'secondary',
            size: 's',
          }),
          node('Button', { text: 'Согласовать', view: 'accent', size: 's' }),
        ]),
      ]),
  },
  form: {
    id: 'form',
    title: 'Форма создания',
    when: 'создание или редактирование объекта: поля, группы полей, сохранение',
    slots: ['title', 'fields', 'extra', 'submit'],
    guides: ['creating-entities', 'saving-data', 'action-buttons-placement'],
    build: ({ entity, columns, title }) =>
      page([
        node('PageTitle', {
          title: title ?? entity.newTitle,
          breadcrumbs: `Главная / ${entity.many} / Создание`,
          showBackButton: true,
        }),
        node('Widget', { title: 'Основные данные' }, [
          node(
            'Grid',
            { columns: '2', gap: 'm' },
            (columns ?? entity.fields).map((field) =>
              node('TextField', {
                label: field,
                placeholder: 'Введите значение',
                labelPlacement: 'outer',
                size: 's',
              }),
            ),
          ),
        ]),
        node('Widget', { title: 'Дополнительно' }, [
          node('TextArea', {
            label: 'Комментарий',
            placeholder: 'Необязательно',
            size: 's',
          }),
          node('Checkbox', { label: 'Уведомить ответственного', size: 's' }),
        ]),
        node('ActionBar', {}, [
          node('Button', { text: 'Отмена', view: 'secondary', size: 's' }),
          node('Button', { text: 'Создать', view: 'accent', size: 's' }),
        ]),
      ]),
  },
  dashboard: {
    id: 'dashboard',
    title: 'Дашборд',
    when: 'сводка и показатели: KPI, последние объекты, что требует внимания',
    slots: ['title', 'metrics', 'lists'],
    guides: ['action-buttons-placement'],
    build: ({ entity, title }) =>
      page([
        node(
          'PageTitle',
          {
            title: title ?? `Аналитика: ${entity.many.toLowerCase()}`,
            subtitle: 'Данные за текущий месяц',
          },
          [
            node('Button', {
              text: 'Выгрузить отчёт',
              view: 'secondary',
              size: 's',
            }),
          ],
        ),
        node('Grid', { columns: '3', gap: 'm' }, [
          node('Metric', {
            label: `Всего ${entity.genitivePlural}`,
            value: '1 248',
            delta: '+12%',
          }),
          node('Metric', { label: 'В работе', value: '86', delta: '−4%' }),
          node('Metric', {
            label: 'Сумма за месяц, ₽',
            value: '48,2 млн',
            delta: '+8%',
          }),
        ]),
        node('Grid', { columns: '2', gap: 'm' }, [
          node('Widget', { title: `Последние ${entity.many.toLowerCase()}` }, [
            node('TableCanvas', {
              columns: entity.columns.slice(0, 4).join('; '),
              rows: 6,
            }),
          ]),
          node('Widget', { title: 'Требуют внимания' }, [
            node('Note', {
              title: '3 просрочены',
              text: 'Срок истёк вчера, нужен ответ ответственного.',
              view: 'warning',
              size: 's',
            }),
            node('Note', {
              title: '12 ждут согласования',
              text: 'Средний срок согласования — 1,5 дня.',
              view: 'info',
              size: 's',
            }),
          ]),
        ]),
      ]),
  },
  empty: {
    id: 'empty',
    title: 'Пустой реестр',
    when: 'первый вход, нет данных или ничего не найдено',
    slots: ['title', 'createAction'],
    guides: ['empty-state-templates'],
    build: ({ entity, title }) =>
      page([
        node('PageTitle', { title: title ?? entity.many }, [
          node('Button', { text: entity.create, view: 'accent', size: 's' }),
        ]),
        node('EmptyState', {
          title: `${entity.many} пока нет`,
          subtitle: `Создайте первую запись — она появится в списке ${entity.genitivePlural}`,
          size: 'm',
        }),
      ]),
  },
};

/** Ключевые слова выбора шаблона — то же, что модель делает по описанию when */
export const TEMPLATE_WORDS: [RegExp, TemplateId][] = [
  [/дашборд|аналитик|сводк|показател|kpi/, 'dashboard'],
  [/пуст|заглушк|нет данных/, 'empty'],
  [/форм|создани|добавлени|редактирован|новый|новая|новое/, 'form'],
  [/карточк|детал|просмотр|страниц[аеу] (одного|платеж|заявк|договор)/, 'card'],
  [/реестр|список|таблиц|перечень/, 'registry'],
];
