import React from 'react';
import { describe, expect, expectTypeOf, it, vi } from 'vitest';

import type {
  CanvasAvatarGroupProps as PublicGroupProps,
  CanvasAvatarProps as PublicAvatarProps,
  CanvasImageProps as PublicImageProps,
} from '../../../../../TableCanvas/TableGlideInstance/reexports-for-external';
import { glideCellRenderer } from '../../../../cellRenderer';
import type { GlideThemeForRender } from '../../../../theming/types';
import { getTokens } from '../../../../tokens';
import type { CellInfo } from '../../../../types';
import { CellCanvasRoot } from '../../cells/CellCanvasRoot';
import { createCanvasCell, isCanvasCell } from '../../cells/factory';
import { createCanvasCellRenderer } from '../../cells/renderer/canvasCellRenderer';
import type { CanvasRenderArgs } from '../../cells/types';
import { buildCanvasTree, Canvas } from '../../components';
import { CanvasContainer } from '../../core/CanvasContainer';
import { DrawBatcher } from '../../core/DrawBatcher';
import { CANVAS_PORTAL_EVENT } from '../../utils/portalHoverEvents';
import { avatarInitials, CanvasAvatar } from '../CanvasAvatar';
import { avatarGroupCounts, CanvasAvatarGroup } from '../CanvasAvatarGroup';
import { imageRects } from '../image/image';

const theme = {
  tokens: getTokens(),
  fontFamily: 'sans-serif',
} as GlideThemeForRender;
const items = Array.from({ length: 5 }, (_, i) => ({
  id: String(i),
  name: `User ${i}`,
  url: `/photo-${i}.png`,
  tooltip: `User ${i}`,
}));
function context() {
  const calls: string[] = [];
  const ctx = Object.fromEntries(
    [
      'save',
      'restore',
      'beginPath',
      'rect',
      'arc',
      'moveTo',
      'clip',
      'fillRect',
      'fillText',
      'drawImage',
      'translate',
    ].map((key) => [key, vi.fn(() => calls.push(key))]),
  ) as unknown as CanvasRenderingContext2D;
  return { ctx, calls };
}
const bounds = { x: 0, y: 0, width: 200, height: 40 };

describe('Подсчёт участников группы', () => {
  it.each([
    [5, undefined, undefined, 3, 2, 4],
    [2, 3, 5, 2, 3, 3],
    [0, 3, 0, 0, 0, 0],
    [0, 3, 5, 0, 5, 1],
    [5, 0, undefined, 0, 5, 1],
    [5, 10, 2, 5, 0, 5],
    [5, -1, -1, 0, 5, 1],
    [5, 2.9, 8.9, 2, 6, 3],
    [5, NaN, Infinity, 3, 2, 4],
  ])(
    'нормализует количество участников: %s / %s / %s',
    (length, visible, total, shown, hidden, slots) => {
      expect(avatarGroupCounts(length as number, visible, total)).toMatchObject(
        { visible: shown, hidden, slots },
      );
    },
  );
  it('сохраняет исходный массив и передаёт известных скрытых участников', () => {
    const onOverflowClick = vi.fn();
    const group = new CanvasAvatarGroup('group', { items, onOverflowClick });
    const overflow = group.avatars[3]!;
    overflow.onClick({ target: overflow } as never);
    expect(onOverflowClick.mock.calls[0]![0]).toMatchObject({
      hiddenCount: 2,
      hiddenItems: items.slice(3),
      totalCount: 5,
    });
    expect(items).toHaveLength(5);
  });
});

describe('Геометрия изображений', () => {
  const rect = { x: 10, y: 20, width: 40, height: 40 };
  it('обрезает cover по центру и вписывает contain с полями', () => {
    expect(imageRects(100, 50, rect, 'cover')).toEqual({
      source: { x: 25, y: 0, width: 50, height: 50 },
      destination: rect,
    });
    expect(imageRects(100, 50, rect, 'contain')?.destination).toEqual({
      x: 10,
      y: 30,
      width: 40,
      height: 20,
    });
    expect(imageRects(50, 100, rect, 'cover')?.source).toEqual({
      x: 0,
      y: 25,
      width: 50,
      height: 50,
    });
    expect(imageRects(100, 50, rect, 'fill')?.source.width).toBe(100);
    expect(imageRects(0, 50, rect, 'cover')).toBeUndefined();
  });
});

