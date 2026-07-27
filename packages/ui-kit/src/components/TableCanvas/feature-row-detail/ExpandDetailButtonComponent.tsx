import { Box } from '@ui-kit/components/Box';
import { IconButton } from '@ui-kit/components/IconButton';
import {
  IconChevronCircleDownFill,
  IconChevronCircleUpFill
} from '@ui-kit/icons';

import { ObjectForExtending } from '../types/utils.type';
import {
  getExpandButtonIcon,
  getExpandButtonProps,
  rowIsHaveExpandedDetailPanel
} from './handlers';
import { HandleExpandDetail } from './types';

export const ExpandDetailButtonComponent = <
  RowType extends ObjectForExtending
>({
  handleExpandRowDetail,
  row,
  className
}: {
  handleExpandRowDetail: HandleExpandDetail<RowType> | null;
  row: RowType;
  className: string;
}) => {
  const ClosedIcon = getExpandButtonIcon(row, 'closed');
  const OpenedIcon = getExpandButtonIcon(row, 'opened');
  const { onClick, ...restButtonProps } = getExpandButtonProps(row) ?? {};

  return (
    <Box
      className={className}
      $css={{ display: 'inline-block', paddingLeft: '8px' }}
    >
      <IconButton
        size="s"
        view="clear"
        onClick={(e) => {
          handleExpandRowDetail?.(row);

          if (onClick) {
            onClick(e);
          }
        }}
        {...restButtonProps}
      >
        {rowIsHaveExpandedDetailPanel(row)
          ? OpenedIcon ?? <IconChevronCircleUpFill color="inherit" />
          : ClosedIcon ?? <IconChevronCircleDownFill color="inherit" />}
      </IconButton>
    </Box>
  );
};
