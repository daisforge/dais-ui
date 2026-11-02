import { createContext, useContext, useLayoutEffect } from 'react';

type Repaint = () => boolean;
type RegisterRepaint = (repaint: Repaint) => () => void;

// Тестовый декоратор регистрирует полную перерисовку перед снимком Canvas.
// В обычном приложении провайдера нет: хук не запускает перерисовку.
export const CanvasSnapshotContext = createContext<RegisterRepaint | null>(
  null,
);

export function useSnapshotRepaint(repaint: Repaint) {
  const register = useContext(CanvasSnapshotContext);
  useLayoutEffect(() => register?.(repaint), [register, repaint]);
}