describe('Отрисовка аватара и обработка событий', () => {
  it('формирует инициалы и использует фиксированные размеры FinAI', () => {
    expect(avatarInitials('Анна Иванова')).toBe('АИ');
    expect(avatarInitials(' Анна')).toBe('А');
    expect(avatarInitials()).toBe('');
    const a = new CanvasAvatar('a');
    a.measure();
    expect(a.rect.width).toBe(24);
    const g = new CanvasAvatarGroup('g', { items });
    g.measure(context().ctx);
    expect(g.rect.width).toBeCloseTo(81.6);
    expect(g.rect.height).toBe(24);
  });
  it('загружает только видимые фото и восстанавливает обрезку перед дальнейшей отрисовкой', () => {
    const { ctx, calls } = context();
    const loader = { loadOrGetImage: vi.fn(() => undefined) };
    const root = new CellCanvasRoot(new CanvasAvatarGroup('g', { items }));
    root.render(ctx, bounds, undefined, undefined, undefined, {
      loader,
      colIndex: 4,
      rowIndex: 500,
    });
    expect(loader.loadOrGetImage.mock.calls).toEqual([
      ['/photo-0.png', 4, 500],
      ['/photo-1.png', 4, 500],
      ['/photo-2.png', 4, 500],
    ]);
    expect(calls.filter((c) => c === 'save').length).toBe(
      calls.filter((c) => c === 'restore').length,
    );
    expect(calls.at(-1)).toBe('restore');
  });
  it('не загружает пустой URL или customText и не рисует инициалы под прозрачным фото', () => {
    const { ctx } = context();
    const batch = new DrawBatcher();
    const source = { naturalWidth: 20, naturalHeight: 20 } as HTMLImageElement;
    const loader = { loadOrGetImage: vi.fn(() => source) };
    batch.imageResources = { loader, colIndex: 0, rowIndex: 0 };
    new CanvasAvatar('a', { url: '/a', customText: 'OK' }).paint(batch, ctx);
    new CanvasAvatar('b', { url: '' }).paint(batch, ctx);
    batch.flush(ctx);
    expect(loader.loadOrGetImage).not.toHaveBeenCalled();
    batch.clear();
    vi.mocked(ctx.fillText).mockClear();
    new CanvasAvatar('c', { url: '/a', name: 'Anna' }).paint(batch, ctx);
    batch.flush(ctx);
    expect(ctx.drawImage).toHaveBeenCalledOnce();
    expect(ctx.fillText).not.toHaveBeenCalled();
  });
  it('определяет одного получателя клика в перекрытии и восстанавливает наведение после пересоздания', () => {
    const { ctx } = context();
    const clicked = vi.fn();
    const make = () =>
      new CanvasAvatarGroup('g', { items, onItemClick: clicked });
    const group = make();
    const root = new CellCanvasRoot(group);
    root.render(ctx, bounds, { x: 22, y: 12 });
    root.dispatchPointerEvent('click', 22, 12);
    expect(clicked).toHaveBeenCalledOnce();
    expect(clicked.mock.calls[0]![0].index).toBe(1);
    expect(group.avatars[1]!.cutRight).toBe(false);
    expect(group.avatars[2]!.cutLeft).toBe(true);
    const rebuilt = make();
    root.setRootNode(rebuilt);
    root.render(ctx, bounds, { x: 22, y: 12 });
    expect(rebuilt.avatars[1]!.cutRight).toBe(false);
    root.render(ctx, bounds);
    expect(rebuilt.avatars[1]!.cutRight).toBe(true);
    expect(rebuilt.avatars[2]!.cutLeft).toBe(false);
  });
  it('создаёт публичные JSX-элементы и сохраняет ширину группы при передаче style', () => {
    const node = buildCanvasTree({
      theme,
      element: (
        <Canvas.AvatarGroup
          items={items}
          style={{ cursor: 'pointer' }}
          tooltip="Team"
        />
      ),
    });
    expect(node).toBeInstanceOf(CanvasAvatarGroup);
    expect(node.style.width).toBeCloseTo(81.6);
    expect(node.portalHoverEnabled).toBe(true);
    expect(() =>
      buildCanvasTree({
        theme,
        element: React.createElement(Canvas.AvatarGroup, { items }, 'invalid'),
      }),
    ).toThrow('does not accept children');
  });
});

