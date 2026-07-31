import { IconDisclosureDownOutline } from '@ui-kit/icons';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { CLASS } from './constants';

const Container = styled.div({
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  alignItems: 'center',
  minWidth: 0,
});

export const withSelectIcon = (
  content: ReactNode,
  isSelect: boolean,
  editModeEnabled: boolean,
) =>
  isSelect ? (
    <Container className={CLASS.selectArrowContainer}>
      {content}
      {editModeEnabled ? (
        <IconDisclosureDownOutline size="s" className={CLASS.selectArrow} />
      ) : null}
    </Container>
  ) : (
    content
  );
