import { useEffect, useState } from 'react';

export const useDebouncedValue = <T>(
  state: T,
  debounce = 500,
  defValue?: T,
) => {
  const [deb, setDeb] = useState(defValue ?? state);

  useEffect(() => {
    const id = setTimeout(() => {
      setDeb(state);
    }, debounce);
    return () => {
      clearTimeout(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return deb;
};
