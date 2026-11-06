import type { Decorator } from '@storybook/react';
import { CanvasSnapshotContext } from '@ui-kit/components/TableGlide/hooks/useSnapshotRepaint';
import React from 'react';
import { flushSync } from 'react-dom';

// Каждая смонтированная таблица регистрирует свою перерисовку через React-контекст.
// При размонтировании истории обработчик удаляется и не попадает в следующий снимок.
const repaints = new Set<() => boolean>();
const register = (repaint: () => boolean) => {
  repaints.add(repaint);
  return () => {
    repaints.delete(repaint);
  };
};

// Точка входа для Playwright существует только в сборке скриншот-тестов.
if (process.env.STORYBOOK_SCREENSHOT_TEST === '1') {
  Object.assign(window, {
    daisScreenshotRepaint: () => {
      if (!repaints.size) return 0;
      let grids = 0;
      // Применяем обновления React до ожидания кадров и захвата PNG.
      flushSync(() => {
        repaints.forEach((repaint) => {
          if (repaint()) grids += 1;
        });
      });
      return grids;
    },
  });
}

export const withCanvasSnapshots: Decorator = (Story) => (
  <CanvasSnapshotContext.Provider value={register}>
    <Story />
  </CanvasSnapshotContext.Provider>
);
