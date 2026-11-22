type Span = readonly [number, number];

const overlaps = (a: Span, b: Span) => a[0] <= b[1] && b[0] <= a[1];

/**
 * Canvas-части заголовков групп по ключу группы: закреплённые колонки рисуют группу
 * двумя частями с одним ключом, клик ищет свою часть по колонке.
 */
export class GroupHeaderParts<Root> {
  private readonly parts = new Map<string, { span: Span; root: Root }[]>();

  /** Часть группы нарисована canvas-деревом; перекрытые ею прежние части устарели */
  set(group: string, span: Span, root: Root): void {
    this.drop(group, span);
    this.parts.set(group, [...(this.parts.get(group) ?? []), { span, root }]);
  }

  /** Часть группы нарисована без canvas-дерева: её прежняя цель клика устарела */
  drop(group: string, span: Span): void {
    const rest = (this.parts.get(group) ?? []).filter(
      (part) => !overlaps(part.span, span),
    );
    if (rest.length > 0) this.parts.set(group, rest);
    else this.parts.delete(group);
  }

  /** Canvas-дерево части группы, в которую попадает колонка */
  rootAt(group: string, col: number): Root | undefined {
    return this.parts
      .get(group)
      ?.find(({ span: [start, end] }) => col >= start && col <= end)?.root;
  }

  /** Отбрасывает части групп, которых больше нет в колонках */
  retain(groups: ReadonlySet<string>): void {
    [...this.parts.keys()]
      .filter((group) => !groups.has(group))
      .forEach((group) => this.parts.delete(group));
  }
}
