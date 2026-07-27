import { Divider } from '@ui-kit/components/Divider';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { TableTooltip } from '@ui-kit/components/Table/components/TableTooltip';
import { getDataAttributes } from '@ui-kit/components/Table/utils';
import React from 'react';

import { FeatureItem } from '../types';

export const FeatureIconBtn = ({
  iconsLength,
  index,
  ...item
}: FeatureItem & { iconsLength: number; index: number }) => {
  if ('CustomIconRender' in item) {
    const { CustomIconRender } = item;
    return (
      <div
        style={{
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CustomIconRender key={item.value} />
      </div>
    );
  }

  const { Icon, onClick, dividerLeft, modal, ...rest } = item;
  const isLastItemInArr = iconsLength - 1 === index;
  return (
    <>
      <div>
        <TableTooltip
          text={'label' in rest ? rest.label : ''}
          animated
          target={
            <EmbedIconButton
              onClick={onClick}
              // view="clear"
              className={item.className}
              {...getDataAttributes(item)}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Icon color="inherit" />
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
