import { Box } from '@ui-kit/components/Box';
import type { ItemOrGroup } from '@ui-kit/components/ListOfFilters';
import { IconDone } from '@ui-kit/icons';
import { textInfo } from '@ui-kit/tokens';
import { useMemo } from 'react';

export type Filters = {
  searchedV: string;
  blocks: string[];
  tribes: string[];
  allocation: string;
  year: number | null;
  filterButton: string;
  dotsButton: string;
};

export const filtersReducer = (
  state: Filters,
  newState: Partial<Filters>
): Filters => ({
  ...state,
  ...newState
});

export const DEFAULT_FILTERS: Filters = {
  searchedV: '',
  blocks: [],
  tribes: [],
  allocation: '',
  year: null,
  filterButton: '',
  dotsButton: ''
};

export const LABELS: { [key in keyof Filters]: string } = {
  searchedV: 'Поиск',
  blocks: 'Блок',
  tribes: 'Трайб',
  allocation: 'Аллокация',
  year: 'Год',
  filterButton: 'Фильтры',
  dotsButton: 'Меню'
};

export const useFetch = (key: 'blocks' | 'tribes' | 'allocation', num = 10) =>
  useMemo(
    () =>
      Array(num)
        .fill(0)
        .map((_, i) => ({
          label: `${LABELS[key]} ${i + 1}`,
          value: i.toString()
        })),
    [key, num]
  );

export function hasActiveFilterForButton(
  filters: ItemOrGroup[],
  buttonType: 'filterButton' | 'dotsButton',
  value?: string
) {
  return filters.some(
    (item) =>
      'groupId' in item &&
      item.groupId === buttonType &&
      (value === undefined
        ? item.items.length > 0
        : item.items.some((element) => element.id === value))
  );
}

export function generateButtonItems(
  buttonType: 'filterButton' | 'dotsButton',
  options: { value: string; label: string }[],
  filters: ItemOrGroup[]
) {
  return options.map((option) => ({
    value: option.value,
    label: option.label,
    contentLeft: (
      <Box
        $css={{
          visibility: hasActiveFilterForButton(
            filters,
            buttonType,
            option.value
          )
            ? 'visible'
            : 'hidden'
        }}
      >
        <IconDone size="s" color={textInfo} />
      </Box>
    )
  }));
}

export const filterButtonOptions = [
  { value: '1', label: '1 label' },
  { value: '2', label: '2 label' }
];

export const dotsButtonOptions = [
  { value: '1', label: '1 label' },
  { value: '2', label: '2 label' }
];

export const dotsButtonOptionsWithRemove = [
  { value: 'Удалить', label: 'Удалить' },
  { value: 'Some label', label: 'Some label' }
];

export const longText =
  () => `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            quo facilis alias non facere, necessitatibus enim veritatis
            provident inventore commodi nemo cum perferendis nulla quia tempore
            iste quibusdam voluptates fugit. Laboriosam optio culpa id maiores
            dolor nulla blanditiis aliquam exercitationem alias, quia ea nam
            dolores, ipsa a, quod quisquam autem voluptatem vero est.
            Temporibus, maxime? Nihil accusamus accusantium tempore perferendis.
            Asperiores consequatur veritatis nulla aperiam ab atque quas
            nostrum, veniam quis eum rerum, esse minus, dicta omnis pariatur
            expedita neque laboriosam cumque labore. Mollitia dolor facilis
            nihil vel ipsa. Odio. Quis odio libero eligendi deserunt mollitia
            fugit corrupti veritatis facilis, suscipit atque fuga minima quo
            eveniet consequatur earum temporibus veniam repudiandae, impedit ut?
            Nesciunt sequi quod incidunt quos neque nam! Veritatis placeat,
            fugit amet iusto earum, magni ab eligendi asperiores deserunt omnis
            , quasi velit sapiente inventore ducimus esse beatae officiis
            suscipit explicabo nesciunt! Non voluptatum in nam, corporis
            mollitia consequatur? Velit temporibus obcaecati saepe ipsa
            molestiae tempore quibusdam tenetur, omnis est sed autem totam
            dignissimos aliquid debitis quas rerum veritatis tempora minima.
            Quod et obcaecati error nihil aliquam quaerat non! Facilis veritatis
            tempora omnis sapiente id debitis quaerat, deserunt minima adipisci
            quae commodi quisquam, rem eius necessitatibus accusamus dolores
            culpa facere sequi harum? Illum, ducimus. Accusamus, recusandae
            illo! Ullam, nemo. Quam expedita aut quas. Dolore obcaecati
            voluptate, nemo aspernatur doloremque, cupiditate asperiores optio
            fugit necessitatibus soluta earum nam animi eum magnam iusto
            mollitia labore voluptatum iure quod. Et, atque velit? Aperiam sunt,
            neque fuga quam aliquid consectetur incidunt ipsam maiores suscipit
            quisquam ratione exercitationem ducimus voluptatibus veniam expedita
            vero nulla consequuntur similique labore voluptates. Consequatur
            sunt illum eius atque libero! Cumque incidunt harum molestias cum
            earum iusto unde nam. Non earum cupiditate optio iste fugiat, ipsum
            esse! Natus sed nihil repellat, tenetur dolorum quis, perspiciatis
            nam quos facere, placeat impedit!`;
