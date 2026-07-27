import {
  IconChevronCircleDownFill,
  IconChevronCircleUpFill
} from '@ui-kit/icons';
import React from 'react';

import { Canvas, CanvasEl } from '../TableGlideInstance';
import { ObjectForExtending } from '../types';
import {
  getExpandButtonIcon,
  getExpandButtonProps,
  rowIsHaveExpandedDetailPanel
} from './handlers';
import { HandleExpandDetail } from './types';

export const ExpandDetailButton = <RowType extends ObjectForExtending>({
  handleExpandRowDetail,
  row
}: {
  handleExpandRowDetail: HandleExpandDetail<RowType> | null;
  row: RowType;
}) => {
  const ClosedIcon = getExpandButtonIcon(row, 'closed');
  const OpenedIcon = getExpandButtonIcon(row, 'opened');
  const { onClick, ..._restButtonProps } = getExpandButtonProps(row) ?? {};
  const icon = (
    rowIsHaveExpandedDetailPanel(row)
      ? // TODO custom icons
        OpenedIcon ?? <IconChevronCircleUpFill color="inherit" />
      : ClosedIcon ?? <IconChevronCircleDownFill color="inherit" />
  ) as CanvasEl;
  return (
    <Canvas.Container padding={{ left: 8 }}>
      <Canvas.IconButton
        view="clear"
        buttonSize="s"
        icon={icon}
        interaction={{
          selection: 'keep',
          cellClick: 'stop',
          editor: 'never',
          contextMenu: 'keep-selection'
        }}
        onClick={() => {
          handleExpandRowDetail?.(row);

          if (onClick) {
            // TODO
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick({} as any);
          }
        }}
        //  TODO  _restButtonProps
      />
    </Canvas.Container>
  );
};
