import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import React, { useState } from 'react';

export function TabsComp({
  stretch = false,
  view = 'divider'
}: {
  stretch?: boolean;
  view?: 'divider' | 'clear';
}) {
  const items = Array(4).fill(0);
  const [index, setIndex] = useState(0);

  return (
    <div
      style={{
        marginBlock: -2,
        flexShrink: 0,
        ...(stretch && { width: '100%' })
      }}
    >
      <Tabs {...{ stretch, view }} size="m" index={index}>
        {items.map((_, i) => (
          <TabItem
            view="divider"
            // eslint-disable-next-line react/no-array-index-key
            key={`item:${i}`}
            size="m"
            itemIndex={i}
            onIndexChange={(i) => setIndex(i)}
            selected={i === index}
            tabIndex={0}
            onClick={() => setIndex(i)}
          >
            Label
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}
