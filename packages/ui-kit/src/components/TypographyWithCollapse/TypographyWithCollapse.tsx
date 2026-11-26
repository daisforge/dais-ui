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
import { Layout, TextViewport } from './TypographyWithCollapse.styled';

export type TypographyWithCollapseProps<T extends TypographyVariant = 'BodyM'> =
  Omit<TypographyProps<T>, 'variant' | 'ref' | 'refTypography'> & {
    children: ReactNode;
    /** Вариант типографики для текста. По умолчанию BodyM. */
    variant?: T;
    /**
     * Количество видимых строк в свёрнутом виде.
     * @default 4
     */
    lines?: number;
    /** Подпись кнопки раскрытия текста. */
    expandLabel?: string;
    /** Подпись кнопки сворачивания текста. */
    collapseLabel?: string;
  };

const useLayout = typeof window === 'undefined' ? useEffect : useLayoutEffect;
const FOCUSABLE_CONTENT =
  'a[href], area[href], button, input, select, textarea, iframe, summary, [tabindex], [contenteditable], audio[controls], video[controls]';

function CollapseText<T extends TypographyVariant>(
  {
    variant,
    children,
    lines,
    expandLabel = 'Показать полностью',
    collapseLabel = 'Свернуть',
    className,
    style,
    ...typographyProps
  }: TypographyWithCollapseProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const visibleLines = normalizeLines(lines);
  const viewportId = useId();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<HTMLDivElement | null>(null);
  const measureText = useRef<() => void>();
  const startHeight = useRef<number>();
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useLayout(() => {
    const viewport = viewportRef.current;
    if (!text || !viewport) return undefined;

    const hiddenControls = new Map<HTMLElement, string | null>();
    const restoreTabIndex = (element: HTMLElement) => {
      const previous = hiddenControls.get(element);
      if (element.getAttribute('tabindex') === '-1') {
        if (previous == null) element.removeAttribute('tabindex');
        else element.setAttribute('tabindex', previous);
      }
      hiddenControls.delete(element);
    };
    const measure = () => {
      // Замеряем CSS-ограничение напрямую, включая line-height: normal.
      // В раскрытом состоянии и во время анимации применяем его только на время замера.
      const collapsed = viewport.getAttribute('data-collapsed') === 'true';
      viewport.setAttribute('data-measuring', '');
      const { bottom, height } = text.getBoundingClientRect();
      const overflows = text.scrollHeight > height + 1;

      hiddenControls.forEach((_tabIndex, element) => {
        if (!text.contains(element) || !collapsed || !overflows) {
          restoreTabIndex(element);
        }
      });
      if (collapsed && overflows) {
        text
          .querySelectorAll<HTMLElement>(FOCUSABLE_CONTENT)
          .forEach((element) => {
            const rects = Array.from(element.getClientRects());
            const hidden =
              rects.length > 0 && rects.every(({ top }) => top >= bottom);
            if (hidden && !hiddenControls.has(element)) {
              hiddenControls.set(element, element.getAttribute('tabindex'));
              element.setAttribute('tabindex', '-1');
            } else if (!hidden && hiddenControls.has(element)) {
              restoreTabIndex(element);
            }
          });
      }

      viewport.removeAttribute('data-measuring');
      setOverflowing(overflows);
      if (!overflows) setExpanded(false);
    };
    measureText.current = measure;
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
    });
    return () => {
      resize?.disconnect();
      mutations.disconnect();
      hiddenControls.forEach((_tabIndex, element) => restoreTabIndex(element));
      measureText.current = undefined;
    };
  }, [text, visibleLines]);

  useLayout(() => {
    const viewport = viewportRef.current;
    const from = startHeight.current;
    startHeight.current = undefined;
    measureText.current?.();
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

  const attributes = Object.entries(typographyProps);
  const dataAttributes = Object.fromEntries(
    attributes.filter(([name]) => name.startsWith('data-')),
  );
  const textProps = {
    ...Object.fromEntries(
      attributes.filter(([name]) => !name.startsWith('data-')),
    ),
    variant: variant ?? 'BodyM',
    refTypography: setText,
    // Typography задаёт собственный line-height, поэтому применяем явный
    // пользовательский line-height и к тексту.
    style:
      style?.lineHeight === undefined
        ? undefined
        : { lineHeight: style.lineHeight },
  } as TypographyProps<T>;

  return (
    <Layout ref={ref} className={className} style={style} {...dataAttributes}>
      <TextViewport
        id={viewportId}
        ref={viewportRef}
        $lines={visibleLines}
        data-collapsed={!expanded}
      >
        <Typography {...textProps}>{children}</Typography>
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
  );
}

export const TypographyWithCollapse = forwardRef(CollapseText) as <
  T extends TypographyVariant = 'BodyM',
>(
  props: TypographyWithCollapseProps<T> & RefAttributes<HTMLDivElement>,
) => ReactElement;
