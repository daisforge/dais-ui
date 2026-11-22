import { mergeClasses } from '@ui-kit/utils';
import { isValidElement } from 'react';

import {
  analyticalWidgetClassNames as cls,
  SLOT_VISIBILITY,
} from './AnalyticalWidget.constants';
import {
  StyledContent,
  StyledMiddleSlot,
  StyledTopSlot,
  StyledWidget,
} from './AnalyticalWidget.styled';
import { AnalyticalWidgetProps } from './AnalyticalWidget.types';
import {
  AnalyticalWidgetIconButtonDots,
  AnalyticalWidgetIconButtonFilter,
} from './components/AnalyticalWidgetButtons';
import { AnalyticalWidgetChipsGroup } from './components/AnalyticalWidgetChips';
import { AnalyticalWidgetHeader } from './components/AnalyticalWidgetHeader';

export const AnalyticalWidget = ({
  size = 'l',
  scrollable = true,
  headerSlot,
  topSlot,
  middleSlot,
  contentSlot,
  classes,
  $css,
}: AnalyticalWidgetProps) => {
  const slotVisibility = SLOT_VISIBILITY[size];
  // rightSlot шапки заполнен? Знаем только мы (у потребителя нет доступа к контенту).
  // Вешаем маркер на корень, чтобы абсолютная dots-кнопка подняла top до 16 через CSS.
  const hasRightSlot =
    isValidElement<{ rightSlot?: unknown }>(headerSlot) &&
    Boolean(headerSlot.props.rightSlot);
  return (
    <StyledWidget
      $size={size}
      $css={$css}
      className={mergeClasses(
        cls.root,
        hasRightSlot ? cls.hasRightSlot : undefined,
        classes?.root,
      )}
    >
      {/* // TODO: временно добавленная обертка
      // Шапка не может быть меньше 32px, даже если ее нет, контейнер с данной высотой должен существовать, чтобы кнопка троеточия, внедряемые микрофронтендом другой команды с абсолютным позиционированием не ломала верстку */}
      <div
        style={{
          minHeight: '32px',
        }}
      >
        {headerSlot}
      </div>
      {(slotVisibility.topSlot && topSlot) ||
      (slotVisibility.middleSlot && middleSlot) ? (
        <div>
          {slotVisibility.topSlot && topSlot && (
            <StyledTopSlot
              className={mergeClasses(cls.topSlot, classes?.topSlot)}
            >
              {topSlot}
            </StyledTopSlot>
          )}
          {slotVisibility.middleSlot && middleSlot && (
            <StyledMiddleSlot
              className={mergeClasses(cls.middleSlot, classes?.middleSlot)}
            >
              {middleSlot}
            </StyledMiddleSlot>
          )}
        </div>
      ) : null}
      <StyledContent
        scrollable={scrollable}
        className={mergeClasses(cls.contentSlot, classes?.contentSlot)}
      >
        {contentSlot}
      </StyledContent>
    </StyledWidget>
  );
};

AnalyticalWidget.Header = AnalyticalWidgetHeader;
AnalyticalWidget.FilterIconButton = AnalyticalWidgetIconButtonFilter;
AnalyticalWidget.DotsIconButton = AnalyticalWidgetIconButtonDots;
AnalyticalWidget.Chips = AnalyticalWidgetChipsGroup;
