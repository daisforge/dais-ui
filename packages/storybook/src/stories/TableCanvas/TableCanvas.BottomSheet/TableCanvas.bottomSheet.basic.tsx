import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { TableCanvas } from '@ui-kit/components/TableCanvas';
import { BodyS } from '@ui-kit/components/Typography';
import { IconChevronDown, IconChevronUp } from '@ui-kit/icons';
import React, { useId, useState } from 'react';

export function BottomSheetExample() {
  const [height, setHeight] = useState<string | number>(32);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const contentId = useId();
  const rows = Array.from({ length: 40 }, (_, id) => ({
    id,
    report: `Отчёт ${id + 1}`,
  }));
  const expanded = height !== 32;
  const messages = Array.from(
    { length: 10 },
    (_, id) => `Сообщение ${id + 1}: данные отчёта обновлены.`,
  );

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Button size="xs" view="secondary" onClick={() => setHeight(220)}>
          220px
        </Button>
        <Button size="xs" view="secondary" onClick={() => setHeight('35%')}>
          35%
        </Button>
        <Button size="xs" view="secondary" onClick={() => setHeight(1000)}>
          Больше доступного места
        </Button>
      </div>
      <TableCanvas
        rows={rows.slice((page - 1) * perPage, page * perPage)}
        columnConfig={[
          { key: 'id', name: 'ID', width: 100 },
          { key: 'report', name: 'Отчёт', width: 360 },
        ]}
        tableConfig={{
          containerStyle: { height: 480 },
          pagination: {
            value: page,
            perPage,
            count: rows.length,
            onChangePageValue(value, scrollToTop) {
              setPage(value ?? 1);
              scrollToTop();
            },
            onChange(value, pageSize, scrollToTop) {
              setPage(
                pageSize !== undefined && pageSize !== perPage ? 1 : value ?? 1,
              );
              setPerPage(pageSize ?? perPage);
              scrollToTop();
            },
          },
          bottomSheetConfig: {
            height,
            minHeight: 32,
            content: (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    minHeight: 30,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  <IconButton
                    size="xxs"
                    view="clear"
                    aria-label={expanded ? 'Закрыть лог' : 'Открыть лог'}
                    aria-expanded={expanded}
                    aria-controls={contentId}
                    style={{ flexShrink: 0 }}
                    onClick={() => setHeight(expanded ? 32 : 220)}
                  >
                    {expanded ? (
                      <IconChevronDown size="xs" />
                    ) : (
                      <IconChevronUp size="xs" />
                    )}
                  </IconButton>
                  <BodyS
                    style={{
                      minWidth: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Журнал событий
                  </BodyS>
                </div>
                <div
                  id={contentId}
                  aria-hidden={!expanded}
                  {...(!expanded ? { inert: '' } : {})}
                  style={{ overflow: 'auto', minHeight: 0, padding: '0 16px' }}
                >
                  {messages.map((message) => (
                    <BodyS key={message} style={{ padding: '12px 0' }}>
                      {message}
                    </BodyS>
                  ))}
                </div>
              </div>
            ),
          },
        }}
      />
    </div>
  );
}
