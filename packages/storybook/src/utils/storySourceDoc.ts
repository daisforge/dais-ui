type SourceState = 'hidden' | 'shown' | 'none';

type LastLevel = {
  code?: string;
  preCode?: string;
  /**
   * @default true
   */
  prettySource?: boolean;
  previewSource?: SourceState;
  /**
   * Тип исходника в блоке «Show code». `'dynamic'` (дефолт Storybook для render-стори)
   * сериализует ОТРЕНДЕРЕННЫЙ элемент вместе с данными пропсов — на тяжёлых данных
   * (напр. TableCanvas с сотнями строк) это раздувает панель на десятки тысяч строк
   * и вешает страницу. `'code'` показывает написанный текст стори (короткий).
   */
  type?: 'auto' | 'code' | 'dynamic';
};
export type AllLevels = {
  parameters: {
    docs: {
      source: LastLevel;
      canvas?: {
        sourceState?: SourceState;
      };
    };
  };
};

export const storySourceDoc = <Level extends 'lastLevel' | 'all'>(
  options: Prettify<LastLevel>,
  /**
   * @default 'all'
   */
  getLevel?: Level,
) => {
  if (getLevel === 'lastLevel') {
    return options;
  }

  return {
    parameters: {
      docs: {
        source: options,
        ...(options?.previewSource && {
          canvas: {
            sourceState: options.previewSource,
          },
        }),
      },
    },
  };
};
