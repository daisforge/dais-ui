// ----------------------------------------------------------- Константы -----------------------------------------------------------

import { ContentType, GlobalStore } from './types';

export const TYPING_CLASS = 'typing';

export const PLACEHOLDER_MAP: Record<NonNullable<ContentType>, string> = {
  dev: 'Например: Какие пропсы у Button?',
  editorial: 'Например: Как оформить ссылку в тексте?',
  design: 'Например: Какие отступы у карточки?',
};
export const TITLE_MAP: Record<NonNullable<ContentType>, string> = {
  dev: 'Задай вопрос про компоненты библиотеки',
  editorial: 'Задай вопрос про оформление текстов',
  design: 'Задай вопрос про гайды, дизайн паттерны, компоненты дизайна',
};

export const QUICK_CHIPS_MAP: Record<
  NonNullable<ContentType>,
  { text: string }[]
> = {
  dev: [
    {
      text: 'Какие пропсы у Button?',
    },
    {
      text: 'Как активировать фичу фильтрации в TableCanvas?',
    },
    {
      text: 'Пример модального окна ModalDF',
    },
  ],
  editorial: [
    {
      text: 'Как правильно сформулировать текст ошибки?',
    },
    {
      text: 'Как назвать вторичную кнопку, если основная — "Отменить"?',
    },
    {
      text: 'Как оформить заголовок модального окна?',
    },
  ],
  design: [
    {
      text: 'Как переключить расположение файлов в Attach — в строку или столбец?',
    },
    {
      text: 'Как в Switch добавить текст-пояснение (подпись) рядом с переключателем?',
    },
    {
      text: 'Как в Pagination добавить возможность быстрого перехода на страницу по номеру?',
    },
  ],
};

export const NO_INFO_TEXT =
  'За детальной информацией можно обратиться в чат поддержки';
export const CHAT_URL = 'https://sberchat.bbbb.ru/#/chat/group28033339';

// ----------------------------------------------------------- Хранилище -----------------------------------------------------------
export const LOCAL_STORAGE_KEYS = {
  contentType: 'dais-chat-contentType',
};

export const GLOBAL_STORE: GlobalStore = {
  messages: [],
  chatHistory: [],
  inputValue: '',
  contentType:
    (localStorage.getItem(LOCAL_STORAGE_KEYS.contentType) as ContentType) ||
    'dev',
};

// Данные фильтров
export const FILTERS_ARRAY: {
  value: GlobalStore['contentType'] | '';
  value2?: null;
  label: string;
  disabled?: boolean;
}[] = [
  { value: 'dev', label: 'Разработка' },
  { value: 'editorial', label: 'Редполитика' },
  { value: 'design', label: 'Дизайн (atoms)' },
];
