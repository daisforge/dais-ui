import { Badge, type BadgeCompProps } from '@ui-kit/components/Badge';
import { s } from '@ui-kit/constants';
import styled from 'styled-components';

import { cls } from '../classNames';
import { StyledHeader } from '../styled';
import type { ModalDFHeaderProps } from '../types';
import { BackIconButton } from './BackIconButton';
import { Divider } from './Divider';
import { ServiceButtons } from './ServiceButtons';

const StyledBadge: typeof Badge = styled(Badge).attrs({
  view: 'light' as BadgeCompProps['view'],
})`
  // margin-left: ${s.x8};
`;

export function Header({
  title,
  badge,
  subTitle,
  rightBlock,
  onBackClick,
  showServiceButtons = true,
  showBackButton = false,
  ...rest
}: ModalDFHeaderProps) {
  return (
    <StyledHeader {...rest}>
      <div className={cls.headerTitlesContainer}>
        {showBackButton && <BackIconButton onClick={onBackClick} />}
        <div className={cls.headerTitlesBox}>
          {title && (
            <h3 className={cls.headerTitle}>
              {title}
              {badge && (
                <>
                  &nbsp;&nbsp;
                  <StyledBadge view="light" {...badge} />
                </>
              )}
            </h3>
          )}
          {subTitle && <p className={cls.headerSubTitle}>{subTitle}</p>}
        </div>
      </div>
      <div className={cls.headerRightBlock}>
        {rightBlock}

        {rightBlock && <Divider />}
        {showServiceButtons && <ServiceButtons />}
      </div>
    </StyledHeader>
  );
}
