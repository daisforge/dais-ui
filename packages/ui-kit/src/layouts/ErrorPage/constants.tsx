/* eslint-disable react/no-unescaped-entities */
const BUTTONS = {
  toMain: { label: 'На главную' },
  leaveRequest: { label: 'Оставить заявку' },
  null: null,
} as const;

export const STATUSES = {
  400: {
    type: 'Bad request',
    title: 'Не удалось загрузить страницу',
    description: 'Возможно, в ссылке опечатка. Проверьте и попробуйте снова',
    button: BUTTONS.toMain,
  },
  401: {
    type: 'Unauthorized',
    title: 'Не удаётся войти',
    description: 'Проверьте логин и пароль или попробуйте снова',
    button: BUTTONS.leaveRequest,
  },
  403: {
    type: 'Forbidden',
    title: 'Доступ к FinAI ограничен',
    description: 'Вы можете запросить право доступа в Друге',
  },
  404: {
    type: 'Not found',
    title: 'Такой страницы нет',
    description: (
      <>
        Возможно, она удалена или в ссылке опечатка. <br /> Вы можете вернуться
        на главную и посмотреть другие страницы
      </>
    ),
    button: BUTTONS.toMain,
  },
  409: {
    type: 'Conflict',
    title: 'Конфликт запросов',
    description: (
      <>
        Невозможно выполнить запрос — он противоречит текущей версии сервиса.
        <br />
        Обновите страницу и попробуйте снова
      </>
    ),
  },
  500: {
    type: 'Internal server error',
    title: 'Страница недоступна',
    description: <>Произошла техническая ошибка, попробуйте зайти позже</>,
    button: BUTTONS.toMain,
  },
  502: {
    type: 'Bad gateway',
    title: 'Не удалось загрузить страницу',
    description: 'Обновите страницу или попробуйте зайти позже',
    button: BUTTONS.toMain,
  },
  503: {
    type: 'Service unavailable',
    title: 'На FinAI проводятся технические работы',
    description: 'Обновите страницу или зайдите позже',
  },
} as const;
export type STATUS_CODES = keyof typeof STATUSES;
export const UNKNOWN_STATUS_OBJ = {
  type: 'Unknown',
  title: 'Похоже страница недоступна',
  description: 'Попробуйте обновить страницу.',
} as const;
