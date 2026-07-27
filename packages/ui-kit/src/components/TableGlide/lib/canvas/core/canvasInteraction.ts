/**
 * Internal contract для canvas interaction API.
 *
 * Этот файл описывает язык, который видит разработчик TableCanvas в JSX:
 * object config в `interaction`.
 * Ниже нет знаний о фазах Glide: здесь только нормализация JSX-config и
 * console warning для конфликтных комбинаций.
 */
export interface CanvasInteractionOptions {
  /**
   * Как клик по этой зоне влияет на выделение таблицы.
   *
   * `normal` — таблица ведет себя обычно: клик может сделать ячейку активной.
   *
   * `keep` — текущее выделение сохраняется: клик по этой зоне не переключает
   * active cell. Это основной режим для кнопок действия внутри ячейки.
   */
  selection?: 'normal' | 'keep';

  /**
   * Дойдет ли клик до `tableConfig.onCellClicked`.
   *
   * `normal` — после canvas `onClick` таблица получит обычный `onCellClicked`.
   *
   * `stop` — клик остается внутри canvas-элемента, внешний
   * `tableConfig.onCellClicked` не вызывается.
   */
  cellClick?: 'normal' | 'stop';

  /**
   * Как клик по этой зоне влияет на editor ячейки.
   *
   * `normal` — не вмешиваться: таблица ведет себя как обычно для этой ячейки.
   *
   * `never` — клик по этой зоне не должен открывать editor.
   *
   * `open-on-click` — клик по этой зоне должен открыть editor этой же ячейки.
   * В текущей реализации поддерживается только текущая ячейка, потому что
   * editor открывается через штатный click-путь таблицы.
   */
  editor?: 'normal' | 'never' | 'open-on-click';

  /**
   * Как правый клик / context menu ведет себя на этой зоне.
   *
   * `normal` — обычное поведение таблицы.
   *
   * `keep-selection` — context menu разрешен, но текущее выделение не меняется.
   *
   * `none` — context menu для этой зоны не открывается.
   */
  contextMenu?: 'normal' | 'keep-selection' | 'none';
}

export type CanvasInteractionConfig = CanvasInteractionOptions;

export type ResolvedCanvasInteractionConfig =
  Required<CanvasInteractionOptions>;

const NORMAL_INTERACTION: Required<CanvasInteractionOptions> = {
  selection: 'normal',
  cellClick: 'normal',
  editor: 'normal',
  contextMenu: 'normal',
};

function hasMeaningfulOptions(options: CanvasInteractionOptions): boolean {
  return (
    options.selection !== undefined ||
    options.cellClick !== undefined ||
    options.editor !== undefined ||
    options.contextMenu !== undefined
  );
}

export function normalizeCanvasInteraction(
  config: CanvasInteractionConfig | undefined
): ResolvedCanvasInteractionConfig | undefined {
  if (!config) {
    return undefined;
  }

  if (!hasMeaningfulOptions(config)) {
    return undefined;
  }

  const resolved: ResolvedCanvasInteractionConfig = {
    selection: config.selection ?? NORMAL_INTERACTION.selection,
    cellClick: config.cellClick ?? NORMAL_INTERACTION.cellClick,
    editor: config.editor ?? NORMAL_INTERACTION.editor,
    contextMenu: config.contextMenu ?? NORMAL_INTERACTION.contextMenu,
  };

  if (resolved.editor === 'open-on-click' && resolved.selection === 'keep') {
    // Разработчик увидит warning при построении canvas tree во время render
    // ячейки, а конфликт нормализуется в безопасное поведение без
    // неожиданного открытия editor.
    // eslint-disable-next-line no-console
    console.warn(
      '[TableCanvas interaction] ' +
        '`editor: "open-on-click"` требует обычного selection. Editor не будет открыт, чтобы не менять выделение неожиданно.'
    );
    resolved.editor = 'normal';
  }

  if (resolved.editor === 'open-on-click' && resolved.cellClick === 'stop') {
    // open-on-click работает через штатный click pipeline Glide; если этот
    // pipeline остановить, request до editor activation не дойдет.
    // eslint-disable-next-line no-console
    console.warn(
      '[TableCanvas interaction] ' +
        '`editor: "open-on-click"` требует обычного cellClick, потому что editor открывается через click pipeline таблицы. Editor не будет открыт.'
    );
    resolved.editor = 'normal';
  }

  return resolved;
}

export function createNormalCanvasInteraction(): ResolvedCanvasInteractionConfig {
  // Внутренний helper для replay/session сценариев без явного `interaction`.
  // Такое поведение ничего не запрещает: selection, onCellClicked, editor и
  // context menu остаются обычными. Session при этом все равно нужна, чтобы
  // один физический click не вызвал canvas `onClick` дважды в разных фазах Glide.
  return { ...NORMAL_INTERACTION };
}
