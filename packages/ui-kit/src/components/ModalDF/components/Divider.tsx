import { Divider as SDDSDivider } from '@ui-kit/components/Divider';
import { s } from '@ui-kit/constants';
import styled from 'styled-components';

const C = {
  spaceX4: () => s.x4
};

export const Divider: typeof SDDSDivider = styled(SDDSDivider).attrs({
  length: '16px',
  orientation: 'vertical'
})`
  margin-inline: ${C.spaceX4};
`;
