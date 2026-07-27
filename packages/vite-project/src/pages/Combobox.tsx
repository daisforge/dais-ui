import { Combobox } from '@daisforge/ui';
import { useState } from 'react';

export const ComboboxExample = () => {
  const [value, setValue] = useState('');

  const items = [
    {
      value: 'north_america',
      label: 'Северная Америка',
    },
    {
      value: 'south_america',
      label: 'Южная Америка',
      items: [
        {
          value: 'brazil',
          label: 'Бразилия',
        },
        {
          value: 'argentina',
          label: 'Аргентина',
        },
      ],
    },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Combobox
        items={items}
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        label="Combobox"
        helperText="Helper text"
      />
    </div>
  );
};
