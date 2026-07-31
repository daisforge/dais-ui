type SourceState = 'hidden' | 'shown' | 'none';

type LastLevel = {
  code?: string;
  preCode?: string;
  /**
   * @default true
   */
  prettySource?: boolean;
  previewSource?: SourceState;
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
