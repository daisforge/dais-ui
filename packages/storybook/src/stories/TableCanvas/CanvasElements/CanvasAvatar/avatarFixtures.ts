import {
  type CanvasAvatarItem,
  tableCanvasTheme,
} from '@ui-kit/components/TableCanvas';

/** Повторяемые тестовые SVG без внешних ресурсов для canvas-примеров. */
export function createAvatarSvg({
  variant = 0,
  width = 96,
  height = 96,
  transparent = false,
}: {
  /** Номер цветового варианта тестового портрета. */
  variant?: number;
  /** Ширина SVG в пикселях. */
  width?: number;
  /** Высота SVG в пикселях. */
  height?: number;
  /** Убирает фоновый прямоугольник для проверки прозрачности изображения. */
  transparent?: boolean;
} = {}) {
  const { tokens } = tableCanvasTheme;
  const colors = [
    tokens.dataBlue,
    tokens.dataPink,
    tokens.dataPositive,
    tokens.dataViolet,
    tokens.dataOrange,
  ];
  const color = colors[variant % colors.length] ?? colors[0];
  const headRadius = Math.min(width, height) * 0.18;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    ${
      transparent
        ? ''
        : `<rect width="100%" height="100%" fill="${tokens.surfaceAccentMinor}" />`
    }
    <circle cx="${width / 2}" cy="${height * 0.35}" r="${headRadius}" fill="${
    tokens.dataWarningMinor
  }" />
    <ellipse cx="${width / 2}" cy="${height}" rx="${width * 0.38}" ry="${
    height * 0.43
  }" fill="${color}" />
  </svg>`;
}

export function createAvatarImage(
  options: Parameters<typeof createAvatarSvg>[0] = {},
) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    createAvatarSvg(options),
  )}`;
}

export function createAvatarItems(): readonly CanvasAvatarItem[] {
  return [
    'Анна Иванова',
    'Борис Петров',
    'Вера Соколова',
    'Глеб Орлов',
    'Дарья Белова',
  ].map((name, index) => ({
    id: `person-${index + 1}`,
    name,
    url: createAvatarImage({ variant: index }),
    tooltip: name,
  }));
}

// Создаём URL один раз, чтобы при перерисовках сохранялись ключи кэша загрузчика.
export const avatarItems = createAvatarItems();
export const transparentAvatarImage = createAvatarImage({
  variant: 2,
  transparent: true,
});

export function avatarCopyText(
  items: readonly CanvasAvatarItem[],
  total = items.length,
) {
  const names = items
    .map((item) => item.name || item.customText || 'Участник')
    .join(', ');
  const unknown = Math.max(0, total - items.length);
  return [names, unknown ? `ещё ${unknown} участников` : '']
    .filter(Boolean)
    .join('; ');
}
