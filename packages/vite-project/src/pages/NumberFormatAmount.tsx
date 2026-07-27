import { useState } from 'react';
import { NumberFormatAmount } from '@dais-ui/ui-kit';
import { IconSb } from '@dais-ui/ui-kit/icons';

export const NumberFormatAmountExample = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('123456.78');
  const [value3, setValue3] = useState('999.99');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: 500,
      }}
    >
      <h3>NumberFormatAmount</h3>

      <NumberFormatAmount
        size="s"
        placeholder="Size s — с onClear"
        value={value1}
        thousandSeparator=" "
        decimalSeparator="."
        decimalScale={2}
        onChange={(e) => setValue1(e?.target?.value ?? '')}
        onClear={() => setValue1('')}
      />

      <NumberFormatAmount
        size="xs"
        placeholder="Size xs — с onClear"
        value={value2}
        thousandSeparator=" "
        decimalSeparator="."
        decimalScale={2}
        onChange={(e) => setValue2(e?.target?.value ?? '')}
        onClear={() => setValue2('')}
      />

      <NumberFormatAmount
        size="s"
        placeholder="С contentRight"
        value={value3}
        thousandSeparator=" "
        decimalSeparator="."
        decimalScale={2}
        contentRight={<IconSb size="s" />}
        onChange={(e) => setValue3(e?.target?.value ?? '')}
        onClear={() => setValue3('')}
      />
    </div>
  );
};
