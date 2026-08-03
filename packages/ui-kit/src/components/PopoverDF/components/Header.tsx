import { IconButton } from '@ui-kit/components/IconButton';
import { TypographyWithAutoTooltip } from '@ui-kit/components/Typography';
import { IconClose } from '@ui-kit/icons';

import { usePopoverDFContext } from '../ctxs';
import {
  StyledHeader,
  StyledHeaderActions,
  StyledHeaderBottom,
  StyledHeaderContent,
  StyledHeaderDescription,
  StyledHeaderTitle,
} from '../styled';
import type { PopoverDFHeaderProps } from '../types';

export function Header({
  title,
  description,
  bottomBlock,
  showCloseButton = true,
  onClose,
  ...rest
}: PopoverDFHeaderProps) {
  const { onClose: onCloseFromContext, size } = usePopoverDFContext();
  const resolvedOnClose = onClose ?? onCloseFromContext;
  const shouldShowCloseButton = showCloseButton && !!resolvedOnClose;
  const titleVariant = size === 's' ? 'BodyXS' : 'BodyM';
  const descriptionVariant = size === 's' ? 'BodyXXS' : 'BodyXS';
  const closeButtonSize = size === 's' ? 'xxs' : 'xs';
  const closeIconSize = 'xs';
  const isDescriptionPrimitive =
    typeof description === 'string' || typeof description === 'number';

  return (
    <StyledHeader $size={size} {...rest}>
      <StyledHeaderContent>
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

      {shouldShowCloseButton && (
        <StyledHeaderActions $size={size}>
          <IconButton
            onClick={resolvedOnClose}
            size={closeButtonSize}
            view="secondary"
            pin="circle-circle"
            title="Закрыть"
          >
            <IconClose size={closeIconSize} />
          </IconButton>
        </StyledHeaderActions>
      )}

      {bottomBlock && (
        <StyledHeaderBottom $size={size}>{bottomBlock}</StyledHeaderBottom>
      )}
    </StyledHeader>
  );
}
