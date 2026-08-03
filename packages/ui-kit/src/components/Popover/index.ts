import { Popover } from '@salutejs/sdds-finai';
import { ComponentProps } from 'react';

export type {
  PopoverPlacement,
  PopoverProps,
  PopoverTrigger,
} from '@salutejs/sdds-finai';

type PopoverCompProps = ComponentProps<typeof Popover>;
/**
 * @deprecated, используйте `PopoverCompProps`
 */
type CompPopoverProps = PopoverCompProps;

export { Popover };
export type { CompPopoverProps, PopoverCompProps };
