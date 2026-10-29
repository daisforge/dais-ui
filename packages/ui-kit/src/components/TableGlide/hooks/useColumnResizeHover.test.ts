import type {
  DataEditorRef,
  GridColumn,
} from '@glideappsfinal/glide-data-grid';
import { act, cleanup, fireEvent, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useColumnResizeHover } from './useColumnResizeHover';

type MoveEvent = Parameters<
  ReturnType<typeof useColumnResizeHover>['onMouseMove']
>[0];

const rect = (x: number, y: number, width: number, height: number) =>
  new DOMRect(x, y, width, height);

function setup(
  columns: GridColumn[] = [
    { title: 'A', width: 200 },
    { title: 'B', width: 150 },
  ],
) {
  const container = document.createElement('div');
  const canvas = document.createElement('canvas');
  container.append(canvas);
  document.body.append(container);
  Object.defineProperty(container, 'offsetWidth', { value: 600 });
  Object.defineProperty(container, 'clientWidth', {
    value: 600,
    configurable: true,
  });
  Object.defineProperty(container, 'clientHeight', { value: 400 });
  vi.spyOn(container, 'getBoundingClientRect').mockReturnValue(
    rect(100, 50, 600, 400),
  );
  vi.spyOn(canvas, 'getBoundingClientRect').mockReturnValue(
    rect(100, 50, 600, 400),
  );
  const getBounds = vi.fn((index: number) =>
    index === 0
      ? { x: 100, y: 90, width: 201, height: 40 }
      : { x: 300, y: 90, width: 151, height: 40 },
  );
  const dataEditorRef = { current: { getBounds } as unknown as DataEditorRef };
  const onColumnResizeStart = vi.fn();
  const hook = renderHook(
    ({ enabled }) =>
      useColumnResizeHover({
        enabled,
        columns,
        container,
        dataEditorRef,
        onColumnResizeStart,
      }),
    { initialProps: { enabled: true } },
  );
  const move = (extra: Partial<MoveEvent> = {}) => {
    act(() =>
      hook.result.current.onMouseMove({
        kind: 'header',
        location: [0, -1],
        isEdge: true,
        buttons: 0,
        isTouch: false,
        ...extra,
      } as MoveEvent),
    );
  };
  return { ...hook, container, canvas, getBounds, move, onColumnResizeStart };
}

let frames: Map<number, FrameRequestCallback>;
let resizeCallbacks: (() => void)[];
function flushFrames() {
  act(() => {
    const pending = [...frames.values()];
    frames.clear();
    pending.forEach((callback) => callback(0));
  });
}

beforeEach(() => {
  vi.stubGlobal('PointerEvent', MouseEvent);
  frames = new Map();
  resizeCallbacks = [];
  let id = 0;
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    id += 1;
    frames.set(id, callback);
    return id;
  });
  vi.stubGlobal('cancelAnimationFrame', (frame: number) =>
    frames.delete(frame),
  );
  vi.stubGlobal(
    'ResizeObserver',
    class {
      constructor(callback: () => void) {
        resizeCallbacks.push(callback);
      }

      observe = vi.fn();

      disconnect = vi.fn();
    },
  );
});

