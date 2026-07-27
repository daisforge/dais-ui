/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactElement, ReactNode, useLayoutEffect } from 'react';

import {
  type ButtonSize,
  type ButtonView,
  EmbedIconButtonSize,
  GlideThemeForRender,
  SIZE_CONFIG,
} from '../cells/buttons';
import { type ButtonIcon, preloadIconSprites } from '../cells/iconSprites';
import { CanvasContainer } from '../core/CanvasContainer';
import {
  type CanvasInteractionConfig,
  normalizeCanvasInteraction,
} from '../core/canvasInteraction';
import {
  CanvasEvent,
  CanvasFlexStyle,
  CanvasNode,
  PositionValue,
} from '../core/CanvasNode';
import type { FlexBoxOptions } from '../miniflex';
import type { CanvasNodeTooltipConfig } from '../utils/portalHoverEvents';
import {
  type BadgeSize,
  type BadgeView,
  CanvasBadge,
} from '../primitives/CanvasBadge';
import { CanvasButton } from '../primitives/CanvasButton';
import {
  CanvasCheckbox,
  CHECKBOX_ICONS,
  CHECKBOX_ICONS_ARR,
} from '../primitives/CanvasCheckbox';
import { CanvasEmbedIconButton } from '../primitives/CanvasEmbedIconButton';
import { CanvasIcon } from '../primitives/CanvasIcon';
import { CanvasIconButton } from '../primitives/CanvasIconButton';
import { CanvasRect } from '../primitives/CanvasRect';
import { CanvasText, CanvasTextOptions } from '../primitives/CanvasText';
import { CanvasLink, type LinkView } from '../primitives/CanvasLink';
import { Theme } from '../../../theming/types';
import { isReactIcon, normalizeIcon } from '../utils/iconUtils';
import { CanvasSkeleton } from '../primitives/CanvasSkeleton';
import { normalizeDimensionValue } from '../utils';
import type { FontMetrics } from '../../../fonts';

interface CanvasInteractionProps {
  /**
   * Декларативное описание поведения зоны внутри ячейки.
   *
   * Самый частый сценарий:
   * `interaction={{ selection: 'keep', cellClick: 'stop', editor: 'never' }}`
   * — элемент выполняет собственное действие и не должен менять selection,
   * запускать editor или вызывать внешний `onCellClicked`.
   *
   * `interaction={{ editor: 'open-on-click' }}` — элемент просит открыть
   * editor текущей ячейки. Например стрелка select-ячейки.
   */
  interaction?: CanvasInteractionConfig;
}

interface CanvasLayerProps {
  /**
   * Локальный слой внутри canvas-root; рекомендуется использовать zIndex >= 0.
   * Значение суммируется по цепочке родителей и не является DOM z-index.
   */
  zIndex?: number;
}

interface ContainerProps
  extends CanvasInteractionProps,
    CanvasLayerProps,
    Omit<FlexBoxOptions, 'columnGap' | 'rowGap'> {
  children?: ReactNode;
  style?: Partial<CanvasFlexStyle>;
  backgroundColor?: string;
  id?: string;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  portalHoverEnabled?: boolean;
  position?: 'relative' | 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  /** Конфиг тултипа при hover: строка (текст) или объект с text и опциональными пропсами Tooltip */
  tooltip?: CanvasNodeTooltipConfig;
  onClick?: (event: CanvasEvent<CanvasContainer>) => void;
  onMouseEnter?: (event: CanvasEvent<CanvasContainer>) => void;
  onMouseLeave?: (event: CanvasEvent<CanvasContainer>) => void;
  onMouseDown?: (event: CanvasEvent<CanvasContainer>) => void;
}

type InternalContainerProps = ContainerProps & {
  /**
   * Приватный draw-time resolver для системных overlay.
   * Публичный backgroundColor остается простым string API без callback-ов.
   */
  __backgroundColorResolver?: (
    theme: GlideThemeForRender
  ) => string | undefined;
};

const resolveContainerBackgroundColor = (
  { backgroundColor, __backgroundColorResolver }: InternalContainerProps,
  theme: GlideThemeForRender
): string | undefined => __backgroundColorResolver?.(theme) ?? backgroundColor;

