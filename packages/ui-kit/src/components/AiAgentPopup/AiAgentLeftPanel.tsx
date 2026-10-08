import { Divider } from '@ui-kit/components/Divider';
import { IconButton } from '@ui-kit/components/IconButton';
import { Typography } from '@ui-kit/components/Typography';
import { IconClose } from '@ui-kit/icons';
import { useRef, useState } from 'react';

import {
  StyledLeftPanel,
  StyledLeftPanelDivider,
  StyledLeftPanelZone,
  StyledRail,
  StyledSection,
  StyledSectionContent,
  StyledSectionHeader,
  StyledSectionTitle,
  StyledSectionTitleIcon,
} from './AiAgentPopup.styled';
import type { AiAgentLeftPanelProps } from './AiAgentPopup.types';

/**
 * Левая панель окна: полоса иконок, при клике по иконке раскрывается
 * раздел фиксированной ширины с зашитой шапкой (иконка, заголовок, крестик)
 * и кастомным контентом. Полоса и раздел показываются по очереди, из раздела
 * к другим иконкам возвращаются только крестиком.
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

  const activeItem = items.find((item) => item.key === currentKey) ?? null;
  const isOpen = Boolean(activeItem);

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
          {items.map((item) => (
            <IconButton
              key={item.key}
              size="s"
              view="clear"
              onClick={() => changeKey(item.key)}
            >
              {item.icon}
            </IconButton>
          ))}
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
