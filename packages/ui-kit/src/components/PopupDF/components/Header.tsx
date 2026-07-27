import { IconButton } from '@ui-kit/components/IconButton';
import { TypographyWithAutoTooltip } from '@ui-kit/components/Typography';
import { IconChevronLeft, IconClose } from '@ui-kit/icons';

import { usePopupDFContext } from '../ctxs';
import {
  StyledHeader,
  StyledHeaderActions,
  StyledHeaderBackButton,
  StyledHeaderContent,
  StyledHeaderDescription,
  StyledHeaderRightBlock,
  StyledHeaderSubHeader,
  StyledHeaderTitle,
  StyledHeaderTop
} from '../styled';
import type { PopupDFHeaderProps } from '../types';

export function Header({
  title,
  description,
  subHeader,
  rightBlock,
  showCloseButton = true,
  onBackButtonClick,
  onClose,
  ...rest
}: PopupDFHeaderProps) {
  const { onClose: onCloseFromContext, size } = usePopupDFContext();
  const resolvedOnClose = onClose ?? onCloseFromContext;
  const shouldShowCloseButton = showCloseButton && !!resolvedOnClose;
  const titleVariant = size === 's' ? 'BodyXS' : 'BodyM';
  const descriptionVariant = 'BodyXS';
  const closeButtonSize = size === 's' ? 'xxs' : 'xs';
  const headerIconSize = 'xs';
  const isDescriptionPrimitive =
    typeof description === 'string' || typeof description === 'number';
  const alignTitleToClose = !description && shouldShowCloseButton;

  return (
    <StyledHeader $size={size} {...rest}>
      <StyledHeaderTop $size={size} $alignTitleToClose={alignTitleToClose}>
        {onBackButtonClick && (
          <StyledHeaderBackButton>
            <IconButton
              onClick={onBackButtonClick}
              size={closeButtonSize}
              view="secondary"
              pin="circle-circle"
              title="Назад"
            >
              <IconChevronLeft size={headerIconSize} />
            </IconButton>
          </StyledHeaderBackButton>
        )}

        <StyledHeaderContent $alignTitleToClose={alignTitleToClose}>
          {title && (
            <StyledHeaderTitle>
              <TypographyWithAutoTooltip
                variant={titleVariant}
                bold
                lines={2}
                tooltipText={typeof title === 'string' ? title : undefined}
              >
                {title}
              </TypographyWithAutoTooltip>
            </StyledHeaderTitle>
          )}
          {description && (
            <StyledHeaderDescription $size={size}>
              {isDescriptionPrimitive ? (
                <TypographyWithAutoTooltip
                  variant={descriptionVariant}
                  lines={2}
                  tooltipText={description}
                >
                  {description}
                </TypographyWithAutoTooltip>
              ) : (
                description
              )}
            </StyledHeaderDescription>
          )}
        </StyledHeaderContent>

        {rightBlock && (
          <StyledHeaderRightBlock $size={size}>
            {rightBlock}
          </StyledHeaderRightBlock>
        )}

        {shouldShowCloseButton && (
          <StyledHeaderActions $size={size} $hasRightBlock={!!rightBlock}>
            <IconButton
              onClick={resolvedOnClose}
              size={closeButtonSize}
              view="secondary"
              pin="circle-circle"
              title="Закрыть"
            >
              <IconClose size={headerIconSize} />
            </IconButton>
          </StyledHeaderActions>
        )}
      </StyledHeaderTop>

      {subHeader && (
        <StyledHeaderSubHeader $size={size}>{subHeader}</StyledHeaderSubHeader>
      )}
    </StyledHeader>
  );
}
