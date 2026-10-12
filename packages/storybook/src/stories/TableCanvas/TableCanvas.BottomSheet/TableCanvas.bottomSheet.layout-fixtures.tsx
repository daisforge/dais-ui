import { TableCanvas } from '@ui-kit/components/TableCanvas';
import React, { type CSSProperties, useState } from 'react';

export function HeightCalculationExample() {
  const [height, setHeight] = useState<CSSProperties['height']>(620);
  const [maxHeight, setMaxHeight] = useState<CSSProperties['maxHeight']>();
  const [parentHeight, setParentHeight] = useState(1000);
  const [pagination, setPagination] = useState(true);
  const [sheetHeight, setSheetHeight] = useState<string | number>(32);
  return (
    <>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => {
            setHeight(620);
            setMaxHeight(undefined);
          }}
        >
          620px
        </button>
        <button
          type="button"
          onClick={() => {
            setHeight('80%');
            setMaxHeight(undefined);
          }}
        >
          80% таблицы
        </button>
        <button
          type="button"
          onClick={() => {
            setHeight('calc(100% - 100px)');
            setMaxHeight(undefined);
          }}
        >
          calc таблицы
        </button>
        <button
          type="button"
          onClick={() => {
            setHeight(620);
            setMaxHeight(500);
          }}
        >
          maxHeight 500
        </button>
        <button
          type="button"
          onClick={() => {
            setHeight(undefined);
            setMaxHeight('80%');
          }}
        >
          Только maxHeight 80%
        </button>
        <button type="button" onClick={() => setParentHeight(300)}>
          Родитель 300
        </button>
        <button type="button" onClick={() => setParentHeight(1000)}>
          Родитель 1000
        </button>
        <button type="button" onClick={() => setPagination((value) => !value)}>
          Пагинация
        </button>
        <button type="button" onClick={() => setSheetHeight(32)}>
          Панель 32
        </button>
        <button type="button" onClick={() => setSheetHeight(220)}>
          Панель 220
        </button>
        <button type="button" onClick={() => setSheetHeight('50%')}>
          Панель 50%
        </button>
        <button type="button" onClick={() => setSheetHeight(2000)}>
          Панель 2000
        </button>
      </div>
      <div
        style={{ height: parentHeight, width: 700 }}
        data-testid="height-parent"
      >
        <TableCanvas
          rows={Array.from({ length: 20 }, (_, id) => ({
            id,
            title: `Строка ${id}`,
          }))}
          columnConfig={[
            { key: 'id', name: 'ID', width: 100 },
            { key: 'title', name: 'Название', width: 400 },
          ]}
          tableConfig={{
            containerStyle: { height, maxHeight },
            // Фиксируем измеряемый размер только в тестовой таблице.
            containerCss: pagination
              ? '& > :last-child > div { box-sizing: border-box; height: 56px; }'
              : undefined,
            controlBlock: { rightSideInner: [{ text: 'Действие' }] },
            collapsing: { enableCollapse: true },
            bottomSheetConfig: {
              height: sheetHeight,
              content: <div>Панель</div>,
            },
            ...(pagination
              ? { pagination: { value: 1, count: 100, perPage: 20 } }
              : {}),
          }}
        />
      </div>
    </>
  );
}

export function AutoHeightBoundsExample() {
  const [height, setHeight] = useState(400);
  const [minHeight, setMinHeight] = useState(32);
  const [maxHeight, setMaxHeight] = useState<string | number>(200);
  const [contentHeight, setContentHeight] = useState<string | number>(83);
  const [fixedHeight, setFixedHeight] = useState(false);
  return (
    <>
      <div>
        <button type="button" onClick={() => setContentHeight(163)}>
          Контент 163
        </button>
        <button type="button" onClick={() => setContentHeight(83)}>
          Контент 83
        </button>
        <button type="button" onClick={() => setContentHeight(1000)}>
          Контент 1000
        </button>
        <button type="button" onClick={() => setMinHeight(300)}>
          Минимум 300
        </button>
        <button type="button" onClick={() => setMinHeight(32)}>
          Минимум 32
        </button>
        <button type="button" onClick={() => setMaxHeight('50%')}>
          Максимум 50%
        </button>
        <button type="button" onClick={() => setMaxHeight(10000)}>
          Максимум 10000
        </button>
        <button type="button" onClick={() => setHeight(300)}>
          Область 300
        </button>
        <button type="button" onClick={() => setFixedHeight(true)}>
          Фиксированная 50
        </button>
        <button type="button" onClick={() => setFixedHeight(false)}>
          Автоматическая
        </button>
        <button type="button" onClick={() => setContentHeight('100%')}>
          Контент 100%
        </button>
      </div>
      <TableCanvas
        rows={[{ id: 1 }]}
        columnConfig={[{ key: 'id', name: 'ID' }]}
        tableConfig={{
          containerStyle: { height },
          controlBlock: { show: false },
          bottomSheetConfig: {
            height: fixedHeight ? 50 : 'auto',
            minHeight,
            maxHeight,
            content: <div style={{ height: contentHeight }}>Содержимое</div>,
          },
        }}
      />
    </>
  );
}
