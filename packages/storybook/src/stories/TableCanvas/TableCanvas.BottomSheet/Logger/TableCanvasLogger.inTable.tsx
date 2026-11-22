import {
  TableCanvas,
  TableCanvasLogger,
  type TableCanvasLoggerItem,
} from '@ui-kit/components/TableCanvas';
import React, { useState } from 'react';

export function TableCanvasLoggerInTableExample({
  items,
}: {
  items: TableCanvasLoggerItem[];
}) {
  const [open, setOpen] = useState(false);
  const rows = Array.from({ length: 40 }, (_, id) => ({
    id,
    report: `Отчёт ${id + 1}`,
  }));

  return (
    <TableCanvas
      rows={rows}
      columnConfig={[
        { key: 'id', name: 'ID', width: 100 },
        { key: 'report', name: 'Отчёт', width: 360 },
      ]}
      tableConfig={{
        containerStyle: { height: 520 },
        bottomSheetConfig: {
          height: open ? 280 : 40,
          minHeight: 40,
          content: (
            <TableCanvasLogger
              items={items}
              open={open}
              onOpenChange={setOpen}
            />
          ),
        },
      }}
    />
  );
}
