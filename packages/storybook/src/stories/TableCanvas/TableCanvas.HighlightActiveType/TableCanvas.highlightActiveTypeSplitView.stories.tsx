/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRowsTree, type TreeRow } from '@df-storybook/data/tableData';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@ui-kit/components/Avatar';
import { Badge } from '@ui-kit/components/Badge';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { IconButton } from '@ui-kit/components/IconButton';
import type { SplitViewSlotSizesProps } from '@ui-kit/components/SplitView';
import { SplitView } from '@ui-kit/components/SplitView';
import { type ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import { Widget } from '@ui-kit/components/Widget';
import { s } from '@ui-kit/constants';
import { IconChevronLeft, IconChevronRight } from '@ui-kit/icons';
import { backgroundPrimary } from '@ui-kit/tokens';
import { useState } from 'react';
import styled from 'styled-components';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/HighlightActiveType/SplitView',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;

const StoryHeader = styled.div`
  position: sticky;
  top: 0;
  height: 72px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

// Древовидная таблица: блок → трайб → продукт (3 уровня subRows).
const TREE_COLUMNS: readonly ColumnConfig<TreeRow>[] = [
  {
    key: 'block',
    name: 'Блок / Трайб / Продукт',
    width: 320,
    subRow: {
      // Какое поле строки показывать на каждом уровне дерева.
      keyOfColumnInSubRow: (lvl) =>
        lvl === 0 ? 'block' : lvl === 1 ? 'tribe' : 'product',
      isColumnWithArrow: true,
      hideHeaderExpandAllArrow: false,
    },
  },
  { key: 'blockActivity', name: 'Активность', width: 160 },
  { key: 'q1', name: 'Q1', width: 90, subRow: { parentKeyAsDefault: true } },
  { key: 'q2', name: 'Q2', width: 90, subRow: { parentKeyAsDefault: true } },
  { key: 'q3', name: 'Q3', width: 90, subRow: { parentKeyAsDefault: true } },
  { key: 'q4', name: 'Q4', width: 90, subRow: { parentKeyAsDefault: true } },
];

// Уровень узла дерева определяем по id (block=number, tribe/product — суффикс).
// В реальном приложении уровень/тип обычно есть в самой доменной модели.
const getNodeLevel = (row: TreeRow): 0 | 1 | 2 => {
  if (typeof row.id === 'number') return 0;
  return String(row.id).endsWith('tribe') ? 1 : 2;
};

const LEVEL_LABEL: Record<0 | 1 | 2, string> = {
  0: 'Блок',
  1: 'Трайб',
  2: 'Продукт',
};

const fieldRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  padding: '10px 0',
  borderBottom: '1px solid #eef1f5',
  fontSize: 13,
};

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={fieldRowStyle}>
      <span style={{ color: '#8893a5' }}>{label}</span>
      <b>{value}</b>
    </div>
  );
}

// Сайдбар — Widget из композиции SplitView. Шапка с крестиком, тайтл и бейджи
// подменяются по выбранному узлу дерева; в контенте — поля строки.
function RowDetailsWidget({
  row,
  avatarSize,
  fullScreened,
  onClose,
  onToggleFullScreen,
}: {
  row: TreeRow | null;
  avatarSize: 'l' | 'm';
  fullScreened: boolean;
  onClose: () => void;
  onToggleFullScreen: () => void;
}) {
  if (!row) return null;

  const level = getNodeLevel(row);
  const title = level === 0 ? row.block : level === 1 ? row.tribe : row.product;
  const childCount = row.subRows?.length ?? 0;
  const isActive = row.blockActivity === 'Активный';

  return (
    <Widget containerType={fullScreened ? 'modal' : 'splitView'}>
      <Widget.Header
        onClose={onClose}
        fullScreened={fullScreened}
        toggleFullScreened={onToggleFullScreen}
        title={title}
        titleLeftSlot={<Avatar size={avatarSize} name={title} />}
        rightBlock={
          <>
            <Widget.IconButtonDots
              size="xs"
              iconSize="xs"
              iconOrientation="vertical"
              dropdownProps={{
                items: [
                  { label: 'Открыть карточку', value: '1' },
                  { label: 'Скопировать ссылку', value: '2' },
                ],
              }}
            />
            <Widget.Divider />
            <Flow mainAxisGap={s.x2}>
              <IconButton view="secondary" size="xs">
                <IconChevronLeft size="xs" />
              </IconButton>
              <IconButton view="secondary" size="xs">
                <IconChevronRight size="xs" />
              </IconButton>
            </Flow>
          </>
        }
        badge={{ text: LEVEL_LABEL[level] }}
        bottomBlock={
          <div style={{ display: 'flex', gap: s.x2 }}>
            <Badge
              size="s"
              transparent
              view={isActive ? 'accent' : 'negative'}
              text={row.blockActivity}
            />
            {childCount > 0 && (
              <Badge
                size="s"
                transparent
                view="accent"
                text={`${level === 0 ? 'Трайбов' : 'Продуктов'}: ${childCount}`}
              />
            )}
          </div>
        }
      />

      <Widget.Content>
        <div style={{ padding: 16 }}>
          <Field label="ID" value={String(row.id)} />
          <Field label="Блок" value={row.block} />
          <Field label="Трайб" value={row.tribe} />
          <Field label="Продукт" value={row.product} />
          <Field label="Зона трайба" value={row.tribeZone} />
          <Field
            label="Q1–Q4"
            value={[row.q1, row.q2, row.q3, row.q4].join(' · ')}
          />
        </div>
      </Widget.Content>

      <Widget.Footer
        leftBlock={
          <Flow mainAxisGap={s.x4}>
            <Button text="На согласование" size="xs" view="secondary" />
            <Widget.IconButtonDots size="xs" />
          </Flow>
        }
        rightBlock={
          <Flow mainAxisGap={s.x4}>
            <Button
              text="Отмена"
              size="xs"
              view="secondary"
              onClick={onClose}
            />
            <Button text="Сохранить" size="xs" view="accent" />
          </Flow>
        }
      />
    </Widget>
  );
}

export const HighlightActiveTypeSplitView: Story = {
  name: 'HighlightActiveType + SplitView (дерево)',
  ...storySourceDoc({ previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(() => createRowsTree());

    // Controlled-подсветка: индексом подсвеченной строки владеет внешний стейт.
    // Он же — признак «панель открыта»: панель показывается, пока строка
    // подсвечена.
    const activeRowState = useState<number | undefined>(undefined);
    const [activeRow, setActiveRow] = activeRowState;

    // Объект подсвеченной строки приходит из highlightActiveRow.onChange —
    // таблица сама резолвит узел дерева по флэт-индексу, onCellClicked не нужен.
    const [activeRowData, setActiveRowData] = useState<TreeRow | null>(null);
    const [fullScreened, setFullScreened] = useState(false);

    // Закрытие панели → обратное связывание: гасим подсветку строки. Данные
    // чистим после анимации закрытия, чтобы контент не мигал.
    const closePanel = () => {
      setActiveRow(undefined);
      setFullScreened(false);
      setTimeout(() => setActiveRowData(null), 300);
    };

    return (
      <div style={{ backgroundColor: backgroundPrimary }}>
        <StoryHeader>Header FinAI</StoryHeader>

        <SplitView
          mainContent={
            <TableCanvas
              tableConfig={{
                containerStyle: { height: '70vh' },
                subRows: {
                  getSubRows: (row) => row?.subRows,
                  rowKeyGetter: (row) => row.id,
                },
                cellsSelection: { mode: 'range-cell' },
                highlightActiveType: 'row',
                highlightActiveRow: {
                  state: activeRowState,
                  // И индекс, и сам узел дерева приходят сюда — без onCellClicked.
                  onChange: ({ row }) => setActiveRowData(row ?? null),
                },
              }}
              columnConfig={TREE_COLUMNS}
              rows={rows}
            />
          }
          sidebar={{
            isOpened: activeRow !== undefined,
            isFullScreened: fullScreened,
            defaultWidthPercent: 35,
            content: ({ avatarSize }: SplitViewSlotSizesProps) => (
              <RowDetailsWidget
                row={activeRowData}
                avatarSize={avatarSize}
                fullScreened={fullScreened}
                onClose={closePanel}
                onToggleFullScreen={() => setFullScreened((prev) => !prev)}
              />
            ),
          }}
        />
      </div>
    );
  },
};