interface TextProps
  extends CanvasInteractionProps,
    CanvasLayerProps,
    Omit<CanvasTextOptions, 'font' | 'fontSize' | 'lineHeightPx' | 'color'> {
  children?: ReactNode;
  font?: string;
  color?: string;
  style?: Partial<CanvasFlexStyle>;
  id?: string;
  portalHoverEnabled?: boolean;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  tooltip?: CanvasNodeTooltipConfig;
}

interface IconProps extends CanvasInteractionProps, CanvasLayerProps {
  icon: ButtonIcon;
  size?: number;
  color?: string;
  style?: Partial<CanvasFlexStyle>;
  backgroundColor?: string;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  onClick?: (event: CanvasEvent<CanvasIcon>) => void;
  onMouseEnter?: (event: CanvasEvent<CanvasIcon>) => void;
  onMouseLeave?: (event: CanvasEvent<CanvasIcon>) => void;
  onMouseDown?: (event: CanvasEvent<CanvasIcon>) => void;
  id?: string;
  portalHoverEnabled?: boolean;
  tooltip?: CanvasNodeTooltipConfig;
}

interface ButtonProps extends CanvasInteractionProps, CanvasLayerProps {
  children: string;
  /** @deprecated Use `view` instead */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  size?: ButtonSize;
  /** Left icon (SVG string or image) */
  leftIcon?: ButtonIcon;
  /** Right icon (SVG string or image) */
  rightIcon?: ButtonIcon;
  disabled?: boolean;
  onClick?: (event: CanvasEvent<CanvasButton>) => void;
  style?: Partial<CanvasFlexStyle>;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  id?: string;
  portalHoverEnabled?: boolean;
  tooltip?: CanvasNodeTooltipConfig;
}

interface IconButtonProps extends CanvasInteractionProps, CanvasLayerProps {
  icon: ButtonIcon;
  /** @deprecated Use `buttonSize` with ButtonSize type instead */
  size?: number | 'auto';
  /** @deprecated Use `view` instead */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  buttonSize?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: CanvasEvent<CanvasIconButton>) => void;
  style?: Partial<CanvasFlexStyle>;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  id?: string;
  portalHoverEnabled?: boolean;
  tooltip?: CanvasNodeTooltipConfig;
}
interface EmbedIconButtonProps
  extends CanvasInteractionProps,
    CanvasLayerProps {
  icon: ButtonIcon;
  /** @deprecated Use `buttonSize` with ButtonSize type instead */
  size?: number | 'auto';
  /** @deprecated Use `view` instead */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  buttonSize?: EmbedIconButtonSize;
  /** Переопределяет размер квадратной кнопки (px), приоритет над SIZE_CONFIG */
  overrideSquareSize?: number;
  /** Переопределяет размер иконки внутри кнопки (px), приоритет над SIZE_CONFIG */
  overrideIconSize?: number;
  /** Переопределяет цвет иконки в покое (иначе — цвет из view-палитры) */
  iconColor?: string;
  /** Переопределяет цвет иконки при hover (иначе — iconColor override или view) */
  iconColorHovered?: string;
  disabled?: boolean;
  onClick?: (event: CanvasEvent<CanvasEmbedIconButton>) => void;
  style?: Partial<CanvasFlexStyle>;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  id?: string;
  portalHoverEnabled?: boolean;
  tooltip?: CanvasNodeTooltipConfig;
}
interface CheckboxProps extends CanvasInteractionProps, CanvasLayerProps {
  checked: boolean;
  indeterminate?: boolean;
  size?: number | 'auto';
  theme?: GlideThemeForRender;
  disabled?: boolean;
  onClick?: (event: CanvasEvent<CanvasIconButton>) => void;
  style?: Partial<CanvasFlexStyle>;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  id?: string;
  portalHoverEnabled?: boolean;
  tooltip?: CanvasNodeTooltipConfig;
}

interface RectProps extends CanvasInteractionProps, CanvasLayerProps {
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  style?: Partial<CanvasFlexStyle>;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  id?: string;
  portalHoverEnabled?: boolean;
  tooltip?: CanvasNodeTooltipConfig;
}

