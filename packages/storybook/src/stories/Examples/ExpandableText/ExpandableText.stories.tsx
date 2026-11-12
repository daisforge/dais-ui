/* eslint-disable react-hooks/rules-of-hooks */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { Typography } from '@ui-kit/components/Typography';
import { backgroundPrimary, surfaceSolidCard } from '@ui-kit/tokens';
import React, { useLayoutEffect, useRef, useState } from 'react';

type ExpandableTextProps = {
  children: React.ReactNode;
  lines?: number;
  duration?: number;
  easing?: string;
  expandLabel?: string;
  collapseLabel?: string;
};

// Текст, свёрнутый до lines строк с многоточием, и кнопка раскрытия.
// Анимируется высота обёртки. Многоточие (line-clamp) не анимируется,
// поэтому оно включается только после того, как блок свернулся,
// а во время анимации лишний текст прячет overflow обёртки
function ExpandableText({
  children,
  lines = 4,
  duration = 300,
  easing = 'ease-in-out',
  expandLabel = 'Показать полностью',
  collapseLabel = 'Свернуть',
}: ExpandableTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(true);
  const [overflowing, setOverflowing] = useState(false);

  const getCollapsedHeight = () => {
    const text = textRef.current;
    if (!text) return 0;
    return parseFloat(getComputedStyle(text).lineHeight) * lines;
  };

  // Кнопка нужна, только если текст не влезает в lines строк.
  // Пересчитываем при изменении ширины блока
  useLayoutEffect(() => {
    const text = textRef.current;
    if (!text) return undefined;
    const update = () =>
      setOverflowing(text.scrollHeight - getCollapsedHeight() > 1);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(text);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines, children]);

  const animated =
    duration > 0 &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggle = () => {
    const wrapper = wrapperRef.current;
    const text = textRef.current;
    if (!wrapper || !text) return;

    if (!animated) {
      setExpanded(!expanded);
      setClamped(expanded);
      return;
    }

    // Фиксируем текущую высоту, от неё пойдёт анимация
    wrapper.style.height = `${wrapper.getBoundingClientRect().height}px`;

    if (expanded) {
      // Чтение размеров заставляет браузер применить стартовую высоту,
      // иначе смена высоты ниже не запустит переход
      wrapper.getBoundingClientRect();
      wrapper.style.height = `${getCollapsedHeight()}px`;
      setExpanded(false);
      return;
    }

    setClamped(false);
    setExpanded(true);
    // После снятия многоточия текст полный, тянем обёртку до его высоты
    requestAnimationFrame(() => {
      wrapper.style.height = `${text.scrollHeight}px`;
    });
  };

  const handleTransitionEnd = (event: React.TransitionEvent) => {
    if (event.target !== event.currentTarget) return;
    // В покое высота снова по содержимому: блок подстраивается под ширину
    if (wrapperRef.current) wrapperRef.current.style.height = '';
    if (!expanded) setClamped(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          overflow: 'hidden',
          transition: `height ${duration}ms ${easing}`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <Typography
          variant="BodyM"
          refTypography={textRef}
          style={
            clamped
              ? {
                  display: '-webkit-box',
                  WebkitLineClamp: lines,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }
              : undefined
          }
        >
          {children}
        </Typography>
      </div>
      {overflowing && (
        <LinkButton size="s" view="accent" onClick={toggle}>
          {expanded ? collapseLabel : expandLabel}
        </LinkButton>
      )}
    </div>
  );
}

const preCode = `import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  backgroundPrimary,
  LinkButton,
  surfaceSolidCard,
  Typography,
} from '@daisforge/ui';

type ExpandableTextProps = {
  children: React.ReactNode;
  lines?: number;
  duration?: number;
  easing?: string;
  expandLabel?: string;
  collapseLabel?: string;
};

${getFuncAsString(
  'packages/storybook/src/stories/Examples/ExpandableText/ExpandableText.stories.tsx',
  'ExpandableText',
)}

`;

type ExpandableTextStoryArgs = Required<
  Pick<ExpandableTextProps, 'lines' | 'duration' | 'easing'>
>;

const meta: Meta<ExpandableTextStoryArgs> = {
  title: 'Примеры/Сворачиваемый текст',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<ExpandableTextStoryArgs>;

export const Default: Story = {
  name: 'Сворачиваемый текст',
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  render() {
    const cardStyle: React.CSSProperties = {
      width: 640,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: '32px 40px',
      borderRadius: 24,
      background: surfaceSolidCard,
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          padding: 24,
          background: backgroundPrimary,
        }}
      >
        <div style={cardStyle}>
          <ExpandableText lines={4}>
            {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
          </ExpandableText>
        </div>
        <div style={cardStyle}>
          <ExpandableText lines={4}>
            Короткий текст помещается целиком, кнопка не нужна.
          </ExpandableText>
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  name: 'Настройка строк и анимации',
  args: {
    lines: 3,
    duration: 300,
    easing: 'ease-in-out',
  },
  argTypes: {
    lines: { control: { type: 'number', min: 1 } },
    duration: { control: { type: 'number', min: 0, step: 50 } },
    easing: {
      control: 'select',
      options: ['ease-in-out', 'ease', 'linear', 'cubic-bezier(0.2, 0, 0, 1)'],
    },
  },
  ...storySourceDoc({ preCode, previewSource: 'shown', type: 'code' }),
  render: ({ lines, duration, easing }) => (
    <div style={{ padding: 24, background: backgroundPrimary }}>
      <div
        style={{
          width: 640,
          maxWidth: '100%',
          boxSizing: 'border-box',
          padding: '32px 40px',
          borderRadius: 24,
          background: surfaceSolidCard,
        }}
      >
        <ExpandableText lines={lines} duration={duration} easing={easing}>
          {'Длинный текст, который можно свернуть и развернуть. '.repeat(14)}
        </ExpandableText>
      </div>
    </div>
  ),
};
