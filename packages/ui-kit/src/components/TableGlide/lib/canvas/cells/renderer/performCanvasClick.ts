import {
  handleCanvasRootClick,
  handleCellClick,
  handleClickHandlers,
} from './clickHandlers';
import type { RelativePoint } from './types';
import type { CanvasCell, CanvasRenderResult, RectBounds } from '../types';

export interface CanvasClickDispatchResult {
  /**
   * Был ли клик действительно обработан canvas-слоем.
   *
   * `true` означает, что клик попал в canvasRoot-узел, зарегистрированную
   * click-area или cell.data.onClick, и renderer должен считать ячейку
   * обработанной.
   */
  handled: boolean;

  /**
   * Было ли остановлено всплытие от canvas-примитива к обработчику ячейки.
   *
   * `true` означает, что внутри onClick canvas-примитива вызвали
   * `event.stopPropagation()`, поэтому внешний table-level `onCellClicked`
   * больше не должен вызываться.
   */
  propagationStopped: boolean;

  /**
   * Нужно ли остановить стандартный click path таблицы.
   *
   * `true` означает, что runtime canvas handler вызвал `event.preventDefault()`.
   * Это отдельное решение от `stopPropagation`: первое просит не продолжать
   * table-default, второе только останавливает всплытие до `onCellClicked`.
   */
  suppressGridDefault: boolean;
}

interface PerformCanvasClickArgs {
  /**
   * Canvas-ячейка, внутри которой обрабатывается клик.
   *
   * Именно для этой ячейки мы проверяем click-area, `canvasRoot` и
   * `cell.data.onClick`.
   */
  cell: CanvasCell;

  /**
   * Границы текущей ячейки в координатах Glide.
   *
   * Используются и для cell-level onClick, и как базовая геометрия текущего
   * события, чтобы обе click-фазы работали в одном и том же rect-контексте.
   */
  rect: RectBounds;

  /**
   * Координаты клика относительно текущей ячейки.
   *
   * Это основные координаты для canvas-слоя: и hit-test, и ключ сохраненного
   * результата клика, и `cell.data.onClick` используют именно их, а не
   * глобальные screen/client координаты.
   */
  relativePoint: RelativePoint;

  /**
   * Последний сохраненный render result ячейки.
   *
   * Через него мы получаем canvasRoot и зарегистрированные click-area, чтобы
   * одинаково обработать клик и на этапе `onCellClicked`, и на этапе
   * `renderer.onClick`.
   */
  renderData: CanvasRenderResult | undefined;

  /**
   * Данные строки, к которой относится текущая ячейка.
   *
   * Нужны для совместимости с существующим cell.data.onClick API, которое
   * ожидает row object рядом с координатами клика.
   */
  rowData?: Record<string, unknown>;

  /**
   * Индекс строки текущей ячейки.
   *
   * Пробрасывается в cell.data.onClick, чтобы cell-level handlers могли
   * принимать решения не только по row object, но и по позиции строки.
   */
  rowIndex: number;

  /**
   * Оригинальный DOM/React click event, если он есть в текущей фазе.
   *
   * Нужен для случаев, когда обработчик onClick canvas-примитива вызывает
   * preventDefault или stopPropagation, а мы хотим синхронно отразить это на
   * native событии.
   */
  event?: MouseEvent | React.MouseEvent;
}

/**
 * Выполняет полную обработку клика внутри canvas-ячейки один раз и возвращает
 * результат этой обработки.
 *
 * Важная идея:
 * - сначала должен отработать `onClick` canvas-примитива;
 * - только после этого может вызываться внешний `onCellClicked` ячейки;
 * Эта функция не принимает policy-решения про selection/editor/contextmenu.
 * Она только dispatch-ит canvas click и возвращает runtime-результат. Судьбу
 * таблицы дальше решает interactionManager/session layer.
 *
 * Возвращаемые флаги:
 * - handled: canvas-пайплайн действительно обработал клик и renderer может
 *   вернуть cell как "обработанную" ячейку;
 * - propagationStopped: внутри `onClick` canvas-примитива вызвали
 *   `stopPropagation`, значит внешний `onCellClicked` вызывать не нужно;
 * - suppressGridDefault: внутри `onClick` canvas-примитива вызвали
 *   `preventDefault`, значит `TableGlide` должен синхронно остановить
 *   стандартный click path таблицы.
 */
export function performCanvasClick({
  cell,
  rect,
  relativePoint,
  renderData,
  rowData,
  rowIndex,
  event,
}: PerformCanvasClickArgs): CanvasClickDispatchResult {
  // Сначала даем обработать клик самому canvasRoot и его нодам.
  const rootClickResult = handleCanvasRootClick(
    renderData,
    relativePoint,
    event
  );

  // Если внутри canvas-примитива вызвали stopPropagation, дальше по цепочке не идем.
  if (rootClickResult.propagationStopped) {
    return {
      handled: true,
      propagationStopped: true,
      suppressGridDefault: rootClickResult.suppressGridDefault,
    };
  }

  // Затем проверяем зарегистрированные click-area у результата рендера ячейки.
  if (handleClickHandlers(renderData, relativePoint)) {
    return {
      handled: true,
      propagationStopped: false,
      suppressGridDefault: rootClickResult.suppressGridDefault,
    };
  }

  // Если click-area не сработали, пробуем обработчик cell.data.onClick у всей ячейки.
  if (
    handleCellClick(cell, relativePoint, rect, rowData, rowIndex, renderData)
  ) {
    return {
      handled: true,
      propagationStopped: false,
      suppressGridDefault: rootClickResult.suppressGridDefault,
    };
  }

  // Если ни один обработчик не подошел, считаем, что canvas-слой клик не забрал.
  return {
    handled: false,
    propagationStopped: false,
    suppressGridDefault: rootClickResult.suppressGridDefault,
  };
}
