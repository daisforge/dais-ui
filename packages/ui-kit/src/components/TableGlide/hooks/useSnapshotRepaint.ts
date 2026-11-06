import { createContext, useContext, useLayoutEffect } from 'react';

type Repaint = () => boolean;
type RegisterRepaint = (repaint: Repaint) => () => void;

// .storybook/preview.tsx добавляет withCanvasSnapshots только при
// STORYBOOK_SCREENSHOT_TEST=1. Декоратор из decoratorCanvasSnapshots.tsx
// предоставляет register через этот контекст и хранит callbacks всех таблиц.
// В обычном приложении и обычном Storybook провайдера нет (значение null).
export const CanvasSnapshotContext = createContext<RegisterRepaint | null>(
  null,
);

export function useSnapshotRepaint(repaint: Repaint) {
  // TableGlide вызывает хук при каждом рендере, но эффект лишь регистрирует
  // callback, а не рисует. Перед захватом PNG runner вызывает
  // window.daisScreenshotRepaint(): декоратор выполняет callbacks в flushSync,
  // затем capture.ts ждёт кадры браузера. Cleanup удаляет регистрацию при
  // смене callback или размонтировании, чтобы не затронуть следующую story.
  const register = useContext(CanvasSnapshotContext);
  useLayoutEffect(() => register?.(repaint), [register, repaint]);
}
