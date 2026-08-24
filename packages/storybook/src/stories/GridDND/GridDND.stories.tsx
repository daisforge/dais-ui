/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { gridDndRoutes } from '@df-storybook/msw/routes';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { AnalyticalWidget } from '@ui-kit/components/AnalyticalWidget';
import { Button } from '@ui-kit/components/Button';
import {
  GridDND,
  GridDNDItemConfig,
  GridDNDItems,
  GridDNDRef,
} from '@ui-kit/components/GridDND';
import { Switch } from '@ui-kit/components/Switch';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { debounce } from '../../msw/lib/debounce';
import { WidgetL, WidgetM, WidgetS } from '../AnalyticalWidget/components';
import { longText } from '../AnalyticalWidget/lib/utils';

const meta: Meta<typeof GridDND> = {
  title: 'Локальные компоненты/GridDND',
  component: GridDND,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    msw: { handlers: [...gridDndRoutes.handlers] },
  },
};
export default meta;
type Story = StoryObj<typeof GridDND>;

const preCode = `
import { GridDND } from '@daisforge/ui';

`;

// Задержка активации D&D: зажимаешь карточку на 500мс — режим перетаскивания активируется.
// Обводка появляется только у активной карточки. Текст не выделяется во время D&D.
export const DragDelay: Story = {
  name: 'Задержка активации D&D (dragActivationDelay)',
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items] = useState<GridDNDItems[]>([
      { id: 'w1', type: 'm' },
      { id: 'w2', type: 's' },
      { id: 'w3', type: 's' },
      { id: 'w4', type: 'm' },
      { id: 'w5', type: 's' },
    ]);

    const renderItem = useCallback(
      (item: GridDNDItemConfig, onRemove: () => void) => (
        <GridDND.ItemWrapper
          item={item}
          actionsSlot={
            <AnalyticalWidget.DotsIconButton
              absolute
              dropdownProps={{
                items: [{ label: 'Удалить', value: 'Удалить' }],
                onItemSelect() {
                  onRemove();
                },
              }}
            />
          }
        >
          {item.type === 's' && <WidgetS id={item.id} onRemove={onRemove} />}
          {item.type === 'm' && <WidgetM id={item.id} onRemove={onRemove} />}
        </GridDND.ItemWrapper>
      ),
      [],
    );

    return (
      <div>
        <div style={{ marginBottom: 12, color: '#666', fontSize: 14 }}>
          Зажмите карточку на 500мс для активации перетаскивания. Обводка
          появится только у зажатой карточки.
        </div>
        <div style={{ width: 1200, background: 'lightGray' }}>
          <GridDND
            ref={gridRef}
            items={items}
            isDraggable
            dragActivationDelay={500}
            compactType="horizontal"
            // eslint-disable-next-line react/no-children-prop
            children={renderItem}
            onLayoutChange={(layout, _allAreas, meta) => {
              console.debug('Layout changed:', layout, meta);
            }}
          />
        </div>
      </div>
    );
  },
};

