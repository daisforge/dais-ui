import type { Meta, StoryObj } from '@storybook/react';
import { BodyS, BodyXS } from '@ui-kit/components/Typography';
import { br, s } from '@ui-kit/constants';
import {
  outlineSolidSecondary,
  surfaceAccent,
  surfaceAccentMinor,
  textSecondary,
} from '@ui-kit/tokens';
import type { CSSProperties, ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Гайды/Space и Radius',
  tags: ['!autodocs', '!dev'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'none' } },
  },
};

export default meta;

type Story = StoryObj;

/**
 * Токен из макета и, если он есть в коде, значение из кода.
 * Для токенов из кода размер берётся из CSS-переменной темы, а цифра под ним
 * измеряется в браузере: видно, сколько пикселей реально даёт тема.
 */
type Token = { name: string; px: number; code?: string; codeName?: string };

const SPACE: Token[] = [
  { name: 'space-0-5x', px: 2, code: s.x1, codeName: 's.x1' },
  { name: 'space-1x', px: 4, code: s.x2, codeName: 's.x2' },
  { name: 'space-1-5x', px: 6, code: s.x3, codeName: 's.x3' },
  { name: 'space-2x', px: 8, code: s.x4, codeName: 's.x4' },
  { name: 'space-2-5x', px: 10 },
  { name: 'space-3x', px: 12, code: s.x6, codeName: 's.x6' },
  { name: 'space-3-5x', px: 14 },
  { name: 'space-4x', px: 16, code: s.x8, codeName: 's.x8' },
  { name: 'space-5x', px: 20, code: s.x10, codeName: 's.x10' },
  { name: 'space-6x', px: 24, code: s.x12, codeName: 's.x12' },
  { name: 'space-7x', px: 28 },
  { name: 'space-8x', px: 32, code: s.x16, codeName: 's.x16' },
  { name: 'space-10x', px: 40, code: s.x20, codeName: 's.x20' },
  { name: 'space-12x', px: 48, code: s.x24, codeName: 's.x24' },
  { name: 'space-14x', px: 56 },
  { name: 'space-16x', px: 64, code: s.x32, codeName: 's.x32' },
  { name: 'space-18x', px: 72 },
  { name: 'space-24x', px: 96 },
];

const NEGATIVE: Token[] = [
  { name: 'space-negative-0-5x', px: -2 },
  { name: 'space-negative-1x', px: -4 },
  { name: 'space-negative-2x', px: -8 },
  { name: 'space-negative-4x', px: -16 },
  { name: 'space-negative-5x', px: -20 },
  { name: 'space-negative-6x', px: -24 },
  { name: 'space-negative-7x', px: -28 },
  { name: 'space-negative-8x', px: -32 },
  { name: 'space-negative-10x', px: -40 },
];

const RADIUS: Token[] = [
  { name: 'radius-0-5x', px: 2 },
  { name: 'radius-1x', px: 4, code: br.xxs, codeName: 'br.xxs' },
  { name: 'radius-1-5x', px: 6 },
  { name: 'radius-2x', px: 8, code: br.xs, codeName: 'br.xs' },
  { name: 'radius-2-5x', px: 10 },
  { name: 'radius-3x', px: 12, code: br.s, codeName: 'br.s' },
  { name: 'radius-3-5x', px: 14 },
  { name: 'radius-4x', px: 16, code: br.m, codeName: 'br.m' },
  { name: 'radius-5x', px: 20, code: br.l, codeName: 'br.l' },
  { name: 'radius-6x', px: 24, code: br.xl, codeName: 'br.xl' },
];

const mono: CSSProperties = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  fontSize: 13,
};

/** Измеряет размер или скругление элемента после отрисовки. */
const useMeasured = (kind: 'width' | 'radius') => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<number | null>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const cs = getComputedStyle(ref.current);
    setValue(parseFloat(kind === 'width' ? cs.width : cs.borderTopLeftRadius));
  }, [kind]);
  return { ref, value };
};

const CodeNote = ({ token, value }: { token: Token; value: number | null }) => (
  <BodyXS style={{ color: textSecondary }}>
    {token.code
      ? `в коде ${token.codeName}${value === null ? '' : `, ${Math.round(value)} px`}`
      : 'только в макете'}
  </BodyXS>
);

const Row = ({
  token,
  children,
  note,
}: {
  token: Token;
  children: ReactNode;
  note: ReactNode;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '180px 64px 1fr',
      alignItems: 'center',
      gap: 16,
      padding: '8px 0',
      borderBottom: `1px solid ${outlineSolidSecondary}`,
    }}
  >
    <div>
      <div style={mono}>{token.name}</div>
      {note}
    </div>
    <BodyS>{token.px} px</BodyS>
    <div style={{ display: 'flex', alignItems: 'center', minHeight: 24 }}>
      {children}
    </div>
  </div>
);

const SpaceRow = ({ token }: { token: Token }) => {
  const { ref, value } = useMeasured('width');
  const size = token.code ?? `${token.px}px`;
  return (
    <Row token={token} note={<CodeNote token={token} value={value} />}>
      <div
        ref={ref}
        style={{
          width: size,
          height: size,
          backgroundColor: token.code ? surfaceAccent : 'transparent',
          border: token.code ? 'none' : `1px dashed ${surfaceAccent}`,
          boxSizing: 'border-box',
        }}
      />
    </Row>
  );
};

export const SpaceScale: Story = {
  name: 'Шкала отступов space',
  render: () => (
    <div style={{ maxWidth: 560 }}>
      {SPACE.map((t) => (
        <SpaceRow key={t.name} token={t} />
      ))}
    </div>
  ),
};

const Tile = ({ i }: { i: number }) => (
  <div
    style={{
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: i === 1 ? surfaceAccent : surfaceAccentMinor,
      border: '2px solid #fff',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 3 - i,
    }}
  />
);

export const SpaceNegative: Story = {
  name: 'Отрицательные отступы space-negative',
  render: () => (
    <div style={{ maxWidth: 560 }}>
      {NEGATIVE.map((t) => (
        <Row
          key={t.name}
          token={t}
          note={
            <BodyXS style={{ color: textSecondary }}>только в макете</BodyXS>
          }
        >
          <div style={{ display: 'flex' }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ marginLeft: i === 0 ? 0 : t.px }}>
                <Tile i={i} />
              </div>
            ))}
          </div>
        </Row>
      ))}
    </div>
  ),
};

const RadiusTile = ({ token }: { token: Token }) => {
  const { ref, value } = useMeasured('radius');
  return (
    <div style={{ display: 'grid', gap: 6, justifyItems: 'start' }}>
      <div
        ref={ref}
        style={{
          width: 72,
          height: 72,
          borderRadius: token.code ?? token.px,
          backgroundColor: token.code ? surfaceAccentMinor : 'transparent',
          border: `1px ${token.code ? 'solid' : 'dashed'} ${surfaceAccent}`,
          boxSizing: 'border-box',
        }}
      />
      <div style={mono}>{token.name}</div>
      <BodyS>{token.px} px</BodyS>
      <CodeNote token={token} value={value} />
    </div>
  );
};

export const RadiusScale: Story = {
  name: 'Шкала скруглений radius',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))',
        gap: 24,
      }}
    >
      {RADIUS.map((t) => (
        <RadiusTile key={t.name} token={t} />
      ))}
    </div>
  ),
};
