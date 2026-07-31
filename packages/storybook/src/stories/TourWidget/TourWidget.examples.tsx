import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { TourWidget } from '@ui-kit/components/TourWidget';
import { ViewContainer } from '@ui-kit/components/ViewContainer';
import { tourPulseMixin } from '@ui-kit/mixins/tourPulse';
import React, { useState } from 'react';
import { css } from 'styled-components';

function clampStep(step: number, stepsCount: number) {
  return Math.min(Math.max(step, 0), stepsCount - 1);
}

function TourView({ children }: React.PropsWithChildren) {
  return <ViewContainer view="onDark">{children}</ViewContainer>;
}

function MediaPlaceholder({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <Box
      $css={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '6px',
        backgroundColor: '#fff',
        backgroundImage:
          'linear-gradient(45deg, #eeeeee 25%, transparent 25%), linear-gradient(-45deg, #eeeeee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eeeeee 75%), linear-gradient(-45deg, transparent 75%, #eeeeee 75%)',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
        backgroundSize: '20px 20px',
      }}
    />
  );
}

function PulseTarget() {
  return (
    <Box
      $css={{
        position: 'relative',
        width: '180px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-primary)',
        background: 'var(--surface-solid-card)',
        borderRadius: '12px',
      }}
    >
      <Box
        aria-hidden
        $css={css`
          position: absolute;
          ${tourPulseMixin()}
        `}
      />
      <Box
        as="span"
        $css={{
          position: 'relative',
        }}
      >
        Target
      </Box>
    </Box>
  );
}

function VerticalExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <TourView>
      <TourWidget
        activeStepIndex={activeStepIndex}
        $css={{ width: '286px', height: '480px' }}
      >
        <TourWidget.Content>
          <MediaPlaceholder width={266} height={266} />
        </TourWidget.Content>
        <TourWidget.Header title="Title" />
        <TourWidget.Footer>
          <Box
            $css={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TourWidget.Bullets
              count={tourStepsCount}
              $css={{ marginInline: 'auto' }}
            />
            <Box
              $css={{
                display: 'flex',
                flexDirection: 'row',
                gap: '4px',
                marginTop: '20px',
              }}
            >
              <Button
                size="s"
                stretching="filled"
                view="secondary"
                onClick={() =>
                  setActiveStepIndex((current) =>
                    clampStep(current - 1, tourStepsCount),
                  )
                }
              >
                Назад
              </Button>
              <Button
                stretching="filled"
                size="s"
                view="white"
                onClick={() =>
                  setActiveStepIndex((current) =>
                    clampStep(current + 1, tourStepsCount),
                  )
                }
              >
                Далее
              </Button>
            </Box>
            <LinkButton
              size="s"
              view="default"
              onClick={() => setActiveStepIndex(0)}
            >
              Пропустить всё
            </LinkButton>
          </Box>
        </TourWidget.Footer>
      </TourWidget>
    </TourView>
  );
}

function HorizontalExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(5);

  return (
    <TourView>
      <TourWidget
        orientation="horizontal"
        activeStepIndex={activeStepIndex}
        $css={{ width: '720px', height: '260px' }}
      >
        <TourWidget.Content>
          <MediaPlaceholder width={240} height={240} />
        </TourWidget.Content>
        <TourWidget.Header title="Title" description="Description" />
        <TourWidget.Footer>
          <Box
            $css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              width: '100%',
            }}
          >
            <Box
              $css={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                minWidth: 0,
              }}
            >
              <LinkButton
                size="s"
                view="default"
                onClick={() => setActiveStepIndex(0)}
              >
                Пропустить всё
              </LinkButton>
              <TourWidget.Bullets count={tourStepsCount} />
            </Box>
            <Box
              $css={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Button
                size="s"
                view="secondary"
                onClick={() =>
                  setActiveStepIndex((current) =>
                    clampStep(current - 1, tourStepsCount),
                  )
                }
              >
                Назад
              </Button>
              <Button
                size="s"
                view="white"
                onClick={() =>
                  setActiveStepIndex((current) =>
                    clampStep(current + 1, tourStepsCount),
                  )
                }
              >
                Далее
              </Button>
            </Box>
          </Box>
        </TourWidget.Footer>
      </TourWidget>
    </TourView>
  );
}

function TourWithPulseExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  return (
    <TourView>
      <Box
        $css={{
          display: 'grid',
          gridTemplateColumns: '220px minmax(0, max-content)',
          gap: '14px',
          alignItems: 'center',
        }}
      >
        <Box
          $css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
          }}
        >
          <PulseTarget />
        </Box>
        <TourWidget
          orientation="horizontal"
          activeStepIndex={activeStepIndex}
          $css={{ width: '720px', height: '264px' }}
        >
          <TourWidget.Content>
            <MediaPlaceholder width={240} height={240} />
          </TourWidget.Content>
          <TourWidget.Header title="Title" description="Description" />
          <TourWidget.Footer>
            <Box
              $css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '32px',
                width: '100%',
              }}
            >
              <Box
                $css={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                  minWidth: 0,
                }}
              >
                <LinkButton
                  size="s"
                  view="default"
                  onClick={() => setActiveStepIndex(0)}
                >
                  Пропустить всё
                </LinkButton>
                <TourWidget.Bullets count={tourStepsCount} />
              </Box>
              <Box
                $css={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Button
                  size="s"
                  view="secondary"
                  onClick={() =>
                    setActiveStepIndex((current) =>
                      clampStep(current - 1, tourStepsCount),
                    )
                  }
                >
                  Назад
                </Button>
                <Button
                  size="s"
                  view="white"
                  onClick={() =>
                    setActiveStepIndex((current) =>
                      clampStep(current + 1, tourStepsCount),
                    )
                  }
                >
                  Далее
                </Button>
              </Box>
            </Box>
          </TourWidget.Footer>
        </TourWidget>
      </Box>
    </TourView>
  );
}

function TourWithoutContentExample() {
  const tourStepsCount = 14;
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  return (
    <TourView>
      <Box
        $css={{
          display: 'grid',
          gridTemplateColumns: '220px minmax(0, max-content)',
          gap: '14px',
          alignItems: 'center',
        }}
      >
        <Box
          $css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
          }}
        >
          <PulseTarget />
        </Box>
        <TourWidget
          orientation="horizontal"
          activeStepIndex={activeStepIndex}
          $css={{ width: '480px' }}
        >
          <TourWidget.Header title="Title" description="Description" />
          <TourWidget.Footer>
            <Box
              $css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '32px',
                width: '100%',
              }}
            >
              <Box
                $css={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                  minWidth: 0,
                }}
              >
                <LinkButton
                  size="s"
                  view="default"
                  onClick={() => setActiveStepIndex(0)}
                >
                  Пропустить всё
                </LinkButton>
              </Box>
              <Box
                $css={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Button
                  size="s"
                  view="secondary"
                  onClick={() =>
                    setActiveStepIndex((current) =>
                      clampStep(current - 1, tourStepsCount),
                    )
                  }
                >
                  Назад
                </Button>
                <Button
                  size="s"
                  view="white"
                  onClick={() =>
                    setActiveStepIndex((current) =>
                      clampStep(current + 1, tourStepsCount),
                    )
                  }
                >
                  Далее
                </Button>
              </Box>
            </Box>
          </TourWidget.Footer>
        </TourWidget>
      </Box>
    </TourView>
  );
}

function PulseExample() {
  return (
    <TourView>
      <Box
        $css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
        }}
      >
        <PulseTarget />
      </Box>
    </TourView>
  );
}

export {
  clampStep,
  HorizontalExample,
  MediaPlaceholder,
  PulseExample,
  PulseTarget,
  TourView,
  TourWithoutContentExample,
  TourWithPulseExample,
  VerticalExample,
};