describe('Загрузка изображений и интеграция с порталом', () => {
  it('передаёт числовые координаты грида без ссылки на временный объект индексов', () => {
    const { ctx } = context();
    const captures: CanvasRenderArgs[] = [];
    const cell = createCanvasCell((_ctx, _rect, _theme, _x, _y, args) => {
      captures.push(args!);
      return {};
    });
    const loader = {
      loadOrGetImage: vi.fn(),
      setWindow: vi.fn(),
      setCallback: vi.fn(),
    };
    const renderer = createCanvasCellRenderer();
    const rowData = { id: 'business-row' };
    renderer.draw(
      {
        ctx,
        rect: bounds,
        bounds,
        theme,
        cell,
        col: 7,
        row: 501,
        rowData,
        imageLoader: loader,
      },
      cell,
    );
    renderer.draw(
      {
        ctx,
        rect: bounds,
        bounds,
        theme,
        cell,
        col: 8,
        row: 502,
        imageLoader: loader,
      },
      cell,
    );
    expect(captures[0]?.imageResources).toEqual({
      loader,
      colIndex: 7,
      rowIndex: 501,
    });
    expect(captures[0]?.row).toBe(501);
    expect(captures[0]?.rowData).toBe(rowData);
    expect(captures[1]?.row).toBe(502);
    expect(captures[1]?.rowData).toBeUndefined();
    expect(captures[1]?.imageResources?.rowIndex).toBe(502);
    expect(loader.setWindow).not.toHaveBeenCalled();
    expect(loader.setCallback).not.toHaveBeenCalled();
  });

  it('передаёт подсказку участника через получателя событий таблицы', () => {
    const { ctx } = context();
    const group = new CanvasAvatarGroup('portal-group', { items });
    const root = new CellCanvasRoot(group);
    const target = new EventTarget();
    const listener = vi.fn();
    target.addEventListener(CANVAS_PORTAL_EVENT, listener);
    root.setPortalEventTarget(target);
    root.render(ctx, bounds, { x: 22, y: 12 });
    expect(listener).toHaveBeenCalled();
    const event = listener.mock.calls.at(-1)![0] as CustomEvent;
    expect(event.detail).toMatchObject({
      visible: true,
      tooltipFromNode: 'User 1',
    });
  });

  it('сохраняет размер в контейнере ячейки и ограничивает события заданной шириной группы', () => {
    const { ctx } = context();
    const node = buildCanvasTree({
      theme,
      element: (
        <Canvas.Container style={{ width: 200, height: 40 }}>
          <Canvas.AvatarGroup items={items} style={{ width: 30 }} />
        </Canvas.Container>
      ),
    }) as CanvasContainer;
    const root = new CellCanvasRoot(node);
    root.render(ctx, bounds);
    const group = node.children[0] as CanvasAvatarGroup;
    expect(group.rect.width).toBe(30);
    expect(group.avatars[0]!.rect.width).toBe(24);
    expect(node.hitTest(40, 12)).not.toContain(group.avatars[2]);
    expect(group.avatars[2]!.groupClip?.width).toBe(30);
  });

  it('сохраняет внешние обработчики мыши вместе с состоянием наведения группы', () => {
    const { ctx } = context();
    const handler = vi.fn();
    const node = buildCanvasTree({
      theme,
      element: <Canvas.Avatar tooltip="Person" onMouseEnter={handler} />,
    });
    new CellCanvasRoot(node).render(ctx, bounds, { x: 12, y: 12 });
    expect(handler).toHaveBeenCalledOnce();
    expect(node.portalHoverEnabled).toBe(true);
  });
});

