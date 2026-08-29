import { ComponentProps } from 'react';

const TONES = {
  /** Серый вспомогательный текст: что делает пример и как с ним играть. */
  muted: { color: '#888' },
  /** Плашка ошибки/события (например, вывод notifications). */
  error: {
    padding: '6px 10px',
    borderRadius: 6,
    background: '#fdecec',
    color: '#a33',
  },
} as const;

/** Абзац-подсказка внутри стори. Выделения — обычным JSX (<b>, <code>). */
export const StoryHint = ({
  children,
  style,
  tone = 'muted',
  ...rest
}: ComponentProps<'p'> & { tone?: keyof typeof TONES }) => (
  <p
    style={{ fontSize: 13, marginBottom: 8, ...TONES[tone], ...style }}
    {...rest}
  >
    {children}
  </p>
);
