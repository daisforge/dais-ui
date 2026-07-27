/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo, useState } from 'react';
import { createRows, dataObj, type Row } from '../shared/tableData';

import {
  Canvas,
  TableCanvas,
  tableCanvasFonts,
  tableCanvasTheme,
  type ColumnOrColumnGroupConfig,
} from '@dais-ui/ui-kit/components/TableCanvas';

export const TableCanvasColumnsGroup = ({
  headerTreeLvl = 'lvl3',
}: {
  headerTreeLvl?: keyof typeof dataObj;
}) => {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnOrColumnGroupConfig<Row>[]>(
    () => [
      ...(dataObj[headerTreeLvl] ?? []).map((el, i) =>
        i === 0
          ? {
              ...el,
              name: (
                <Canvas.Container padding={{ left: 8, right: 8 }}>
                  <Canvas.Text
                    color={tableCanvasTheme.accentColor}
                    font={tableCanvasFonts.bodyXSBold}
                  >
                    кастомный name
                  </Canvas.Text>
                </Canvas.Container>
              ),
            }
          : el,
      ),
    ],
    [headerTreeLvl],
  );

  return (
    <TableCanvas
      key={headerTreeLvl}
      tableConfig={{
        containerStyle: { height: 700 },
        columnsControl: { enable: true },
        resizableColumn: true,
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};
