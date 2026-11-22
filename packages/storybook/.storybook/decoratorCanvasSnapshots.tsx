import type { DataEditorRef } from '@daisforge/glide-data-grid';
import type { Decorator } from '@storybook/react';
import {
  type CanvasSnapshotHooks,
  CanvasSnapshotContext,
} from '@ui-kit/components/TableGlide/hooks/useSnapshotRepaint';
import React from 'react';
import type { RefObject } from 'react';
import { flushSync } from 'react-dom';

import { createRedrawPageApi } from './redrawPageApi';

// Каждая смонтированная таблица регистрирует свою перерисовку и ссылку на грид
// через React-контекст. При размонтировании истории регистрация снимается и
// не попадает в следующий снимок.
const repaints = new Set<() => boolean>();
const grids = new Set<RefObject<DataEditorRef | null>>();

// Полная перерисовка всех таблиц истории: перед PNG и в тестах перерисовки.
// Обновления React применяем до ожидания кадров и захвата.
const repaintAll = () => {
  if (!repaints.size) return 0;
  let count = 0;
  flushSync(() => {
    repaints.forEach((repaint) => {
      if (repaint()) count += 1;
    });
  });
  return count;
};

const redraw = createRedrawPageApi({ repaint: repaintAll, grids });

const hooks: CanvasSnapshotHooks = {
  register: (repaint, grid) => {
    repaints.add(repaint);
    grids.add(grid);
    return () => {
      repaints.delete(repaint);
      grids.delete(grid);
    };
  },
  onFrameDrawn: redraw.record,
};

// Точки входа для Playwright существуют только в тестовой сборке Storybook:
// tableCanvasScreenshotRepaint для прогона снимков, tableCanvasRedraw у тестов перерисовки.
if (process.env.STORYBOOK_SCREENSHOT_TEST === '1') {
  Object.assign(window, {
    tableCanvasScreenshotRepaint: repaintAll,
    tableCanvasRedraw: redraw,
  });
}

export const withCanvasSnapshots: Decorator = (Story) => (
  <CanvasSnapshotContext.Provider value={hooks}>
    <Story />
  </CanvasSnapshotContext.Provider>
);
