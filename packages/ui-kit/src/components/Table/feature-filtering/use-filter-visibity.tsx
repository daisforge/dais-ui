import { useCallback, useState } from 'react';

export const useFilterVisibity = () => {
  const [filtersAreVisible, setFiltersAreVisibleX] = useState(false);
  const toggleFiltersAreVisible = useCallback(() => {
    setFiltersAreVisibleX((prev) => !prev);
  }, []);
  return { filtersAreVisible, toggleFiltersAreVisible };
};
