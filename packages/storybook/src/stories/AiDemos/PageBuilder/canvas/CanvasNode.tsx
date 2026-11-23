/**
 * Рендер дерева настоящими компонентами @daisforge/ui.
 * Каждый узел обёрнут в выделяемый контейнер: клик выбирает узел для
 * панели свойств и для правок словами («сделай эту кнопку акцентной»).
 */
import { Badge } from '@ui-kit/components/Badge';
import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Divider } from '@ui-kit/components/Divider';
import { EmptyState } from '@ui-kit/components/EmptyState';
import { IconButtonDots } from '@ui-kit/components/IconButton';
import { Note } from '@ui-kit/components/Note';
import { PageTitle } from '@ui-kit/components/PageTitle';
import { Switch } from '@ui-kit/components/Switch';
import { TableCanvas } from '@ui-kit/components/TableCanvas';
import { TextArea } from '@ui-kit/components/TextArea';
import { TextField } from '@ui-kit/components/TextField';
import { Typography } from '@ui-kit/components/Typography';
import { Widget } from '@ui-kit/components/Widget';
import { PageLayout } from '@ui-kit/layouts/PageLayout';
import {
  outlineSolidSecondary,
  textAccent,
  textSecondary,
} from '@ui-kit/tokens';
import React, { ReactNode, useMemo } from 'react';

import { mockValue } from '../model/entities';
import { GAP_PX, propSpecs } from '../model/registry';
import { PropValue, splitList, UINode } from '../model/tree';

/* eslint-disable @typescript-eslint/no-explicit-any -- пропсы из MCP-каталога
   прокидываются в компоненты как есть, их типы сверяет проверка правил */
type AnyProps = Record<string, any>;

const JUSTIFY: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
};

/** Пропсы узла, пришедшие из MCP-каталога: их отдаём компоненту напрямую */
function libraryProps(item: UINode): AnyProps {
  const names = new Set(
    propSpecs(item.type)
      .filter((spec) => spec.source === 'mcp')
      .map((spec) => spec.name),
  );
  return Object.fromEntries(
    Object.entries(item.props).filter(([key]) => names.has(key)),
  );
}

const str = (value: PropValue | undefined) =>
  value === undefined ? undefined : String(value);

