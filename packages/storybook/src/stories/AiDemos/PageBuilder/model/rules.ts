/**
 * Правила компоновки из дизайн-гайдов, переведённые в проверки дерева.
 *
 * Источники (packages/docs/design/guides и editorial-policy):
 * - action-buttons-placement: одна акцентная кнопка на экран, не больше трёх
 *   видимых действий в зоне, деструктив отдельно, submit формы — внизу;
 * - editorial-policy-buttons: не пишем «Да», «Нет», «Ок»;
 * - registry: избегаем горизонтального скролла таблицы.
 *
 * Плюс проверка пропсов по MCP-индексу: значение enum должно существовать.
 * Правила с fix агент исправляет сам после генерации.
 */
import { propSpecs } from './registry';
import {
  findAll,
  findParent,
  insertChild,
  node,
  removeNode,
  setProps,
  splitList,
  UINode,
} from './tree';

export type Severity = 'error' | 'warning';

export type RuleIssue = {
  rule: string;
  severity: Severity;
  message: string;
  guide: string;
  nodeId?: string;
  fix?: (root: UINode) => UINode;
};

const GROUPS = ['PageTitle', 'ActionBar', 'Stack'];
const isButton = (item: UINode) => item.type === 'Button';
const isAccent = (item: UINode) =>
  isButton(item) && item.props.view === 'accent';
const isDestructive = (item: UINode) =>
  isButton(item) &&
  (item.props.view === 'negative' ||
    /удал|отклон|аннулир/i.test(String(item.props.text)));

/** Переносит кнопки группы в кебаб (крайний слева, по гайду) */
function moveToMenu(root: UINode, groupId: string, buttons: UINode[]): UINode {
  const group = findAll(root, (item) => item.id === groupId)[0];
  if (!group) return root;
  const labels = buttons.map((button) =>
    String(button.props.text ?? 'Действие'),
  );
  let next = buttons.reduce((acc, button) => removeNode(acc, button.id), root);
  const menu = group.children.find((child) => child.type === 'ActionsMenu');
  if (menu) {
    next = setProps(next, menu.id, {
      items: [...splitList(menu.props.items), ...labels].join('; '),
    });
  } else {
    next = insertChild(
      next,
      groupId,
      node('ActionsMenu', { items: labels.join('; ') }),
      0,
    );
  }
  return next;
}

