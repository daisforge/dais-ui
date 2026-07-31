import { ComponentProps } from 'react';

export const StoryCard = ({
  children,
  style,
  ...rest
}: ComponentProps<'div'>) => (
  <div
    style={{
      backgroundColor: 'red',
      padding: 16,
      borderRadius: 16,
      background: '#ededed',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);
