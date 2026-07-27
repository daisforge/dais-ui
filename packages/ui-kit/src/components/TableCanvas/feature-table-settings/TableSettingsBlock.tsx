import React, { FC } from 'react';

import { FeatureItem } from '../widgets/control-block/types';
import { ButtonFeaturesGridContainer, SettingsContainer } from './styled';
import { FeaturesSidebarBlock } from './TableFeatureBlock';

export const TableSettingsBlock: FC<{
  defaultSettings?: FeatureItem[];
  features?: FeatureItem[];
  customGeneralSettingsSlot?: React.ReactNode;
}> = ({ defaultSettings = [], features = [], customGeneralSettingsSlot }) => {
  const buttonFeatures: FeatureItem[] = [];
  const switchFeatures: FeatureItem[] = [];
  const otherFeatures: FeatureItem[] = [];

  // Обрабатываем все фичи (и defaultSettings и features)
  [...defaultSettings, ...features].forEach((featureItem) => {
    switch (featureItem.details?.type) {
      case 'button':
        buttonFeatures.push(featureItem);
        break;
      case 'switch':
        switchFeatures.push(featureItem);
        break;
      default:
        otherFeatures.push(featureItem);
        break;
    }
  });

  // Debug (оставить на будущее для дебага)
  // console.group('TableSettingsBlock');
  // console.debug('features', features);
  // console.debug('defaultSettings', defaultSettings);
  // console.groupEnd();

  return (
    <SettingsContainer>
      {buttonFeatures.length > 0 && (
        <ButtonFeaturesGridContainer $count={buttonFeatures.length}>
          <FeaturesSidebarBlock features={buttonFeatures} />
        </ButtonFeaturesGridContainer>
      )}
      {switchFeatures.length > 0 && (
        <FeaturesSidebarBlock features={switchFeatures} />
      )}
      {otherFeatures.length > 0 && (
        <FeaturesSidebarBlock features={otherFeatures} />
      )}
      {customGeneralSettingsSlot}
    </SettingsContainer>
  );
};
