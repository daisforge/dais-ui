import { IconCalendarOutline } from '@salutejs/plasma-icons';
import { DatePicker as BaseDatePicker } from '@salutejs/sdds-finai';
import React, { forwardRef, useState } from 'react';

import type { DatePickerCompProps } from './DatePicker.types';

const DefaultRightIcon = ({
  datePickerSize
}: {
  datePickerSize: DatePickerCompProps['size'];
}) => (
  <IconCalendarOutline
    color="inherit"
    size={datePickerSize === 'xs' ? 'xs' : 's'}
  />
);

export const DatePicker = forwardRef<HTMLInputElement, DatePickerCompProps>(
  (
    {
      opened: propOpened,
      onToggle: propOnToggle,
      contentLeft,
      contentRight,
      size,
      ...props
    },
    ref
  ) => {
    const [internalOpened, setInternalOpened] = useState(false);
    const opened = propOpened !== undefined ? propOpened : internalOpened;

    const handleToggle = (value: boolean) => {
      propOnToggle?.(value);
      setInternalOpened(value);
    };

    return (
      <BaseDatePicker
        ref={ref}
        opened={opened}
        onToggle={handleToggle}
        contentRight={
          contentRight ?? <DefaultRightIcon datePickerSize={size} />
        }
        size={size}
        {...props}
      />
    );
  }
);

DatePicker.displayName = 'DatePicker';
