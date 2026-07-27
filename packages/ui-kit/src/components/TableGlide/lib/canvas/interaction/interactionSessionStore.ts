import type { ResolvedCanvasInteractionConfig } from '../core/canvasInteraction';
import type { CanvasClickDispatchResult } from '../cells/renderer/performCanvasClick';
import type { RelativePoint } from '../cells/renderer/types';
import {
  resolveInteractionDecision,
  type InternalInteractionDecision,
} from './interactionManager';

export type InteractionPhase =
  | 'pointer-select'
  | 'cell-click'
  | 'renderer-click'
  | 'contextmenu-capture'
  | 'contextmenu-glide'
  | 'editor-activation';

export type InteractionSessionSource =
  | 'pointer'
  | 'click'
  | 'contextmenu'
  | 'keyboard'
  | 'synthetic';

export interface ArmedEditorRequest {
  target: 'self';
  /** Время arm-фазы; TTL считается от реального click, а не от pointer/select. */
  armedAt: number;
  consumed?: boolean;
}

export interface InteractionSession {
  id: number;
  key: string;
  cell: readonly [number, number];
  relativePoint: RelativePoint;
  interaction: ResolvedCanvasInteractionConfig;
  decision: InternalInteractionDecision;
  clickResult?: CanvasClickDispatchResult;
  consumedPhases: Set<InteractionPhase>;
  startedAt: number;
  button?: number;
  source: InteractionSessionSource;
  editorRequest?: ArmedEditorRequest;
}

export interface BeginInteractionSessionArgs {
  cell: readonly [number, number];
  relativePoint: RelativePoint;
  interaction: ResolvedCanvasInteractionConfig;
  button?: number;
  source: InteractionSessionSource;
  startedAt?: number;
}

export interface FindInteractionSessionArgs {
  cell: readonly [number, number];
  relativePoint: RelativePoint;
  button?: number;
  maxAgeMs?: number;
}

export interface InteractionSessionStore {
  /**
   * Создает session для нового gesture или возвращает текущую, если cell,
   * button и relativePoint совпали в пределах TTL.
   */
  beginOrGet: (args: BeginInteractionSessionArgs) => InteractionSession;
  /** Ищет текущую session без создания новой. */
  findMatching: (
    args: FindInteractionSessionArgs
  ) => InteractionSession | undefined;
  /** Отладочный/интеграционный доступ к текущей session. */
  getCurrent: () => InteractionSession | undefined;
  /**
   * Сохраняет результат canvas click из TableGlide bridge для последующего
   * replay в renderer.onClick без повторного вызова пользовательского onClick.
   */
  storeClickResult: (
    session: InteractionSession,
    result: CanvasClickDispatchResult
  ) => void;
  /** Одноразово забирает сохраненный click result для matching gesture. */
  consumeClickResult: (
    args: FindInteractionSessionArgs
  ) => CanvasClickDispatchResult | undefined;
  /**
   * Помечает фазу gesture обработанной. Возвращает false, если эта фаза уже
   * была обработана и повторный side effect надо пропустить.
   */
  consumePhase: (
    session: InteractionSession,
    phase: InteractionPhase
  ) => boolean;
  /** Активирует одноразовую просьбу открыть editor для текущей ячейки. */
  armEditorRequest: (
    session: InteractionSession,
    request: { target: 'self' }
  ) => void;
  /** Одноразово забирает editor request для matching cell. */
  consumeEditorRequest: (
    cell: readonly [number, number],
    maxAgeMs?: number
  ) => { target: 'self' } | undefined;
  /** Проверяет, была ли указанная фаза недавно обработана для той же cell. */
  isMatchingRecent: (
    phase: InteractionPhase,
    cell: readonly [number, number],
    maxAgeMs?: number
  ) => boolean;
  /** Очищает текущую session, если она пережила допустимый TTL. */
  clearStale: (maxAgeMs?: number) => void;
  /** Принудительно сбрасывает текущую session. */
  clear: () => void;
}

// Session должна жить только в пределах одного физического gesture. Если
// renderer.onClick, contextmenu bridge или editor activation придут сильно
// позже, старый result/request уже нельзя считать частью того же клика.
const DEFAULT_MAX_AGE_MS = 350;

function roundPoint(value: number): number {
  // Округляем координаты, потому что разные фазы Glide могут вернуть 12.499 и
  // 12.5 для одного физического клика. Для session matching это один gesture.
  return Math.round(value);
}

export function buildInteractionSessionKey({
  cell,
  relativePoint,
  button,
}: {
  cell: readonly [number, number];
  relativePoint: RelativePoint;
  button?: number;
}): string {
  return [
    cell[0],
    cell[1],
    button ?? 'unknown',
    roundPoint(relativePoint.x),
    roundPoint(relativePoint.y),
  ].join(':');
}

function isSameCell(
  a: readonly [number, number],
  b: readonly [number, number]
): boolean {
  return a[0] === b[0] && a[1] === b[1];
}

function isPointClose(a: RelativePoint, b: RelativePoint): boolean {
  return Math.abs(a.x - b.x) <= 1 && Math.abs(a.y - b.y) <= 1;
}

function isMatchingTarget(
  session: InteractionSession,
  args: FindInteractionSessionArgs
): boolean {
  if (!isSameCell(session.cell, args.cell)) {
    return false;
  }

  if (
    session.button !== undefined &&
    args.button !== undefined &&
    session.button !== args.button
  ) {
    return false;
  }

  return isPointClose(session.relativePoint, args.relativePoint);
}