describe('Смена фотографии аватара', () => {
  const first = { naturalWidth: 20, naturalHeight: 20 } as HTMLImageElement;
  const second = { naturalWidth: 30, naturalHeight: 30 } as HTMLImageElement;

  function setup() {
    const { ctx } = context();
    const ready = new Map([['/first', first]]);
    const loader = { loadOrGetImage: vi.fn((url: string) => ready.get(url)) };
    const resources = { loader, colIndex: 0, rowIndex: 0 };
    const root = new CellCanvasRoot(new CanvasContainer('root'));
    const paint = (
      url?: string,
      name = 'Anna',
      id = 'person',
      customText?: string,
    ) => {
      const container = new CanvasContainer('root');
      container.addChild(new CanvasAvatar(id, { url, name, customText }));
      root.setRootNode(container);
      vi.mocked(ctx.drawImage).mockClear();
      vi.mocked(ctx.fillText).mockClear();
      loader.loadOrGetImage.mockClear();
      root.render(ctx, bounds, undefined, undefined, undefined, resources);
    };
    return { ctx, ready, loader, resources, root, paint };
  }

  it('сохраняет последнее загруженное фото при пересоздании до готовности нового', () => {
    const { ctx, ready, loader, paint } = setup();
    paint('/first');
    paint('/second');
    expect(ctx.drawImage).toHaveBeenCalledWith(
      first,
      0,
      0,
      20,
      20,
      0,
      0,
      24,
      24,
    );
    expect(ctx.fillText).not.toHaveBeenCalled();
    expect(loader.loadOrGetImage.mock.calls).toEqual([
      ['/second', 0, 0],
      ['/first', 0, 0],
    ]);
    // Повторная смена URL до конца загрузки должна сохранить последнее показанное фото.
    paint('/third');
    expect(ctx.drawImage).toHaveBeenCalledWith(
      first,
      0,
      0,
      20,
      20,
      0,
      0,
      24,
      24,
    );
    ready.set('/third', second);
    paint('/third');
    expect(ctx.drawImage).toHaveBeenCalledWith(
      second,
      0,
      0,
      30,
      30,
      0,
      0,
      24,
      24,
    );
    expect(loader.loadOrGetImage).toHaveBeenCalledOnce();
  });

  it.each([
    'name',
    'id',
    'row',
    'column',
    'loader',
    'empty',
    'customText',
    'removed',
  ])('сбрасывает предыдущее фото при изменении %s', (change) => {
    const { ctx, paint, resources, root, loader } = setup();
    paint('/first');
    if (change === 'row') resources.rowIndex = 500;
    if (change === 'column') resources.colIndex = 2;
    if (change === 'loader')
      resources.loader = {
        loadOrGetImage: vi.fn(
          (_url: string): HTMLImageElement | undefined => undefined,
        ),
      };
    if (change === 'empty') paint('');
    if (change === 'customText') {
      paint('/first', 'Anna', 'person', 'AI');
      expect(loader.loadOrGetImage).not.toHaveBeenCalled();
    }
    if (change === 'removed') {
      root.setRootNode(new CanvasContainer('empty'));
      root.render(ctx, bounds, undefined, undefined, undefined, resources);
    }
    paint(
      '/pending',
      change === 'name' ? 'Boris' : 'Anna',
      change === 'id' ? 'other' : 'person',
    );
    expect(ctx.drawImage).not.toHaveBeenCalled();
    expect(ctx.fillText).toHaveBeenCalled();
  });

  it('сохраняет фотографии по id при перестановке участников', () => {
    const { ctx } = context();
    const loader = {
      loadOrGetImage: vi.fn((url: string) =>
        new Map([
          ['/first', first],
          ['/second', second],
        ]).get(url),
      ),
    };
    const resources = { loader, colIndex: 1, rowIndex: 5 };
    const members = [
      { id: 'one', name: 'Same Name', url: '/first' },
      { id: 'two', name: 'Same Name', url: '/second' },
    ];
    const root = new CellCanvasRoot(
      new CanvasAvatarGroup('g', { items: members }),
    );
    root.render(ctx, bounds, undefined, undefined, undefined, resources);
    vi.mocked(ctx.drawImage).mockClear();
    root.setRootNode(
      new CanvasAvatarGroup('g', {
        items: [...members]
          .reverse()
          .map((item) => ({ ...item, url: '/pending' })),
      }),
    );
    root.render(ctx, bounds, undefined, undefined, undefined, resources);
    expect(vi.mocked(ctx.drawImage).mock.calls.map((call) => call[0])).toEqual([
      second,
      first,
    ]);
  });

  it('не удерживает переиспользованный объект изображения после удаления URL из кэша Glide', () => {
    const { ctx, ready, paint } = setup();
    paint('/first');
    ready.delete('/first');
    paint('/pending');
    expect(ctx.drawImage).not.toHaveBeenCalled();
    expect(ctx.fillText).toHaveBeenCalled();
  });
});

