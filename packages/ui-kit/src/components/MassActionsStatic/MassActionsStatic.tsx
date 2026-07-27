import { FC } from 'react';

import { StaticContainer } from './styled';
import type { MassActionsStaticProps } from './types';

export const MassActionsStatic: FC<MassActionsStaticProps> = ({
  children,
  className,
  style,
  position = 'absolute',
  show,
  animate = true
}: MassActionsStaticProps) => {
  // show === undefined означает, что компонент всегда виден
  const isVisible = show !== undefined ? show : true;

  return (
    <StaticContainer
      className={className}
      style={style}
      $position={position}
      $isVisible={isVisible}
      $animate={animate}
    >
      {children}
    </StaticContainer>
  );
};
