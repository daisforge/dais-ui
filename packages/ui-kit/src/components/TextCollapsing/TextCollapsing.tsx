import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { LinkButton } from '../LinkButton';
import { Typography } from '../Typography';
import { Root, TextViewport } from './TextCollapsing.styled';

export interface TextCollapsingProps {
  /** Текст или строчная разметка. */
  children: ReactNode;
  /**
   * Число видимых строк в свёрнутом виде. Передавайте целое число от 1.
   * @default 4
   */
  collapsedLines?: number;
}

const useLayout = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function TextCollapsing({
  children,
  collapsedLines = 4,
}: TextCollapsingProps) {
  const visibleLines = Number.isFinite(collapsedLines)
    ? Math.max(1, Math.floor(collapsedLines))
    : 4;
  const viewportRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const startHeight = useRef<number>();
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useLayout(() => {
    const text = textRef.current;
    if (!text) return undefined;
    const measure = () => {
      const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
      setOverflowing(text.scrollHeight > lineHeight * visibleLines + 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(text);
    return () => observer.disconnect();
  }, [children, visibleLines]);

  useLayout(() => {
    const viewport = viewportRef.current;
    const from = startHeight.current;
    startHeight.current = undefined;
    if (
      !viewport ||
      from === undefined ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return undefined;

    const to = viewport.getBoundingClientRect().height;
    if (from === to || typeof viewport.animate !== 'function') return undefined;

    // Во время сворачивания показываем весь текст внутри сужающейся области.
    // Многоточие возвращается в тот же кадр, когда высота достигает цели.
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
  }, [expanded, visibleLines, children]);

  const toggle = () => {
    startHeight.current = viewportRef.current?.getBoundingClientRect().height;
    setExpanded((previous) => !previous);
  };

  return (
    <Root>
      <TextViewport
        ref={viewportRef}
        $collapsedLines={visibleLines}
        data-collapsed={!expanded}
      >
        <Typography variant="BodyM" refTypography={textRef}>
          {children}
        </Typography>
      </TextViewport>
      {overflowing && (
        <LinkButton
          role="button"
          size="s"
          view="accent"
          aria-expanded={expanded}
          onClick={toggle}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              if (!event.repeat) toggle();
            }
          }}
        >
          {expanded ? 'Свернуть' : 'Показать полностью'}
        </LinkButton>
      )}
    </Root>
  );
}
