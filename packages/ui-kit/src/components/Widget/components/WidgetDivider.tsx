import { Divider } from '@ui-kit/components/Divider';
import { s } from '@ui-kit/constants';
import styled from 'styled-components';

const C = {
  spaceX2: () => s.x2
};

// type WidgetDividerProps = ComponenProps<typeof Divider>;
export const WidgetDivider: typeof Divider = styled(Divider).attrs({
  length: '16px',
  orientation: 'vertical'
})`
  margin-left: ${C.spaceX2};
  margin-right: calc(${C.spaceX2} + 1px);
`;
