import { Plugin } from 'vite';

export function viteDFUISuppressWarnings({
  mode = 'include',
  warnFilter,
}: {
  mode?: 'include' | 'exact';
  warnFilter: string[];
}): Plugin {
  return {
    name: 'vite-df-ui-suppress-warnings',
    config(_config) {
      return {
        build: {
          rollupOptions: {
            onwarn: (warning, defaultHandler) => {
              // overwite the default warning function
              const str = warning.toString();
              if (
                (mode === 'exact' && warnFilter.some((el) => el === str)) ||
                (mode === 'include' &&
                  warnFilter.some((el) => str.includes(el)))
              ) {
                return;
              }

              defaultHandler(warning);
            },
          },
        },
      };
    },
  };
}