describe('Контракты рендерера аватаров', () => {
  it.each([
    ['s', 24, 8],
    ['m', 36, 14],
    ['l', 48, 20],
    ['xxl', 88, 32],
  ] as const)(
    'сохраняет типографику %s независимо от размера шрифта ячейки',
    (size, diameter, fontSize) => {
      const { ctx } = context();
      const paints: {
        color: string | CanvasGradient | CanvasPattern;
        font: string;
      }[] = [];
      vi.mocked(ctx.fillRect).mockImplementation(() => {
        paints.push({ color: ctx.fillStyle, font: ctx.font });
      });
      const node = buildCanvasTree({
        theme: {
          ...theme,
          fontFamily: '"Custom Table Font", serif',
          baseFontStyle: '400 30px',
        },
        element: <Canvas.Avatar name="Анна Иванова" size={size} />,
      });
      const batch = new DrawBatcher();
      node.measure(ctx);
      node.paint(batch, ctx);
      batch.flush(ctx);
      expect(node.rect.width).toBe(diameter);
      expect(ctx.font).toBe(`600 ${fontSize}px "Custom Table Font", serif`);
      expect(paints[0]?.color).toBe('#199AF033');
      expect(ctx.fillStyle).toBe('#0B7ECB');
      expect(ctx.fillText).toHaveBeenCalledWith(
        'АИ',
        diameter / 2,
        diameter / 2,
      );
    },
  );

  it.each([
    [
      'Image',
      <Canvas.Image
        src="/photo"
        style={{ width: 32, height: 20 }}
        tooltip="Image"
      />,
      32,
      20,
    ],
    ['Avatar', <Canvas.Avatar name="Анна" tooltip="Avatar" />, 24, 24],
    ['AvatarGroup', <Canvas.AvatarGroup items={items} />, 81.6, 24],
  ] as const)(
    'сохраняет размеры самостоятельного %s и данные строки в подсказках',
    (_name, element, width, height) => {
      const { ctx } = context();
      Object.assign(ctx, {
        canvas: { getBoundingClientRect: () => ({ left: 0, top: 0 }) },
      });
      const row = { id: 'person-row', name: 'Анна' };
      const target = new EventTarget();
      const listener = vi.fn();
      target.addEventListener(CANVAS_PORTAL_EVENT, listener);
      const cell = glideCellRenderer({
        jsxElement: element,
        canvasCellCache: new WeakMap(),
        cellInfo: {
          colInd: 7,
          rowInd: 501,
          row,
          column: { id: 'people' },
        } as CellInfo<typeof row, unknown>,
        options: { data: '', getPortalEventTarget: () => target },
      });
      expect(isCanvasCell(cell)).toBe(true);
      if (!isCanvasCell(cell)) throw new Error('Ожидалась canvas-ячейка');
      const result = cell.data.render(ctx, bounds, theme, 12, 12, { row: 501 });
      const container = result.canvasRoot!.rootNode as CanvasContainer;
      expect(container.rect.width).toBe(bounds.width);
      expect(container.rect.height).toBe(bounds.height);
      expect(container.children[0]!.rect.width).toBeCloseTo(width);
      expect(container.children[0]!.rect.height).toBe(height);
      expect(listener).toHaveBeenCalled();
      const event = listener.mock.calls.at(-1)![0] as CustomEvent;
      expect(event.detail.tooltipContext.row).toBe(row);
    },
  );

  it('разделяет данные строки и числовой индекс при клике по ячейке', () => {
    const { ctx } = context();
    const click = vi.fn(() => true);
    const row = { id: 'business-row' };
    const cell = createCanvasCell(() => ({}), click);
    const renderer = createCanvasCellRenderer();
    renderer.draw(
      { ctx, rect: bounds, bounds, theme, cell, col: 7, row: 501 },
      cell,
    );
    renderer.onClick({
      cell,
      bounds,
      posX: 12,
      posY: 12,
      location: [7, 501],
      row,
    });
    expect(click).toHaveBeenCalledOnce();
    expect(click.mock.calls[0]).toEqual([12, 12, bounds, row, 501, {}]);
  });

  it.each(['onMouseEnter', 'onMouseLeave', 'onClick'] as const)(
    'вызывает внутренний %s перед внешним обработчиком',
    (key) => {
      const calls: string[] = [];
      const internal = vi
        .spyOn(CanvasAvatar.prototype, key)
        .mockImplementation(() => {
          calls.push('internal');
        });
      try {
        const handler = vi.fn(() => {
          calls.push('external');
        });
        const node = buildCanvasTree({
          theme,
          element: <Canvas.Avatar {...{ [key]: handler }} />,
        });
        node[key]({ target: node } as never);
        expect(calls).toEqual(['internal', 'external']);
        expect(handler).toHaveBeenCalledOnce();
      } finally {
        internal.mockRestore();
      }
    },
  );

  it('исключает interaction из публичных свойств TableCanvas', () => {
    expectTypeOf<
      'interaction' extends keyof PublicImageProps ? true : false
    >().toEqualTypeOf<false>();
    expectTypeOf<
      'interaction' extends keyof PublicAvatarProps ? true : false
    >().toEqualTypeOf<false>();
    expectTypeOf<
      'interaction' extends keyof PublicGroupProps ? true : false
    >().toEqualTypeOf<false>();
  });
});

