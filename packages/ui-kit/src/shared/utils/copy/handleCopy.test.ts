import { afterEach, describe, expect, it, vi } from 'vitest';

import { handleCopy, handleCopyAsync } from './handleCopy';

const setClipboard = (value: unknown) =>
  Object.defineProperty(navigator, 'clipboard', { value, configurable: true });
const setExecCommand = (value: unknown) =>
  Object.defineProperty(document, 'execCommand', { value, configurable: true });

afterEach(() => {
  delete (navigator as { clipboard?: unknown }).clipboard;
  delete (document as { execCommand?: unknown }).execCommand;
});

describe('handleCopyAsync', () => {
  it('использует Clipboard API, если он есть', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard({ writeText });

    await expect(handleCopyAsync('abc')).resolves.toBeUndefined();
    expect(writeText).toHaveBeenCalledWith('abc');
  });

  it('при ошибке Clipboard API копирует через execCommand', async () => {
    setClipboard({ writeText: vi.fn().mockRejectedValue(new Error('denied')) });
    const execCommand = vi.fn().mockReturnValue(true);
    setExecCommand(execCommand);

    await expect(handleCopyAsync('abc')).resolves.toBeUndefined();
    expect(execCommand).toHaveBeenCalledWith('copy');
  });

  it('отклоняется, если execCommand не скопировал', async () => {
    setClipboard(undefined);
    setExecCommand(vi.fn().mockReturnValue(false));

    await expect(handleCopyAsync('abc')).rejects.toThrow();
  });

  it('отклоняется и не оставляет textarea, если execCommand упал', async () => {
    setClipboard(undefined);
    setExecCommand(
      vi.fn(() => {
        throw new Error('boom');
      }),
    );

    await expect(handleCopyAsync('abc')).rejects.toThrow('boom');
    expect(document.querySelector('textarea')).toBeNull();
  });

  it('без текста ничего не копирует и не падает', async () => {
    const writeText = vi.fn();
    setClipboard({ writeText });

    await expect(handleCopyAsync(null)).resolves.toBeUndefined();
    expect(writeText).not.toHaveBeenCalled();
  });
});

describe('handleCopy', () => {
  it('без Clipboard API копирует синхронно, в том же обработчике', () => {
    setClipboard(undefined);
    const execCommand = vi.fn().mockReturnValue(true);
    setExecCommand(execCommand);

    handleCopy('abc');

    expect(execCommand).toHaveBeenCalledWith('copy');
  });

  it('не выбрасывает ошибку, если скопировать не удалось', async () => {
    setClipboard({ writeText: vi.fn().mockRejectedValue(new Error('denied')) });
    setExecCommand(
      vi.fn(() => {
        throw new Error('boom');
      }),
    );

    expect(() => handleCopy('abc')).not.toThrow();
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  });
});
