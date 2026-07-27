import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import { useState } from 'react';

import { ApprovalCenterProps, TabVariant } from './ApprovalCenter.types';
import { groupByDay, isNotNullOrUndefined } from './ApprovalCenter.utils';
import { History, LifeCycle, Preview } from './components';
import { tabNameByType } from './constants';
import {
  ApprovalCenterContainer,
  ApprovalCenterContentWrapper
} from './styled';

export const ApprovalCenter = (props: ApprovalCenterProps) => {
  const { className, $css, preview, tabs, lifeCycle, history } = props;

  const [activeTab, setActiveTab] = useState<TabVariant>(tabs.active);

  const shouldShowTabs = tabs.available.length > 1;

  const firstTab = tabs.available[0];
  const isFirstTabLifeCycle = firstTab === 'LIFE_CYCLE';
  const isFirstTabHistory = firstTab === 'HISTORY';

  const isActiveTabLifeCycle = activeTab === 'LIFE_CYCLE';
  const isActiveTabHistory = activeTab === 'HISTORY';

  const isThereLifeCycle = isNotNullOrUndefined(lifeCycle);
  const isThereHistory = isNotNullOrUndefined(history);
  const isTherePreview = isNotNullOrUndefined(preview);

  const historyByDay = isThereHistory ? groupByDay(history) : null;
  const isThereHistoryByDay = isNotNullOrUndefined(historyByDay);

  if (shouldShowTabs) {
    const ActiveTab = (
      <ApprovalCenterContentWrapper>
        {isThereLifeCycle && isActiveTabLifeCycle && (
          <LifeCycle lifeCycle={lifeCycle} />
        )}

        {isThereHistoryByDay && isActiveTabHistory && (
          <History historyByDay={historyByDay} />
        )}
      </ApprovalCenterContentWrapper>
    );

    return (
      <ApprovalCenterContainer className={className} $css={$css}>
        {isTherePreview ? (
          <Preview preview={preview} />
        ) : (
          <>
            <Tabs view="divider" size="s" orientation="horizontal">
              {tabs.available.map((tab) => (
                <TabItem
                  view="divider"
                  key={tab}
                  size="s"
                  selected={tab === activeTab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabNameByType[tab]}
                </TabItem>
              ))}
            </Tabs>

            {ActiveTab}
          </>
        )}
      </ApprovalCenterContainer>
    );
  }

  const ActiveTab = (
    <>
      {isThereLifeCycle && isFirstTabLifeCycle && (
        <LifeCycle lifeCycle={lifeCycle} />
      )}
      {isThereHistoryByDay && isFirstTabHistory && (
        <History historyByDay={historyByDay} />
      )}
    </>
  );

  return (
    <ApprovalCenterContainer>
      {isTherePreview ? <Preview preview={preview} /> : ActiveTab}
    </ApprovalCenterContainer>
  );
};
