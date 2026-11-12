import { Divider } from '@ui-kit/components/Divider';
import { IconButton } from '@ui-kit/components/IconButton';
import { Typography } from '@ui-kit/components/Typography';
import { IconClose } from '@ui-kit/icons';
import type { MouseEvent } from 'react';
import { useRef, useState } from 'react';

import {
  StyledLeftPanel,
  StyledLeftPanelDivider,
  StyledLeftPanelZone,
  StyledRail,
  StyledRailGroup,
  StyledSection,
  StyledSectionContent,
  StyledSectionHeader,
  StyledSectionTitle,
  StyledSectionTitleIcon,
} from './AiAgentPopup.styled';
import type {
  AiAgentLeftPanelItem,
  AiAgentLeftPanelProps,
} from './AiAgentPopup.types';
import { isLeftPanelSection } from './AiAgentPopup.utils';

/**
 * Левая панель окна: полоса иконок, при клике по иконке раскрывается
 * раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
 * и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
 * к другим иконкам возвращаются только крестиком.
 *
 * Пункт без content это кнопка-действие: клик вызывает его onClick,
 * раздел не открывается. Кнопки с placement bottom прижаты к низу полосы.
 *
 * Открытый раздел управляется через activeKey (если передан) или хранится
 * внутри (defaultActiveKey). null означает закрытый раздел, видна полоса.
 */
export const AiAgentLeftPanel = ({
  items,
  activeKey,
  defaultActiveKey = null,
  onActiveKeyChange,
}: AiAgentLeftPanelProps) => {
  const isControlled = activeKey !== undefined;
  const [internalKey, setInternalKey] = useState<string | null>(
    defaultActiveKey,
  );
  const currentKey = isControlled ? activeKey : internalKey;

  const changeKey = (key: string | null) => {
    if (!isControlled) setInternalKey(key);
    onActiveKeyChange?.(key);
  };

  const activeItem =
    items.filter(isLeftPanelSection).find((item) => item.key === currentKey) ??
    null;
  const isOpen = Boolean(activeItem);

  const handleItemClick = (
    item: AiAgentLeftPanelItem,
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    item.onClick?.(event);
    if (isLeftPanelSection(item)) changeKey(item.key);
  };

  const renderRailButton = (item: AiAgentLeftPanelItem) => (
    <IconButton
      key={item.key}
      size="s"
      view="clear"
      disabled={item.disabled}
      onClick={(event: MouseEvent<HTMLButtonElement>) =>
        handleItemClick(item, event)
      }
    >
      {item.icon}
    </IconButton>
  );

  const bottomItems = items.filter((item) => item.placement === 'bottom');
  const topItems = items.filter((item) => item.placement !== 'bottom');

  // Последний открытый раздел держим для показа во время анимации закрытия:
  // при закрытии контент ещё виден, пока зона схлопывается до полосы
  const shownItemRef = useRef(activeItem);
  if (activeItem) {
    shownItemRef.current = activeItem;
  }
  const shownItem = shownItemRef.current;

  return (
    <StyledLeftPanel>
      <StyledLeftPanelZone $open={isOpen}>
        <StyledRail $active={!isOpen} aria-hidden={isOpen}>
          <StyledRailGroup>{topItems.map(renderRailButton)}</StyledRailGroup>
          {bottomItems.length > 0 && (
            <StyledRailGroup $bottom>
              {bottomItems.map(renderRailButton)}
            </StyledRailGroup>
          )}
        </StyledRail>
        <StyledSection $active={isOpen} aria-hidden={!isOpen}>
          {shownItem && (
            <>
              <StyledSectionHeader>
                <StyledSectionTitleIcon>
                  {shownItem.titleIcon ?? shownItem.icon}
                </StyledSectionTitleIcon>
                <StyledSectionTitle>
                  <Typography variant="BodyM" bold>
                    {shownItem.title}
                  </Typography>
                </StyledSectionTitle>
                <IconButton
                  size="s"
                  view="clear"
                  onClick={() => changeKey(null)}
                >
                  <IconClose size="s" />
                </IconButton>
              </StyledSectionHeader>
              <StyledSectionContent>{shownItem.content}</StyledSectionContent>
            </>
          )}
        </StyledSection>
      </StyledLeftPanelZone>
      <StyledLeftPanelDivider>
        <Divider orientation="vertical" />
      </StyledLeftPanelDivider>
    </StyledLeftPanel>
  );
};

AiAgentLeftPanel.displayName = 'AiAgentLeftPanel';
