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
