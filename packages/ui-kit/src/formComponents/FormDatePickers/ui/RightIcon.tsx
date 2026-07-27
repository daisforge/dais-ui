import { IconDisclosureDownOutline } from '@ui-kit/icons';
import styled from 'styled-components';

export const RotatableIconDisclosureDownOutline = styled(
  IconDisclosureDownOutline
)<{
  opened: boolean;
}>`
  transform: ${({ opened }) => (opened ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
