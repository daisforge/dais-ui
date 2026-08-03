/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box } from '@ui-kit/components/Box';
import { Collapse } from '@ui-kit/components/Collapse';
import { Flow } from '@ui-kit/components/Flow';
import { ActiveViewModsType } from '@ui-kit/components/Table/types';
import React from 'react';

import { useTableCollapse } from '../../contexts';
import { CollapseTableButton } from '../../feature-collapse-table';
import { SearchBlock } from '../../feature-searching';
// import { SummaryCheckbox } from '../../feature-select-row/summary-checkbox';
import { HEIGHT_CONTROL_BLOCK } from '../../styles';
import { controlBlockClassNames as cls } from './control-block.classnames';
import { ControlBlockButton, StyledDivider } from './control-block-button';
import { type ControlBlockButtonProps } from './control-block-button.types';
import { RightSide } from './right-side';
import { ControlBlockStyled, LefSideStyled } from './styled';
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
}: {
  leftSideInner: ControlBlockButtonProps[] | undefined;
  rightSideInner: ControlBlockButtonProps[] | undefined;

  isHaveControlBlock: boolean | undefined;
  activeView: ActiveViewModsType;
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
      >
        <Flow
          alignment="center"
          style={{
            flexWrap: 'nowrap',
          }}
        >
          {collapseButtonPlacement === 'inside' && <CollapseTableButton />}
          <LefSideStyled>
            {/* Теперь в massActions */}
            {/* <SummaryCheckbox isHaveRightDivider={!!leftSideInner?.length} /> */}

            {resultLeftSightInner?.map((props, i, arr) => (
              <ControlBlockButton
                key={props['key'] ?? `${props['text']}${i}` ?? i}
                {...props}
                index={i}
                isLastButtonInnArray={i === arr.length - 1}
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
        <Box $css="display: flex;" className={cls.rightControlBlock}>
          {/* обычные (добавляемые разрабом на проекте) гост кнопки в правой части контролБлока */}
          {/* и добавляемые фичами в таблице кнопки - featureRightButtons */}
          {!!resultRightSightInner.length && (
            <>
              {resultRightSightInner.map((props, i, arr) => (
                <ControlBlockButton
                  key={props['key'] ?? `${props?.['text']} ${i}`}
                  {...props}
                  index={i}
                  isLastButtonInnArray={i === arr.length - 1}
                  showLabel
                />
              ))}
              {!!icons.length && (
                <StyledDivider orientation="vertical" length="16px" />
              )}
            </>
          )}

          {/* RightSide - FeatureIconButtons and SettingsIconButton */}
          <RightSide icons={icons} featureItems={featureItems} />
        </Box>
      </ControlBlockStyled>
    </Collapse>
  );
};
