export enum DatePickerErrorEnum {
  DATE_IS_SMALLER = 'Дата меньше минимальной',
  DATE_IS_BIGGER = 'Дата больше максимальной',
  DATE_FORMAT_IS_INVALID = 'Формат даты указан не верно',
  DATE_IS_REQUIRED = 'Выбор даты обязателен'
}

type DayToken = 'DD';
type NumericMonthToken = 'MM';
type TextMonthToken = 'MMM' | 'MMMM';
type MonthToken = NumericMonthToken | TextMonthToken;
type YearToken = 'YY' | 'YYYY';
type Delimiter = '.' | '-' | ' ';

type DayMonthYear =
  `${DayToken}${Delimiter}${MonthToken}${Delimiter}${YearToken}`;
type DayMonth = `${DayToken}${Delimiter}${TextMonthToken}`;
type MonthYear = `${MonthToken}${Delimiter}${YearToken}`;

export type TDatePickerFormat = DayMonthYear | DayMonth | MonthYear;

export type TMouthNames = { [key: string]: number };
