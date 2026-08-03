/* eslint-disable no-nested-ternary */
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import React, { FC, ReactNode, useEffect } from 'react';

import { DomMetadata } from '../types/additional.type';
import { FeatureItem } from '../widgets/control-block/types';
import { TabContentWrapper, TabsContainer } from './styled';
import { TableSettingsBlock } from './TableSettingsBlock';

type TabConfig = {
  id: string;
  label: string;
  content: ReactNode;
  show: boolean;
  domMetadata?: DomMetadata;
};

export const TableSettingsWithTabs: FC<{
  generalSettings?: FeatureItem[];
  customFeatures?: FeatureItem[];
  filteringContent?: ReactNode;
  columnsContent?: ReactNode;
  showFiltering: boolean;
  showColumns: boolean;
  filteringDomMetadata?: DomMetadata;
  columnsDomMetadata?: DomMetadata;
  customGeneralSettingsSlot?: ReactNode;
  activeSettingsTabId: string | null;
  setActiveSettingsTabId: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({
  generalSettings = [],
  customFeatures = [],
  filteringContent,
  columnsContent,
  showFiltering,
  showColumns,
  filteringDomMetadata,
  columnsDomMetadata,
  customGeneralSettingsSlot,
  activeSettingsTabId: externalActiveTabId,
  setActiveSettingsTabId: externalSetActiveTabId,
}) => {
  // Формируем массив табов
  const tabs: TabConfig[] = [
    {
      id: 'general',
      label: 'Общие',
      content: (
        <TableSettingsBlock
          defaultSettings={generalSettings}
          features={customFeatures}
          customGeneralSettingsSlot={customGeneralSettingsSlot}
        />
      ),
      show:
        generalSettings.length > 0 ||
        customFeatures.length > 0 ||
        !!customGeneralSettingsSlot,
    },
    {
      id: 'filtering',
      label: 'Фильтры',
      content: filteringContent,
      show: showFiltering,
      domMetadata: filteringDomMetadata,
    },
    {
      id: 'columns',
      label: 'Столбцы',
      content: columnsContent,
      show: showColumns,
      domMetadata: columnsDomMetadata,
    },
  ].filter((tab) => tab.show);

  const [activeTabId, setActiveTabId] = [
    externalActiveTabId,
    externalSetActiveTabId,
  ];

  // Проверяем, существует ли активный таб, если нет - выбираем первый доступный
  const activeTabExists = tabs.some((tab) => tab.id === activeTabId);
  const finalActiveTabId =
    activeTabExists && activeTabId
      ? activeTabId
      : tabs.length > 0 && tabs[0]
      ? tabs[0].id
      : null;

  // Обновляем состояние, если нужно выбрать другой таб
  useEffect(() => {
    if (finalActiveTabId !== activeTabId && finalActiveTabId !== null) {
      setActiveTabId(finalActiveTabId);
    }
  }, [finalActiveTabId, activeTabId, setActiveTabId]);

  // Если табов нет вообще - ничего не рендерим
  if (tabs.length === 0) {
    return null;
  }

  // Если только 1 таб - рендерим контент напрямую без переключалки
  if (tabs.length === 1) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{tabs[0] && tabs[0].content}</>;
  }

  const activeTab = tabs.find((tab) => tab.id === finalActiveTabId);

  return (
    <>
      <TabsContainer>
        <Tabs view="divider" orientation="horizontal" size="s" stretch>
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              view="divider"
              size="s"
              selected={
                tab.id ===
                (activeTabExists && activeTabId
                  ? activeTabId
                  : finalActiveTabId)
              }
              onClick={() => setActiveTabId(tab.id)}
              tabIndex={0}
              style={{
                flexGrow: '1',
              }}
              className={tab?.domMetadata?.className}
              {...(tab?.domMetadata?.dataAttributes || {})}
            >
              {tab.label}
            </TabItem>
          ))}
        </Tabs>
      </TabsContainer>
      <TabContentWrapper key={finalActiveTabId}>
        {activeTab?.content}
      </TabContentWrapper>
    </>
  );
};
