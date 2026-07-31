/** Пространство имён дебаг-логгера, определяет window-флаг. */
export type DebugNamespace = string;

/** Функция-логгер, созданная createDebugLogger. */
export type DebugLogger = (
  prefix: string,
  message: string,
  data?: unknown,
) => void;
