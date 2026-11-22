/* Эталон «всё честно»: существующий компонент, существующие пропсы.
   Ожидание selfcheck.mjs — 0 диагностик. */
import { Button } from '@daisforge/ui';
import { useState } from 'react';

export const GoodFixture = () => {
  const [count, setCount] = useState(0);
  return (
    <Button size="s" view="default" onClick={() => setCount(count + 1)}>
      {`Нажато ${count}`}
    </Button>
  );
};
