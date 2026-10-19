import { afterEach, describe, expect, it, vi } from 'vitest';

import { copyTextToClipboard } from './copyTextToClipboard';

const setClipboard = (value: unknown) =>
  Object.defineProperty(navigator, 'clipboard', { value, configurable: true });
const setExecCommand = (value: unknown) =>
  Object.defineProperty(document, 'execCommand', { value, configurable: true });

afterEach(() => {
  delete (navigator as { clipboard?: unknown }).clipboard;
  delete (document as { execCommand?: unknown }).execCommand;
});

describe('copyTextToClipboard', () => {
  it('использует Clipboard API, если он есть', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard({ writeText });

    await expect(copyTextToClipboard('abc')).resolves.toBe(true);
    expect(writeText).toHaveBeenCalledWith('abc');
  });

  it('при ошибке Clipboard API копирует через execCommand', async () => {
    setClipboard({ writeText: vi.fn().mockRejectedValue(new Error('denied')) });
    const execCommand = vi.fn().mockReturnValue(true);
    setExecCommand(execCommand);

    await expect(copyTextToClipboard('abc')).resolves.toBe(true);
    expect(execCommand).toHaveBeenCalledWith('copy');
  });

  it('возвращает false, если execCommand не скопировал', async () => {
    setClipboard(undefined);
    setExecCommand(vi.fn().mockReturnValue(false));

    await expect(copyTextToClipboard('abc')).resolves.toBe(false);
  });

  it('возвращает false и не оставляет textarea, если execCommand упал', async () => {
    setClipboard(undefined);
    setExecCommand(
      vi.fn(() => {
        throw new Error('boom');
      }),
    );

    await expect(copyTextToClipboard('abc')).resolves.toBe(false);
    expect(document.querySelector('textarea')).toBeNull();
  });
});