export function checkRules(root: UINode): RuleIssue[] {
  const issues: RuleIssue[] = [];

  // Одна акцентная кнопка на экран
  const accents = findAll(root, isAccent);
  if (accents.length > 1) {
    const inBar = accents.filter(
      (button) => findParent(root, button.id)?.type === 'ActionBar',
    );
    const keep = inBar[inBar.length - 1] ?? accents[accents.length - 1];
    issues.push({
      rule: 'one-accent',
      severity: 'error',
      guide: 'action-buttons-placement',
      message: `Акцентных кнопок ${
        accents.length
      }, на экране должна быть одна. Остаётся «${String(keep?.props.text)}».`,
      nodeId: accents.find((button) => button !== keep)?.id,
      fix: (current) =>
        accents
          .filter((button) => button !== keep)
          .reduce(
            (acc, button) => setProps(acc, button.id, { view: 'secondary' }),
            current,
          ),
    });
  }

  findAll(root, (item) => GROUPS.includes(item.type)).forEach((group) => {
    const buttons = group.children.filter(isButton);

    // Деструктив не рядом с primary
    const destructive = buttons.filter(isDestructive);
    if (destructive.length && buttons.some(isAccent)) {
      issues.push({
        rule: 'destructive-apart',
        severity: 'warning',
        guide: 'action-buttons-placement',
        message: `«${destructive
          .map((b) => String(b.props.text))
          .join(
            '», «',
          )}» стоит рядом с основным действием. Деструктив — в меню, с подтверждением.`,
        nodeId: destructive[0]?.id,
        fix: (current) => moveToMenu(current, group.id, destructive),
      });
    }

    // Не больше трёх видимых действий
    const visible = buttons.filter(
      (button) => !isDestructive(button) || !buttons.some(isAccent),
    );
    if (visible.length > 3) {
      // Оставляем самые правые: по гайду важные действия у края
      const overflow = visible
        .slice(0, visible.length - 3)
        .filter((b) => !isAccent(b));
      issues.push({
        rule: 'max-actions',
        severity: 'warning',
        guide: 'action-buttons-placement',
        message: `В группе ${visible.length} кнопок, видимых должно быть не больше трёх. Лишние — в меню «⋯».`,
        nodeId: overflow[0]?.id,
        fix: (current) => moveToMenu(current, group.id, overflow),
      });
    }

    // Тексты кнопок
    buttons
      .filter((button) =>
        /^(да|нет|ок|ok)$/i.test(String(button.props.text).trim()),
      )
      .forEach((button) =>
        issues.push({
          rule: 'button-text',
          severity: 'warning',
          guide: 'editorial-policy-buttons',
          message: `Кнопка «${String(
            button.props.text,
          )}»: не пишем «Да», «Нет», «Ок» — называем действие.`,
          nodeId: button.id,
        }),
      );
  });

  // Submit формы — в нижней панели, не в шапке
  const hasForm = findAll(
    root,
    (item) => item.type === 'TextField' || item.type === 'TextArea',
  ).some((field) => findParent(root, field.id)?.type !== 'Stack');
  const title = root.children.find((child) => child.type === 'PageTitle');
  const topSubmit = title?.children.find(
    (child) =>
      isAccent(child) &&
      /созда|сохран|отправ|согласов|добав/i.test(String(child.props.text)),
  );
  if (hasForm && title && topSubmit) {
    issues.push({
      rule: 'submit-bottom',
      severity: 'warning',
      guide: 'action-buttons-placement',
      message: `«${String(
        topSubmit.props.text,
      )}» уводит со страницы: в формах submit — в нижней панели действий.`,
      nodeId: topSubmit.id,
      fix: (current) => {
        const without = removeNode(current, topSubmit.id);
        const bar = without.children.find(
          (child) => child.type === 'ActionBar',
        );
        if (bar) return insertChild(without, bar.id, topSubmit);
        return insertChild(
          without,
          without.id,
          node('ActionBar', {}, [topSubmit]),
        );
      },
    });
  }

  // Ширина таблицы
  findAll(root, (item) => item.type === 'TableCanvas').forEach((table) => {
    const count = splitList(table.props.columns).length;
    if (count > 8) {
      issues.push({
        rule: 'table-width',
        severity: 'warning',
        guide: 'registry',
        message: `В таблице ${count} колонок — появится горизонтальный скролл. Оставьте до 8, остальные — в настройках колонок.`,
        nodeId: table.id,
      });
    }
  });

  // Заголовок страницы первым
  if (root.type === 'PageLayout' && root.children[0]?.type !== 'PageTitle') {
    const pageTitle = root.children.find((child) => child.type === 'PageTitle');
    issues.push({
      rule: 'title-first',
      severity: 'warning',
      guide: 'action-buttons-placement',
      message:
        'Страница начинается с заголовка (PageTitle): в нём действия уровня страницы.',
      nodeId: root.children[0]?.id,
      fix: pageTitle
        ? (current) =>
            insertChild(
              removeNode(current, pageTitle.id),
              current.id,
              pageTitle,
              0,
            )
        : undefined,
    });
  }

  // Пропсы по MCP-индексу
  findAll(root, () => true).forEach((item) => {
    propSpecs(item.type)
      .filter((spec) => spec.kind === 'enum' && spec.options)
      .forEach((spec) => {
        const value = item.props[spec.name];
        if (value !== undefined && !spec.options?.includes(String(value))) {
          issues.push({
            rule: 'props-index',
            severity: 'error',
            guide: 'MCP-индекс',
            message: `${item.type}.${spec.name}="${String(
              value,
            )}" — нет в индексе. Допустимо: ${spec.options?.join(', ')}.`,
            nodeId: item.id,
          });
        }
      });
  });

  return issues;
}

/** Применяет автоисправления по одному, пока они есть (не больше шести кругов) */
export function autoFix(root: UINode): { root: UINode; fixed: RuleIssue[] } {
  let current = root;
  const fixed: RuleIssue[] = [];
  for (let round = 0; round < 6; round += 1) {
    const fixable = checkRules(current).filter((issue) => issue.fix);
    const first = fixable[0];
    if (!first?.fix) break;
    current = first.fix(current);
    fixed.push(first);
  }
  return { root: current, fixed };
}

/** Сколько пропсов сверено с индексом — для шага «проверка» */
export function countCheckedProps(root: UINode): number {
  return findAll(root, () => true).reduce(
    (sum, item) =>
      sum +
      Object.keys(item.props).filter((key) =>
        propSpecs(item.type).some((s) => s.name === key),
      ).length,
    0,
  );
}
