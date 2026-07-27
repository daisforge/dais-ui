import type { ResolvedCanvasInteractionConfig } from '../core/canvasInteraction';

export interface InternalInteractionDecision {
  /**
   * Ранняя фаза pointer/select в Glide.
   *
   * `true` означает: не отдавать этот pointerdown в стандартный select path
   * таблицы, чтобы active cell / selection не перескочили на ячейку с
   * canvas-control.
   */
  suppressEarlyGridSelect: boolean;

  /**
   * Поздняя click-фаза TableGlide.
   *
   * `true` означает: не вызывать внешний `tableConfig.onCellClicked`.
   */
  suppressExternalCellClick: boolean;

  /**
   * Фазовые запреты стандартного поведения нижележащей таблицы.
   *
   * Это внутренний язык адаптера TableGlide. Наружу он не отдается, потому что
   * разработчик TableCanvas должен мыслить поведением (`selection: "keep"`),
   * а не фазами Glide.
   */
  suppressGridDefaultFor: {
    pointerdown: boolean;
    click: boolean;
    contextmenu: boolean;
  };

  /**
   * Внутренний режим обработки context menu.
   *
   * `normal` — не вмешиваться, пусть таблица обрабатывает contextmenu сама.
   *
   * `manual-keep-selection` — TableGlide останавливает contextmenu pipeline
   * Glide, чтобы сохранить selection, и вручную вызывает внешний handler.
   *
   * `none` — полностью подавить context menu для этой canvas-зоны.
   */
  contextMenuMode: 'normal' | 'manual-keep-selection' | 'none';

  /**
   * Одноразовая просьба открыть editor текущей ячейки.
   *
   * В v1 поддерживается только `self`, потому что без нового API Glide editor
   * безопасно открывается только через текущий click/activation pipeline.
   */
  editorRequest?: { target: 'self' };
}

export interface EffectiveInteractionOutcome {
  /** Итоговое решение для внешнего `onCellClicked` с учетом policy и runtime event. */
  suppressExternalCellClick: boolean;

  /** Итоговое решение для стандартного click path таблицы. */
  suppressGridDefaultForClick: boolean;

  /** Одноразовая просьба открыть editor, если она не была отменена runtime event. */
  editorRequest?: { target: 'self' };
}

/**
 * Переводит internal interaction config в phase-specific decision TableGlide.
 *
 * JSX-config говорит "selection: keep" или "editor: never", а renderer/bridge
 * дальше читают уже конкретные suppress-флаги для pointerdown, click и
 * contextmenu.
 */
export function resolveInteractionDecision(
  interaction: ResolvedCanvasInteractionConfig
): InternalInteractionDecision {
  // Interaction config говорит на языке поведения TableCanvas, а decision ниже
  // переводит его в конкретные фазы Glide: pointer/select, click, contextmenu.
  const suppressEarlyGridSelect = interaction.selection === 'keep';
  const suppressExternalCellClick = interaction.cellClick === 'stop';
  const suppressClickDefault = interaction.editor === 'never';
  const contextMenuMode =
    interaction.contextMenu === 'keep-selection'
      ? 'manual-keep-selection'
      : interaction.contextMenu === 'none'
      ? 'none'
      : 'normal';

  return {
    suppressEarlyGridSelect,
    suppressExternalCellClick,
    suppressGridDefaultFor: {
      pointerdown: suppressEarlyGridSelect,
      click: suppressClickDefault,
      contextmenu: contextMenuMode !== 'normal',
    },
    contextMenuMode,
    ...(interaction.editor === 'open-on-click'
      ? { editorRequest: { target: 'self' as const } }
      : {}),
  };
}

/**
 * Собирает итоговое решение для click-фазы после фактического canvas dispatch.
 *
 * Declarative decision задает базовые запреты, а runtime result добавляет то,
 * что пользовательский handler решил через stopPropagation/preventDefault.
 */
export function buildEffectiveInteractionOutcome({
  decision,
  propagationStopped,
  suppressGridDefault,
}: {
  decision: InternalInteractionDecision;
  propagationStopped: boolean;
  suppressGridDefault: boolean;
}): EffectiveInteractionOutcome {
  // Итоговый outcome объединяет два источника:
  // 1. declarative policy (`interaction={{ selection: 'keep' }}`);
  // 2. runtime event (`event.stopPropagation()` / `event.preventDefault()`).
  // Любой из источников может усилить запрет, но runtime не может отменить
  // явно заданный declarative contract.
  const suppressGridDefaultForClick =
    decision.suppressGridDefaultFor.click || suppressGridDefault;

  const outcome: EffectiveInteractionOutcome = {
    suppressExternalCellClick:
      decision.suppressExternalCellClick || propagationStopped,
    suppressGridDefaultForClick,
  };

  // Editor можно запросить только если click path не был подавлен. Иначе Glide
  // не пройдет штатный activation pipeline, на котором держится open-on-click.
  if (!suppressGridDefaultForClick && decision.editorRequest) {
    outcome.editorRequest = decision.editorRequest;
  }

  return outcome;
}
