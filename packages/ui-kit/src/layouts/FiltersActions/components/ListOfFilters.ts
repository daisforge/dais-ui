import { lazy } from 'react';
import styled from 'styled-components';

const ListOfFiltersLazy = lazy(
  () => import('@ui-kit/components/ListOfFilters/ListOfFilters.lazy')
);

export const FiltersActionsListOfFilters = styled(ListOfFiltersLazy).attrs(
  ({ paddingTop, ...props }) => ({ paddingTop: 8, ...props })
)`` as unknown as typeof ListOfFiltersLazy;
