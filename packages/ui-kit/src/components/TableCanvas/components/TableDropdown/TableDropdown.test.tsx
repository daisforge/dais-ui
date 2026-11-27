import { render } from '@testing-library/react';
import { Dropdown } from '@ui-kit/components/Dropdown';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { TableDropdown } from './TableDropdown';

vi.mock('@ui-kit/components/Dropdown', () => ({ Dropdown: vi.fn(() => null) }));
vi.mock('../../contexts', () => ({
  useHeaderContext: () => ({ rowSize: 'small' }),
  useRefTableGlobalContainerContext: () => undefined,
}));

describe('TableDropdown', () => {
  it('применяет размер строки по умолчанию и отдаёт приоритет явным пропсам', () => {
    const { rerender } = render(<TableDropdown items={[]} />);
    const props = () => vi.mocked(Dropdown).mock.lastCall?.[0];
    expect(props()).toMatchObject({
      size: 'xs',
      variant: 'tight',
      listWidth: 'calc-size(max-content, clamp(120px, size, 300px))',
    });

    rerender(
      <TableDropdown items={[]} size="m" variant="normal" listWidth={600} />,
    );
    expect(props()).toMatchObject({
      size: 'm',
      variant: 'normal',
      listWidth: '600px',
    });

    rerender(<TableDropdown items={[]} listWidth="24rem" />);
    expect(props()?.listWidth).toBe('24rem');
  });
});
