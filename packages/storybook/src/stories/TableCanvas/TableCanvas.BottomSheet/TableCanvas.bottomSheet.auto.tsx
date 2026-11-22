import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { TableCanvas } from '@ui-kit/components/TableCanvas';
import { BodyS } from '@ui-kit/components/Typography';
import { IconChevronDown, IconChevronUp } from '@ui-kit/icons';
import React, { useId, useState } from 'react';

export function AutoHeightExample() {
  const [expanded, setExpanded] = useState(false);
  const [messageCount, setMessageCount] = useState(3);
  const [maxHeight, setMaxHeight] = useState<string | number | undefined>(240);
  const contentId = useId();
  const rows = Array.from({ length: 20 }, (_, id) => ({
    id,
    report: `Отчёт ${id + 1}`,
  }));
  const messages = Array.from(
    { length: messageCount },
    (_, id) => `Сообщение ${id + 1}: данные отчёта обновлены.`,
  );

  return (
    <div
      data-testid="bottom-sheet-auto-example"
      data-expanded={expanded}
      data-message-count={messageCount}
      data-max-height={maxHeight ?? 'none'}
      style={{ padding: 16 }}
    >
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}
      >
        <Button
          size="xs"
          view="secondary"
          onClick={() => setMessageCount((count) => count + 1)}
        >
          Добавить сообщение
        </Button>
        <Button
          size="xs"
          view="secondary"
          disabled={messageCount === 0}
          onClick={() => setMessageCount((count) => Math.max(0, count - 1))}
        >
          Удалить сообщение
        </Button>
        <Button size="xs" view="secondary" onClick={() => setMessageCount(2)}>
          Короткий журнал
        </Button>
        <Button size="xs" view="secondary" onClick={() => setMessageCount(30)}>
          Длинный журнал
        </Button>
        <Button size="xs" view="secondary" onClick={() => setMaxHeight(160)}>
          Максимум 160px
        </Button>
        <Button size="xs" view="secondary" onClick={() => setMaxHeight('40%')}>
          Максимум 40%
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setMaxHeight(undefined)}
        >
          Без maxHeight
        </Button>
      </div>
      <TableCanvas
        rows={rows}
        columnConfig={[
          { key: 'id', name: 'ID', width: 100 },
          { key: 'report', name: 'Отчёт', width: 360 },
        ]}
        tableConfig={{
          containerStyle: { height: 480 },
          bottomSheetConfig: {
            height: expanded ? 'auto' : 32,
            minHeight: 32,
            maxHeight,
            content: (
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    minHeight: 31,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <IconButton
                    size="xxs"
                    view="clear"
                    aria-label={
                      expanded ? 'Закрыть авто-панель' : 'Открыть авто-панель'
                    }
                    aria-expanded={expanded}
                    aria-controls={contentId}
                    style={{ flexShrink: 0 }}
                    onClick={() => setExpanded((value) => !value)}
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
                  data-testid="bottom-sheet-auto-content"
                  aria-hidden={!expanded}
                  {...(!expanded ? { inert: '' } : {})}
                >
                  {messages.map((message) => (
                    <BodyS
                      key={message}
                      data-testid="bottom-sheet-auto-message"
                      style={{ padding: '8px 12px' }}
                    >
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