interface BadgeProps extends CanvasInteractionProps, CanvasLayerProps {
  /** Badge text content */
  text: string;
  /** Badge view style */
  view?: BadgeView;
  /** Badge size */
  size?: BadgeSize;
  /** Use transparent background */
  transparent?: boolean;
  /** No background, only text */
  clear?: boolean;
  /** Left icon (SVG string or image) */
  leftIcon?: ButtonIcon;
  /** Right icon (SVG string or image) */
  rightIcon?: ButtonIcon;
  /** Кастомный цвет текста. Только конкретные значения: hex, rgb(), rgba(). CSS-переменные не поддерживаются. */
  customColor?: string;
  /** Кастомный цвет фона. Только конкретные значения: hex, rgb(), rgba(). CSS-переменные не поддерживаются. */
  customBackgroundColor?: string;
  style?: Partial<CanvasFlexStyle>;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  id?: string;
  portalHoverEnabled?: boolean;
  tooltip?: CanvasNodeTooltipConfig;
  pilled?: boolean;
}

interface SkeletonProps extends CanvasInteractionProps, CanvasLayerProps {
  /** Ширина скелетона (number, '100%', '100px', '1rem') */
  width?: number | string;
  /** Высота скелетона (number, '100%', '100px', '1rem') */
  height?: number | string;
  /**
   * Радиус скругления углов.
   * Принимает ключи маппинга plasma-dev: 0, 8, 12, 14, 16, 18, 20, 24, 28, 32, 250
   * Или CSS-строки: "8px", "1rem"
   * По умолчанию: 16 (= 1rem = 16px)
   */
  roundness?: number | string;
  /** Более контрастный вариант градиента */
  lighter?: boolean;
  /** Пользовательский градиент (CSS linear-gradient) */
  customGradientColor?: string;
  /** Включить shimmer-анимацию (по умолчанию: true) */
  animated?: boolean;
  /** Длительность shimmer цикла в мс (по умолчанию: 4000) */
  shimmerDuration?: number;
  /** Flex стили */
  style?: Partial<CanvasFlexStyle>;
  /** Уникальный id */
  id?: string;
}

interface LinkProps
  extends CanvasInteractionProps,
    CanvasLayerProps,
    Omit<CanvasTextOptions, 'font' | 'fontSize' | 'lineHeightPx' | 'color'> {
  children?: ReactNode;
  href?: string;
  target?: string;
  view?: LinkView;
  disabled?: boolean;
  onClick?: (event: CanvasEvent<CanvasLink>) => void;
  font?: string;
  color?: string;
  style?: Partial<CanvasFlexStyle>;
  id?: string;
  portalHoverEnabled?: boolean;
  position?: 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  tooltip?: CanvasNodeTooltipConfig;
}

type CanvasComponentType =
  | 'Container'
  | 'Text'
  | 'Icon'
  | 'Button'
  | 'IconButton'
  | 'EmbedIconButton'
  | 'Checkbox'
  | 'Rect'
  | 'Badge'
  | 'Skeleton'
  | 'Link';

type CanvasComponentMarker = { __canvasType: CanvasComponentType };

type CanvasComponent<P> = ((props: P) => ReactElement | null) &
  CanvasComponentMarker;

const createCanvasComponent = <P extends object>(
  type: CanvasComponentType
): CanvasComponent<P> => {
  const Component = (_props: P) => null;
  // eslint-disable-next-line no-underscore-dangle
  (Component as CanvasComponent<P>).__canvasType = type;
  return Component as CanvasComponent<P>;
};

export interface RootBridgeProps {
  cellId: string;
  renderContent: () => ReactElement;
  nodeRegistry: React.MutableRefObject<Map<string, ReactElement>>;
  onRegistryChange?: () => void;
}

