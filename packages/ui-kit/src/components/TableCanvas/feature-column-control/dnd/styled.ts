import { Box } from '@ui-kit/components/Box';
import { outlineAccent, surfaceTransparentPrimary } from '@ui-kit/tokens';
import styled from 'styled-components';

import { DEFAULT_TABLE_TRANSITION_DELAY } from '../../styles';

export const StyledDragContainer = styled(Box)<{
  $hasScroll?: boolean;
  $isEmptySearch?: boolean;
}>((props) => ({
  overflowY: 'auto',
  marginBottom: '16px',
  paddingRight: props.$hasScroll ? '8px' : '0',
  flexGrow: 1,
  minHeight: '40px',

  '& .drag-button': {
    cursor: 'grabbing'
  },

  '.drag-item': {
    marginTop: '8px',
    '&:first-of-type': {
      marginTop: '0px'
    }
  },
  '&, & *': {
    transition: `margin ${DEFAULT_TABLE_TRANSITION_DELAY} ease-in-out`
  },

  ...(props.$isEmptySearch
    ? {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    : {})
}));
export const StyledDragItem = styled(Box)<{
  $isOvered?: boolean;
  $borderPlacement?: 'bottom' | 'top';
}>(({ $isOvered, $borderPlacement, draggable }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingInline: '12px',
  paddingBlock: '8px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: surfaceTransparentPrimary,

  ...(draggable && {
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing'
    },
    position: 'relative',

    '&&': {
      ...($isOvered && {
        ...($borderPlacement === 'top'
          ? {
              marginTop: '10px !important',
              '&::after': {
                content: "''",
                position: 'absolute',
                top: '-6px',
                left: '0px',
                width: '100%',
                backgroundColor: outlineAccent,
                height: '2px',
                borderRadius: '12px 12px 2px 2px'
              }
            }
          : {
              marginBottom: '6px',
              '&::after': {
                content: "''",
                position: 'absolute',
                bottom: '-4px',
                left: '0px',
                width: '100%',
                backgroundColor: outlineAccent,
                height: '2px',
                borderRadius: '12px 12px 2px 2px'
              }
            })
      })
    }
  })
}));
