import { Box } from '@ui-kit/components/Box';
// import { Divider } from '@ui-kit/components/Divider';
import React from 'react';

import { FeatureItem } from '../types';
import { FeatureIconBtn } from './feature-icon-btn';

export const RightSide = ({
  icons,
  featureItems
}: {
  icons: FeatureItem[];
  featureItems: FeatureItem[];
}) => (
  <Box $css="display: flex; flex-direction: row-reverse;">
    {icons.map((iconProps, index) => (
      <FeatureIconBtn
        key={iconProps.value}
        {...iconProps}
        iconsLength={icons.length}
        index={index}
      />
    ))}
    {!!featureItems.length && (
      <>
        {/* <Divider
          orientation="vertical"
          length="16px"
          style={{ paddingLeft: '1px' }}
        /> */}

        {/* modals of featureItems */}
        {featureItems.map((item) => {
          if ('CustomIconRender' in item) {
            return null;
          }
          if (!item?.modal) {
            return null;
          }
          return item?.modal;
        })}
      </>
    )}
  </Box>
);
