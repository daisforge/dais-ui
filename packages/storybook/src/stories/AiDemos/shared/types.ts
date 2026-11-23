import type { ReactNode } from 'react';

/** Статус шага, который «агент» показывает по ходу ответа */
export type DemoStepStatus = 'pending' | 'running' | 'done' | 'error';

/** Шаг обработки запроса: вызов инструмента, проверка, рендер */
export type DemoStep = {
  id: string;
  title: string;
  /** Пояснение под шагом: имя инструмента, найденные колонки и т.п. */
  detail?: string;
  status: DemoStepStatus;
};

export type DemoUserMessage = {
  id: string;
  role: 'user';
  text: string;
  /** Имя прикреплённого файла, если сообщение с вложением */
  attachment?: string;
};

export type DemoAssistantMessage = {
  id: string;
  role: 'assistant';
  text: string;
  steps?: DemoStep[];
  /** Кнопки под ответом: скачать, открыть и т.п. */
  actions?: ReactNode;
};

export type DemoMessage = DemoUserMessage | DemoAssistantMessage;
