import { TextL, TextM, TextS, TextXS } from '@ui-kit/components/Typography';

import type { TMouthNames } from './types';

export const sizeToTextHint = {
  l: TextL,
  m: TextM,
  s: TextS,
  xs: TextXS
};

export const monthShortNames: TMouthNames = {
  'янв.': 0,
  'фев.': 1,
  'мар.': 2,
  март: 2,
  марта: 2,
  'апр.': 3,
  май: 4,
  мая: 4,
  'июн.': 5,
  июня: 5,
  июнь: 5,
  'июл.': 6,
  июля: 6,
  июль: 6,
  'авг.': 7,
  'сен.': 8,
  'окт.': 9,
  'ноя.': 10,
  'дек.': 11
};

export const monthLongNames: TMouthNames = {
  января: 0,
  январь: 0,
  февраля: 1,
  февраль: 1,
  марта: 2,
  март: 2,
  апреля: 3,
  апрель: 3,
  мая: 4,
  май: 4,
  июня: 5,
  июнь: 5,
  июля: 6,
  июль: 6,
  августа: 7,
  август: 7,
  сентября: 8,
  сентябрь: 8,
  октября: 9,
  октябрь: 9,
  ноября: 10,
  ноябрь: 10,
  декабря: 11,
  декабрь: 11
};
