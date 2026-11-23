/**
 * Имитация LLM-агента конструктора: правила по ключевым словам.
 *
 * В продукте на этом месте модель с инструментами MCP: search_templates,
 * get_template, get_guide, get_component_props. Контракт тот же: на входе
 * запрос, текущее дерево и выбранный на холсте узел, на выходе новое дерево.
 */
import type { StepPlan } from '../../shared/runSteps';
import { DEFAULT_ENTITY, findEntity } from './entities';
import { REGISTRY } from './registry';
import { autoFix, checkRules, countCheckedProps } from './rules';
import { TEMPLATE_WORDS, TemplateId, TEMPLATES } from './templates';
import {
  findAll,
  findNode,
  findParent,
  insertChild,
  node,
  nodeLabel,
  removeNode,
  setProps,
  splitList,
  UINode,
  updateNode,
} from './tree';

export type BuilderResult = {
  tree: UINode;
  reply: string;
  steps: StepPlan[];
  /** Узел, который стоит выделить после ответа */
  focusId?: string;
};

const lower = (text: string) => text.toLowerCase().replace(/ё/g, 'е');
const quoted = (text: string) =>
  Array.from(text.matchAll(/[«"]([^»"]+)[»"]/g)).map((m) => m[1] ?? '');
const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

/** «по дате, сумме и статусу» → ['Дата', 'Сумма', 'Статус'] (упрощённо) */
function parseList(raw: string): string[] {
  return raw
    .split(/,|\sи\s/)
    .map((part) => part.replace(/[«»".]/g, '').trim())
    .filter(Boolean)
    .map((part) => {
      // «по дате, статусу, подразделению» → именительный падеж (упрощённо)
      const word = part
        .replace(/ию$/, 'ие')
        .replace(/е$/, 'а')
        .replace(/[ую]$/, '');
      return capitalize(word);
    });
}

function parseColumns(text: string): string[] | undefined {
  const match = text.match(
    /колонк[а-яa-z]*\s*:?\s*([^.;]+?)(?=(?:,?\s*(?:и\s+)?фильтр)|[.;]|$)/i,
  );
  if (!match?.[1]) return undefined;
  const list = match[1]
    .split(/,|\sи\s/)
    .map((part) => capitalize(part.replace(/[«»"]/g, '').trim()))
    .filter(Boolean);
  return list.length >= 2 ? list : undefined;
}

function parseFilters(text: string): string[] | undefined {
  const match = text.match(
    /фильтр[а-яa-z]*\s+по\s+([^.;]+?)(?=(?:,?\s*(?:и\s+)?колонк)|[.;]|$)/i,
  );
  return match?.[1] ? parseList(match[1]) : undefined;
}

const libraryComponents = (tree: UINode) =>
  Array.from(
    new Set(
      findAll(tree, () => true).map((item) => REGISTRY[item.type].component),
    ),
  );

function checkSteps(tree: UINode, fixedMessages: string[]): StepPlan[] {
  const issues = checkRules(tree);
  const steps: StepPlan[] = [
    {
      title: 'Проверка: пропсы по MCP-индексу и правила гайдов',
      detail: `сверено пропсов: ${countCheckedProps(tree)} · замечаний: ${
        fixedMessages.length + issues.length
      }`,
      duration: 500,
    },
  ];
  if (fixedMessages.length) {
    steps.push({
      title: 'LLM: исправление по правилам',
      detail: fixedMessages.join(' · '),
      duration: 700,
    });
  }
  return steps;
}

function newPage(text: string): BuilderResult {
  const source = lower(text);
  const templateId: TemplateId =
    TEMPLATE_WORDS.find(([re]) => re.test(source))?.[1] ?? 'registry';
  const template = TEMPLATES[templateId];
  const entity = findEntity(source) ?? DEFAULT_ENTITY;
  const columns = parseColumns(text);
  const filters = parseFilters(text);
  const title = quoted(text)[0];

  const draft = template.build({ entity, columns, filters, title });
  const { root, fixed } = autoFix(draft);
  const fixedMessages = fixed.map((issue) => issue.message);

  const filled = [
    `сущность: ${entity.many.toLowerCase()}`,
    columns ? `колонки: ${columns.length}` : null,
    filters ? `фильтры: ${filters.join(', ')}` : null,
    title ? `заголовок: «${title}»` : null,
  ].filter(Boolean);

  const steps: StepPlan[] = [
    {
      title: 'MCP: search_templates',
      detail: `запрос → шаблон «${template.title}» (${template.when})`,
      duration: 600,
    },
    {
      title: `MCP: get_template('${template.id}')`,
      detail: `слоты: ${template.slots.join(', ')}`,
      duration: 500,
    },
    {
      title: `MCP: get_guide(${template.guides
        .map((g) => `'${g}'`)
        .join(', ')})`,
      detail: 'зоны действий, одна акцентная кнопка, лимит видимых действий',
      duration: 600,
    },
    {
      title: 'MCP: get_component_props',
      detail: libraryComponents(root).join(', '),
      duration: 500,
    },
    {
      title: 'LLM: заполнение слотов шаблона',
      detail: filled.join(' · '),
      duration: 1000,
    },
    ...checkSteps(root, fixedMessages),
    {
      title: 'Рендер на холсте',
      detail: 'настоящие компоненты @daisforge/ui',
      duration: 400,
    },
  ];

  return {
    tree: root,
    steps,
    reply: `Собрал экран по шаблону «${
      template.title
    }»: ${entity.many.toLowerCase()}${
      columns ? `, колонки — ${columns.join(', ')}` : ''
    }${
      filters ? `, фильтры — ${filters.join(', ')}` : ''
    }.\nКликните элемент на холсте, чтобы поправить его в панели справа или сказать «сделай эту кнопку акцентной», «удали это».`,
  };
}

/** Куда добавлять кнопку: выбранная группа, группа выбранной кнопки или шапка */
function buttonGroup(tree: UINode, selected: UINode | null): UINode | null {
  const groups = ['PageTitle', 'ActionBar', 'Stack'];
  if (selected && groups.includes(selected.type)) return selected;
  if (selected) {
    const parent = findParent(tree, selected.id);
    if (parent && groups.includes(parent.type)) return parent;
  }
  return tree.children.find((child) => child.type === 'PageTitle') ?? null;
}

function modify(
  text: string,
  current: UINode,
  selectedId: string | null,
): BuilderResult | null {
  const source = lower(text);
  const names = quoted(text);
  const selected = selectedId ? findNode(current, selectedId) : null;
  const refersSelected = /эт(у|от|о|а|и)(?![а-яa-z])|выбранн|выделенн/.test(
    source,
  );
  let tree = current;
  const changes: string[] = [];
  let focusId: string | undefined;
  const firstTable = () =>
    findAll(tree, (item) => item.type === 'TableCanvas')[0];

  // Добавить кнопку
  if (/добав[а-яa-z]*\s+(\S+\s+)?кнопк/.test(source)) {
    const label = names[0] ?? (/удал/.test(source) ? 'Удалить' : 'Действие');
    const group = buttonGroup(tree, selected);
    if (group) {
      const button = node('Button', {
        text: label,
        view: /удал|отклон|аннулир/i.test(label) ? 'negative' : 'secondary',
        size: 's',
      });
      // Второстепенные — левее основного действия (гайд: важное у правого края)
      const accentIndex = group.children.findIndex(
        (child) => child.props.view === 'accent',
      );
      tree = insertChild(
        tree,
        group.id,
        button,
        accentIndex >= 0 ? accentIndex : undefined,
      );
      focusId = button.id;
      changes.push(
        `кнопка «${label}» в ${REGISTRY[group.type].title.toLowerCase()}`,
      );
    }
  }

  // Сделать акцентной
  if (
    /акцентн|главн[а-яa-z]* (кнопк|действ)|основн[а-яa-z]* (кнопк|действ)/.test(
      source,
    ) &&
    /сдела|пусть|назнач/.test(source)
  ) {
    const target =
      (selected?.type === 'Button' ? selected : null) ??
      findAll(
        tree,
        (item) =>
          item.type === 'Button' && names.includes(String(item.props.text)),
      )[0];
    if (target) {
      const others = findAll(
        tree,
        (item) =>
          item.type === 'Button' &&
          item.props.view === 'accent' &&
          item.id !== target.id,
      );
      tree = setProps(tree, target.id, { view: 'accent' });
      others.forEach((other) => {
        tree = setProps(tree, other.id, { view: 'secondary' });
      });
      focusId = target.id;
      changes.push(`«${String(target.props.text)}» — акцентная`);
      if (others.length) {
        changes.push(
          `по гайду акцентная одна на экран, поэтому ${others
            .map((o) => `«${String(o.props.text)}»`)
            .join(', ')} — второстепенная`,
        );
      }
    }
  }

  // Колонки таблицы
  const table = firstTable();
  if (table && /добав[а-яa-z]*\s+колонк/.test(source)) {
    const added = names.length
      ? names
      : parseList(source.replace(/.*колонк[а-яa-z]*\s*/, ''));
    tree = setProps(tree, table.id, {
      columns: [...splitList(table.props.columns), ...added].join('; '),
    });
    focusId = table.id;
    changes.push(`колонки: + ${added.join(', ')}`);
  }
  if (table && /(убер|удал)[а-яa-z]*\s+колонк/.test(source) && names.length) {
    tree = setProps(tree, table.id, {
      columns: splitList(table.props.columns)
        .filter(
          (column) => !names.some((name) => lower(name) === lower(column)),
        )
        .join('; '),
    });
    changes.push(`колонки: − ${names.join(', ')}`);
  }

  // Фильтры
  if (/добав[а-яa-z]*\s+фильтр/.test(source)) {
    const filters = names.length
      ? names
      : parseList(source.replace(/.*фильтр[а-яa-z]*\s+(по\s+)?/, ''));
    const row = findAll(
      tree,
      (item) =>
        item.type === 'Stack' &&
        item.children.some((c) => c.type === 'TextField'),
    )[0];
    if (row && filters.length) {
      const before = row.children.findIndex((child) => child.type === 'Button');
      filters.forEach((filter) => {
        tree = insertChild(
          tree,
          row.id,
          node('TextField', { placeholder: filter, size: 's' }),
          before >= 0 ? before : undefined,
        );
      });
      changes.push(`фильтры: + ${filters.join(', ')}`);
    }
  }

  // Поле формы
  if (/добав[а-яa-z]*\s+пол[еяю]/.test(source)) {
    const label = names[0] ?? 'Новое поле';
    const grid =
      (selected && ['Grid', 'Widget', 'Stack'].includes(selected.type)
        ? selected
        : null) ??
      findAll(
        tree,
        (item) =>
          item.type === 'Grid' &&
          item.children.some((c) => c.type === 'TextField'),
      )[0];
    if (grid) {
      const field = node('TextField', {
        label,
        placeholder: 'Введите значение',
        labelPlacement: 'outer',
        size: 's',
      });
      tree = insertChild(tree, grid.id, field);
      focusId = field.id;
      changes.push(`поле «${label}»`);
    }
  }

  // Блок
  if (/добав[а-яa-z]*\s+блок/.test(source)) {
    const title = names[0] ?? 'Новый блок';
    const widget = node('Widget', { title }, [
      node('Note', {
        title: 'Содержимое блока',
        text: 'Опишите, что здесь должно быть',
        view: 'default',
        size: 's',
      }),
    ]);
    const barIndex = tree.children.findIndex(
      (child) => child.type === 'ActionBar',
    );
    tree = insertChild(
      tree,
      tree.id,
      widget,
      barIndex >= 0 ? barIndex : undefined,
    );
    focusId = widget.id;
    changes.push(`блок «${title}»`);
  }

  // Пустое состояние вместо таблицы
  if (/пуст[а-яa-z]* состоян|покажи пуст|когда нет данных/.test(source)) {
    const target = firstTable();
    if (target) {
      const empty = node('EmptyState', {
        title: 'Ничего не найдено',
        subtitle: 'Измените фильтры или создайте новую запись',
        size: 'm',
      });
      tree = updateNode(tree, target.id, () => empty);
      focusId = empty.id;
      changes.push('таблица заменена пустым состоянием');
    }
  }

  // Колонки сетки
  const gridCount = source.match(
    /(?:^|[^а-яa-z])(одн|дв|тр|четыр)[а-яa-z]*\s+колон(ки|ку|ок|ками)(?![а-яa-z])/,
  );
  if (gridCount && !/таблиц/.test(source)) {
    const count = { одн: '1', дв: '2', тр: '3', четыр: '4' }[
      gridCount[1] as 'одн' | 'дв' | 'тр' | 'четыр'
    ];
    const grid =
      (selected?.type === 'Grid' ? selected : null) ??
      findAll(tree, (item) => item.type === 'Grid')[0];
    if (grid && count) {
      tree = setProps(tree, grid.id, { columns: count });
      focusId = grid.id;
      changes.push(`сетка: ${count} колонки`);
    }
  }

  // Переименовать
  if (
    /переимен|назови|заголов|текст/.test(source) &&
    names.length &&
    !changes.length
  ) {
    const target =
      selected && refersSelected
        ? selected
        : selected ?? tree.children.find((c) => c.type === 'PageTitle');
    if (target) {
      const key =
        ['text', 'title', 'label', 'placeholder'].find(
          (k) => k in target.props,
        ) ?? 'title';
      tree = setProps(tree, target.id, { [key]: names[names.length - 1] });
      focusId = target.id;
      changes.push(`${nodeLabel(target)} → «${names[names.length - 1]}»`);
    }
  }

  // Удалить выбранное
  if (
    /удали|убери/.test(source) &&
    !changes.length &&
    selected &&
    selected.id !== tree.id
  ) {
    tree = removeNode(tree, selected.id);
    changes.push(`удалён ${nodeLabel(selected)}`);
  }

  if (!changes.length) return null;

  const { root, fixed } = autoFix(tree);
  const fixedMessages = fixed.map((issue) => issue.message);
  const steps: StepPlan[] = [
    {
      title: 'LLM: разбор правки',
      detail: [
        selected ? `контекст: выбран ${nodeLabel(selected)}` : null,
        ...changes,
      ]
        .filter(Boolean)
        .join(' · '),
      duration: 800,
    },
    ...checkSteps(root, fixedMessages),
    { title: 'Обновление холста', duration: 300 },
  ];
  return {
    tree: root,
    steps,
    focusId: focusId && findNode(root, focusId) ? focusId : undefined,
    reply: `Готово: ${changes.join('; ')}.${
      fixedMessages.length
        ? `\nПо гайдам поправил: ${fixedMessages.join(' ')}`
        : ''
    }`,
  };
}

export function runBuilderAgent(
  text: string,
  current: UINode | null,
  selectedId: string | null,
): BuilderResult | null {
  const source = lower(text);
  const wantsNew =
    !current ||
    /нов[а-яa-z]+ (страниц|экран|макет)|с нуля|заново|другой экран|другую страниц/.test(
      source,
    ) ||
    (/(собери|сделай|создай|нарисуй|покажи)\s+(мне\s+)?(страниц|экран|макет|реестр|дашборд|карточк|форм)/.test(
      source,
    ) &&
      !/добав|убер|удал/.test(source));
  return wantsNew ? newPage(text) : modify(text, current, selectedId);
}
