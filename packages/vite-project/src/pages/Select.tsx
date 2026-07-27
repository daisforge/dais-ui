import { Select } from '@dais-ui/ui-kit';
import { useState } from 'react';

export const SelectExample = () => {
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
      <Select
        items={items}
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        label="Select"
        helperText="Helper text"
      />
    </div>
  );
};
