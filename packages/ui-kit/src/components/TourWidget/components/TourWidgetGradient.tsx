import { useId } from 'react';

import { StyledGradient, StyledShapeGradient } from '../TourWidget.styled';
import type { TourWidgetOrientation } from '../types';

type TourWidgetGradientProps = {
  orientation: TourWidgetOrientation;
};

// Градиент собран из двух слоев: SVG рисует фигуру хвоста из Figma и
// растягивается вместе с карточкой через preserveAspectRatio="none", а
// StyledGradient добавляет мягкую размытую подсветку снизу.
const tailGradientConfig = {
  vertical: {
    viewBox: '0 0 286 480',
    gradient: {
      x1: '0',
      y1: '318',
      x2: '286',
      y2: '480',
      middleOffset: '0.5',
      startOpacity: '0.56',
      middleOpacity: '0.62',
      endOpacity: '0.74',
    },
    filter: {
      x: '-20%',
      y: '-30%',
      width: '140%',
      height: '170%',
      blur: '18',
    },
    path: 'M0 318 C 34 420 138 454 286 426 L286 482 L0 482 Z',
  },
  horizontal: {
    viewBox: '0 0 720 260',
    gradient: {
      x1: '0',
      y1: '170',
      x2: '720',
      y2: '260',
      middleOffset: '0.55',
      startOpacity: '0.5',
      middleOpacity: '0.58',
      endOpacity: '0.7',
    },
    filter: {
      x: '-12%',
      y: '-40%',
      width: '124%',
      height: '190%',
      blur: '22',
    },
    path: 'M0 172 C 88 228 330 252 720 206 L720 262 L0 262 Z',
  },
} as const;

export const TourWidgetGradient = ({
  orientation,
}: TourWidgetGradientProps) => {
  const reactId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const gradientId = `tour-widget-tail-gradient-${reactId}`;
  const blurId = `tour-widget-tail-blur-${reactId}`;
  const tailConfig = tailGradientConfig[orientation];

  return (
    <>
      <StyledShapeGradient aria-hidden viewBox={tailConfig.viewBox}>
        <defs>
          <linearGradient
            id={gradientId}
            x1={tailConfig.gradient.x1}
            y1={tailConfig.gradient.y1}
            x2={tailConfig.gradient.x2}
            y2={tailConfig.gradient.y2}
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0"
              stopColor="#6e87db"
              stopOpacity={tailConfig.gradient.startOpacity}
            />
            <stop
              offset={tailConfig.gradient.middleOffset}
              stopColor="#00e0ff"
              stopOpacity={tailConfig.gradient.middleOpacity}
            />
            <stop
              offset="1"
              stopColor="#56ff88"
              stopOpacity={tailConfig.gradient.endOpacity}
            />
          </linearGradient>
          <filter
            id={blurId}
            x={tailConfig.filter.x}
            y={tailConfig.filter.y}
            width={tailConfig.filter.width}
            height={tailConfig.filter.height}
          >
            <feGaussianBlur stdDeviation={tailConfig.filter.blur} />
          </filter>
        </defs>
        <path
          d={tailConfig.path}
          fill={`url(#${gradientId})`}
          filter={`url(#${blurId})`}
        />
      </StyledShapeGradient>
      <StyledGradient aria-hidden />
    </>
  );
};

TourWidgetGradient.displayName = 'TourWidget.Gradient';