afterEach(() => {
  cleanup();
  document.body.replaceChildren();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('useColumnResizeHover', () => {
  it('uses the actual header boundary and full canvas height, including grouped headers', () => {
    const { result, move } = setup();
    move();
    expect(result.current.lineStyle).toEqual({
      left: 199,
      top: 0,
      height: 400,
    });
    const previous = result.current.lineStyle;
    move();
    expect(result.current.lineStyle).toBe(previous);
  });

  it('uses current bounds after horizontal scrolling or a frozen column', () => {
    const { result, getBounds, move } = setup();
    getBounds.mockReturnValue({ x: 250, y: 90, width: 151, height: 40 });
    move({ location: [1, -1] });
    expect(result.current.lineStyle?.left).toBe(299);
  });

  it('converts screen coordinates to local coordinates in a scaled container', () => {
    const { result, container, canvas, getBounds, move } = setup();
    vi.mocked(container.getBoundingClientRect).mockReturnValue(
      rect(100, 50, 1200, 800),
    );
    vi.mocked(canvas.getBoundingClientRect).mockReturnValue(
      rect(100, 50, 1200, 800),
    );
    getBounds.mockReturnValue({ x: 100, y: 90, width: 402, height: 80 });
    move();
    expect(result.current.lineStyle).toEqual({
      left: 199,
      top: 0,
      height: 400,
    });
  });

  it('handles the outer edge of the last column', () => {
    const { result, move } = setup();
    move({ kind: 'out-of-bounds' });
    expect(result.current.lineStyle?.left).toBe(349);
  });

  it('accounts for the container border when positioning the overlay', () => {
    const { result, container, canvas, getBounds, move } = setup();
    Object.defineProperty(container, 'clientLeft', { value: 1 });
    Object.defineProperty(container, 'clientTop', { value: 1 });
    vi.mocked(canvas.getBoundingClientRect).mockReturnValue(
      rect(101, 51, 598, 398),
    );
    getBounds.mockReturnValue({ x: 101, y: 91, width: 201, height: 40 });
    move();
    expect(result.current.lineStyle).toEqual({
      left: 199,
      top: 0,
      height: 398,
    });
  });

  it('tracks native resize start even without preceding hover and preserves the external callback', () => {
    const { result, container, onColumnResizeStart } = setup();
    const column = { title: 'A', width: 200 };
    fireEvent.pointerDown(container, { button: 0 });
    act(() => result.current.onColumnResizeStart(column, 200, 0, 200));
    expect(onColumnResizeStart).toHaveBeenCalledWith(column, 200, 0, 200);
    fireEvent.pointerUp(window, { button: 0, clientX: 300, clientY: 110 });
    flushFrames();
    expect(result.current.lineStyle?.left).toBe(199);
  });

  it.each([
    { title: 'Disabled service column', width: 40, resizable: false },
    { title: 'Fixed checkbox column', width: 40, minWidth: 40, maxWidth: 40 },
  ])('does not highlight $title', (column) => {
    const { result, move } = setup([column]);
    move();
    expect(result.current.lineStyle).toBeNull();
  });

  it('clears hover away from a divider, on touch, and when resizing is disabled', () => {
    const { result, move, rerender } = setup();
    move();
    move({ isEdge: false });
    expect(result.current.lineStyle).toBeNull();
    move();
    move({ kind: 'cell' });
    expect(result.current.lineStyle).toBeNull();
    move();
    move({ isTouch: true });
    expect(result.current.lineStyle).toBeNull();
    move();
    rerender({ enabled: false });
    expect(result.current.lineStyle).toBeNull();
  });

  it('hands drawing to Glide on mouse down and restores hover at the new boundary on release', () => {
    const { result, container, getBounds, move } = setup();
    move();
    fireEvent.pointerDown(container, { button: 0 });
    expect(result.current.lineStyle).toBeNull();
    move({ buttons: 1 });
    expect(result.current.lineStyle).toBeNull();
    getBounds.mockReturnValue({ x: 100, y: 90, width: 301, height: 40 });
    fireEvent.pointerUp(window, { button: 0, clientX: 400, clientY: 110 });
    flushFrames();
    expect(result.current.lineStyle?.left).toBe(299);
  });

  it.each([
    [600, 110], // maxWidth leaves the pointer away from the column boundary
    [300, 450], // outside the header/table
    [705, 110], // outside the right edge of the table
  ])(
    'does not restore hover after releasing away from the divider (%i, %i)',
    (clientX, clientY) => {
      const { result, container, move } = setup();
      move();
      fireEvent.pointerDown(container, { button: 0 });
      fireEvent.pointerUp(window, { button: 0, clientX, clientY });
      flushFrames();
      expect(result.current.lineStyle).toBeNull();
    },
  );

  it('clears stale hover on leave, scrolling, resizing and window blur', () => {
    const { result, container, move } = setup();
    const resetEvents = [
      () => fireEvent.mouseLeave(container),
      () => fireEvent.scroll(container),
      () => fireEvent.resize(window),
      () => fireEvent.blur(window),
    ];
    resetEvents.forEach((reset) => {
      move();
      expect(result.current.lineStyle).not.toBeNull();
      reset();
      expect(result.current.lineStyle).toBeNull();
    });
  });

  it('preserves hover on the initial ResizeObserver notification and clears it on a size change', () => {
    const { result, container, move } = setup();
    move();
    act(() => resizeCallbacks[0]?.());
    expect(result.current.lineStyle).not.toBeNull();
    Object.defineProperty(container, 'clientWidth', { value: 500 });
    act(() => resizeCallbacks[0]?.());
    expect(result.current.lineStyle).toBeNull();
  });

  it('cancels a pending restoration when moving away, scrolling or unmounting', () => {
    const { result, container, move, unmount } = setup();
    move();
    fireEvent.pointerDown(container, { button: 0 });
    fireEvent.pointerUp(window, { button: 0, clientX: 300, clientY: 110 });
    move({ isEdge: false });
    flushFrames();
    expect(result.current.lineStyle).toBeNull();
    move();
    fireEvent.pointerDown(container, { button: 0 });
    fireEvent.pointerUp(window, { button: 0, clientX: 300, clientY: 110 });
    fireEvent.scroll(container);
    flushFrames();
    expect(result.current.lineStyle).toBeNull();
    move();
    fireEvent.pointerDown(container, { button: 0 });
    fireEvent.pointerUp(window, { button: 0, clientX: 300, clientY: 110 });
    unmount();
    expect(frames.size).toBe(0);
  });
});
