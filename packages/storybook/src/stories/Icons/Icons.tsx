import { IconGallery, IconItem } from '@storybook/blocks';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { GlobalStyle } from '@ui-kit/styles';
import { useDebouncedValue } from '@ui-kit/utils';
import {
  memo,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

type IconType = [
  string,
  (p: { size?: 'xs' | 's' | 'm'; color?: string }) => ReactNode,
];

const StyledIconGallery = ({ children }: PropsWithChildren) => (
  <IconGallery
    {...{ style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' } }}
  >
    {children}
  </IconGallery>
);

const Gallery = memo(({ icons }: { icons: IconType[] }) => (
  <StyledIconGallery>
    {icons.map((Icon) => {
      const RenderIcon = Icon[1];

      return (
        <IconItem key={Icon[0]} name={Icon[0]}>
          <RenderIcon />
        </IconItem>
      );
    })}
  </StyledIconGallery>
));

export const AllIconsStory = () => {
  const [icons, setIcons] = useState<IconType[]>([]);

  useEffect(() => {
    // Загрузка начнется только при монтировании этой истории
    import('@ui-kit/icons').then((module) => {
      const allModules = (Object.entries(module) ?? []) as typeof icons;
      const filteredModules = allModules?.filter(
        (el) =>
          // Helper components. We don`t need them in the story
          ![
            'IconOldRoot',
            'IconRoot',
            'Icon',
            'iconSectionsSet',
            'iconOldSectionsSet',
            'iconSectionsSetScalable',
          ].includes(el[0]) && typeof el[1] === 'function',
      );

      setIcons(filteredModules);
    });
  }, []);

  const [searchedString, setSearchedString] = useState('');
  const searchedStringDebounced = useDebouncedValue(searchedString, 1200);

  const filteredIcons = useMemo(() => {
    if (!searchedStringDebounced) {
      return icons;
    }
    const lowerSearchedStringDebounced = searchedStringDebounced.toLowerCase();
    return icons.filter(([iconName]) =>
      iconName.toLowerCase().includes(lowerSearchedStringDebounced),
    );
  }, [icons, searchedStringDebounced]);

  if (!icons) return <h3>Загрузка иконок...</h3>;

  return (
    <>
      <GlobalStyle />
      <h2>Пример использования основных свойств</h2>
      <StyledIconGallery>
        {icons.length > 5 &&
          [icons[1], icons[2], icons[3]].map((icon, index) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const Icon = icon!; // выше проверка на длину массива icons.length > 5
            const RenderIcon = Icon[1];
            const i = [
              {
                size: 'xs',
                color: 'red',
              },
              {
                size: 's',
                color: 'green',
              },
              {
                size: 'm',
                color: 'blue',
              },
            ];
            return (
              <div key={Icon[0]}>
                <div style={{ marginBottom: '16px' }}>
                  <div>{`size="${i[index]?.size}"`}</div>
                  <div>{`color="${i[index]?.color}"`}</div>
                </div>
                <IconItem key={Icon[0]} name={Icon[0]}>
                  {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <RenderIcon {...(i[index] as any)} />
                </IconItem>
              </div>
            );
          })}
      </StyledIconGallery>

      <br />

      <div>
        <h2
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
            textWrap: 'nowrap',
            paddingBlock: 12,
          }}
        >
          Все иконки
          <TextFieldSearch
            style={{ width: '100%' }}
            value={searchedString}
            onChange={(e) => {
              setSearchedString(e.target.value ?? '');
            }}
          />
        </h2>
      </div>
      <Gallery icons={filteredIcons} />
    </>
  );
};
