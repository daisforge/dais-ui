import React, { memo } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { clearIconCache, getIconCacheSize, normalizeIcon } from '../iconUtils';

describe('normalizeIcon', () => {
  beforeEach(clearIconCache);

  it('distinguishes components with identical names and props', () => {
    const makeIcon = (path: string) =>
      function Icon() {
        return (
          <svg>
            <path d={path} />
          </svg>
        );
      };

    const Warning = makeIcon('M0 0L5 10');
    const Arrow = makeIcon('M0 5H10');
    expect(normalizeIcon(<Warning />)).toContain('M0 0L5 10');
    expect(normalizeIcon(<Arrow />)).toContain('M0 5H10');
    expect(getIconCacheSize()).toBe(2);
  });

  it('keeps anonymous memo components separate', () => {
    const Up = memo(() => (
      <svg>
        <title>up</title>
      </svg>
    ));
    const Down = memo(() => (
      <svg>
        <title>down</title>
      </svg>
    ));
    expect(normalizeIcon(<Up />)).toContain('>up<');
    expect(normalizeIcon(<Down />)).toContain('>down<');
  });

  it('reuses a matching variant and drops it when the cache is cleared', () => {
    const Icon = vi.fn(({ color }: { color: string }) => <svg fill={color} />);
    normalizeIcon(<Icon color="red" />);
    normalizeIcon(<Icon color="red" />);
    expect(Icon).toHaveBeenCalledTimes(1);
    expect(normalizeIcon(<Icon color="blue" />)).toContain('fill="blue"');
    expect(getIconCacheSize()).toBe(2);
    clearIconCache();
    expect(getIconCacheSize()).toBe(0);
    normalizeIcon(<Icon color="red" />);
    expect(Icon).toHaveBeenCalledTimes(3);
  });

  it.each(['size', 'color', 'className'] as const)(
    'кэширует явно переданный %s={undefined} отдельно от пропущенного пропса',
    (key) => {
      const Icon = vi.fn(
        (props: Partial<Record<typeof key, string | undefined>>) => (
          <svg
            data-variant={key in props ? props[key] ?? 'explicit' : 'omitted'}
          />
        ),
      );

      const explicit = { [key]: undefined };
      expect(normalizeIcon(<Icon {...explicit} />)).toContain(
        'data-variant="explicit"',
      );
      expect(normalizeIcon(<Icon {...explicit} />)).toContain(
        'data-variant="explicit"',
      );
      expect(Icon).toHaveBeenCalledTimes(1);

      expect(normalizeIcon(<Icon />)).toContain('data-variant="omitted"');
      expect(normalizeIcon(<Icon {...{ [key]: 'active' }} />)).toContain(
        'data-variant="active"',
      );
      expect(normalizeIcon(<Icon {...explicit} />)).toContain(
        'data-variant="explicit"',
      );
      expect(Icon).toHaveBeenCalledTimes(3);
      expect(getIconCacheSize()).toBe(3);
    },
  );

  it('учитывает освобождение вариантов только в том кэше, где они созданы', () => {
    const cleanup: (() => void)[] = [];
    vi.stubGlobal(
      'FinalizationRegistry',
      class {
        constructor(private readonly callback: () => void) {}

        register() {
          cleanup.push(this.callback);
        }
      },
    );
    try {
      clearIconCache();
      const Icon = ({ color }: { color?: string }) => <svg fill={color} />;
      normalizeIcon(<Icon />);
      clearIconCache();
      normalizeIcon(<Icon color="red" />);
      normalizeIcon(<Icon color="red" />);
      normalizeIcon(<Icon color="blue" />);

      expect(cleanup).toHaveLength(3);
      cleanup[0]?.();
      expect(getIconCacheSize()).toBe(2);
      cleanup.slice(1).forEach((release) => release());
      expect(getIconCacheSize()).toBe(0);
    } finally {
      vi.unstubAllGlobals();
      clearIconCache();
    }
  });

  it('ограничивает размер кэша в окружении без FinalizationRegistry', () => {
    vi.stubGlobal('FinalizationRegistry', undefined);
    try {
      clearIconCache();
      const Icon = vi.fn(({ color }: { color: string }) => (
        <svg fill={color} />
      ));
      for (let i = 0; i < 1025; i += 1) {
        normalizeIcon(<Icon color={String(i)} />);
      }
      expect(getIconCacheSize()).toBe(1);
      expect(normalizeIcon(<Icon color="1024" />)).toContain('fill="1024"');
      expect(Icon).toHaveBeenCalledTimes(1025);
    } finally {
      vi.unstubAllGlobals();
      clearIconCache();
    }
  });

  it('renders custom props and inline SVG children as supplied', () => {
    const Icon = ({ rotate }: { rotate: number }) => (
      <svg transform={`rotate(${rotate})`} />
    );
    normalizeIcon(<Icon rotate={0} />);
    expect(normalizeIcon(<Icon rotate={90} />)).toContain('rotate(90)');
    normalizeIcon(
      <svg>
        <circle r="4" />
      </svg>,
    );
    expect(
      normalizeIcon(
        <svg>
          <path d="M1 1" />
        </svg>,
      ),
    ).toContain('d="M1 1"');
  });
});
