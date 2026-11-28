import { BodyS } from '@ui-kit/components/Typography';
import type { ReactNode } from 'react';

/**
 * Пара живых примеров к правилу с запретом: слева как надо, справа как нельзя.
 * Подписей нет: зелёная галочка и красный крестик рядом с фразой правила (решение 20.11.2026).
 * Используется на дизайн-страницах «Для дизайнеров». Подписи пары видит только дизайнер,
 * агент DAIS получает правило из текста документа.
 */

const GOOD = 'rgb(22, 163, 74)';
const BAD = 'rgb(220, 38, 38)';

const Mark = ({ ok }: { ok: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flex: 'none' }}>
    <circle cx="8" cy="8" r="8" fill={ok ? GOOD : BAD} />
    {ok ? (
      <path d="M4.5 8.2l2.3 2.3 4.7-4.9" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M5.4 5.4l5.2 5.2M10.6 5.4l-5.2 5.2" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    )}
  </svg>
);

const Side = ({ ok, text, children }: { ok: boolean; text: string; children: ReactNode }) => (
  <div>
    <div style={{ height: 3, borderRadius: 2, backgroundColor: ok ? GOOD : BAD }} />
    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 10 }}>
      <Mark ok={ok} />
      <BodyS style={{ marginTop: -1 }}>{text}</BodyS>
    </div>
    <div style={{ marginTop: 12, padding: 16, borderRadius: 8, backgroundColor: 'var(--background-primary, #fff)' }}>
      {children}
    </div>
  </div>
);

export const DocPair = ({
  good,
  bad,
  goodText,
  badText,
}: {
  good: ReactNode;
  bad: ReactNode;
  goodText: string;
  badText: string;
}) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
      <Side ok text={goodText}>
        {good}
      </Side>
      <Side ok={false} text={badText}>
        {bad}
      </Side>
    </div>
  );
};
