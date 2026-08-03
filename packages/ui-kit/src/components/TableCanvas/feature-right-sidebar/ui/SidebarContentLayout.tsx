import { IconButton } from '@ui-kit/components/IconButton';
import { TypographyWithAutoTooltip } from '@ui-kit/components/Typography';
import { IconClose } from '@ui-kit/icons';
import React, { FC, PropsWithChildren } from 'react';

import { useSidebar } from '../../contexts';
import { DomMetadata } from '../../types/additional.type';
import { DOM_METADATA_ACTIONS } from '../../types/dom-metadata-actions';
import {
  SidebarLayout,
  SidebarLayoutContent,
  SidebarLayoutHeader,
  StyledTitleBox,
} from './styled';
import { tableSidebarClassNames as cls } from './TableSidebar.classnames';

export const SidebarContentLayout: FC<
  PropsWithChildren<{
    title: string;
    titleRightSlot?: React.ReactNode;
    domMetadata?: DomMetadata;
  }>
> = ({ title, titleRightSlot, domMetadata, children }) => {
  const { toggle } = useSidebar();
  return (
    <SidebarLayout>
      <SidebarLayoutHeader>
        <StyledTitleBox>
          <TypographyWithAutoTooltip
            variant="H4"
            bold
            lines={1}
            tooltipText={title}
            tooltipProps={{
              placement: 'top',
            }}
          >
            {title}
          </TypographyWithAutoTooltip>
          {titleRightSlot}
        </StyledTitleBox>
        <div className={cls.tableSidebarCloseButton}>
          <IconButton
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              toggle();
              domMetadata?.onClick?.(e, {
                action: DOM_METADATA_ACTIONS.CLOSE_SIDEBAR,
              });
            }}
            size="xs"
            view="secondary"
            pin="circle-circle"
            title="Закрыть"
          >
            <IconClose size="xs" />
          </IconButton>
        </div>
      </SidebarLayoutHeader>
      <SidebarLayoutContent>{children}</SidebarLayoutContent>
    </SidebarLayout>
  );
};
