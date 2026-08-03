import { Badge } from '@ui-kit/components/Badge';
import { Button } from '@ui-kit/components/Button';
import { surfaceSolidCard } from '@ui-kit/tokens';
import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

export const ApprovalCenterContainer = styled.div<{
  $css?: string | CSSObject | FlattenSimpleInterpolation;
}>`
  min-width: 360px;
  min-height: 600px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 4px 12px 16px;
  background: ${() => surfaceSolidCard};
  ${({ $css }) => $css}
`;

export const ApprovalCenterContentWrapper = styled.div`
  margin-top: 20px;
  min-height: 0;
  flex-direction: column;
  display: flex;
  flex: 1;
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const LifeCycleContainer = styled.div`
  overflow-y: auto;
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 12px;
`;

export const LifeCycleAccordionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LifeCycleStageContent = styled.div`
  > *:not(:first-child) {
    margin-top: 8px;
  }

  > .comment:not(:first-child) {
    margin-top: 2px;
  }
`;

export const LifeCycleAssignees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LifeCycleButtonsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const LifeCycleStageButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const LifeCycleStyledButton = styled(Button)`
  margin-top: 8px;
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: 12px;
  overflow-y: auto;
  padding-right: 12px;
`;

export const HistoryDay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HistoryDate = styled.div`
  top: 0px;
  position: sticky;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const HistoryActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HistoryStyledBadge = styled(Badge)`
  flex-shrink: 0;
  white-space: nowrap;
`;
