import { Counter } from '@ui-kit/components/Counter';
import styled from 'styled-components';

export const AnimatedCounter = styled(Counter)({
  '@keyframes scalex': {
    from: {
      scale: '1.15'
    },
    to: {
      scale: '1'
    }
  },

  animation: 'scalex 0.5s ease both'
});