describe('Стили примитивов изображений', () => {
  it.each([
    [
      'Image',
      <Canvas.Image src="/photo" style={{ width: 32, height: 20 }} />,
      32,
      20,
    ],
    ['Avatar', <Canvas.Avatar />, 24, 24],
    ['AvatarGroup', <Canvas.AvatarGroup items={items} />, 81.6, 24],
  ] as const)(
    'сохраняет размеры %s в узкой ячейке после частичного обновления style',
    (_name, element, width, height) => {
      const { ctx } = context();
      const node = buildCanvasTree({ theme, element });
      const cursorStyle = { cursor: 'pointer' };
      node.style = cursorStyle;
      const container = new CanvasContainer('narrow-cell');
      container.style = { width: 10, height: 104 };
      container.addChild(node);
      new CellCanvasRoot(container).render(ctx, {
        ...bounds,
        width: 10,
        height: 104,
      });
      expect(node.rect.width).toBeCloseTo(width);
      expect(node.rect.height).toBe(height);
      expect(node.style.flexShrink).toBe(0);
      expect(node.style.cursor).toBe('pointer');
      expect(cursorStyle).toEqual({ cursor: 'pointer' });

      node.style = { cursor: 'crosshair', flexShrink: 1 };
      expect(node.style.cursor).toBe('crosshair');
      expect(node.style.flexShrink).toBe(1);
      expect(node.style.width).toBeCloseTo(width);
      expect(node.style.height).toBe(height);
    },
  );
});
