export type TPropertyItem = {
  key: string;
  value: string;
};

type TPreparedProperties = Array<TPropertyItem>;

export type TProperties = TPreparedProperties | null;

interface IClickStreamBaseItem {
  eventAction: string;
  value: string;
  properties?: TProperties;
}

type TSendClickStreamCategoryParam =
  | {
      eventCategory: string;
      CI?: never;
    }
  | { eventCategory?: never; CI: string };

export type TSendClickStreamEventParams = IClickStreamBaseItem &
  TSendClickStreamCategoryParam;

export type TSendClickStreamEvent = (
  params: TSendClickStreamEventParams,
) => string | undefined;

export abstract class ClickStream {
  /**
   * Отправляет событие в ClickStream и возвращает идентификатор операции.
   * @returns идентификатор операции, привязанный к отправленному событию, или undefined если event не был создан.
   */
  abstract sendClickStreamEvent: TSendClickStreamEvent;

  /**
   * Возвращает или создаёт идентификатор операции по её названию.
   * @param action — название операции.
   * @returns идентификатор операции.
   */
  abstract getOperationId: (action: string) => string;

  /**
   * Возвращает или создаёт идентификатор бизнес-процесса.
   * @param name — имя процесса.
   * @param isStart — если true, всегда создаёт новый идентификатор; если false или не передан — возвращает существующий или создаёт новый.
   * @returns объект с ключом имени и сгенерированным или существующим идентификатором.
   */
  abstract getProcess: (name: string, isStart?: boolean) => TPropertyItem;
}

export interface IDigitalTraceContext {
  operationName?: string;
  operationId?: string;
  processId?: string;
  processName?: string;
  properties?: Record<string, string>;
}

export type TWithDigitalTrace<T, E = IDigitalTraceContext> = {
  data: T;
  digitalTrace?: E;
};
