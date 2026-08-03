import { LayoutClasses } from '../Layout.types';

/**
 * Объединяет дефолтные классы с пользовательскими (строкой или объектом).
 * @param defaultClasses - Объект с дефолтными классами.
 * @param className - Пользовательские классы (строка или объект).
 */
export const mergeLayoutClasses = (
  defaultClasses: LayoutClasses,
  className?: string | LayoutClasses,
): LayoutClasses => {
  const isClassNameObj = typeof className === 'object';

  return {
    root: `${defaultClasses.root} ${
      isClassNameObj ? className?.root ?? '' : className ?? ''
    }`.trim(),
    header: `${defaultClasses.header} ${
      isClassNameObj ? className?.header ?? '' : ''
    }`.trim(),
    main: `${defaultClasses.main} ${
      isClassNameObj ? className?.main ?? '' : ''
    }`.trim(),
    item: `${defaultClasses.item} ${
      isClassNameObj ? className?.item ?? '' : ''
    }`.trim(),
    centeredItem: `${defaultClasses.centeredItem} ${
      isClassNameObj ? className?.centeredItem ?? '' : ''
    }`.trim(),
  };
};
