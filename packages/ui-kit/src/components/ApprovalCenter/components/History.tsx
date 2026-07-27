import { Badge } from '@ui-kit/components/Badge';
import { Cell } from '@ui-kit/components/Cell';
import { surfaceSolidCard, textSecondary } from '@ui-kit/tokens';

import { HistoryProps } from '../ApprovalCenter.types';
import { iconByHistoryItemStatus } from '../constants';
import {
  HistoryActions,
  HistoryContainer,
  HistoryDate,
  HistoryDay
} from '../styled';

const History = (props: HistoryProps) => {
  const { historyByDay } = props;

  return (
    <HistoryContainer>
      {historyByDay.map((day) => (
        <HistoryDay key={day.date}>
          <HistoryDate>
            <Badge
              size="m"
              text={day.date}
              view="light"
              customColor={textSecondary}
              customBackgroundColor={surfaceSolidCard}
            />
          </HistoryDate>

          <HistoryActions>
            {day.actions.map((action) => (
              <Cell
                size="s"
                title={action.title}
                subtitle={action.time}
                contentLeft={iconByHistoryItemStatus[action.status]}
              />
            ))}
          </HistoryActions>
        </HistoryDay>
      ))}
    </HistoryContainer>
  );
};

export { History };
