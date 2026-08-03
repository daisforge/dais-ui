import { Accordion, AccordionItem } from '@ui-kit/components/Accordion';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { Steps } from '@ui-kit/components/Steps';
import { Tooltip } from '@ui-kit/components/Tooltip';
import { Typography } from '@ui-kit/components/Typography';
import { ViewContainer } from '@ui-kit/components/ViewContainer';
import { textPrimary, textSecondary } from '@ui-kit/tokens';

import { LifeCycleProps } from '../ApprovalCenter.types';
import { isNonEmptyArray, isNotNullOrUndefined } from '../ApprovalCenter.utils';
import {
  iconByStageStatus,
  itemViewByLifeCycleStatus,
  stepStatusByLifeCycleStatus,
} from '../constants';
import {
  LifeCycleAccordionTitle,
  LifeCycleAssignees,
  LifeCycleButtonsWrapper,
  LifeCycleContainer,
  LifeCycleStageButtonsWrapper,
  LifeCycleStageContent,
  LifeCycleStyledButton,
} from '../styled';

const LifeCycle = (props: LifeCycleProps) => {
  const { lifeCycle } = props;

  const lifeCycleItems = lifeCycle.map((item) => ({
    title: item.title,
    status: stepStatusByLifeCycleStatus[item.status],
    completedItemView: itemViewByLifeCycleStatus[item.status],
    content: isNotNullOrUndefined(item.stages) ? (
      <>
        <Accordion
          size="s"
          view="clear"
          defaultActiveEventKey={item.stages.reduce(
            (accumulator: number[], stage, stageIndex) => {
              const isOpen = stage.open;

              if (isOpen) accumulator.push(stageIndex);

              return accumulator;
            },
            [],
          )}
        >
          {item.stages.map((stage, stageIndex) => (
            <AccordionItem
              key={stage.title}
              contentLeft={
                isNotNullOrUndefined(stage.tooltip) ? (
                  <ViewContainer view="onDark">
                    <Tooltip
                      maxWidth={250}
                      offset={[2, 11]}
                      target={iconByStageStatus[stage.status]}
                      trigger="hover"
                      placement="top-start"
                      text={stage.tooltip.text}
                    />
                  </ViewContainer>
                ) : (
                  iconByStageStatus[stage.status]
                )
              }
              title={
                <LifeCycleAccordionTitle>
                  <Typography variant="TextS">{stage.title}</Typography>

                  {isNotNullOrUndefined(stage.mark) &&
                    (stage.mark.tooltip ? (
                      <ViewContainer view="onDark">
                        <Tooltip
                          maxWidth={250}
                          offset={[2, 11]}
                          target={stage.mark.icon}
                          trigger="hover"
                          placement="top-start"
                          text={stage.mark.tooltip.text}
                        />
                      </ViewContainer>
                    ) : (
                      stage.mark.icon
                    ))}
                </LifeCycleAccordionTitle>
              }
              eventKey={stageIndex}
            >
              <LifeCycleStageContent>
                {isNonEmptyArray(stage.assignee) && (
                  <LifeCycleAssignees>
                    {stage.assignee.map((assignee) => (
                      <Typography
                        key={assignee}
                        variant="TextXS"
                        bold
                        color={textPrimary}
                      >
                        {assignee}
                      </Typography>
                    ))}
                  </LifeCycleAssignees>
                )}

                {isNotNullOrUndefined(stage.comment) && (
                  <Typography variant="TextXS" color={textPrimary}>
                    {stage.comment}
                  </Typography>
                )}

                {isNonEmptyArray(stage.buttons) && (
                  <LifeCycleStageButtonsWrapper>
                    {stage.buttons.map((button) => (
                      <LinkButton
                        key={button.text}
                        contentLeft={button.contentLeft}
                        text={button.text}
                        size="xxs"
                        onClick={button.onClick}
                      />
                    ))}
                  </LifeCycleStageButtonsWrapper>
                )}

                {isNotNullOrUndefined(stage.actionTitle) && (
                  <Typography variant="TextXS" color={textSecondary}>
                    {stage.actionTitle}
                  </Typography>
                )}
              </LifeCycleStageContent>
            </AccordionItem>
          ))}
        </Accordion>

        {isNonEmptyArray(item.buttons) && (
          <LifeCycleButtonsWrapper>
            {item.buttons.map((button) => (
              <LifeCycleStyledButton
                text={button.text}
                contentLeft={button.contentLeft}
                view="secondary"
                size="xs"
              />
            ))}
          </LifeCycleButtonsWrapper>
        )}
      </>
    ) : (
      <LifeCycleStageContent>
        <Typography variant="BodyXS" color={textSecondary}>
          {item.actionTitle}
        </Typography>

        {isNonEmptyArray(item.buttons) && (
          <LifeCycleButtonsWrapper>
            {item.buttons.map((button) => (
              <LifeCycleStyledButton
                text={button.text}
                contentLeft={button.contentLeft}
                view="secondary"
                size="xs"
              />
            ))}
          </LifeCycleButtonsWrapper>
        )}
      </LifeCycleStageContent>
    ),
  }));

  return (
    <LifeCycleContainer>
      <Steps
        style={{
          paddingTop: '1px',
          height: 'auto',
        }}
        items={lifeCycleItems}
        orientation="vertical"
        size="m"
      />
    </LifeCycleContainer>
  );
};

export { LifeCycle };
