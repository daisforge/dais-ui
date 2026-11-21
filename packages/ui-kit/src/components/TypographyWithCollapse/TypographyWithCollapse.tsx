import { LinkButton } from '@ui-kit/components/LinkButton';
import {
  Typography,
  type TypographyProps,
} from '@ui-kit/components/Typography';
import type { TypographyVariant } from '@ui-kit/components/Typography/Typography';
import {
  type ForwardedRef,
  forwardRef,
  type ReactElement,
  type ReactNode,
  type RefAttributes,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { normalizeLines } from './normalizeLines';
import { Layout, Text, TextViewport } from './TypographyWithCollapse.styled';

export type TypographyWithCollapseProps<T extends TypographyVariant = 'BodyM'> =
  Omit<TypographyProps<T>, 'variant' | 'ref' | 'refTypography'> & {
    children: ReactNode;
    /** Вариант типографики для текста. По умолчанию BodyM. */
    variant?: T;
    /** Количество видимых строк в свёрнутом виде. По умолчанию 4. */
    lines?: number;
    expandLabel?: string;
    collapseLabel?: string;
  };

const useLayout = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function CollapseText<T extends TypographyVariant>(
  {
    variant,
    children,
    lines,
    expandLabel = 'Показать полностью',
    collapseLabel = 'Свернуть',
    ...typographyProps
  }: TypographyWithCollapseProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const visibleLines = normalizeLines(lines);
  const viewportId = useId();
  const viewportRef = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState<HTMLSpanElement | null>(null);
  const startHeight = useRef<number>();
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useLayout(() => {
    if (!text) return undefined;
    const measure = () => {
      const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
      const overflows = text.scrollHeight > lineHeight * visibleLines + 1;
      setOverflowing(overflows);
      if (!overflows) setExpanded(false);
    };
    measure();
    const resize =
      typeof ResizeObserver === 'undefined'
        ? undefined
        : new ResizeObserver(measure);
    resize?.observe(text);
    // При замене текста высота ограниченного строками блока может остаться прежней.
    const mutations = new MutationObserver(measure);
    mutations.observe(text, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    });
    return () => {
      resize?.disconnect();
      mutations.disconnect();
    };
  }, [text, visibleLines]);

  useLayout(() => {
    const viewport = viewportRef.current;
    const from = startHeight.current;
    startHeight.current = undefined;
    if (
      !viewport ||
      from === undefined ||
      typeof viewport.animate !== 'function' ||
      (typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    )
      return undefined;
    const to = viewport.getBoundingClientRect().height;
    if (from === to) return undefined;

    // При сворачивании многоточие возвращается после последнего кадра анимации.
    viewport.setAttribute('data-animating', '');
    const animation = viewport.animate(
      [{ height: `${from}px` }, { height: `${to}px` }],
      { duration: 300, easing: 'ease-in-out' },
    );
    animation.onfinish = () => viewport.removeAttribute('data-animating');
    return () => {
      animation.onfinish = null;
      animation.cancel();
      viewport.removeAttribute('data-animating');
    };
  }, [expanded, visibleLines]);

  const toggle = () => {
    startHeight.current = viewportRef.current?.getBoundingClientRect().height;
    setExpanded((previous) => !previous);
  };

  const rootProps = {
    ...typographyProps,
    variant: variant ?? 'BodyM',
    refTypography: ref,
  } as TypographyProps<T>;
  return (
    <Typography {...rootProps}>
      <Layout>
        <TextViewport
          id={viewportId}
          ref={viewportRef}
          $lines={visibleLines}
          data-collapsed={!expanded}
        >
          <Text ref={setText}>{children}</Text>
        </TextViewport>
        {overflowing && (
          <LinkButton
            role="button"
            size="s"
            view="accent"
            aria-expanded={expanded}
            aria-controls={viewportId}
            onClick={toggle}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (!event.repeat) toggle();
              }
            }}
          >
            {expanded ? collapseLabel : expandLabel}
          </LinkButton>
        )}
      </Layout>
    </Typography>
  );
}

export const TypographyWithCollapse = forwardRef(CollapseText) as <
  T extends TypographyVariant = 'BodyM',
>(
  props: TypographyWithCollapseProps<T> & RefAttributes<HTMLDivElement>,
) => ReactElement;
