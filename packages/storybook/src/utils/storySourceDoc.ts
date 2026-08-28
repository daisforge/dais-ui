type SourceState = 'hidden' | 'shown' | 'none';

type LastLevel = {
  code?: string;
  preCode?: string;
  /**
   * @default true
   */
  prettySource?: boolean;
  previewSource?: SourceState;
  /** Тип исходника в «Show code»: 'code' — текст стори, 'dynamic' на тяжёлых данных вешает страницу. */
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
