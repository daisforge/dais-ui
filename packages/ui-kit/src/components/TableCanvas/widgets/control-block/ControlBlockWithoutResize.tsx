/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box } from '@ui-kit/components/Box';
import { Collapse } from '@ui-kit/components/Collapse';
import { Flow } from '@ui-kit/components/Flow';
import {
  ActiveViewModsType,
  ControlBlockSize,
} from '@ui-kit/components/TableCanvas/types';
import React from 'react';

import { useTableCollapse } from '../../contexts';
import { CollapseTableButton } from '../../feature-collapse-table';
import { SearchBlock } from '../../feature-searching';
// import { SummaryCheckbox } from '../../feature-select-row/summary-checkbox';
import { HEIGHT_CONTROL_BLOCK } from '../../styles';
import { controlBlockClassNames as cls } from './control-block.classnames';
import {
  getControlBlockSizeMap,
  getControlBlockSpacingMap,
} from './control-block.constants';
import { ControlBlockButton, StyledDivider } from './control-block-button';
import { type ControlBlockButtonProps } from './control-block-button.types';
import { RightSide } from './right-side';
import {
  ControlBlockStyled,
  LefSideStyled,
  RightButtonsContainer,
} from './styled';
import { FeatureItem } from './types';

export const ControlBlockWithoutResize = ({
  leftSideInner,
  rightSideInner,
  isHaveControlBlock,
  activeView,

  featuresObj: {
    icons,
    featureItems,
    featureRightButtons,
    featureLeftButtons,
    featureSearching: {
      isActiveSearching,
      showSearchBlock,
      searchQueryLocalValue,
      placeholderSearchBlock,
    },
  },
  $borderTopRounded,
  collapseButtonPlacement = 'inside',
  controlBlockSize,
}: {
  leftSideInner: ControlBlockButtonProps[] | undefined;
  rightSideInner: ControlBlockButtonProps[] | undefined;

  isHaveControlBlock: boolean | undefined;
  activeView: ActiveViewModsType;
  controlBlockSize?: ControlBlockSize;
  featuresObj: {
    icons: FeatureItem[];
    featureItems: FeatureItem[];
    all: FeatureItem[];
    featureRightButtons: ControlBlockButtonProps[];
    featureLeftButtons: ControlBlockButtonProps[];
    featureSearching: {
      isActiveSearching: boolean;
      showSearchBlock: boolean;
      setShowSearchBlock: React.Dispatch<React.SetStateAction<boolean>>;
      searchQueryLocalValue: string;
      placeholderSearchBlock: string;
    };
  };
  $borderTopRounded: boolean;
  collapseButtonPlacement?: 'inside' | 'above';
}) => {
  const { isCollapsed } = useTableCollapse();

  // Размерный каскад и спейсинги — те же, что у адаптивного ControlBlock,
  // чтобы неадаптивный контрл-блок выглядел идентично (размеры кнопок/иконок,
  // гэпы и паддинги правой зоны, высота и паддинги контейнера).
  const sizeMap = getControlBlockSizeMap(controlBlockSize);
  const spacing = getControlBlockSpacingMap(controlBlockSize);

  const resultRightSightInner = [
    ...(rightSideInner ?? []),
    ...featureRightButtons,
  ];
  const resultLeftSightInner = [
    ...featureLeftButtons,
    ...(leftSideInner ?? []),
  ];

  return (
    <Collapse
      isOpen={isHaveControlBlock}
      sizeOnOpen={HEIGHT_CONTROL_BLOCK}
      unMountOnClose
    >
      <ControlBlockStyled
        $activeView={activeView}
        $borderTopRounded={
          collapseButtonPlacement === 'above' ? false : $borderTopRounded
        }
        $isVisibleSearching={isActiveSearching && showSearchBlock}
        $calculatedSearchQuery={searchQueryLocalValue}
        $placeholderSearchBlock={placeholderSearchBlock}
        $collapsedTable={isCollapsed}
        $containerPadding={spacing.containerPadding}
        $containerHeight={spacing.containerHeight}
      >
        <Flow
          alignment="center"
          style={{
            flexWrap: 'nowrap',
          }}
        >
          {collapseButtonPlacement === 'inside' && (
            <CollapseTableButton
              buttonSize={sizeMap.collapsingButton}
              iconSize={sizeMap.collapsingIcon}
            />
          )}
          <LefSideStyled>
            {/* Теперь в massActions */}
            {/* <SummaryCheckbox isHaveRightDivider={!!leftSideInner?.length} /> */}

            {resultLeftSightInner?.map((props, i, arr) => (
              <ControlBlockButton
                key={props['key'] ?? `${props['text']}${i}` ?? i}
                {...props}
                index={i}
                isLastButtonInnArray={i === arr.length - 1}
                buttonSize={sizeMap.sideInnerButton}
                iconSize={sizeMap.sideInnerIcon}
                showLabel
              />
            ))}
          </LefSideStyled>
        </Flow>
        {/* Поиск */}
        {isActiveSearching && (
          <div className={cls.searchControlBlock}>
            <SearchBlock isVisible={showSearchBlock} />
          </div>
        )}
        <Box
          $css="display: flex; align-items: center;"
          className={cls.rightControlBlock}
        >
          {/* Кнопки правой зоны: гост-кнопки разработчика (rightSideInner) +
              кнопки фич (featureRightButtons). Разделяются ГЭПОМ контейнера, без
              дивайдеров между собой — как в адаптивном ControlBlock. */}
          {!!resultRightSightInner.length && (
            <RightButtonsContainer
              $gap={spacing.rightButtonsGap}
              $paddingInline={spacing.rightButtonsPaddingInline}
            >
              {resultRightSightInner.map((props, i) => (
                <ControlBlockButton
                  key={props['key'] ?? `${props?.['text']} ${i}`}
                  {...props}
                  index={i}
                  buttonSize={sizeMap.sideInnerButton}
                  iconSize={sizeMap.sideInnerIcon}
                  showLabel
                />
              ))}
            </RightButtonsContainer>
          )}
          {/* Divider между зоной кнопок и зоной иконок */}
          {!!resultRightSightInner.length && !!icons.length && (
            <StyledDivider orientation="vertical" length="16px" />
          )}

          {/* RightSide - FeatureIconButtons and SettingsIconButton */}
          <RightSide
            icons={icons}
            featureItems={featureItems}
            featureIconSize={sizeMap.featureIcon}
          />
        </Box>
      </ControlBlockStyled>
    </Collapse>
  );
};