function MockTable({ item }: { item: UINode }) {
  const columns = splitList(item.props.columns);
  const count = Number(item.props.rows ?? 8);
  const columnConfig = useMemo(
    () =>
      columns.map((name, index) => ({
        key: `col${index}`,
        name,
        width: Math.max(120, name.length * 9 + 40),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item.props.columns],
  );
  const rows = useMemo(
    () =>
      Array.from({ length: count }, (_, rowIndex) => {
        const row: AnyProps = { id: rowIndex };
        columns.forEach((name, index) => {
          row[`col${index}`] = mockValue(name, rowIndex + index);
        });
        return row;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item.props.columns, count],
  );
  return (
    <div style={{ height: Math.min(44 + count * 40, 480), minWidth: 0 }}>
      <TableCanvas columnConfig={columnConfig} rows={rows} />
    </div>
  );
}

export type CanvasNodeProps = {
  item: UINode;
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function CanvasNode({ item, selectedId, onSelect }: CanvasNodeProps) {
  const renderChildren = (list = item.children) =>
    list.map((child) => (
      <CanvasNode
        key={child.id}
        item={child}
        selectedId={selectedId}
        onSelect={onSelect}
      />
    ));

  let content: ReactNode;
  const lib = libraryProps(item);
  const { props } = item;

  switch (item.type) {
    case 'PageLayout':
      content = (
        <PageLayout paddingTop={24} paddingBottom={24} minHeight="auto">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {renderChildren()}
          </div>
        </PageLayout>
      );
      break;
    case 'PageTitle': {
      const crumbs = splitList(
        String(props.breadcrumbs ?? '').replace(/\//g, ';'),
      );
      content = (
        <PageTitle
          {...lib}
          title={str(props.title)}
          breadcrumbs={
            crumbs.length
              ? {
                  items: crumbs.map((title, index) =>
                    index < crumbs.length - 1
                      ? { title, href: '#' }
                      : { title },
                  ),
                }
              : undefined
          }
          onBackClick={() => {}}
          rightSlot={
            item.children.length ? (
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                {renderChildren()}
              </div>
            ) : undefined
          }
        />
      );
      break;
    }
    case 'Stack':
      content = (
        <Box
          display="flex"
          flexDirection={props.direction === 'column' ? 'column' : 'row'}
          gap={GAP_PX[String(props.gap ?? 's')]}
          flexWrap={props.wrap ? 'wrap' : 'nowrap'}
          justifyContent={JUSTIFY[String(props.justify ?? 'start')]}
          $css={{
            alignItems: props.direction === 'column' ? 'stretch' : 'center',
          }}
        >
          {renderChildren()}
        </Box>
      );
      break;
    case 'Grid':
      content = (
        <Box
          $css={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Number(
              props.columns ?? 2,
            )}, minmax(0, 1fr))`,
            gap: GAP_PX[String(props.gap ?? 'm')],
          }}
        >
          {renderChildren()}
        </Box>
      );
      break;
    case 'Widget':
      content = (
        <Widget>
          <Widget.Header title={str(props.title)} />
          <Widget.Content>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {renderChildren()}
            </div>
          </Widget.Content>
        </Widget>
      );
      break;
    case 'ActionBar':
      content = (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 8,
            paddingTop: 16,
            borderTop: `1px solid ${outlineSolidSecondary}`,
          }}
        >
          {renderChildren()}
        </div>
      );
      break;
    case 'Typography':
      content = (
        <Typography variant="BodyM" {...lib}>
          {str(props.text)}
        </Typography>
      );
      break;
    case 'KeyValue':
      content = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="BodyXS" style={{ color: textSecondary }}>
            {str(props.label)}
          </Typography>
          <Typography variant="BodyM">{str(props.value)}</Typography>
        </div>
      );
      break;
    case 'Metric': {
      const delta = String(props.delta ?? '');
      content = (
        <Widget>
          <Widget.Content>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Typography variant="BodyS" style={{ color: textSecondary }}>
                {str(props.label)}
              </Typography>
              <Typography variant="H3">{str(props.value)}</Typography>
              {delta && (
                <div>
                  <Badge
                    text={delta}
                    view={delta.startsWith('+') ? 'positive' : 'negative'}
                    size="s"
                    pilled
                  />
                </div>
              )}
            </div>
          </Widget.Content>
        </Widget>
      );
      break;
    }
    case 'Button':
      content = <Button size="s" {...lib} />;
      break;
    case 'ActionsMenu':
      content = (
        <IconButtonDots
          size="s"
          title={`Ещё: ${splitList(props.items).join(', ')}`}
          aria-label="Ещё действия"
        />
      );
      break;
    case 'TextField':
      content = <TextField size="s" {...lib} />;
      break;
    case 'TextArea':
      content = (
        <TextArea
          size="s"
          {...lib}
          label={str(props.label)}
          placeholder={str(props.placeholder)}
          labelPlacement="outer"
        />
      );
      break;
    case 'Checkbox':
      content = <Checkbox size="s" {...lib} label={str(props.label)} />;
      break;
    case 'Switch':
      content = <Switch size="s" {...lib} label={str(props.label)} />;
      break;
    case 'Badge':
      content = (
        <div>
          <Badge size="s" {...lib} />
        </div>
      );
      break;
    case 'Note':
      content = (
        <Note
          size="s"
          {...lib}
          title={str(props.title) ?? ''}
          text={str(props.text)}
        />
      );
      break;
    case 'EmptyState':
      content = (
        <EmptyState
          size="m"
          {...lib}
          title={str(props.title)}
          subtitle={str(props.subtitle)}
        />
      );
      break;
    case 'TableCanvas':
      content = <MockTable item={item} />;
      break;
    case 'Divider':
      content = <Divider {...lib} />;
      break;
    default:
      content = null;
  }

  const selected = item.id === selectedId;
  return (
    <div
      data-node-id={item.id}
      className={`pb-node${selected ? ' pb-selected' : ''}`}
      onClickCapture={(event) => {
        // Выбираем самый глубокий узел под курсором
        const target = (event.target as HTMLElement).closest('[data-node-id]');
        if (target === event.currentTarget) onSelect(item.id);
      }}
    >
      {selected && <span className="pb-tag">{item.type}</span>}
      {content}
    </div>
  );
}

/** Стили выделения: подсвечиваем только самый вложенный узел под курсором */
export const CANVAS_CSS = `
.pb-node { position: relative; min-width: 0; border-radius: 6px; outline: 1px dashed transparent; outline-offset: 3px; }
.pb-node:hover:not(:has(.pb-node:hover)) { outline-color: ${textAccent}; cursor: pointer; }
.pb-node.pb-selected { outline: 2px solid ${textAccent}; }
.pb-tag { position: absolute; top: -20px; left: -2px; z-index: 2; padding: 1px 6px; border-radius: 4px;
  font: 500 11px/16px 'SB Sans Text', system-ui, sans-serif; color: #fff; background: ${textAccent}; pointer-events: none; }
`;
