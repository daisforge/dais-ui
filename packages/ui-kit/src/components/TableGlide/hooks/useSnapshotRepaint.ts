import type {
  DataEditorRef,
  DrawnFrame,
} from '@glideappsfinal/glide-data-grid';
import type { RefObject } from 'react';
import { createContext, useContext, useLayoutEffect } from 'react';

type Repaint = () => boolean;

/**
 * Точки входа тестовой сборки Storybook в таблицу.
 *
 * Подробнее: .storybook/preview.tsx добавляет withCanvasSnapshots только при
 * STORYBOOK_SCREENSHOT_TEST=1. Декоратор из decoratorCanvasSnapshots.tsx
 * предоставляет эти точки через контекст и хранит таблицы всех историй.
 * В обычном приложении и обычном Storybook провайдера нет (значение null).
 */
export interface CanvasSnapshotHooks {
  /**
   * Регистрирует таблицу: её полную перерисовку (перед PNG и в тестах
   * перерисовки) и ссылку на грид (координаты ячеек для тестов перерисовки).
   * Возвращает отмену регистрации.
   */
  register: (
    repaint: Repaint,
    grid: RefObject<DataEditorRef | null>,
  ) => () => void;
  /** Отметка glide о каждом нарисованном кадре, см. experimental.onFrameDrawn. */
  onFrameDrawn: (frame: DrawnFrame) => void;
}

export const CanvasSnapshotContext = createContext<CanvasSnapshotHooks | null>(
  null,
);

/**
 * Подключает таблицу к тестовой сборке Storybook: регистрирует её полную
 * перерисовку и ссылку на грид и отдаёт glide отметку о кадрах. В приложении
 * провайдера нет, хук ничего не делает и возвращает undefined.
 *
 * Подробнее: TableGlide вызывает хук при каждом рендере, но эффект лишь
 * регистрирует таблицу, а не рисует. Перед снимком прогон вызывает
 * window.daisScreenshotRepaint(), декоратор выполняет перерисовки внутри
 * flushSync, затем capture.ts ждёт кадры браузера. При смене функции или
 * размонтировании регистрация снимается, чтобы не задеть следующую историю.
 */
export function useSnapshotRepaint(
  repaint: Repaint,
  grid: RefObject<DataEditorRef | null>,
) {
  const hooks = useContext(CanvasSnapshotContext);
  useLayoutEffect(() => hooks?.register(repaint, grid), [hooks, repaint, grid]);
  return hooks?.onFrameDrawn;
}
