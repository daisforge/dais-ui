import type { ErrorPageVariant } from './EmptyState.types';

export const emptyStateClassNames = {
  root: 'emptyState',
  buttons: 'emptyState__buttons',
  extraButton: 'emptyState__extraButton',
  icon: 'emptyState__icon ',
  title: 'emptyState__title',
  subtitle: 'emptyState__subtitle'
};

// Список вариантов ErrorPage
export const ERROR_PAGE_VARIANTS: ErrorPageVariant[] = [
  '400',
  '401',
  '403',
  '404',
  '409',
  '500',
  '502',
  '503',
  'unidentified'
];

// Имена файлов изображений EmptyState
export const EMPTY_STATE_IMAGE_NAMES = {
  loading: {
    s: 'loading-s',
    s2x: 'loading-s@2x',
    s3x: 'loading-s@3x',
    m: 'loading-m',
    m2x: 'loading-m@2x',
    m3x: 'loading-m@3x',
    l: 'loading-l',
    l2x: 'loading-l@2x',
    l3x: 'loading-l@3x'
  },
  'life-circle': {
    s: 'life-circle-s',
    s2x: 'life-circle-s@2x',
    s3x: 'life-circle-s@3x',
    m: 'life-circle-m',
    m2x: 'life-circle-m@2x',
    m3x: 'life-circle-m@3x',
    l: 'life-circle-l',
    l2x: 'life-circle-l@2x',
    l3x: 'life-circle-l@3x'
  },
  'need-access': {
    s: 'need-access-s',
    s2x: 'need-access-s@2x',
    s3x: 'need-access-s@3x',
    m: 'need-access-m',
    m2x: 'need-access-m@2x',
    m3x: 'need-access-m@3x',
    l: 'need-access-l',
    l2x: 'need-access-l@2x',
    l3x: 'need-access-l@3x'
  },
  'no-access': {
    s: 'no-access-s',
    s2x: 'no-access-s@2x',
    s3x: 'no-access-s@3x',
    m: 'no-access-m',
    m2x: 'no-access-m@2x',
    m3x: 'no-access-m@3x',
    l: 'no-access-l',
    l2x: 'no-access-l@2x',
    l3x: 'no-access-l@3x'
  },
  'no-content': {
    s: 'no-content-s',
    s2x: 'no-content-s@2x',
    s3x: 'no-content-s@3x',
    m: 'no-content-m',
    m2x: 'no-content-m@2x',
    m3x: 'no-content-m@3x',
    l: 'no-content-l',
    l2x: 'no-content-l@2x',
    l3x: 'no-content-l@3x'
  },
  'not-found': {
    s: 'not-found-s',
    s2x: 'not-found-s@2x',
    s3x: 'not-found-s@3x',
    m: 'not-found-m',
    m2x: 'not-found-m@2x',
    m3x: 'not-found-m@3x',
    l: 'not-found-l',
    l2x: 'not-found-l@2x',
    l3x: 'not-found-l@3x'
  },
  'not-result': {
    s: 'not-result-s',
    s2x: 'not-result-s@2x',
    s3x: 'not-result-s@3x',
    m: 'not-result-m',
    m2x: 'not-result-m@2x',
    m3x: 'not-result-m@3x',
    l: 'not-result-l',
    l2x: 'not-result-l@2x',
    l3x: 'not-result-l@3x'
  },
  success: {
    s: 'success-s',
    s2x: 'success-s@2x',
    s3x: 'success-s@3x',
    m: 'success-m',
    m2x: 'success-m@2x',
    m3x: 'success-m@3x',
    l: 'success-l',
    l2x: 'success-l@2x',
    l3x: 'success-l@3x'
  }
} as const;

// Имена файлов изображений ErrorPage по размерам.
// Используется только @3x. Размер L сохраняет историческое имя без суффикса
// (обратная совместимость со статикой), S и M — с суффиксами -s / -m.
export const ERROR_PAGE_IMAGE_NAMES = {
  '400': { s: '400-s@3x', m: '400-m@3x', l: '400@3x' },
  '401': { s: '401-s@3x', m: '401-m@3x', l: '401@3x' },
  '403': { s: '403-s@3x', m: '403-m@3x', l: '403@3x' },
  '404': { s: '404-s@3x', m: '404-m@3x', l: '404@3x' },
  '409': { s: '409-s@3x', m: '409-m@3x', l: '409@3x' },
  '500': { s: '500-s@3x', m: '500-m@3x', l: '500@3x' },
  '502': { s: '502-s@3x', m: '502-m@3x', l: '502@3x' },
  '503': { s: '503-s@3x', m: '503-m@3x', l: '503@3x' },
  unidentified: {
    s: 'unidentified-s@3x',
    m: 'unidentified-m@3x',
    l: 'unidentified@3x'
  }
} as const;
