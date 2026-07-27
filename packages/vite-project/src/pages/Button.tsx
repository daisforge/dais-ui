import { useState } from 'react';
import { Button } from '@dais-ui/ui-kit';

export const ButtonExample = () => {
  const [count, setCount] = useState(0);

  return (
    <Button view="accent" onClick={() => setCount((prev) => prev + 1)}>
      count {count}
    </Button>
  );
};
