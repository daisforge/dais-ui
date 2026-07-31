/**
 * Шаги компрессии контрл-блока как данные.
 *
 * Каждый шаг это объект с тремя полями: имя для лога, условие
 * применимости и мутация черновика состояния. Конвейер (порядок шагов)
 * собирается из этих кирпичей в getCompressionPipeline и читается как
 * спецификация: что и в каком порядке сжимается.
 *
 * Общий цикл живёт в index.ts: берём следующий применимый шаг,
 * применяем, меряем ширину, влезло - стоп. Если шаги кончились,
 * элементы по одному уезжают в overflow дропдаун (это не шаг конвейера,
 * а отдельный цикл, см. index.ts).
 *
 * Два порядка:
 * - обычный: сначала лейблы правых кнопок, затем лейбл Редактировать
 * - режим редактирования: лейблы Отменить и Сохранить первыми (они
 *   широкие, а правую часть в этом кейсе стараемся не трогать), затем
 *   сжатие поиска до 210 (только при активном editModeLeftSlot), и лишь
 *   потом лейблы правых кнопок
 */
import { ToolsMenuState } from '../types';
import {
  hasVisibleRightButtonLabels,
  SEARCH_MIN_WIDTH_COMPRESSED,
} from './width-model';

/** Контекст, влияющий на состав и порядок шагов */
export type CompressionContext = {
  /** Включён ли режим редактирования таблицы */
  isEditMode: boolean;
  /**
   * Разрешено ли сжимать поиск до 210. Включается в режиме редактирования
   * с editModeLeftSlot, а также когда у кнопки группировки появился счётчик
   * (его ширину компенсируем за счёт поиска, а не скрытия лейблов).
   */
  allowSearchShrink: boolean;
  /**
   * Есть ли счётчик группировки. Меняет порядок обычного конвейера: поиск
   * сжимается перед скрытием лейблов правых кнопок, чтобы лейблы остались.
   */
  hasGroupingCounter: boolean;
};

export type CompressionStep = {
  /** Имя шага, попадает в дебаг лог [CB] как есть */
  name: string;
  /** Есть ли шагу что сжимать в текущем состоянии */
  applies: (state: ToolsMenuState, ctx: CompressionContext) => boolean;
  /** Мутирует черновик состояния (клон, мутация безопасна) */
  apply: (state: ToolsMenuState) => void;
};

// Кирпичи шагов. Имена даются на месте сборки конвейера, потому что
// номер шага в логе зависит от ветки.

const hideEditRowLabels = {
  applies: (state: ToolsMenuState) =>
    state.leftSide.editRowFeature.isActive &&
    state.leftSide.editRowFeature.isLabelVisible,
  apply: (state: ToolsMenuState) => {
    state.leftSide.editRowFeature.isLabelVisible = false;
  },
};

const shrinkSearch = {
  applies: (state: ToolsMenuState, ctx: CompressionContext) =>
    ctx.allowSearchShrink &&
    state.middle.searchingFeature.isActive &&
    state.middle.searchingFeature.minWidth > SEARCH_MIN_WIDTH_COMPRESSED,
  apply: (state: ToolsMenuState) => {
    state.middle.searchingFeature.minWidth = SEARCH_MIN_WIDTH_COMPRESSED;
  },
};

const hideRightButtonLabels = {
  applies: (state: ToolsMenuState) => hasVisibleRightButtonLabels(state),
  apply: (state: ToolsMenuState) => {
    state.rightSide.buttons = state.rightSide.buttons.map((btn) => ({
      ...btn,
      isLabelVisible: false,
    }));
  },
};

/**
 * Собирает конвейер шагов для текущего контекста.
 * Порядок в массиве это и есть порядок компрессии.
 */
export const getCompressionPipeline = (
  ctx: CompressionContext,
): CompressionStep[] => {
  if (ctx.isEditMode) {
    return [
      { ...hideEditRowLabels, name: '1(edit): editRow labels to icon-only' },
      { ...shrinkSearch, name: '2(edit): search 250 to 210' },
      {
        ...hideRightButtonLabels,
        name: '3(edit): right buttons labels to icon-only',
      },
    ];
  }

  // Есть счётчик группировки: сначала жертвуем шириной поиска, лейблы
  // правых кнопок прячем только если и этого не хватило.
  if (ctx.hasGroupingCounter) {
    return [
      { ...shrinkSearch, name: '1(group): search 250 to 210' },
      {
        ...hideRightButtonLabels,
        name: '2(group): right buttons labels to icon-only',
      },
      { ...hideEditRowLabels, name: '3(group): editRow labels to icon-only' },
    ];
  }

  return [
    { ...hideRightButtonLabels, name: '1: right buttons labels to icon-only' },
    { ...hideEditRowLabels, name: '2: editRow labels to icon-only' },
  ];
};
