/* eslint-disable import/no-extraneous-dependencies */
import type { TableCanvasLoggerItem } from '@ui-kit/components/TableCanvas';

const at = (hours: number, minutes: number, seconds: number) =>
  new Date(2025, 0, 1, hours, minutes, seconds);

export const EXCEL_ERROR_DESCRIPTION = [
  'System.Runtime.InteropServices.COMException (0x800A03EC):',
  '"The file could not be accessed. The system cannot find the path specified. (Exception from HRESULT: 0x800A03EC)"',
  'Nested Inner Exception: System.IO.IOException: "The process cannot access the file',
  "'\\\\nas01\\shared\\reports\\Q3_Financial_Summary_TEMP.xlsx' because it is being used by another process.",
  'The sharing violation occurred while attempting to flush the binary stream to the physical disk."',
].join('\n');

export const GROUPED_ITEMS: TableCanvasLoggerItem[] = [
  {
    id: 'excel',
    status: 'error',
    title: 'Ошибка скачивания Excel',
    defaultOpen: true,
    items: [
      {
        id: 'excel-1',
        status: 'error',
        title:
          'Не удалось получить доступ к файлу. Системе не удаётся найти указанный путь',
        description: EXCEL_ERROR_DESCRIPTION,
        traceId: '4bf92f3577b34da6a3ce929d0e0e4736',
        code: 'F23',
        date: at(18, 7, 32),
      },
      {
        id: 'excel-2',
        status: 'error',
        title: 'Файл занят другим процессом',
        code: 'F24',
        date: at(18, 7, 33),
      },
    ],
  },
  {
    id: 'validation',
    status: 'warning',
    title: 'Проверка данных',
    items: [
      {
        id: 'validation-1',
        status: 'warning',
        title: 'Пропущено 3 пустые строки',
        date: at(18, 5, 10),
      },
      {
        id: 'validation-2',
        status: 'warning',
        title: 'Дубликаты ключей объединены',
        description: 'Объединено 12 строк по ключу «Подразделение + Статья»',
        date: at(18, 5, 11),
      },
    ],
  },
  {
    id: 'saved',
    status: 'success',
    title: 'Сохранение',
    items: [
      {
        id: 'saved-1',
        status: 'success',
        title: 'Изменения сохранены',
        date: at(18, 1, 0),
      },
    ],
  },
  {
    id: 'info',
    status: 'info',
    title: 'Информация',
    items: [
      {
        id: 'info-1',
        status: 'info',
        title: 'Обновлён справочник подразделений',
        date: at(17, 59, 3),
      },
    ],
  },
];

export const PLAIN_ITEMS: TableCanvasLoggerItem[] = [
  {
    id: 'p1',
    status: 'error',
    title: 'Не удалось загрузить справочник',
    description: 'GET /api/dictionaries/42 вернул 502',
    traceId: '9a8b7c6d5e4f',
    code: 'F23',
    date: at(9, 0, 0),
  },
  {
    id: 'p2',
    status: 'warning',
    title: 'Часть данных устарела',
    date: at(9, 1, 0),
  },
  {
    id: 'p3',
    status: 'success',
    title: 'Отчёт сформирован',
    date: at(9, 2, 0),
  },
  {
    id: 'p4',
    status: 'info',
    title: 'Подключено к рабочей книге',
    date: at(9, 3, 0),
  },
];