export const RootBridge = React.memo(
  ({
    cellId,
    renderContent,
    nodeRegistry,
    onRegistryChange,
  }: RootBridgeProps) => {
    const content = renderContent();
    const lastCellIdRef = React.useRef<string | null>(null);

    useLayoutEffect(() => {
      const registry = nodeRegistry.current;
      const previousCellId = lastCellIdRef.current;

      if (previousCellId && previousCellId !== cellId) {
        registry.delete(previousCellId);
      }

      const previousContent = registry.get(cellId);
      const hasPrevious = previousContent !== undefined;

      registry.set(cellId, content);

      if (hasPrevious && previousContent !== content) {
        onRegistryChange?.();
      }

      lastCellIdRef.current = cellId;
    }, [cellId, content, nodeRegistry, onRegistryChange]);

    useLayoutEffect(
      () => () => {
        const registry = nodeRegistry.current;
        if (lastCellIdRef.current) {
          registry.delete(lastCellIdRef.current);
          lastCellIdRef.current = null;
        }
      },
      [nodeRegistry]
    );

    return null;
  }
);

const SkeletonComponent = createCanvasComponent<SkeletonProps>('Skeleton');
const ContainerComponent = createCanvasComponent<ContainerProps>('Container');
const TextComponent = createCanvasComponent<TextProps>('Text');
const IconComponent = createCanvasComponent<IconProps>('Icon');
const ButtonComponent = createCanvasComponent<ButtonProps>('Button');
const IconButtonComponent =
  createCanvasComponent<IconButtonProps>('IconButton');
const EmbedIconButtonComponent =
  createCanvasComponent<EmbedIconButtonProps>('EmbedIconButton');
const RectComponent = createCanvasComponent<RectProps>('Rect');
const BadgeComponent = createCanvasComponent<BadgeProps>('Badge');
const CheckboxComponent = createCanvasComponent<CheckboxProps>('Checkbox');
const LinkComponent = createCanvasComponent<LinkProps>('Link');

export const Canvas = {
  Container: ContainerComponent,
  Text: TextComponent,
  Icon: IconComponent,
  Button: ButtonComponent,
  IconButton: IconButtonComponent,
  EmbedIconButton: EmbedIconButtonComponent,
  Checkbox: CheckboxComponent,
  Rect: RectComponent,
  Badge: BadgeComponent,
  Skeleton: SkeletonComponent,
  Link: LinkComponent,
  /**
   * Convert a React icon component to SVG string.
   * Results are cached for performance.
   *
   * @example
   * import { IconCheck } from '@salutejs/plasma-icons'
   *
   * // Option 1: Use directly in Canvas.Icon (auto-converted)
   * <Canvas.Icon icon={<IconCheck />} size={16} />
   *
   * // Option 2: Convert manually if needed
   * const checkSvg = Canvas.icon(<IconCheck />)
   */
  icon: normalizeIcon,
};

function wrapEventHandler<T extends CanvasNode>(
  handler: ((event: CanvasEvent<T>) => void) | undefined,
  _node: T
): ((event: CanvasEvent<T>) => void) | undefined {
  if (!handler) {
    return undefined;
  }

  // eslint-disable-next-line func-names
  return function (this: T, event: CanvasEvent<T>) {
    handler.call(this, event);
  };
}

type IconToPreload = { icon: ButtonIcon; size: number };

export function buildCanvasTree({
  element,
  idPrefix = 'root',
  theme,
}: {
  element: ReactElement;
  idPrefix?: string;
  theme: GlideThemeForRender;
}): CanvasNode {
  const iconsToPreload: IconToPreload[] = [];
  const node = buildNode(element, idPrefix, 0, iconsToPreload, theme);

  if (iconsToPreload.length > 0) {
    const bySize = new Map<number, ButtonIcon[]>();
    // eslint-disable-next-line no-restricted-syntax
    for (const { icon, size } of iconsToPreload) {
      // eslint-disable-next-line no-continue
      if (!icon) continue;
      const list = bySize.get(size) ?? [];
      list.push(icon);
      bySize.set(size, list);
    }

    bySize.forEach((icons, size) => {
      preloadIconSprites(icons, { size });
    });
  }

  return node;
}

function extractTextFromChildren(children: ReactNode): string {
  if (children === null || children === undefined) return '';
  if (typeof children === 'string' || typeof children === 'number')
    return String(children);
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join('');
  }

  return '';
}