function isMatchingSession(
  session: InteractionSession,
  args: FindInteractionSessionArgs
): boolean {
  if (Date.now() - session.startedAt > (args.maxAgeMs ?? DEFAULT_MAX_AGE_MS)) {
    return false;
  }

  if (!isSameCell(session.cell, args.cell)) {
    return false;
  }

  if (
    session.button !== undefined &&
    args.button !== undefined &&
    session.button !== args.button
  ) {
    return false;
  }

  return isPointClose(session.relativePoint, args.relativePoint);
}

export function createInteractionSessionStore(): InteractionSessionStore {
  let currentSession: InteractionSession | undefined;
  let nextId = 1;

  const findMatching = (
    args: FindInteractionSessionArgs
  ): InteractionSession | undefined => {
    // Общий TTL нужен для поиска живой session между фазами gesture.
    // Pending click replay ниже consume-ится отдельным одноразовым путем.
    if (!currentSession || !isMatchingSession(currentSession, args)) {
      return undefined;
    }

    return currentSession;
  };

  return {
    beginOrGet: (args) => {
      // Первое successful resolve фиксирует interaction/decision для gesture.
      // Следующие фазы того же cell + button + point переиспользуют session,
      // даже если redraw между фазами чуть изменил canvas layout.
      const existing = findMatching(args);

      if (existing) {
        return existing;
      }

      currentSession = {
        id: nextId++,
        key: buildInteractionSessionKey(args),
        cell: args.cell,
        relativePoint: args.relativePoint,
        interaction: args.interaction,
        // Decision рассчитывается один раз на session, чтобы разные фазы одного
        // gesture не приняли разные policy-решения из-за повторного hit-test.
        decision: resolveInteractionDecision(args.interaction),
        consumedPhases: new Set<InteractionPhase>(),
        startedAt: args.startedAt ?? Date.now(),
        source: args.source,
        ...(args.button !== undefined ? { button: args.button } : {}),
      };

      return currentSession;
    },

    findMatching,

    getCurrent: () => currentSession,

    storeClickResult: (session, result) => {
      // Click bridge вызывает canvas onClick раньше renderer.onClick, чтобы
      // сохранить DOM-подобный порядок всплытия. Result сохраняется для replay
      // в renderer.onClick без повторного вызова пользовательского handler.
      session.clickResult = result;
    },

    consumeClickResult: (args) => {
      const session = currentSession;

      if (!session?.clickResult) {
        return undefined;
      }

      // Replay-result уже означает, что canvas onClick был выполнен в
      // cell-click фазе. Не привязываем его к startedAt TTL, иначе blocking
      // handler может дать повторный dispatch в renderer.onClick.
      if (!isMatchingTarget(session, args)) {
        delete session.clickResult;
        return undefined;
      }

      const result = session.clickResult;
      delete session.clickResult;
      session.consumedPhases.add('renderer-click');

      return result;
    },

    consumePhase: (session, phase) => {
      // Фазы помечаются одноразово, чтобы ручной contextmenu/editor handling не
      // продублировался, если Glide позже вызовет свой bridge для того же event.
      if (session.consumedPhases.has(phase)) {
        return false;
      }

      session.consumedPhases.add(phase);
      return true;
    },

    armEditorRequest: (session, request) => {
      // Arm происходит только на настоящем click. Pointer/select может создать
      // session, но не должен включать editor request: ранний redraw мог бы
      // consume-нуть request до click activation.
      if (session.editorRequest?.consumed) {
        return;
      }

      session.editorRequest = {
        target: request.target,
        armedAt: Date.now(),
      };
    },

    consumeEditorRequest: (cell, maxAgeMs = DEFAULT_MAX_AGE_MS) => {
      const session = currentSession;

      if (!session) {
        return undefined;
      }

      const request = session.editorRequest;

      if (request?.consumed) {
        return undefined;
      }

      if (!request) {
        return undefined;
      }

      if (Date.now() - request.armedAt > maxAgeMs) {
        currentSession = undefined;
        return undefined;
      }

      if (!isSameCell(session.cell, cell)) {
        return undefined;
      }

      // Editor request одноразовый: один click может дать только одну подмену
      // activationBehaviorOverride, иначе editor мог бы открываться повторно на
      // последующих getCellContent/redraw.
      request.consumed = true;
      session.consumedPhases.add('editor-activation');

      return request;
    },

    isMatchingRecent: (phase, cell, maxAgeMs = DEFAULT_MAX_AGE_MS) => {
      const session = currentSession;

      if (!session || !session.consumedPhases.has(phase)) {
        return false;
      }

      return (
        Date.now() - session.startedAt <= maxAgeMs &&
        isSameCell(session.cell, cell)
      );
    },

    clearStale: (maxAgeMs = DEFAULT_MAX_AGE_MS) => {
      // Явная уборка нужна для сценариев, где следующая фаза так и не пришла:
      // например preventDefault остановил renderer.onClick, а session не должна
      // залипнуть и повлиять на будущий жест.
      if (!currentSession) {
        return;
      }

      if (Date.now() - currentSession.startedAt > maxAgeMs) {
        currentSession = undefined;
      }
    },

    clear: () => {
      currentSession = undefined;
    },
  };
}
