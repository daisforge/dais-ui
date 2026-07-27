import { ControlBlockSize } from '../../types';

export const CONTROL_BLOCK = {
  searching: {
    font: '16px SB Sans Text, sans-serif',
    indent: 68,
    letterSpacing: -0.32,
    baseIndent: 88
  },
  paddingInline: 8 // px
};

const SIZE_MAP = {
  m: {
    collapsingButton: 's' as const,
    collapsingIcon: 's' as const,
    sideInnerButton: 'xs' as const,
    // Иконка contentLeft кнопок: xs (16px) во всех размерах панели.
    // Меньше у атомарных иконок нет (xs минимальный), поэтому в xs панели
    // тоже xs — ступени ниже не существует.
    sideInnerIcon: 'xs' as const,
    featureIcon: 'm' as const,
    searchField: 's' as const,
    searchIcon: 's' as const,
    overflowTriggerButton: 's' as const,
    overflowTriggerIcon: 's' as const
  },
  s: {
    collapsingButton: 's' as const,
    collapsingIcon: 's' as const,
    sideInnerButton: 'xs' as const,
    sideInnerIcon: 'xs' as const,
    featureIcon: 'm' as const,
    searchField: 's' as const,
    searchIcon: 's' as const,
    overflowTriggerButton: 's' as const,
    overflowTriggerIcon: 's' as const
  },
  xs: {
    collapsingButton: 'xs' as const,
    collapsingIcon: 'xs' as const,
    sideInnerButton: 'xxs' as const,
    sideInnerIcon: 'xs' as const,
    featureIcon: 's' as const,
    searchField: 'xs' as const,
    searchIcon: 'xs' as const,
    // Триггер overflow дропдауна на ступень меньше, иначе в xs контрл-блоке
    // (высота 32) он выше остальных иконок и ломает вертикальное выравнивание
    overflowTriggerButton: 'xs' as const,
    overflowTriggerIcon: 'xs' as const
  }
};

export type ControlBlockSizeMap = (typeof SIZE_MAP)['m'];

export const getControlBlockSizeMap = (size: ControlBlockSize = 'm') =>
  SIZE_MAP[size];

const SPACING_MAP = {
  m: {
    // containerHeight: было 41, но точно не помним с чем связано, возможно с бордерами таблицы. Пока не замечаем причину, возвращаемся к 40
    containerHeight: 40,
    containerPadding: 4,
    leftPartGap: 4,
    leftPartPaddingRight: 8,
    rightButtonsGap: 4,
    rightButtonsPaddingInline: 8,
    rightFeaturesGap: 0
  },
  s: {
    // containerHeight: было 41, аналогично m — возвращаемся к 40
    containerHeight: 40,
    containerPadding: 4,
    leftPartGap: 4,
    leftPartPaddingRight: 8,
    rightButtonsGap: 4,
    rightButtonsPaddingInline: 8,
    rightFeaturesGap: 0
  },
  xs: {
    // containerHeight: именно 32, а не 33, как по макетам
    containerHeight: 32,
    containerPadding: 4,
    leftPartGap: 4,
    leftPartPaddingRight: 8,
    rightButtonsGap: 4,
    rightButtonsPaddingInline: 8,
    rightFeaturesGap: 0
  }
};

export type ControlBlockSpacingMap = (typeof SPACING_MAP)['m'];

export const getControlBlockSpacingMap = (size: ControlBlockSize = 'm') =>
  SPACING_MAP[size];

// По дизайну: m/s = 40px, xs = 32px
export const getControlBlockHeight = (size: ControlBlockSize = 'm') =>
  SPACING_MAP[size].containerHeight;
