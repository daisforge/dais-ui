import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React, { createRef, useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TableGlide } from '../../../TableGlide/TableGlide';
import type { TableGlideProps } from '../../../TableGlide/types';

const editorProps = vi.hoisted(() => ({
  current: undefined as Record<string, unknown> | undefined,
}));

vi.mock('../../../TableGlide/styled', async (importOriginal) => {
  const { forwardRef } = await import('react');
  const MockDataEditor = forwardRef<HTMLDivElement, { className?: string }>(
    (props, _ref) => {
      editorProps.current = props;
      return <div className={props.className} data-testid="data-editor" />;
    },
  );
  MockDataEditor.displayName = 'MockDataEditor';
  return {
    ...(await importOriginal<typeof import('../../../TableGlide/styled')>()),
    StyledGlideDataEditor: MockDataEditor,
  };
});

type OverlayFeaturesContext = Parameters<
  NonNullable<
    TableGlideProps<Record<string, unknown>, unknown>['renderOverlayFeatures']
  >
>[0];

function StatefulSlot() {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount((value) => value + 1)}>
      Slot {count}
    </button>
  );
}

describe('TableGlide container slot', () => {
  beforeEach(() => {
    // jsdom не рисует canvas; тест проверяет настоящую DOM-композицию TableGlide.
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  });
  afterEach(async () => {
    cleanup();
    await Promise.resolve();
    vi.restoreAllMocks();
    editorProps.current = undefined;
  });

  it('renders a stateful direct child before Glide is ready and preserves it through grid and fullscreen changes', async () => {
    const containerRef = createRef<HTMLDivElement>();
    const renderOverlayFeatures = vi.fn(
      ({ renderInContainer }: OverlayFeaturesContext) =>
        renderInContainer(<span data-testid="glide-feature">Feature</span>),
    );
    const props = {
      columns: [],
      rows: [],
      containerRef,
      containerClassName: 'canvas-wrapper',
      containerStyle: { height: 200 },
      containerSlot: <StatefulSlot />,
      renderOverlayFeatures,
    };
    const { rerender, unmount } = render(
      <TableGlide {...props} hideGrid contentStateNode={<p>Empty state</p>} />,
    );
    const slot = screen.getByRole('button', { name: 'Slot 0' });
    const wrapper = containerRef.current;

    expect(wrapper?.className).toBe('canvas-wrapper');
    expect(wrapper?.style.height).toBe('100%');
    expect(slot.parentElement).toBe(wrapper);
    expect(screen.getByText('Empty state').parentElement).toBe(wrapper);
    expect(screen.queryByTestId('data-editor')).toBeNull();
    expect(renderOverlayFeatures).not.toHaveBeenCalled();
    expect(document.querySelectorAll('#portal')).toHaveLength(1);
    expect(document.querySelectorAll('#portal2')).toHaveLength(1);
    fireEvent.click(slot);

    rerender(<TableGlide {...props} />);
    await waitFor(() => {
      expect(screen.getByTestId('glide-feature').parentElement).toBe(
        screen.getByTestId('data-editor'),
      );
    });

    expect(screen.getByRole('button', { name: 'Slot 1' })).toBe(slot);
    expect(slot.parentElement).toBe(wrapper);
    expect(containerRef.current).toBe(wrapper);
    expect(wrapper?.style.height).toBe('200px');
    expect(editorProps.current).toBeDefined();
    expect(editorProps.current).not.toHaveProperty('containerSlot');

    rerender(<TableGlide {...props} fullScreened />);
    await waitFor(() => {
      expect(screen.getByTestId('glide-feature')).not.toBeNull();
    });
    expect(screen.getByRole('button', { name: 'Slot 1' })).toBe(slot);
    expect(containerRef.current).toBe(wrapper);
    expect(slot.parentElement).toBe(wrapper);
    expect(document.querySelectorAll('#portal')).toHaveLength(1);
    expect(document.querySelectorAll('#portal2')).toHaveLength(1);

    unmount();
    expect(containerRef.current).toBeNull();
    expect(document.querySelector('#portal')).toBeNull();
    expect(document.querySelector('#portal2')).toBeNull();
  });
});
