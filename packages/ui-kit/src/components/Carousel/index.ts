import { Carousel, CarouselItem } from '@salutejs/sdds-finai';
import { ComponentProps } from 'react';

type CarouselCompProps = ComponentProps<typeof Carousel>;
type CarouselItemCompProps = ComponentProps<typeof CarouselItem>;

export { Carousel, CarouselItem };
export type { CarouselCompProps, CarouselItemCompProps };
