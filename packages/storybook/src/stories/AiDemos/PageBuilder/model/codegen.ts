/**
 * Генерация TSX из дерева. Код опирается только на публичный API
 * @daisforge/ui; данные, обработчики и роутинг остаются TODO —
 * это каркас экрана, а не готовая фича.
 */
import { REGISTRY } from './registry';
import { PropValue, splitList, UINode } from './tree';

const GAP: Record<string, number> = { s: 8, m: 16, l: 24 };
const JUSTIFY: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
};

function attr(name: string, value: PropValue): string {
  if (value === true) return name;
  if (typeof value === 'boolean' || typeof value === 'number')
    return `${name}={${value}}`;
  return /["\n{}]/.test(value)
    ? `${name}={${JSON.stringify(value)}}`
    : `${name}="${value}"`;
}

/** Пропсы узла для JSX: структурные пропсы демо отбрасываются, если не оставлены явно */
function attrs(
  item: UINode,
  extra: Record<string, PropValue> = {},
  keepStructural: string[] = [],
) {
  const structural = REGISTRY[item.type].structure.map((spec) => spec.name);
  const props = Object.entries(item.props).filter(
    ([key]) => !structural.includes(key) || keepStructural.includes(key),
  );
  return [...props, ...Object.entries(extra)].map(([key, value]) =>
    attr(key, value),
  );
}

function tag(
  name: string,
  list: string[],
  children: string[] | null,
  pad: string,
): string {
  const open = list.length ? `${name} ${list.join(' ')}` : name;
  if (!children || children.length === 0) return `${pad}<${open} />`;
  return `${pad}<${open}>\n${children.join('\n')}\n${pad}</${name}>`;
}

const text = (value: PropValue | undefined) =>
  String(value ?? '').replace(/[{}<>]/g, '');

type Context = {
  tables: { name: string; columns: string[] }[];
  used: Set<string>;
};

function render(item: UINode, depth: number, ctx: Context): string {
  const pad = '  '.repeat(depth);
  const kids = (offset = 1) =>
    item.children.map((child) => render(child, depth + offset, ctx));
  const use = (...names: string[]) =>
    names.forEach((name) => ctx.used.add(name));

  switch (item.type) {
    case 'PageLayout':
      use('PageLayout');
      return tag('PageLayout', ['paddingTop={24}'], kids(), pad);
    case 'PageTitle': {
      use('PageTitle');
      const list = attrs(item, {}, ['title']);
      const crumbs = splitList(
        String(item.props.breadcrumbs ?? '').replace(/\//g, ';'),
      );
      if (crumbs.length) {
        const items = crumbs
          .map((title, i) =>
            i < crumbs.length - 1
              ? `{ title: '${title}', href: '#' }`
              : `{ title: '${title}' }`,
          )
          .join(', ');
        list.push(`breadcrumbs={{ items: [${items}] }}`);
      }
      if (item.props.showBackButton)
        list.push('onBackClick={() => history.back()}');
      if (item.children.length) {
        use('Box');
        const inner = item.children
          .map((child) =>
            render(child, depth + 3, ctx).replace(
              /size="(s|xs|xxs)"/,
              'size={buttonSize}',
            ),
          )
          .join('\n');
        list.push(
          `rightSlot={({ buttonSize }) => (\n${pad}    <Box display="flex" gap={8}>\n${inner}\n${pad}    </Box>\n${pad}  )}`,
        );
      }
      return tag('PageTitle', list, null, pad);
    }
    case 'Stack': {
      use('Box');
      const list = [
        'display="flex"',
        `flexDirection="${item.props.direction ?? 'row'}"`,
        `gap={${GAP[String(item.props.gap ?? 's')] ?? 8}}`,
      ];
      if (item.props.wrap) list.push('flexWrap="wrap"');
      if (item.props.justify)
        list.push(`justifyContent="${JUSTIFY[String(item.props.justify)]}"`);
      return tag('Box', list, kids(), pad);
    }
    case 'Grid': {
      use('Box');
      const columns = Number(item.props.columns ?? 2);
      const gap = GAP[String(item.props.gap ?? 'm')] ?? 16;
      return tag(
        'Box',
        [
          `$css={{ display: 'grid', gridTemplateColumns: 'repeat(${columns}, minmax(0, 1fr))', gap: ${gap} }}`,
        ],
        kids(),
        pad,
      );
    }
    case 'Widget': {
      use('Widget');
      return `${pad}<Widget>\n${pad}  <Widget.Header title="${text(
        item.props.title,
      )}" />\n${tag(
        'Widget.Content',
        [],
        kids(2),
        `${pad}  `,
      )}\n${pad}</Widget>`;
    }
    case 'ActionBar':
      use('Box');
      return `${pad}{/* Action Bot Panel: конечные действия внизу (гайд action-buttons-placement) */}\n${tag(
        'Box',
        [
          'display="flex"',
          'justifyContent="flex-end"',
          'gap={8}',
          'padding="16px 0"',
        ],
        kids(),
        pad,
      )}`;
    case 'Typography':
      use('Typography');
      return `${pad}<Typography ${attrs(item).join(' ')}>${text(
        item.props.text,
      )}</Typography>`;
    case 'KeyValue':
      use('Box', 'Typography');
      return `${pad}<Box display="flex" flexDirection="column" gap={2}>\n${pad}  <Typography variant="BodyXS">${text(
        item.props.label,
      )}</Typography>\n${pad}  <Typography variant="BodyM">${text(
        item.props.value,
      )}</Typography>\n${pad}</Box>`;
    case 'Metric':
      use('Widget', 'Typography', 'Badge');
      return `${pad}<Widget>\n${pad}  <Widget.Content>\n${pad}    <Typography variant="BodyS">${text(
        item.props.label,
      )}</Typography>\n${pad}    <Typography variant="H3">${text(
        item.props.value,
      )}</Typography>\n${pad}    <Badge text="${text(
        item.props.delta,
      )}" view="${
        String(item.props.delta).startsWith('+') ? 'positive' : 'negative'
      }" size="s" pilled />\n${pad}  </Widget.Content>\n${pad}</Widget>`;
    case 'Button':
      use('Button');
      return tag('Button', [...attrs(item), 'onClick={() => {}}'], null, pad);
    case 'ActionsMenu': {
      use('IconButtonDots');
      const items = splitList(item.props.items)
        .map((label, i) => `{ value: 'action-${i + 1}', label: '${label}' }`)
        .join(', ');
      return `${pad}<IconButtonDots dropdownProps={{ items: [${items}] }} />`;
    }
    case 'TableCanvas': {
      use('TableCanvas');
      const name = `columns${ctx.tables.length + 1}`;
      ctx.tables.push({ name, columns: splitList(item.props.columns) });
      return `${pad}<TableCanvas columnConfig={${name}} rows={rows /* TODO: данные с бэкенда */} />`;
    }
    default: {
      const { component } = REGISTRY[item.type];
      use(component);
      return tag(
        component,
        attrs(
          item,
          {},
          REGISTRY[item.type].structure.map((s) => s.name),
        ),
        kids(),
        pad,
      );
    }
  }
}

export function generateTsx(
  root: UINode,
  componentName = 'GeneratedPage',
): string {
  const ctx: Context = { tables: [], used: new Set() };
  const body = render(root, 2, ctx);
  const imports = Array.from(ctx.used).sort();
  const typeImport = ctx.tables.length
    ? "import type { ColumnConfig } from '@daisforge/ui';\n"
    : '';
  const tables = ctx.tables
    .map(
      (table) =>
        `const ${table.name}: ColumnConfig<Row>[] = [\n${table.columns
          .map((column, i) => `  { key: 'col${i + 1}', name: '${column}' },`)
          .join('\n')}\n];`,
    )
    .join('\n\n');
  const rows = ctx.tables.length
    ? '\n// TODO: строки из API; ключи — col1, col2, …\ntype Row = Record<string, string | number>;\nconst rows: Row[] = [];\n'
    : '';

  return `import { ${imports.join(', ')} } from '@daisforge/ui';
${typeImport}${rows}
${tables}${tables ? '\n\n' : ''}export function ${componentName}() {
  return (
${body}
  );
}
`;
}