export const GridDNDClassic: Story = {
  name: 'GridDND Classic',
  ...storySourceDoc({
    preCode,
  }),
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items, setItems] = useState<GridDNDItems[]>([]);
    const [width, setWidth] = useState(1660);
    const [drag, setDrag] = useState(true);
    const [loading, setLoading] = useState(true);
    const [smartCompact, setSmartCompact] = useState(true);
    const [compactType, setCompactType] = useState<
      'vertical' | 'horizontal' | null
    >('horizontal');

    const renderItem = useCallback(
      (item: GridDNDItemConfig, onRemove: () => void) => (
        <GridDND.ItemWrapper
          item={item}
          actionsSlot={
            <AnalyticalWidget.DotsIconButton
              absolute
              dropdownProps={{
                items: [{ label: 'Удалить', value: 'Удалить' }],
                onItemSelect(m) {
                  if (m.value?.toString().toLowerCase() === 'удалить')
                    onRemove();
                },
              }}
            />
          }
        >
          {item.type === 's' && <WidgetS id={item.id} onRemove={onRemove} />}
          {item.type === 'm' && <WidgetM id={item.id} onRemove={onRemove} />}
          {item.type === 'l' && <WidgetL id={item.id} onRemove={onRemove} />}
        </GridDND.ItemWrapper>
      ),
      [],
    );

    const handleReorder = () => {
      const currentOrder = gridRef.current?.api.getOrder() || [];
      // Перевернуть порядок
      gridRef.current?.api.setOrder([...currentOrder].reverse());
    };

    const saveItems = useCallback(async (newItems: GridDNDItems[]) => {
      try {
        console.log('💾 Saving items to server:', newItems);
        await fetch(gridDndRoutes.ENDPOINTS.PUT_ITEMS, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: newItems }),
        });
        console.log('✅ Items saved successfully');
      } catch (error) {
        console.error('❌ Failed to save items:', error);
      }
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSave = useCallback(
      debounce((newItems: GridDNDItems[]) => {
        saveItems(newItems);
      }, 800),
      [saveItems],
    );

    // Загрузка initial items с сервера
    useEffect(() => {
      const fetchInitialItems = async () => {
        try {
          const response = await fetch(gridDndRoutes.ENDPOINTS.GET_ITEMS);
          const data = await response.json();
          setItems(data.items);
        } catch (error) {
          console.error('Failed to fetch items:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchInitialItems();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <span>Width: {width}px</span>
          <input
            type="range"
            min={600}
            max={1890}
            step={10}
            value={width}
            onChange={(e) => setWidth(+e.target.value)}
          />
          <Switch
            onChange={(e) => setDrag(e.target.checked)}
            label="Activate DND"
            checked={drag}
          />
          <Switch
            onChange={(e) => setSmartCompact(e.target.checked)}
            label="Activate Smart Compact"
            checked={smartCompact}
          />
          <Switch
            onChange={(e) =>
              setCompactType(e.target.checked ? 'vertical' : null)
            }
            label="Activate Compact Type Vertical"
            checked={compactType === 'vertical'}
          />
          <Switch
            onChange={(e) =>
              setCompactType(e.target.checked ? 'horizontal' : null)
            }
            label="Activate Compact Type Horizontal"
            checked={compactType === 'horizontal'}
          />
        </div>
        <div
          style={{
            marginBottom: '30px',
            display: 'flex',
            gap: '8px',
          }}
        >
          <Button
            onClick={() => {
              console.debug(gridRef.current?.api.getOrderDetailed());
            }}
          >
            Get Order Detail
          </Button>
          <Button
            onClick={() =>
              console.debug('Current layout:', gridRef.current?.api.getOrder())
            }
          >
            Get Order
          </Button>
          <Button
            onClick={() =>
              console.debug(
                'Current template area:',
                gridRef.current?.api.getCurrentLayout(),
              )
            }
          >
            Get Current Layout
          </Button>
          <Button
            onClick={() =>
              console.debug(
                'All template areas:',
                gridRef.current?.api.getAllLayouts(),
              )
            }
          >
            Get All Layouts
          </Button>
          <Button
            onClick={() => {
              const id = prompt('Enter id');
              const type = prompt('Enter type (s, m, l)');
              if (
                !id ||
                !type ||
                !gridRef.current ||
                (type !== 's' && type !== 'm' && type !== 'l')
              )
                return;
              gridRef.current?.api.addItem({
                id,
                type,
              });
            }}
          >
            + Add widget
          </Button>
          <Button onClick={() => handleReorder()}>Reorder</Button>
        </div>

        <div style={{ width, background: 'lightGray' }}>
          <GridDND
            ref={gridRef}
            items={items}
            compactType="horizontal"
            smartCompact={smartCompact}
            // eslint-disable-next-line react/no-children-prop
            children={renderItem}
            onItemsChange={(items) =>
              console.debug('📦 Template Items changed:', items)
            }
            onLayoutChange={(layout, allAreas, meta) => {
              console.group('📐 Template Layout changed:');
              console.debug('Layout:', layout);
              console.debug('All areas:', allAreas);
              console.debug('Meta:', meta);
              if (meta.itemsOrderTyped) {
                console.debug('🔄 Items order changed, saving...');
                debouncedSave(meta.itemsOrderTyped);
              }
              console.groupEnd();
            }}
            onBreakpointChange={(breakpoint: string, layout: unknown) => {
              console.group('📱 Template Breakpoint changed:');
              console.debug('Breakpoint:', breakpoint);
              console.debug('Layout:', layout);
              console.groupEnd();
            }}
            isDraggable={drag}
          />
        </div>
      </div>
    );
  },
};

// Самоизменение размера: виджет вызывает onResize (3-й аргумент render-prop,
// уже пре-каррирован к cfg.id). GridDND меняет type у себя через API —
// обновляет размер и делает reflow. React-инстанс не размонтируется,
// внутренний стейт (счётчик) сохраняется.
const ResizableAnalyticalWidget: React.FC<{
  id: string;
  type: 's' | 'm' | 'l';
  onResize: (nextType: 's' | 'm' | 'l') => void;
  onRemove: () => void;
}> = ({ id, type, onResize, onRemove }) => {
  const [counter, setCounter] = useState(0);

  return (
    <AnalyticalWidget
      $css={{
        height: '100%',
        maxWidth: 'unset !important',
        width: '100% !important',
      }}
      size={type}
      headerSlot={
        <AnalyticalWidget.Header
          title={`Виджет ${id}`}
          badge={type.toUpperCase()}
          subtitle="Самоизменяемый размер"
          infoTooltipText="Кнопки внутри меняют type через onResize"
          href="/"
        />
      }
      contentSlot={
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            height: 'fit-content',
          }}
        >
          <div
            className="grid-dnd__no-drag"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}
          >
            <Button size="xs" onClick={() => setCounter((v) => v + 1)}>
              Counter: {counter}
            </Button>
            <Button
              size="xs"
              view="secondary"
              disabled={type === 's'}
              onClick={() => onResize('s')}
            >
              → S
            </Button>
            <Button
              size="xs"
              view="secondary"
              disabled={type === 'm'}
              onClick={() => onResize('m')}
            >
              → M
            </Button>
            <Button
              size="xs"
              view="secondary"
              disabled={type === 'l'}
              onClick={() => onResize('l')}
            >
              → L
            </Button>
            <Button size="xs" view="negative" onClick={onRemove}>
              Remove
            </Button>
          </div>
          <div>{longText()}</div>
        </div>
      }
    />
  );
};

