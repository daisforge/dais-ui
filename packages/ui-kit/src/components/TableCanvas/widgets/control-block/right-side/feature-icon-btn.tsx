import { Divider } from '@ui-kit/components/Divider';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { TableTooltip } from '@ui-kit/components/TableCanvas/components/TableTooltip';
import { getDataAttributes } from '@ui-kit/components/TableCanvas/utils';
import React from 'react';

import { useHeaderContext } from '../../../contexts';
import { FeatureItem } from '../types';

export const FEATURE_ICON_SIZES = {
  s: { button: 32, icon: 'xs' as const },
  m: { button: 40, icon: 's' as const }
};

export const FeatureIconBtn = ({
  iconsLength,
  index,
  featureIconSize = 'm',
  measureRef,
  ...item
}: FeatureItem & {
  iconsLength: number;
  index: number;
  featureIconSize?: 's' | 'm';
  /** Реф для замера реальной ширины иконки (модель компрессии) */
  measureRef?: (el: HTMLDivElement | null) => void;
}) => {
  const { rowSize } = useHeaderContext();
  const sizeConfig = FEATURE_ICON_SIZES[featureIconSize];
  if ('CustomIconRender' in item) {
    const { CustomIconRender } = item;
    return (
      <div
        ref={measureRef}
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Здесь иконка рисуется в самом контрл-блоке, поэтому
            isInDropdown false. rowSize даём, чтобы потребитель при желании
            мог учитывать и его. */}
        <CustomIconRender
          key={item.value}
          rowSize={rowSize}
          isInDropdown={false}
        />
      </div>
    );
  }

  const { Icon, onClick, dividerLeft, modal, ...rest } = item;
  const isLastItemInArr = iconsLength - 1 === index;
  return (
    <>
      <div ref={measureRef}>
        <TableTooltip
          text={'label' in rest ? rest.label : ''}
          animated
          target={
            <EmbedIconButton
              onClick={onClick}
              size={featureIconSize}
              className={item.className}
              {...getDataAttributes(item)}
              style={{
                width: `${sizeConfig.button}px`,
                height: `${sizeConfig.button}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Icon color="inherit" size={sizeConfig.icon} />
            </EmbedIconButton>
          }
        />
      </div>
      {/* так как в родителе row-reverse divider вставлен после иконки */}
      {dividerLeft && !isLastItemInArr && (
        <Divider
          orientation="vertical"
          length="16px"
          style={{ paddingLeft: '1px' }}
        />
      )}
      {modal}
    </>
  );
};