function resolveCanvasTextMetrics(
  theme: GlideThemeForRender,
  font: string | undefined,
  lineHeight: number | undefined
): Pick<CanvasTextOptions, 'fontSize' | 'lineHeightPx'> {
  const fontMetrics = theme.fontMetrics as FontMetrics | undefined;
  const themeFonts = theme.fonts;

  if (fontMetrics === undefined || themeFonts === undefined) {
    return {};
  }

  const fontToken = font ?? theme.baseFontStyle;
  const fontKey = (Object.keys(themeFonts) as Array<keyof FontMetrics>).find(
    (key) => themeFonts[key] === fontToken
  );

  if (fontKey === undefined) {
    return {};
  }

  const metrics = fontMetrics[fontKey];

  if (metrics === undefined) {
    return {};
  }

  // lineHeight prop остается множителем и важнее line-height из темы.
  return {
    fontSize: metrics.fontSize,
    ...(lineHeight === undefined ? { lineHeightPx: metrics.lineHeightPx } : {}),
  };
}

function buildNode(
  element: ReactElement,
  idPrefix: string,
  index: number,
  iconsToPreload: IconToPreload[],
  theme: GlideThemeForRender
): CanvasNode {
  if (!element || !React.isValidElement(element)) {
    throw new Error('Invalid element. Use Canvas.* components.');
  }

  const elementType = element.type as CanvasComponent<unknown>;
  const canvasType = elementType.__canvasType as
    | CanvasComponentType
    | undefined;

  if (!canvasType) {
    throw new Error(
      `Unknown canvas component. Use Canvas.* components. Got: ${
        elementType?.name || elementType
      }`
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = element.props as Record<string, any>;
  const elementKey = element.key != null ? String(element.key) : null;
  const nodeSuffix = elementKey ?? index;
  const nodeId =
    props['id'] ?? `${idPrefix}-${canvasType.toLowerCase()}-${nodeSuffix}`;

  // Collect icons for preloading (normalize React icons to SVG strings)
  const normalizeIconForPreload = (icon: ButtonIcon): ButtonIcon =>
    isReactIcon(icon) ? normalizeIcon(icon) : icon;

  if (canvasType === 'Icon' && props['icon']) {
    iconsToPreload.push({
      icon: normalizeIconForPreload(props['icon']),
      size: props['size'] ?? 16,
    });
  } else if (canvasType === 'IconButton' && props['icon']) {
    const buttonSize: ButtonSize = props['buttonSize'] ?? 's';
    const { iconSize } = SIZE_CONFIG[buttonSize];
    iconsToPreload.push({
      icon: normalizeIconForPreload(props['icon']),
      size: iconSize,
    });
  } else if (canvasType === 'EmbedIconButton' && props['icon']) {
    const buttonSize: ButtonSize = props['buttonSize'] ?? 's';
    const iconSizeFinal =
      props['overrideIconSize'] ?? SIZE_CONFIG[buttonSize].iconSize;
    iconsToPreload.push({
      icon: normalizeIconForPreload(props['icon']),
      size: iconSizeFinal,
    });
  } else if (canvasType === 'Checkbox') {
    // const buttonSize: ButtonSize = props['buttonSize'] ?? 's';
    // const { iconSize } = SIZE_CONFIG[buttonSize];
    CHECKBOX_ICONS_ARR.forEach((el) => {
      iconsToPreload.push({
        icon: normalizeIconForPreload(el),
        size: 20,
      });
    });
  } else if (canvasType === 'Button') {
    const buttonSize: ButtonSize = props['size'] ?? 's';
    const { iconSize } = SIZE_CONFIG[buttonSize];
    if (props['leftIcon'])
      iconsToPreload.push({
        icon: normalizeIconForPreload(props['leftIcon']),
        size: iconSize,
      });
    if (props['rightIcon'])
      iconsToPreload.push({
        icon: normalizeIconForPreload(props['rightIcon']),
        size: iconSize,
      });
  } else if (canvasType === 'Badge') {
    // Badge icon sizes: xs=10, s=12, m=14, l=16
    const badgeSize = props['size'] ?? 's';
    const iconSizeMap: Record<string, number> = { xs: 10, s: 12, m: 14, l: 16 };
    const iconSize = iconSizeMap[badgeSize] ?? 12;
    if (props['leftIcon'])
      iconsToPreload.push({
        icon: normalizeIconForPreload(props['leftIcon']),
        size: iconSize,
      });
    if (props['rightIcon'])
      iconsToPreload.push({
        icon: normalizeIconForPreload(props['rightIcon']),
        size: iconSize,
      });
  }

  const node = createNode(canvasType, nodeId, props, theme);

  if (props['portalHoverEnabled']) {
    node.portalHoverEnabled = true;
  }

  if (props['tooltip'] !== undefined) {
    node.tooltip = props['tooltip'];
  }

  // autoTooltip делает текстовую ноду hover-таргетом (если не выключен явно).
  if (props['autoTooltip'] !== undefined) {
    const auto = props['autoTooltip'];
    const autoEnabled =
      auto === true ||
      (typeof auto === 'object' && auto !== null && auto.enabled !== false);
    if (autoEnabled) {
      node.portalHoverEnabled = true;
    }
  }

  if (props['interaction'] !== undefined) {
    node.interaction = normalizeCanvasInteraction(props['interaction']);
  }

  // JSX zIndex становится локальным canvas-layer внутри текущего canvas-root.
  // Это не DOM z-index и не влияет на соседние ячейки/поповеры.
  if (typeof props['zIndex'] === 'number') {
    node.zIndex = props['zIndex'];
  }

  if (props['style']) {
    node.style = props['style'];
  }

  const { children } = props;
  if (children && node instanceof CanvasContainer) {
    const childArray = React.Children.toArray(children);
    childArray.forEach((child, i) => {
      if (React.isValidElement(child)) {
        const childNode = buildNode(child, nodeId, i, iconsToPreload, theme);
        node.addChild(childNode);
      }
    });
  }

  return node;
}

function createNode(
  type: string,
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>,
  theme: GlideThemeForRender
): CanvasNode {
  switch (type) {
    case 'Container': {
      const containerProps = props as InternalContainerProps;
      const {
        id: _,
        gap,
        columnGap,
        rowGap,
        position,
        left,
        top,
        right,
        bottom,
        zIndex: _zIndex,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        backgroundColor: _backgroundColor,
        __backgroundColorResolver: _backgroundColorResolver,
        portalHoverEnabled: _phe,
        ...restFlexOptions
      } = containerProps;
      const flexOptions = {
        ...restFlexOptions,
        columnGap: columnGap ?? gap ?? 0,
        rowGap: rowGap ?? gap ?? 0,
      };

      const node = new CanvasContainer(
        id,
        flexOptions,
        resolveContainerBackgroundColor(containerProps, theme)
      );
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      const click = wrapEventHandler(onClick, node);
      const enter = wrapEventHandler(onMouseEnter, node);
      const leave = wrapEventHandler(onMouseLeave, node);
      const down = wrapEventHandler(onMouseDown, node);
      if (click) node.onClick = click;
      if (enter) node.onMouseEnter = enter;
      if (leave) node.onMouseLeave = leave;
      if (down) node.onMouseDown = down;

      return node;
    }

    case 'Text': {
      const {
        children,
        font,
        color,
        wordWrap,
        lineHeight,
        overflow,
        textOverflow,
        ellipsis,
        maxLines,
        autoTooltip,
        position,
        left,
        top,
        right,
        bottom,
        portalHoverEnabled: _phe,
      } = props;
      const text = extractTextFromChildren(children);
      const defaultFontFamily =
        theme.fontFamily ||
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      let fontResult: string;

      if (font) {
        const hasFontFamily = /["']|sans-serif|serif|monospace/i.test(font);

        fontResult = hasFontFamily ? font : `${font} ${defaultFontFamily}`;
      } else {
        fontResult = theme.baseFontStyle
          ? `${theme.baseFontStyle} ${defaultFontFamily}`
          : `13px ${defaultFontFamily}`;
      }
      const textMetrics = resolveCanvasTextMetrics(theme, font, lineHeight);

      // JSX-слой только прокидывает overflow-настройки в primitive.
      // Само измерение, ellipsis и clipping остаются в CanvasText.
      const node = new CanvasText(id, text, {
        font: fontResult,
        ...textMetrics,
        color,
        wordWrap,
        lineHeight,
        overflow,
        textOverflow,
        ellipsis,
        maxLines,
        autoTooltip,
      });
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      return node;
    }

    case 'Icon': {
      const {
        icon,
        size,
        color,
        backgroundColor,
        position,
        left,
        top,
        right,
        bottom,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
      } = props;
      // Normalize React icon components to SVG strings
      const normalizedIcon = isReactIcon(icon) ? normalizeIcon(icon) : icon;
      const node = new CanvasIcon(id, normalizedIcon, { size, color });
      if (backgroundColor) node.backgroundColor = backgroundColor;
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      const click = wrapEventHandler(onClick, node);
      const enter = wrapEventHandler(onMouseEnter, node);
      const leave = wrapEventHandler(onMouseLeave, node);
      const down = wrapEventHandler(onMouseDown, node);
      if (click) node.onClick = click;
      if (enter) node.onMouseEnter = enter;
      if (leave) node.onMouseLeave = leave;
      if (down) node.onMouseDown = down;
      return node;
    }

    case 'Button': {
      const {
        children,
        variant,
        view,
        size,
        leftIcon,
        rightIcon,
        disabled,
        position,
        left,
        top,
        right,
        bottom,
        onClick,
      } = props;
      const text = typeof children === 'string' ? children : '';
      // Normalize React icon components to SVG strings
      const normalizedLeftIcon = isReactIcon(leftIcon)
        ? normalizeIcon(leftIcon)
        : leftIcon;
      const normalizedRightIcon = isReactIcon(rightIcon)
        ? normalizeIcon(rightIcon)
        : rightIcon;
      const node = new CanvasButton(id, text, {
        variant,
        view,
        size,
        leftIcon: normalizedLeftIcon,
        rightIcon: normalizedRightIcon,
        disabled,
        theme: theme as Theme,
      });
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      if (!disabled) {
        const click = wrapEventHandler(onClick, node);
        if (click) node.onClick = click;
      }
      return node;
    }
    case 'EmbedIconButton':
    case 'IconButton': {
      const {
        icon,
        size,
        variant,
        view,
        buttonSize,
        overrideSquareSize,
        overrideIconSize,
        disabled,
        position,
        left,
        top,
        right,
        bottom,
        onClick,
      } = props;
      // Normalize React icon components to SVG strings
      const normalizedIcon = isReactIcon(icon) ? normalizeIcon(icon) : icon;
      const Instance =
        type === 'IconButton' ? CanvasIconButton : CanvasEmbedIconButton;

      const node = new Instance(id, normalizedIcon, {
        size,
        variant,
        view,
        buttonSize,
        overrideSquareSize,
        overrideIconSize,
        disabled,
      });
      // Цветовой override иконки поддерживает только EmbedIconButton.
      if (node instanceof CanvasEmbedIconButton) {
        const { iconColor, iconColorHovered } = props;
        if (iconColor !== undefined) node.iconColor = iconColor;
        if (iconColorHovered !== undefined) {
          node.iconColorHovered = iconColorHovered;
        }
      }
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      if (!disabled) {
        const click = wrapEventHandler(onClick, node);
        if (click) node.onClick = click;
      }
      return node;
    }
    case 'Checkbox': {
      const {
        checked,
        indeterminate,
        size = 'auto',
        theme: checkboxTheme,
        view,
        buttonSize,
        disabled,
        position,
        left,
        top,
        right,
        bottom,
        onClick,
      } = props;
      // Normalize React icon components to SVG strings
      const normalizedIcon = normalizeIcon(
        checked ? CHECKBOX_ICONS.checkedIcon : CHECKBOX_ICONS.indeterminateIcon
      );
      const node = new CanvasCheckbox(
        id,
        normalizedIcon,
        checked,
        indeterminate,
        {
          size,
          theme: checkboxTheme ?? theme,
          view,
          buttonSize,
          disabled,
        }
      );
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      if (!disabled) {
        const click = wrapEventHandler(onClick, node);
        if (click) node.onClick = click;
      }
      return node;
    }

    case 'Rect': {
      const {
        color,
        borderColor,
        borderWidth,
        position,
        left,
        top,
        right,
        bottom,
      } = props;
      const node = new CanvasRect(id, color);
      if (borderColor) node.borderColor = borderColor;
      if (borderWidth) node.borderWidth = borderWidth;
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      return node;
    }

    case 'Badge': {
      const {
        text,
        view,
        size,
        transparent,
        clear,
        leftIcon,
        rightIcon,
        customColor,
        customBackgroundColor,
        position,
        left,
        top,
        right,
        bottom,
        portalHoverEnabled: _phe,
        pilled,
      } = props;
      // Normalize React icon components to SVG strings
      const normalizedLeftIcon = isReactIcon(leftIcon)
        ? normalizeIcon(leftIcon)
        : leftIcon;
      const normalizedRightIcon = isReactIcon(rightIcon)
        ? normalizeIcon(rightIcon)
        : rightIcon;
      const node = new CanvasBadge(id, text, {
        view,
        size,
        transparent,
        clear,
        leftIcon: normalizedLeftIcon,
        rightIcon: normalizedRightIcon,
        pilled,
        customColor,
        customBackgroundColor,
        theme: theme as Theme,
      });
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      return node;
    }

    case 'Skeleton': {
      const {
        width,
        height,
        roundness,
        lighter,
        customGradientColor,
        animated,
        shimmerDuration,
        style,
        portalHoverEnabled: _phe,
      } = props;

      const normalizedWidth = normalizeDimensionValue(width);
      const normalizedHeight = normalizeDimensionValue(height);

      const mergedStyle = {
        ...style,
        ...(normalizedWidth !== undefined ? { width: normalizedWidth } : null),
        ...(normalizedHeight !== undefined
          ? { height: normalizedHeight }
          : null),
      };

      const node = new CanvasSkeleton(id, {
        roundness,
        lighter,
        customGradientColor,
        shimmerDuration,
        animated,
      });

      node.style = mergedStyle;
      return node;
    }

    case 'Link': {
      const {
        children,
        href,
        target,
        view,
        disabled,
        font,
        color,
        wordWrap,
        lineHeight,
        overflow,
        textOverflow,
        ellipsis,
        maxLines,
        position,
        left,
        top,
        right,
        bottom,
        onClick,
        portalHoverEnabled: _phe,
      } = props;
      const text = extractTextFromChildren(children);
      const defaultFontFamily =
        theme.fontFamily ||
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      let fontResult: string;

      if (font) {
        const hasFontFamily = /["']|sans-serif|serif|monospace/i.test(font);
        fontResult = hasFontFamily ? font : `${font} ${defaultFontFamily}`;
      } else {
        fontResult = theme.baseFontStyle
          ? `${theme.baseFontStyle} ${defaultFontFamily}`
          : `13px ${defaultFontFamily}`;
      }
      const textMetrics = resolveCanvasTextMetrics(theme, font, lineHeight);

      // Link наследует поведение CanvasText, поэтому используем те же props
      // и не заводим отдельную реализацию ellipsis для ссылок.
      const node = new CanvasLink(id, text, {
        font: fontResult,
        ...textMetrics,
        color,
        wordWrap,
        lineHeight,
        overflow,
        textOverflow,
        ellipsis,
        maxLines,
        href,
        target,
        view,
        disabled,
        theme: theme as Theme,
      });
      if (position) node.position = position;
      if (left !== undefined) node.left = left;
      if (top !== undefined) node.top = top;
      if (right !== undefined) node.right = right;
      if (bottom !== undefined) node.bottom = bottom;
      if (!disabled) {
        const click = wrapEventHandler(onClick, node);
        if (click) node.setOnClick(click);
      }
      return node;
    }

    default:
      throw new Error(`Unknown canvas component type: ${type}`);
  }
}

export type {
  SkeletonProps as CanvasSkeletonProps,
  BadgeProps as CanvasBadgeProps,
  ButtonProps as CanvasButtonProps,
  ContainerProps as CanvasContainerProps,
  EmbedIconButtonProps as CanvasEmbedIconButtonProps,
  IconButtonProps as CanvasIconButtonProps,
  IconProps as CanvasIconProps,
  RectProps as CanvasRectProps,
  TextProps as CanvasTextProps,
  LinkProps as CanvasLinkProps,
};
