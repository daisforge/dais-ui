import { useCallback, useEffect, useRef, useState } from 'react';

import { ObjectForExtending } from '../types';

export const useStack = <RowType extends ObjectForExtending>({
  rows,
  onTrigger
}: {
  rows: RowType[];
  onTrigger: ((rows: RowType[]) => Promise<void>) | undefined;
}) => {
  const stackRef = useRef<(typeof onTrigger)[]>([]);

  const setStackRef = useCallback(
    (prev: (prev: (typeof onTrigger)[]) => (typeof onTrigger)[]) => {
      stackRef.current = prev(stackRef.current);
    },
    []
  );
  const [fromEmptyToOne, setFromEmptyToOne] = useState(0);
  const [deletingCount, setDeletingCount] = useState(0);

  useEffect(() => {
    if (stackRef.current.length) {
      const onTriggerCurr = async () => {
        const triggerFunc = stackRef.current[0];

        try {
          await triggerFunc?.(rows);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }

        // delete first;
        setStackRef((prev) => {
          const [_first, ...rest] = prev;
          return rest;
        });
        setDeletingCount((prev) => prev + 1);
      };

      onTriggerCurr();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletingCount, fromEmptyToOne]);

  return {
    setStackRef,
    setFromEmptyToOne
  };
};
