/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ColumnConfig,
  SplitIconButton,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import { IconDone, IconSb, IconStar } from '@ui-kit/icons';
import { textInfo } from '@ui-kit/tokens';
import React, { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ControlBlock/SplitIconButton',
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj;

const preCode = `import {
  ColumnConfig,
  SplitIconButton,
  TableCanvas,
} from '@dais-ui/ui-kit/components/TableCanvas';`;

/**
 * Несколько SplitIconButton как кастомные фичи ControlBlock. Включены поиск,
 * rowSize и полноэкранный режим — сузьте окно, чтобы сработала компрессия:
 * фичи уедут в overflow-дропдаун ("…"), и там их свёрнутый вид описывается
 * через details фичи (например select с галочкой активного пункта).
 */
export const AsCustomFeatures: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  name: 'SplitIconButton как кастомные фичи ControlBlock',
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'ID', resizable: true },
        { key: 'task', name: 'Task', resizable: true },
        { key: 'priority', name: 'Priority', resizable: true },
        { key: 'developer', name: 'Developer', resizable: true }
      ],
      []
    );

    // Фича "Метка": один и тот же контент пунктов и в панели (items), и в
    // свёрнутом виде (details.options). Синюю галочку активного пункта рисует
    // сам разработчик через contentLeft — библиотека её не навязывает.
    const [label, setLabel] = useState('important');
    const LABELS = [
      { value: 'important', label: 'Важное' },
      { value: 'urgent', label: 'Срочное' },
      { value: 'later', label: 'На потом' }
    ];
    const withCheck = (value: string) => ({
      contentLeft: (
        <span
          style={{
            display: 'inline-flex',
            visibility: label === value ? 'visible' : 'hidden'
          }}
        >
          <IconDone size="s" color={textInfo} />
        </span>
      )
    });
    const labelItems = LABELS.map((o) => ({ ...o, ...withCheck(o.value) }));

    // Фича "Экспорт": пункты без галочек — просто список форматов.
    const [fmt, setFmt] = useState('csv');
    const FORMATS = [
      { value: 'csv', label: 'CSV' },
      { value: 'xlsx', label: 'Excel' },
      { value: 'pdf', label: 'PDF' }
    ];

    // Фича "Копирование": шеврон без дропдауна (items не заданы) —
    // обе кнопки работают как обычные действия.
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '60vh' },
          // Поиск + rowSize + fullScreen, чтобы можно было сузить окно и
          // увидеть компрессию фич в overflow-дропдаун.
          fullScreenEnabled: true,
          rowSize: { default: 'big', showInControl: true },
          searching: { enabled: true },
          controlBlock: {
            show: true,
            size: 'm',
            customFeatures: [
              {
                value: 'label',
                // Панель: SplitIconButton с выбором метки и галочкой.
                CustomIconRender: () => (
                  <SplitIconButton
                    icon={<IconStar size="s" />}
                    chevronSize="xs"
                    size="m"
                    items={labelItems}
                    onItemSelect={(item) => setLabel(String(item.value))}
                    onIconClick={() => alert('Клик по иконке метки')}
                  />
                ),
                canBeCompressedInToolsMenu: true,
                // Свёрнутый вид: тот же выбор как select с галочкой в contentLeft.
                details: {
                  type: 'select',
                  label: 'Метка',
                  value: label,
                  options: labelItems,
                  onChange: setLabel,
                  icon: () => <IconStar size="s" />
                }
              },
              {
                value: 'export',
                CustomIconRender: () => (
                  <SplitIconButton
                    icon={<IconSb size="s" />}
                    chevronSize="xs"
                    size="m"
                    items={FORMATS}
                    onItemSelect={(item) => setFmt(String(item.value))}
                    onIconClick={() => alert('Клик по иконке экспорта')}
                  />
                ),
                canBeCompressedInToolsMenu: true,
                details: {
                  type: 'select',
                  label: 'Экспорт',
                  value: fmt,
                  options: FORMATS,
                  onChange: setFmt,
                  icon: () => <IconSb size="s" />
                }
              },
              {
                value: 'copy',
                // Без items: шеврон становится обычной кнопкой (onChevronClick).
                CustomIconRender: () => (
                  <SplitIconButton
                    icon={<IconSb size="s" />}
                    chevronSize="xs"
                    size="m"
                    onIconClick={() => alert('Скопировать')}
                    onChevronClick={() => alert('Дополнительно')}
                  />
                )
              }
            ]
          }
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  }
};
