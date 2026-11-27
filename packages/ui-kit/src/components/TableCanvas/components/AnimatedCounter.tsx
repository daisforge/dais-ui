import { Counter } from '@ui-kit/components/Counter';
import styled from 'styled-components';

export const AnimatedCounter = styled(Counter)({
  '@keyframes scalex': {
    from: {
      scale: '1.15',
    },
    to: {
      scale: '1',
    },
  },

  // Без fill-mode: конечный кадр совпадает с базовым scale: 1. С both завершённая
  // анимация оставалась активной и держала счётчик в отдельном композитном слое,
  // из-за чего соседний текст растеризовался по-разному от перерисовки к перерисовке.
  animation: 'scalex 0.5s ease',
});