export const SelfResize: Story = {
  name: 'Самоизменение типа виджета (через onResize)',
  render() {
    const gridRef = useRef<GridDNDRef>(null);
    const [items] = useState<GridDNDItems[]>([
      { id: 'w1', type: 's' },
      { id: 'w2', type: 's' },
      { id: 'w3', type: 'm' },
      { id: 'w4', type: 's' },
      { id: 'w5', type: 's' },
      { id: 'w6', type: 's' },
    ]);

    const renderItem = useCallback(
      (
        item: GridDNDItemConfig,
        onRemove: () => void,
        onResize: (type: 's' | 'm' | 'l') => void,
      ) => (
        <GridDND.ItemWrapper item={item}>
          <ResizableAnalyticalWidget
            id={item.id}
            type={item.type}
            onResize={onResize}
            onRemove={onRemove}
          />
        </GridDND.ItemWrapper>
      ),
      [],
    );

    return (
      <div style={{ padding: 12 }}>
        <div style={{ marginBottom: 12, color: '#444', fontSize: 13 }}>
          Зажми карточку на 500мс — активируется D&D. Кнопки «→ S/M/L» внутри
          виджета вызывают <code>onResize(type)</code> (3-й аргумент
          render-prop, пре-каррирован к <code>cfg.id</code>). GridDND через
          <code> api.setItemType </code> меняет размер и делает reflow. Счётчик
          не сбрасывается — React-инстансы не размонтируются.
        </div>
        <div style={{ width: 1200, background: 'lightGray' }}>
          <GridDND
            ref={gridRef}
            items={items}
            isDraggable
            dragActivationDelay={500}
            compactType="horizontal"
            // eslint-disable-next-line react/no-children-prop
            children={renderItem}
            onItemsChange={(next) => console.debug('📦 items', next)}
            onLayoutChange={(layout, _all, meta) =>
              console.debug('📐 layout', layout, meta)
            }
          />
        </div>
      </div>
    );
  },
};
