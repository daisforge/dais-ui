import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { Switch } from '@ui-kit/components/Switch';
import { BodyS, BodyXS } from '@ui-kit/components/Typography';
import { IconDisclosureRight, IconDone } from '@ui-kit/icons';
import { textInfo, textSecondary } from '@ui-kit/tokens';
import React, { useEffect, useRef, useState } from 'react';

import { TableDropdown } from '../components/TableDropdown';
import { useHeaderContext } from '../contexts';
import { getDataAttributes } from '../utils';
import { DropdownRenderCtx, FeatureItem } from '../widgets/control-block/types';
import {
  getDropdownIconSize,
  resolveFeatureIcon
} from '../widgets/control-block/use-buttons-to-dropdown';
import {
  CheckboxWithTitle,
  DropdownWithTitle,
  FeatureTableDropdownContainer,
  FeatureTableDropdownTargetButton,
  truncateText
} from './styled';

const tableDropdownOffset = [0, 5] as [number, number];

const FeatureRenderer: React.FC<{ feature: FeatureItem }> = ({ feature }) => {
  const { rowSize } = useHeaderContext();
  // Здесь фича рисуется в панели фич, а не в overflow дропдауне
  const iconCtx: DropdownRenderCtx = { rowSize, isInDropdown: false };
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedTextContainer = useRef<HTMLDivElement>(null);
  const iconContainer = useRef<HTMLDivElement>(null);
  const [isFullWidth, setIsFullWidth] = useState(false);

  /**
   * Определяет, нужно ли включать режим обрезки текста (...), сравнивая:
   * - containerWidth (доступное пространство)
   * - textWidth + iconWidth (занимаемое пространство)
   *
   * Если текст не помещается (containerWidth < textWidth + iconWidth),
   * устанавливается width: 100%, что активирует text-overflow: ellipsis
   */
  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth;
    const textWidth = selectedTextContainer.current?.offsetWidth;
    const iconWidth = iconContainer.current?.offsetWidth;

    if (containerWidth && textWidth && iconWidth) {
      setIsFullWidth(containerWidth < textWidth + iconWidth);
    }
  }, [rowSize, feature.details]);

  if (!feature.details) return null;

  switch (feature.details.type) {
    case 'button':
      return (
        <Button
          onClick={feature.details.onClick}
          stretching="filled"
          view="secondary"
          className={feature.details.className}
          size="s"
          {...getDataAttributes(feature.details)}
        >
          <Flow orientation="horizontal" mainAxisGap={6} alignment="center">
            {resolveFeatureIcon(feature.details.icon, iconCtx)}
            {feature.details.label}
          </Flow>
        </Button>
      );

    case 'switch':
      return (
        <CheckboxWithTitle
          title={feature.details.checked ? 'Выключить' : 'Включить'}
          className={feature.details?.className}
          {...getDataAttributes(feature.details)}
        >
          <Switch
            label={feature.details.label}
            checked={feature.details.checked}
            onChange={feature.details.onChange}
            toggleSize="s"
          />
        </CheckboxWithTitle>
      );

    case 'select': {
      const selectDetails = feature.details;
      return (
        <DropdownWithTitle
          className={feature.details.className}
          {...getDataAttributes(feature.details)}
        >
          <Flow
            mainAxisGap={8}
            alignment="center"
            style={{
              maxWidth: '230px',
              flexShrink: 0,
              flexWrap: 'nowrap'
            }}
          >
            <Flow alignment="center">
              {resolveFeatureIcon(selectDetails.icon, iconCtx)}
            </Flow>
            <BodyS
              style={{
                marginLeft: 'auto',
                ...truncateText()
              }}
            >
              {feature.details.label}
            </BodyS>
          </Flow>
          <FeatureTableDropdownContainer
            ref={containerRef}
            $isFullWidthTarget={isFullWidth}
          >
            <TableDropdown
              offset={tableDropdownOffset}
              items={feature.details.options.map((option) => ({
                value: option.value,
                label: option.label,
                contentLeft: (
                  <Box
                    $css={{
                      visibility:
                        option.value === selectDetails.value
                          ? 'visible'
                          : 'hidden'
                    }}
                  >
                    <IconDone
                      size={rowSize ? getDropdownIconSize(rowSize) : 's'}
                      color={textInfo}
                    />
                  </Box>
                )
              }))}
              onItemSelect={(item) =>
                'details' in feature &&
                typeof feature.details !== 'undefined' &&
                feature.details.type === 'select' &&
                feature.details.onChange(String(item.value))
              }
              trigger="click"
              closeOnSelect
            >
              <Flow
                orientation="horizontal"
                alignment="center"
                style={{
                  flexWrap: 'nowrap'
                }}
              >
                <FeatureTableDropdownTargetButton>
                  <BodyXS
                    style={{
                      ...truncateText()
                    }}
                    ref={selectedTextContainer}
                  >
                    {`${
                      feature.details.options.find(
                        (opt) => opt.value === selectDetails?.value
                      )?.label
                    }`}
                  </BodyXS>
                </FeatureTableDropdownTargetButton>
                <div ref={iconContainer}>
                  <IconDisclosureRight size="xs" color={textSecondary} />
                </div>
              </Flow>
            </TableDropdown>
          </FeatureTableDropdownContainer>
        </DropdownWithTitle>
      );
    }

    case 'custom':
      return feature.details.render(iconCtx);

    default:
      return null;
  }
};

export const FeaturesSidebarBlock: React.FC<{ features: FeatureItem[] }> = ({
  features
}) => (
  <>
    {features.map((feature, index) => (
      <FeatureRenderer
        feature={feature}
        // eslint-disable-next-line react/no-array-index-key
        key={`${feature.value}-${feature?.details?.type}-${index}`}
      />
    ))}
  </>
);
